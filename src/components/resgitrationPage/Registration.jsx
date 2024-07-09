import React from 'react';
import '../../css/styles.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/operators/registrationOperator';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await dispatch(registerThunk({ name, email, password }));
      if (response.meta.requestStatus === 'fulfilled') {
        navigate('/goit-project-react/login');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleLogin = () => {
    navigate('/goit-project-react/login');
  };

  return (
    <div>
      <main>
        <div className="registration-form-container">
          <h2 className="registration-title">Registration</h2>
          <form
            className="registration-form"
            id="registrationForm"
            onSubmit={handleSubmit}
          >
            <div className="registration-form-group">
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder=" "
                onChange={handleNameChange}
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
                onChange={handleEmailChange}
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
                onChange={handlePasswordChange}
                required
              />
              <label htmlFor="password" className="form-label">
                Password *
              </label>
            </div>
            <div className="registration-form-group">
              <button type="submit" className="register-button">
                Register
              </button>
              <button
                onClick={handleLogin}
                type="button"
                className="login-button"
              >
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
