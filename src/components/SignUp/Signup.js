import React, { useState } from "react";
import "../SignUp/Signup.css";
import Logo from "../../Assets/Logo.png"; // Path to your app logo
import { useNavigate } from "react-router-dom";

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log("SignUp Details:", { ...formData, userType });
    // Add sign-up logic here
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
