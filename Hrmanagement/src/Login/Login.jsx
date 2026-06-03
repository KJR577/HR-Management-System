import React, { useState } from "react";
import "./Login.css";
import { FaEnvelope, FaEyeSlash } from "react-icons/fa";
import loginImage from "./assets/hrms.png";
import forgotImage from "./assets/forgot.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  //  FIXED: Moved inside the component body
  const [email, setEmail] = useState("");
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [enteredOTP, setEnteredOTP] = useState("");
  
  const [role, setRole] = useState("HR");
  const [forgotPage, setForgotPage] = useState(false);
  const [resetPage, setResetPage] = useState(false);
 
  const handleLogin = () => {
    if (role === "HR") {
      alert("HR Login Success");
      navigate('/dashboard');
    } else {
      alert("Employee Login Success");
      navigate('/employee-dashboard');
    }
  };

  //  FIXED: Removed duplicate nested function wrapper
  const handleSendOTP = () => {
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOTP(otp);

    // For testing purpose
    alert(`OTP Sent Successfully!\nOTP: ${otp}`);
    console.log("Generated OTP:", otp);
  };

  //  FIXED: Removed duplicate nested function wrapper
  const handleForgotSubmit = () => {
    if (!enteredOTP) {
      alert("Please enter OTP");
      return;
    }

    if (enteredOTP === generatedOTP) {
      alert("OTP Verified Successfully");
      setForgotPage(false);
      setResetPage(true);
    } else {
      alert("Invalid OTP");
    }
  };

  const handleResetSubmit = () => {
    alert("Password reset successfully!");
    setResetPage(false);
    setForgotPage(false);
  };

  return (
    <>
      {/* LOGIN PAGE */}
      {!forgotPage && !resetPage ? (
        <div className="login-container">
          {/* LEFT SIDE */}
          <div className="image-box">
            <img src={loginImage} alt="login" />
          </div>

          {/* RIGHT SIDE */}
          <div className="right-side">
            <div className="switch-btn">
              <button
                className={role === "HR" ? "active-btn" : ""}
                onClick={() => setRole("HR")}
              >
                HR
              </button>
              <button
                className={role === "Employee" ? "active-btn" : ""}
                onClick={() => setRole("Employee")}
              >
                Employee
              </button>
            </div>

            <h2 className="login-title">{role} LOGIN</h2>

            <form className="login-form">
              <label>
                {role === "HR" ? "HR ID" : "Employee ID"}
              </label>
              <div className="input-box">
                <input type="text" placeholder={role === "HR" ? "Enter HR ID" : "Enter Employee ID"} />
                <FaEnvelope />
              </div>

              <label>Password</label>
              <div className="input-box">
                <input type="password" placeholder="Enter Password" />
                <FaEyeSlash />
              </div>

              <div className="forgot-password">
                <button
                  type="button"
                  className="forgot-btn"
                  onClick={() => setForgotPage(true)}
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="button"
                className="login-btn"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>

            <p className="help-text">
              Need help? <span>Contact HR Department</span>
            </p>
          </div>
        </div>
      ) : forgotPage ? (
        /* FORGOT PASSWORD PAGE */
        <div className="forgot-container">
          <div className="forgot-left">
            <div className="forgot-image-box">
              <img src={forgotImage} alt="forgot" />
            </div>
          </div>

          <div className="forgot-right">
            <h1 className="forgot-logo">HRMS</h1>
            <p className="forgot-subtitle">HR Management System</p>
            <h2 className="forgot-title">Forgot Password</h2>

            <form className="forgot-form">
              <label>Email ID</label>
              <div className="forgot-input">
                <input
                  type="email"
                  placeholder="Enter Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FaEnvelope />
              </div>

              <button
                type="button"
                className="send-otp-btn"
                onClick={handleSendOTP}
              >
                Send OTP
              </button>

              <label>Enter OTP</label>
              <div className="forgot-input">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={enteredOTP}
                  onChange={(e) => setEnteredOTP(e.target.value)}
                />
                <FaEyeSlash />
              </div>

              <button
                type="button"
                className="submit-btn"
                onClick={handleForgotSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        /* NEW PASSWORD RESET PAGE */
        <div className="forgot-container">
          <div className="forgot-left">
            <div className="forgot-image-box">
              <img src={forgotImage} alt="reset" />
            </div>
          </div>

          <div className="forgot-right">
            <h1 className="forgot-logo">HRMS</h1>
            <p className="forgot-subtitle">HR Management System</p>
            <h2 className="forgot-title">Set New Password</h2>

            <form className="forgot-form">
              <label>New Password</label>
              <div className="forgot-input">
                <input type="password" placeholder="Enter New Password" />
                <FaEyeSlash />
              </div>

              <label>Confirm Password</label>
              <div className="forgot-input">
                <input type="password" placeholder="Confirm New Password" />
                <FaEyeSlash />
              </div>

              <button
                type="button"
                className="submit-btn"
                onClick={handleResetSubmit}
              >
                Submit
              </button>

              <button
                type="button"
                className="back-btn"
                onClick={() => {
                  setResetPage(false);
                  setForgotPage(false);
                }}
              >
                Go Back to Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;