"use client";
import React, { useState } from "react";
import authInstance from "@/api/auth/auth.api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required ❌");
      return;
    }

    // Email regex validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const reqBody = { email, password };
      console.log("Login Body:", reqBody);

      const res = await authInstance.login(reqBody);
      console.log("Login Response:", res);

      setLoading(false);

      // If login failed
      if (!res?.success) {
        setError(res?.message || "Login failed ❌");
        return;
      }

      alert("Login Successful ✅");
      window.location.href = "/home"; // redirect home or dashboard

    } catch (err) {
      console.error(err);
      setError("Something went wrong ❌");
      setLoading(false);
    }
  };

  const handleForgetPass = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("email is required ❌");
      return;
    }

    // Email regex(format) validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const reqBody = { email};
      console.log(" reset Body:", reqBody);

      const res = await authInstance.forgetPass(reqBody);
      console.log("forget Response:", res);

      setLoading(false);

      // If login failed
      if (!res?.success) {
        setError(res?.message || "Request failed ❌");
        return;
      }

      alert("Reset Email Send Successfully ✅");

    } catch (err) {
      console.error(err);
      alert("Something went wrong ❌");
      setLoading(false);
    }
  };

  return (
    // <section className="main-container-login1">
    //   <div className="container1">
    //     <div className="form-box1">
    //       <img
    //         src="/assets/images/Logo.webp"
    //         alt="Cricket Lovers Global Logo"
    //         className="logo1"
    //       />
    //       <h3>LOGIN</h3>

    //       <form onSubmit={handleLogin}>
    //         <div className="input-group1">
    //           <label>EMAIL</label>
    //           <input
    //             type="email"
    //             placeholder="Enter your email"
    //             value={email}
    //             onChange={(e) => {
    //               const val = e.target.value.trim().toLowerCase();
    //               setEmail(val);
    //               const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //               setEmailError(!emailRegex.test(val) ? "Please enter a valid email" : "");
    //             }}
    //             required
    //             className={emailError ? "input-error" : ""}
    //           />
    //           {emailError && (
    //             <p style={{ color: "red", fontSize: "13px" }}>{emailError}</p>
    //           )}
    //         </div>

    //         <div className="input-group1">
    //           <label>PASSWORD</label>
    //           <input
    //             type="password"
    //             placeholder="Enter your password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             required
    //           />
    //         </div>

    //         {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

    //         <button type="submit" className="btn1" disabled={loading}>
    //           {loading ? "Processing..." : "Login"}
    //         </button>

    //         <p className="signup-text1">
    //           DON'T HAVE AN ACCOUNT? <a href="/signup">SIGN UP</a>
    //         </p>
    //       </form>
    //     </div>
    //   </div>
    // </section>
    
  <section className="main-container-login1">
    <div className="container1">
      <div className="form-box1">
        <img
          src="/assets/images/Logo.webp"
          alt="Cricket Lovers Global Logo"
          className="logo1"
        />
        <h3>LOGIN</h3>

        <form onSubmit={handleLogin}>
          <div className="input-group1">
            <label>EMAIL</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                const val = e.target.value.trim().toLowerCase();
                setEmail(val);
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                setEmailError(!emailRegex.test(val) ? "Please enter a valid email" : "");
              }}
              required
              className={emailError ? "input-error" : ""}
            />
            {emailError && (
              <p style={{ color: "red", fontSize: "13px" }}>{emailError}</p>
            )}
          </div>

          <div className="input-group1">
            <label>PASSWORD</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* ✅ Forgot password link */}
          <div style={{ textAlign: "right", marginBottom: "10px" }}>
            <span onClick = {handleForgetPass} style={{ color: "orange", fontSize: "13px" }}>
              Forgot Password?
            </span>
          </div>

          {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

          <button type="submit" className="btn1" disabled={loading}>
            {loading ? "Processing..." : "Login"}
          </button>

          <p className="signup-text1">
            DON'T HAVE AN ACCOUNT? <a href="/signup">SIGN UP</a>
          </p>
        </form>
      </div>
    </div>
  </section>


  );
}
