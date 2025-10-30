"use client";
import React, { useState } from "react";

export default function Page() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match ❌");
      return;
    }

    setError("");
    alert("Signup Successful ✅");
  };

  return (
    <section className="main-container-login1">
      <div className="container1">
        <div className="form-box1">
          <img
            src="/assets/images/Logo.webp"
            alt="Cricket Lovers Global Logo"
            className="logo1"
          />
          <h3>SIGN UP</h3>

          <form onSubmit={handleSubmit}>

            {/* Row 1 */}
            <div className="row1">
              <div className="input-group1">
                <label>FIRSTNAME</label>
                <input type="text" placeholder="Enter your first name" required />
              </div>
              <div className="input-group1">
                <label>LASTNAME</label>
                <input type="text" placeholder="Enter your last name" required />
              </div>
            </div>

            {/* Row 2 */}
            <div className="row1">
                <div className="input-group1">
                <label>GENDER</label>
                <select required>
                  <option value="">Select gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </select>
              </div>
              
              <div className="input-group1">
                <label>COUNTRY</label>
                <select required>
                  <option value="">Select your country</option>
                  <option value="IN">India</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="CA">Canada</option>
                  <option value="NZ">New Zealand</option>
                  <option value="SA">South Africa</option>
                  <option value="PK">Pakistan</option>
                  <option value="BD">Bangladesh</option>
                  <option value="SL">Sri Lanka</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="row1">
              <div className="input-group1">
                <label>PASSWORD</label>
                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={
                    password &&
                    confirmPassword &&
                    password !== confirmPassword
                      ? "input-error"
                      : ""
                  }
                />
              </div>

              <div className="input-group1">
                <label>CONFIRM PASSWORD</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className={
                    password &&
                    confirmPassword &&
                    password !== confirmPassword
                      ? "input-error1"
                      : ""
                  }
                />
              </div>
            </div>

            {error && (
              <p style={{ color: "red", marginTop: "-8px", fontSize: "14px" }}>
                {error}
              </p>
            )}

            {/* Row 4 */}
            <div className="row1">
              <div className="input-group1">
                <label>EMAIL</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              
            </div>

            <button type="submit" className="btn1">Sign Up</button>

            <p className="signup-text1">
              ALREADY HAVE AN ACCOUNT? <a href="/login">LOGIN</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
