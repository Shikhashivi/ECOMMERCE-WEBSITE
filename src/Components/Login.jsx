import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../assets/signup.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    if (!email || !password) {
      alert('Please enter details!');
      return;
    }
    // window.location.reload()



    const users = JSON.parse(localStorage.getItem('user') || '[]');
    const userFound = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      alert('Login Successful!');
      navigate('/home');
    } else {
      setMsg('Invalid Email or Password!');
    }
    window.location.reload()

  };

  return (
    <div className="signup-container">
      <div className="left-side">
        <img src={Image} alt="Login" />
      </div>
      <div className="right-side my-4">
        <div>
          <h1>Log in to Exclusive</h1>
          {msg && <p className="errMsg">{msg}</p>}
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="mb-1 my-4">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handleInput}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handleInput}
            />
          </div>
          <div className="btn">
            <button type="submit" className="btn btn-danger">
              Login
            </button>
            <p className="forget">Forgot password?</p>
            <p>
              Don't have an account? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
