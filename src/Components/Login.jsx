import React from 'react'
import Image from '../assets/signup.png';

const Login = () => {
  return (
    <>
      <div className="signup-container">
        <div className="left-side">
          <img src={Image} alt="" />

        </div>
        <div className="right-side my-4">
          <div>
            <h1>Log in to Exclusive</h1>
          </div>
          <form  >
           
            <div className="mb-1 my-4">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-1">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="btn">
              <button type="submit" className="btn btn-danger">Login</button>
              <p className='forget'>Forget password</p>
            </div>
          </form>

        </div>

      </div>


    </>
  )
}

export default Login