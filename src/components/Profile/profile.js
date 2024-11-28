import React, { useEffect, useState } from "react";
import { Auth, db } from "../Firebase/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { toast } from "react-toastify";
import DiamondHead from "../../Assets/DiamondHead.jpg"


function Profile() {
    const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  
  useEffect(() => {
    const fetchUserData = Auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.error("No user data found in Firestore.");
        }
      } else {
        toast.success("User logged Out successfully!",{
            className: "profile-custom-toast",
            position: "bottom-right",
          })
        navigate("/login");
      }
    });
  
    return () => fetchUserData();
  }, [navigate]);
  
  

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };
  
  return (
    <div className="profile-page"> 
        {userDetails ? (
        <div className="profile-container">
          <img
              src={DiamondHead}// Default image if no photoURL
              alt="Profile"
              className="profile-image"
              onClick={() => navigate("/profile")} // Navigate to Profile on click
            />
          <h3 className="welcome-message">
            Welcome, {userDetails.Name}! 🙏
          </h3>
          <div className="profile-details">
            <p>College: <span>{userDetails.College}</span></p>
            <p>Email: <span>{userDetails.Email}</span></p>
            <p>Contact: <span>{userDetails.Phone}</span></p>
          </div>
          <button className="profile-logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
    </div>
      
  );
}

export default Profile;
