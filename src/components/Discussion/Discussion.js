import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, Auth } from "../Firebase/Firebase"; // Firebase Firestore and Auth instances
import {
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import "../Discussion/Discussion.css"; // Optional for styling

const DiscussionPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [threads, setThreads] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState(""); // For post title
  const [newPostContent, setNewPostContent] = useState(""); // For custom content
  const [replyContent, setReplyContent] = useState("");
  const [user, setUser] = useState(null); // Track authenticated user
  const [loading, setLoading] = useState(true); // For loading state during authentication
  const [replyToPostId, setReplyToPostId] = useState(null); // Track the post/reply we're replying to
  const navigate = useNavigate();

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set authenticated user
        console.log("Authenticated user:", currentUser);
      } else {
        setUser(null);
        navigate("/login", { replace: true }); // Redirect to login if not authenticated
      }
      setLoading(false); // Stop loading after auth check
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, [navigate]);

  // Fetch threads from Firestore
  useEffect(() => {
    if (user) {
      const fetchThreads = async () => {
        const threadsCollection = collection(db, "threads");
        const threadSnapshot = await getDocs(threadsCollection);
        const postList = threadSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setThreads(postList);
      };
      fetchThreads();
    }
  }, [user]);


  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter threads based on search query
  const filteredThreads = threads.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add a new post with custom content
  const handleNewPost = async () => {
    if (!newPostTitle.trim() || !newPostContent.trim()) return;

    const newPostData = {
      title: newPostTitle,
      content: newPostContent, // Use custom input for content
      createdAt: serverTimestamp(),
      user: { id: user.uid, name: user.displayName || "Anonymous", email: user.email },
      replies: [], // Placeholder for replies
    };

    const postRef = await addDoc(collection(db, "threads"), newPostData);
    setNewPostTitle(""); // Clear title input
    setNewPostContent(""); // Clear content input
  };

  const handleReply = async (postId, replyId = null) => {
    if (!replyContent.trim()) return;

    const postRef = doc(db, "threads", postId);

    // Fetch the current post data
    const postSnapshot = await getDoc(postRef);
    const post = postSnapshot.data();

    // Create a new reply object
    const newReply = {
      id: `${Date.now()}`, // Unique reply ID
      content: replyContent,
      createdAt: null, // Placeholder for the timestamp
      user: {
        id: user.uid,
        name: user.displayName || "Anonymous",
        email: user.email,
      },
      replies: [], // Empty array for nested replies
    };

    if (replyId === null) {
      // Append new reply to top-level replies
      await updateDoc(postRef, {
        replies: [...post.replies, newReply],
      });
    } else {
      const replyToUpdate = findReplyById(post.replies, replyId);
      if (replyToUpdate) {
        replyToUpdate.replies.push(newReply);

        // Update the entire replies array
        await updateDoc(postRef, {
          replies: post.replies,
        });
      }
    }

    setReplyContent(""); // Clear the reply input
    setReplyToPostId(null); // Reset reply state
  };

  const findReplyById = (replies, replyId) => {
    for (let reply of replies) {
      if (reply.id === replyId) {
        return reply;
      }
      if (reply.replies.length > 0) {
        const nestedReply = findReplyById(reply.replies, replyId);
        if (nestedReply) return nestedReply;
      }
    }
    return null;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="discussion-page">
      <h1>Welcome to the Discussion Forum!</h1>
      <div className="new-post">
        <input
          type="text"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          placeholder="Enter the Thread title..."
        />
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="Enter your Post Description..."
        />
        <button className="post-button" onClick={handleNewPost}>Post</button>
      </div>

      <div className="search-bar-threads">
        <input
          type="text"
          placeholder="Search for Threads"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="posts">
        {/* Map over filteredThreads and render threads */}
        {filteredThreads.length > 0 ? (
          filteredThreads.map((post) => (
            <div key={post.id} className="post">
              <h2><em>Title:</em> {post.title}</h2>
              <p className="post-description"><em>Description:</em> {post.content}</p>
              <p className="createdBy-details" style={{ textAlign: "left" }}>
                Posted by {post.user.name} ({post.user.email}) at{" "}
                {post.createdAt?.toDate().toLocaleString() || "Loading..."}
              </p>
              {/* Replies */}
              <div className="replies">
                {post.replies.map((reply) => (
                  <div key={reply.id} className="reply">
                    <p className="reply-content">{reply.content}</p>
                    <p>
                      Replied by {reply.user.name} ({reply.user.email}) at{" "}
                      {reply.createdAt?.toDate().toLocaleString() || "Loading..."}
                    </p>
                  </div>
                ))}
              </div>
              <div className="add-reply">
                <input
                  type="text"
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="Write a reply..."
                />
                <button onClick={() => handleReply(post.id)}>Reply</button>
              </div>
            </div>
          ))
        ) : (
          <p>No threads found</p>
        )}
      </div>
    </div>
  );
};
export default DiscussionPage;
