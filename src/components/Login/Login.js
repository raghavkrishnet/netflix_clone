import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (isPasswordValid(password)) {
      navigate('/home');
    } else {
      setErrorMessage('Password must be at least 6 characters long and contain a mix of letters, numbers, and special characters.');
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
          <button
            type="submit"
            className="button"
            disabled={!email || !password || !isPasswordValid(password)}
            style={{
              backgroundColor: !email || !password ? 'gray' : '',
            }}
          >
            Sign In
          </button>
        </form>

        <div className="login-options">
          <span>OR</span>
          <button className="button secondary">Use a sign-in code</button>
          <button className="forgot-password">Forgot password?</button>
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <div className="sign-up">
            <span>New to Netflix? </span>
            <button>Sign up now.</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
