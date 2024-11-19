import React, { useState } from "react";
import "./Login.css";
import Logo from "../../Assets/Logo.png"; // Path to your app logo

const LoginPage = () => {
  const [loginType, setLoginType] = useState("member");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Details:", { username, password, loginType });
    // Add login logic here
  };

  return (
    <div className="login-container">
      <div className="form-box">
        {/* App Logo */}
        <div className="logo-container">
          <img src={Logo} alt="App Logo" className="app-logo" />
        </div>

        {/* Login Section */}
        <div className="form-section login-section">
          <h2 className="form-title">Login</h2>
          <div className="login-toggle">
            <button
              className={`toggle-button ${loginType === "member" ? "active" : ""}`}
              onClick={() => setLoginType("member")}
            >
              Member Login
            </button>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        
            <button
              className={`toggle-button ${loginType === "student" ? "active" : ""}`}
              onClick={() => setLoginType("student")}
            >
              Student Login
            </button>
          </div>

          <form className="login-form" onSubmit={handleLoginSubmit}>
            <div className="input-container">
              <input
                type="text"
                placeholder="Username or Email"
                className="input-field"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="action-button">Login</button>
          </form>

          
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
