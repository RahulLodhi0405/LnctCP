import React, { useEffect, useState } from "react";
import { Auth, db } from "../Firebase/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { toast } from "react-toastify";
import DiamondHead from "../../Assets/DiamondHead.jpg";

function Profile() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user data
  const fetchUserData = async (user) => {
    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        console.error("No user data found in Firestore.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle authentication state
  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged(async (user) => {
      if (user) {
        await fetchUserData(user);
      } else {
        toast.success("User logged out successfully!", {
          className: "profile-custom-toast",
          position: "bottom-right",
        });
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await Auth.signOut();
      toast.info("Logged out successfully.", {
        className: "profile-custom-toast",
        position: "bottom-right",
      });
      navigate("/login");
    } catch (error) {
      toast.error(`Logout failed: ${error.message}`, {
        className: "profile-custom-toast",
        position: "bottom-right",
      });
    }
  };

  // Profile content
  const renderProfile = () => (
    <div className="profile-container">
      <img
        src={DiamondHead || "https://via.placeholder.com/150"}
        alt="Profile"
        className="profile-image"
        onClick={() => navigate("/profile")}
      />
      <h3 className="welcome-message">
        Welcome, {userDetails.Name}! 🙏
      </h3>
      <div className="profile-details">
        <p>
          College: <span>{userDetails.College}</span>
        </p>
        <p>
          Email: <span>{userDetails.Email}</span>
        </p>
        <p>
          Contact: <span>{userDetails.Phone}</span>
        </p>
      </div>
      <button className="profile-logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );

  return (
    <div className="profile-page">
      {isLoading ? (
        <p className="loading-message">Loading...</p>
      ) : userDetails ? (
        renderProfile()
      ) : (
        <p className="loading-message">No user data available.</p>
      )}
    </div>
  );
}

export default Profile;
