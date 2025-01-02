import React from 'react'
import Home from './Home.jsx'

const MyAccount = () => {
  return (
    <>
      <div className="account">
        <div className='left-side'>
          <p><a href={<Home />}>Home</a></p> <p>/</p> <p>My Account</p>
        </div>
        <div className="right-side">
          welcome Admin
        </div>
      </div>
      <section>
        <div className="contact-content">
          <div className="left-content">
            <h1>Manage My Account</h1>
            <ul>
              <li>My Profile</li>
              <li>Address Back</li>
              <li>My Payment Options</li>
            </ul>
            <h1>My Orders</h1>
            <ul>
              <li>My Profile</li>
              <li>Address Back</li>
              <li>My Payment Options</li>
            </ul>
            <h1>My WishList</h1>
            <ul>
              <li>My WishList</li>
              <li>Address Back</li>
              <li>My Payment Options</li>
            </ul>

          </div>
          <div className="right-content">
            <h1>Edit Your Profile</h1>

            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Fisrt Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" />

              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" />

              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Address</label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="change-pasword">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Current Password' />
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='New Password' />
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Confirm New Password' />
              </div>
              <div className="btns">
                <button type="button" class="btn btn-secondery btn-sm">Cancel</button>
                <button type="button" class="btn btn-danger btn-sm">save changes</button>
              </div>
            </form>

          </div>

        </div>
      </section>
    </>
  )
}

export default MyAccount