import React from 'react'
import Image from '../assets/signup.png';
import Login from './Login.jsx';

const Signup = () => {
  return (
    <>
      <div className="signup-container">
        <div className="left-side">
          <img src={Image} alt="" />

        </div>
        <div className="right-side">
          <div>
            <h1>Create an account</h1>
            <p>Enter your details below</p>
          </div>
          <form>
            <div className="mb-1">
              <label for="exampleInputEmail1" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-1">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-1">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="btn">
              <button type="submit" className="btn btn-danger">Create  Account</button>
              <button type='' className="btn btn-primary">SignUp with Google</button>
              <p>Already Have an account? <a href="./login">Login</a></p>
            </div>
          </form>

        </div>

      </div>


    </>
  )
}

export default Signup