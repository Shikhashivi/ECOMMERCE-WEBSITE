import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../assets/signup.png';

const Signup = () => {
  const initialUserDetail = {
    name: '',
    email: '',
    password: '',
  };

  const [data, setData] = useState(initialUserDetail);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation
    if (!data.name || !data.email || !data.password) {
      setError('All fields are required.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(data.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (data.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Store user data in local storage
    const existingUsers = JSON.parse(localStorage.getItem('user') || '[]');
    localStorage.setItem('user', JSON.stringify([...existingUsers, data]));

    alert('Signup Successful!');
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="left-side">
        <img src={Image} alt="Signup" />
      </div>
      <div className="right-side">
        <div>
          <h1>Create an account</h1>
          <p>Enter your details below</p>
        </div>
        {error && <p className="error-text">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              value={data.name}
              onChange={handleInput}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              value={data.email}
              onChange={handleInput}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              value={data.password}
              onChange={handleInput}
            />
          </div>
          <div className="btn">
            <button type="submit" className="btn btn-danger">Create Account</button>
            <button type="button" className="btn btn-primary">Sign Up with Google</button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
