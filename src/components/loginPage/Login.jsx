import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/operators/authOperator';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './login.css';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await dispatch(loginThunk({ email, password }));
      if (response.meta.requestStatus === 'fulfilled') {
        navigate('/goit-project-react/user-calculator');
      } else {
        alert(`Wrong data. Try again!`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleregister = () => {
    navigate('/goit-project-react/registration');
  };

  return (
    <>
      <div className="login-form-container">
        <h2 className="login-title">Log in</h2>
        <form className="login-form" id="loginForm" onSubmit={handleSubmit}>
          <div className="login-form-group">
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder=" "
              required
              onChange={handleEmailChange}
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
              onChange={handlePasswordChange}
            />
            <label htmlFor="password" className="form-label">
              Password *
            </label>
          </div>
          <div className="login-form-group">
            <Button
              type={'submit'}
              text={'Log in'}
              fontFamily={'Verdana'}
              fontSize={14}
              weight={700}
              primaryColor={'#FC842D'}
              secondaryColor={'#FFF'}
              width={180}
              height={44}
            />
            <Button
              type={'button'}
              text={'Register'}
              secondary={true}
              fontFamily={'Verdana'}
              fontSize={14}
              weight={700}
              primaryColor={'#FC842D'}
              secondaryColor={'#FFF'}
              width={180}
              height={44}
              onClick={handleregister}
            />
          </div>
        </form>
      </div>
    </>
  );
}
