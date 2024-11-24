import React, { useState } from "react";
import "./Login.css";
import Logo from "../../Assets/Logo.png"; // Path to your app logo
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loginType, setLoginType] = useState("member");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Details:", { username, password, loginType });
    // Add login logic here
  };
  const handleSignupClick = () => {
    navigate("/signup"); // Navigate to the SignUp page
  };

  return (
    <div className="form-container">

      <div className="form-01">
      <div className="background">
        <div className="login-shape"></div>
        <div className="login-shape"></div>
      </div>
      
      <form className="login-form" onSubmit={handleLoginSubmit}>
      {/* App Logo */}
      <div className="logo-container">
          <img src={Logo} alt="App Logo" className="app-logo" />
          <h3>LogIn Here</h3>
          
          <div className="login-toggle">
            <div
              className={`toggle-button go ${loginType === "member" ? "active" : ""}`}
              onClick={() => setLoginType("member")}
            >
              <i className={`fa-solid fa-star ${loginType === "member" ? "active" : ""}`}></i> Member 
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div
              className={`toggle-button fb ${loginType === "student" ? "active" : ""}`}
              onClick={() => setLoginType("student")}
            >
              <i className={`fa-solid fa-graduation-cap ${loginType === "student" ? "active" : ""}`}></i> Student 
            </div>
          </div>

          <label htmlFor="username"></label>
          <input
                type="text"
                placeholder="Username or Email"
                className="input-field"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

        <label htmlFor="password"></label>
        <input
                type="password"
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

        <button className="login-button" type="submit">Log In</button>
        <div className="signup-link">
          <p>Don't have an Account? &nbsp;
            <div className="SignUp"
            onClick={handleSignupClick}
            >
              Sign Up
            </div>
          </p>
        </div>
        </div>
      </form>
      </div>
    </div>
  );
};
export default LoginPage;
