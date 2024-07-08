import React from 'react';
import '../../css/styles.css';

const LoginPage = () => {
  return (
    <div>
      <main>
        <div className="login-form-container">
          <h2 className="login-title">Log in</h2>
          <form className="login-form" id="loginForm">
            <div className="login-form-group">
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder=" "
                required
              />
              <label htmlFor="email" className="form-label">
                Email *
              </label>
            </div>
            <div className="login-form-group">
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                placeholder=" "
                required
              />
              <label htmlFor="password" className="form-label">
                Password *
              </label>
            </div>
            <div className="login-form-group">
              <button type="submit" className="login-button">
                Log in
              </button>
              <button type="button" className="register-button">
                Register
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
