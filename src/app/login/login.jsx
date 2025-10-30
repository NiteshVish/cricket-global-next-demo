import React from 'react';
import Signup from '../signup/signup';

export default function Login() {
  return (
    <section className="main-container-login1">
      <div className="container1">
        <div className="form-box1">
          <img
            src="assets/images/Logo.webp"
            alt="Cricket Lovers Global Logo"
            className="logo1"
          />
          <h3>LOGIN</h3>

          <form>
            {/* Firstname + Lastname */}
            <div className="row1">
              <div className="input-group1">
                <label>FIRSTNAME</label>
                <input type="text" placeholder="Enter your first name" />
              </div>
              <div className="input-group1">
                <label>LASTNAME</label>
                <input type="text" placeholder="Enter your last name" />
              </div>
            </div>

            {/* Email + Country */}
            <div className="row1">
              <div className="input-group1">
                <label>EMAIL</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="input-group1">
                <label>COUNTRY</label>
                <select>
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

            {/* Password + Confirm Password */}
            <div className="row1">
              <div className="input-group1">
                <label>PASSWORD</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              
            </div>

            <button type="submit" className="btn1">Login</button>

            <p className="signup-text1">
              DON'T HAVE AN ACCOUNT? <a href="/signup">SIGN UP</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
