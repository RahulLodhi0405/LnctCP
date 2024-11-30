import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import "../SignUp/Signup.css";
import Logo from "../../Assets/Logo.png"; // Path to your app logo
import { useNavigate } from "react-router-dom";
import {Auth, db} from "../Firebase/Firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const SignUpPage = () => {
  const [userType, setUserType] = useState("member");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    college: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value })); // Correctly updates formData state
  };
  
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
  
    const { email, password, confirmPassword, name, phone, college } = formData; // Destructuring email, password, and confirmPassword from formData
  
    if (password !== confirmPassword) {
      console.error("Passwords do not match.");
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(Auth, email, password);
      const user = userCredential.user; 
      // Set displayName using updateProfile
      await updateProfile(user, {
        displayName: name, // Set the display name here
      });

      // Store user data in Firestore
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          Name: name,
          Email: email,
          Phone: phone,
          College: college,
          UserType: userType,
          UID: user.uid, // Including UID for reference
        })
      }
      toast.success("User Registered Successfully!",{
        className: "signup-custom-toast",
        position: "bottom-right",
      });
      navigate("/login");
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: "bottom-right",
      });
      console.error("Error during sign up:", error.message); 
    }
  };
  

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to Login page
  };

  return (
    <div className="form-container">
      <div className="form-01">
        <div className="background">
          <div className="signup-shape"></div>
          <div className="signup-shape"></div>
        </div>

        <form className="signup-form" onSubmit={handleSignUpSubmit}>
          <div className="logo-container">
            <img src={Logo} alt="App Logo" className="signup-app-logo" />
            <h3>SignUp Here</h3>

            <div className="login-toggle">
              <div
                className={`toggle-button go ${
                  userType === "member" ? "active" : ""
                }`}
                onClick={() => setUserType("member")}
              >
                <i
                  className={`fa-solid fa-star ${
                    userType === "member" ? "active" : ""
                  }`}
                ></i>{" "}
                Member
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div
                className={`toggle-button fb ${
                  userType === "student" ? "active" : ""
                }`}
                onClick={() => setUserType("student")}
              >
                <i
                  className={`fa-solid fa-graduation-cap ${
                    userType === "student" ? "active" : ""
                  }`}
                ></i>{" "}
                Student
              </div>
            </div>

            <label htmlFor="name"></label>
            <input
              type="text"
              placeholder="Name"
              className="input-field"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="phone"></label>
            <input
              type="text"
              placeholder="Phone Number"
              className="input-field"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <label htmlFor="college"></label>
            <input
              type="text"
              placeholder="College Name"
              className="input-field"
              name="college"
              value={formData.college}
              onChange={handleChange}
            />

            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="password"></label>
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <label htmlFor="confirmPassword"></label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input-field"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <button type="submit">Sign Up</button>
            <div className="login-link">
              <p>
                Already have an Account? &nbsp;
                <div className="LogIn" onClick={handleLoginClick}>
                  Log In
                </div>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
