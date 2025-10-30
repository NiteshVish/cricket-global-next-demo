"use client";
import authInstance from "@/api/auth/auth.api";
import axios from "axios";
import React, { useState } from "react";

export default function Page() {
  const countries = [
  { code: "", name: "Select your country" },
  { code: "India", name: "India" },
  { code: "United States", name: "United States" },
  { code: "United Kingdom", name: "United Kingdom" },
  { code: "Australia", name: "Australia" },
  { code: "Canada", name: "Canada" },
  { code: "New Zealand", name: "New Zealand" },
  { code: "South Africa", name: "South Africa" },
  { code: "Pakistan", name: "Pakistan" },
  { code: "Bangladesh", name: "Bangladesh" },
  { code: "Sri Lanka", name: "Sri Lanka" },
  { code: "Other", name: "Other" },
];

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
const [emailError, setEmailError] = useState("");


  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match ❌");
      return;
    }

    setError("");
    setLoading(true);

    const reqbody={
          firstName: firstName,
          lastName: lastName,
          gender,
          country,
          email,
          password,
        }
    try {
      console.log("reqbody-----", reqbody);
      const res = await authInstance.signup(reqbody)
      console.log("res---------", res)

      setLoading(false);

      if (!res.ok) {
        setError(data.message || "Signup failed ❌");
        return;
      }

     

      alert("Signup Successful ✅");
      window.location.href = "/login";  

    } catch (err) {
      console.error(err);
      // setError("Something went wrong ❌");
      setLoading(false);
    }
  };

  return (
    <section className="main-container-login1">
      <div className="container1">
        <div className="form-box2">
          <img
            src="/assets/images/Logo.webp"
            alt="Cricket Lovers Global Logo"
            className="logo1"
          />
          <h3>SIGN UP</h3>

          <form onSubmit={handleSubmit}>
            <div className="row1">
              <div className="input-group1">
                <label>FIRSTNAME</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="input-group1">
                <label>LASTNAME</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row1">
              <div className="input-group1">
                <label>GENDER</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="input-group1">
                <label>COUNTRY</label>
                <select value={country} onChange={(e) => setCountry(e.target.value)} required>
  {countries.map((c) => (
    <option key={c.code} value={c.code}>
      {c.name}
    </option>
  ))}
</select>

              </div>
            </div>

            <div className="row1">
              <div className="input-group1">
                <label>PASSWORD</label>
                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
                />
              </div>
            </div>

            {error && (
              <p style={{ color: "red", fontSize: "14px", marginTop: "-8px" }}>
                {error}
              </p>
            )}

            <div className="row1">
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
    if (!emailRegex.test(val)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  }}
  required
  className={emailError ? "input-error" : ""}
/>
{emailError && (
  <p style={{ color: "red", fontSize: "13px", marginTop: "3px" }}>
    {emailError}
  </p>
)}

              </div>
            </div>

            <button type="submit" className="btn1" disabled={loading}>
              {loading ? "Processing..." : "Sign Up"}
            </button>

            <p className="signup-text1">
              ALREADY HAVE AN ACCOUNT? <a href="/login">LOGIN</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
