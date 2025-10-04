// src/components/ProblemHub/ProblemHub.js
import React, { useState, useEffect } from "react";
import { db, Auth } from "../Firebase/Firebase";
import { collection, doc, addDoc, getDocs, onSnapshot, updateDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import "./ProblemHub.css"; // Add your glassmorphism + neon CSS here

const ProblemHub = () => {
  const [user, setUser] = useState(null);
  const [problems, setProblems] = useState([]);
  const [activeProblem, setActiveProblem] = useState(null);
  const [threads, setThreads] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [replyContents, setReplyContents] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  // Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      if (currentUser) setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Load problems
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "problems"), (snapshot) => {
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProblems(list);
      setActiveProblem(list[0] || null); // first as active by default
    });
    return () => unsubscribe();
  }, []);

  // Load threads for active problem
  useEffect(() => {
    if (!activeProblem) return;
    const unsubscribe = onSnapshot(collection(db, "threads"), (snapshot) => {
      const list = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(t => t.problemId === activeProblem.id)
        .sort((a,b) => b.createdAt?.seconds - a.createdAt?.seconds);
      setThreads(list);
    });
    return () => unsubscribe();
  }, [activeProblem]);

  if (loading) return <div>Loading...</div>;

  const handleNewPost = async () => {
    if (!newPostTitle || !newPostContent || !user) return;
    await addDoc(collection(db, "threads"), {
      problemId: activeProblem.id,
      title: newPostTitle,
      content: newPostContent,
      createdAt: serverTimestamp(),
      user: { id: user.uid, name: user.displayName || "Anonymous", userType: "member" },
      replies: []
    });
    setNewPostTitle(""); setNewPostContent("");
  };

  const handleReply = async (postId) => {
    const content = replyContents[postId];
    if (!content || !user) return;
    const postRef = doc(db, "threads", postId);
    const post = threads.find(t => t.id === postId);
    const newReply = { id: `${Date.now()}`, content, createdAt: new Date(), user: { id: user.uid, name: user.displayName || "Anonymous" }, replies: [] };
    await updateDoc(postRef, { replies: [...post.replies, newReply] });
    setReplyContents(prev => ({ ...prev, [postId]: "" }));
  };
  

  const handleQuizAnswer = (qIndex, value) => {
    setQuizAnswers(prev => ({ ...prev, [qIndex]: value }));
  };

  return (
    <div className="problem-hub">
      <h1>🧠 Problem Hub — Solve • Discuss • Quiz</h1>

      {/* Active Problem */}
      {activeProblem ? (
        <div className="problem-card">
          <h2>{activeProblem.title}</h2>
          <p>{activeProblem.description}</p>
        </div>
      ) : (
        <p>No active problem. Admins: add a problem in Firestore.</p>
      )}

      {/* Discussion Threads */}
      <h2>Discussion — {activeProblem ? activeProblem.title : "No problem selected"}</h2>
      <div className="new-post">
        <input placeholder="Thread title" value={newPostTitle} onChange={e => setNewPostTitle(e.target.value)} />
        <textarea placeholder="Your question / approach" value={newPostContent} onChange={e => setNewPostContent(e.target.value)} />
        <button onClick={handleNewPost}>Post Thread</button>
      </div>

      {threads.length === 0 ? <p>No discussion threads yet!</p> : threads.map(post => (
        <div key={post.id} className="thread-card">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <div className="replies-section">
            {post.replies.map(reply => <div key={reply.id} className="reply-card"><strong>{reply.user.name}:</strong> {reply.content}</div>)}
          </div>
          <div className="reply-input">
            <input placeholder="Write a reply..." value={replyContents[post.id] || ""} onChange={e => setReplyContents(prev => ({ ...prev, [post.id]: e.target.value }))} />
            <button onClick={() => handleReply(post.id)}>Reply</button>
          </div>
        </div>
      ))}

      {/* Quiz (if any) */}
      <h2>Quick Quiz</h2>
      {activeProblem?.quizId ? (
        <QuizComponent quizId={activeProblem.quizId} user={user} />
      ) : <p>No quiz attached to this problem.</p>}

      {/* Previous Problems */}
      <h2>Previous Problems</h2>
      {problems.length > 1 ? problems.slice(1).map(p => <div key={p.id} className="problem-card">{p.title}</div>) : <p>No previous problems.</p>}
    </div>
  );
};

export default ProblemHub;
