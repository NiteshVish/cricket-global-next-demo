import React from 'react';

export default function Login() {
    return (
        

  
<section className='main-container-login'>
    <div className="login-container">
      <div className="login-box">
        <img src="./assets/images/Logo.webp" alt="Cricket Lovers Global Logo" className="logo" />
        <h1>Login</h1>

        <form className='form-class'>
          <div className='form-1'>
            <div className="input-group">
            <label for="email">FirstName</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label for="email">LastName</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          </div>

          <div className='form-2'>
            <div className="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="input-group">
            <label for="password">Confirm Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          </div>
</form>
          <button type="submit" className="btn">Login</button>

          <p className="signup-text">
            Don't have an account?
            <a href="#" className="signup-link">Sign up</a>
          </p>
        
      </div>
    </div>
    
  </section>
  


            
        
    );
}

