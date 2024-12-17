import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter } from '@fortawesome/free-solid-svg-icons'

import Image from '../assets/about.png'
import Icon from '../assets/icon_shop.png'
import Icon1 from '../assets/Icon-Moneybag.png'
import Icon2 from '../assets/Icon-Sale.png'
import Icon3 from '../assets/Icon-Shopping bag.png'
import Founder1 from '../assets/founder1.png'
import Founder2 from '../assets/founder2.png'
import Founder3 from '../assets/founder3.png'
import Vector from '../assets/Vector.png'
import Group from '../assets/Group.png'
import Twitter from '../assets/Icon-Twitter.png'
import Customer from '../assets/Icon-Customer service.png'
import Secure from '../assets/Icon-secure.png'
import Delivery from '../assets/Icon-delivery.png'




const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="left-side">
          <h1>Our Story</h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor saepe vel illo quis facilis vitae nulla ab recusandae accusamus ipsa! Excepturi, beatae corrupti! Earum blanditiis explicabo, vitae nisi laudantium nesciunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dignissimos delectus, doloremque, architecto expedita vero maxime possimus aspernatur nesciunt inventore, optio neque fugiat iste repellendus. Quia perspiciatis officiis consequatur facere.
          <div>
            <p className='sec-pera'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sequi optio cumque, voluptas cupiditate tempore quisquam impedit facere. </p>
          </div>
        </div>

        <div className="right-side">
          <img src={Image} alt="" />

        </div>


      </div>
      <section>
        <div className="rating-section">
          <div className="boxes">
            <div className="imgs">
              <img src={Icon1} alt="" />
            </div>
            <h1>10.5K</h1>
            <p>Sallers active our site</p>
          </div>
          <div className="boxes">
            <div className="imgs">
              <img src={Icon3} alt="" />
            </div>
            <h1>10.5K</h1>
            <p>Sallers active our site</p>
          </div>
          <div className="boxes">
            <div className="imgs">
              <img src={Icon} alt="" />
            </div>
            <h1>10.5K</h1>
            <p>Sallers active our site</p>
          </div>
          <div className="boxes">
            <div className="imgs-last">
              <img src={Icon2} alt="" />
            </div>
            <h1>10.5K</h1>
            <p>Sallers active our site</p>
          </div>
        </div>
      </section>
      <section>
        <div className="founder-section">
          <div className="founder-details">
            <div className="img-section">

              <img src={Founder1} alt="" />
            </div>
            <h1>Tom Cruise</h1>
            <p>Founder & Chairman</p>
            <div className="founder-icon">
            <img src={Twitter} alt="" />
            <img src={Vector} alt="" />
            <img src={Group} alt="" />


            </div>
          </div>
          <div className="founder-details">
            <div className="img-section">
              <img src={Founder2} alt="" />
            </div>
            <h1>Tom Cruise</h1>
            <p>Founder & Chairman</p>
            <div className="founder-icon">
            <img src={Twitter} alt="" />
            <img src={Vector} alt="" />


            <img src={Group} alt="" />
            </div>
          </div><div className="founder-details">
            <div className="img-section">
              <img src={Founder3} alt="" />
            </div>
            <h1>Tom Cruise</h1>
            <p>Founder & Chairman</p>
            <div className="founder-icon">
            <img src={Twitter} alt="" />

            <img src={Vector} alt="" />
            <img src={Group} alt="" />

            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="customer-service">
          <div className="customer-card">
            <div className="customer-img">
            <img src={Customer} alt="" />
            </div>
            <h2>FREE AND FAST DELIVERY </h2>
            <p>Free delivery for all orders above $140</p>
          </div>
          <div className="customer-card">
          <div className="customer-img">
            <img src={Secure} alt="" />
            </div>
            <h2>FREE AND FAST DELIVERY </h2>
            <p>Free delivery for all orders above $140</p>
          </div> <div className="customer-card">
          <div className="customer-img">
            <img src={Delivery} alt="" />
            </div>
            <h2>FREE AND FAST DELIVERY </h2>
            <p>Free delivery for all orders above $140</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About