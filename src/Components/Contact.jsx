import React from 'react'
import Home from './Home.jsx'
import Phone from "../assets/icons-phone.png";
import mail from "../assets/icons-mail.png";



const Contact = () => {
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
        <div className="con-section">
        <div className="left-side">
          <div className="up">
            <img src={Phone} alt="" />
            <h4>Call To Us </h4>
            <p>We are available 24/7 days a week</p>
            <p>phone: 123 456 7890</p>
          </div>
          <hr />
          <div className="up">
            <img src={mail} alt="" />
            <h4>Write To Us</h4>
            <p>Fill Out Our form and we will contact  you within 24 hours</p>
            <p>Email:customer@exclusve.com</p>
            <p>Email:service@exclusve.com</p>

          </div>
        </div>
        <div className="right-side">
          <input type="text" placeholder='Enter Name' />
          <input type="text" placeholder='Enter email' /> 
          <input type="text" placeholder='Enter phone' />
          <textarea name="" id="" rows="7" cols="76" placeholder='Enter Message'></textarea>
          <button type="button" class="btn btn-danger" >Send Message</button>
           
      
        </div>
        </div>
      </section>
    
    </>
  )
}

export default Contact