import React from 'react';
import '../../css/styles.css';

const RegistrationPage = () => {
  return (
    <div>
      <main>
        <div className="registration-form-container">
          <h2 className="registration-title">Registration</h2>
          <form className="registration-form" id="registrationForm">
            <div className="registration-form-group">
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder=" "
                required
              />
              <label htmlFor="name" className="form-label">
                Name *
              </label>
            </div>
            <div className="registration-form-group">
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
            <div className="registration-form-group">
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
            <div className="registration-form-group">
              <button type="button" className="register-button">
                Register
              </button>
              <button type="submit" className="login-button">
                Log in
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default RegistrationPage;
