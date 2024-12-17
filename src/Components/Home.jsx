import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole, faArrowRight, } from '@fortawesome/free-solid-svg-icons'
import Image from '../assets/img.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'
import sale1 from '../assets/sale1.png'
import sale2 from '../assets/sale2.png'
import sale3 from '../assets/sale3.png'
import sale4 from '../assets/sale4.png'
import Best1 from '../assets/best1.png'
import Best2 from '../assets/best2.png'
import Best3 from '../assets/best3.png'
import Best4 from '../assets/best4.png'
import banner from '../assets/banner.png'
import Customer from '../assets/Icon-Customer service.png'
import Secure from '../assets/Icon-secure.png'
import Delivery from '../assets/Icon-delivery.png'
import FillEye from '../assets/Fill Eye.png'
import FillHeart from '../assets/Fill Heart.png'

import ar1 from '../assets/ar1.png'
import ar2 from '../assets/ar2.png'
import ar3 from '../assets/ar3.png'
import ar4 from '../assets/ar4.png'
import Category2 from '../assets/c2.png'
import Category3 from '../assets/c3.png'
import Category4 from '../assets/c4.png'
import Category5 from '../assets/c5.png'
import Category6 from '../assets/c6.png'
import Products from '../Pages/Products.jsx'







const Home = () => {
  return (
    <>
      <hr />
      <div className="container">
        <div className="category-list">
          <ul>
            <li>Woman Fasion               <FontAwesomeIcon icon={faArrowRight} />
            </li>
            <li>Men's Fashion <FontAwesomeIcon icon={faArrowRight} /> </li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li> Baby & Toys</li>
            <li>Health & Beauty</li>
          </ul>
        </div>

        <div className="brand_section">

          <div className='left-side'>
            <div>
              <FontAwesomeIcon icon={faAppleWhole} />

              <h4>iphone 14 series</h4>
            </div>
            <h1>Up to 10% off Voucher</h1>
            <a href="#">Shop Now</a>
          </div>

          <div className="right-side">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Image} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={Image2} className="d-block w-120" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={Image3} className="d-block w-120" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

        </div>




      </div>
      <div className="sale-section">
        <h4>Today</h4>
        <h1>Flash Sale </h1>
        <div className="sale-card">
          <div className="card">
            <div className="img-section">
              <div className="img">
                <img src={sale1} alt="" />
              </div>
              <div className="icon-img">
                <img src={FillEye} alt="" />
                <img src={FillHeart} alt="" />
              </div>
            </div>
            <div className="content">
              <h2>Gamepad</h2>
              <p>$120</p>
            </div>

          </div>
          <div className="card">
            <div className="img-section">
              <div className="img">
                <img src={sale2} alt="" />
              </div>
              <div className="icon-img">
                <img src={FillEye} alt="" />
                <img src={FillHeart} alt="" />
              </div>
            </div>
            <div className="content">
              <h2>Gamepad</h2>
              <p>$120</p>
            </div>

          </div><div className="card">
            <div className="img-section">
              <div className="img">
                <img src={sale3} alt="" />
              </div>
              <div className="icon-img">
                <img src={FillEye} alt="" />
                <img src={FillHeart} alt="" />
              </div>
            </div>
            <div className="content">
              <h2>Gamepad</h2>
              <p>$120</p>
            </div>

          </div><div className="card">
            <div className="img-section">
              <div className="img">
                <img src={sale4} alt="" />
              </div>
              <div className="icon-img">
                <img src={FillEye} alt="" />
                <img src={FillHeart} alt="" />
              </div>
            </div>
            <div className="content">
              <h2>Gamepad</h2>
              <p>$120</p>
            </div>

          </div>








        </div>
        <div className='sale-button'>
          <button type="button" class="btn btn-danger"><a href="/product">View All Product</a></button>
        </div>


      </div>
      <hr />

      <div className="category-section">
        <h4>Category</h4>
        <h1>Browse By Category</h1>
        <div className="category-img">

          <div className="imgs">
            <img src={Category2} alt="" />
            <p>Phone</p>
          </div>
          <div className="imgs">
            <img src={Category3} alt="" />
            <p>Computer</p>
          </div>
          <div className="imgs">
            <img src={Category4} alt="" />
            <p>Headphone</p>
          </div>
          <div className="imgs">
            <img src={Category5} alt="" />
            <p>SmartWatch</p>
          </div>
          <div className="imgs">
            <img src={Category6} alt="" />
            <p>Gaming </p>
          </div>
        </div>


      </div>




      <div className="sale-section">
        <h4>This month</h4>
        <h1>Best Sale Products </h1>
        <div className="sale-card">
          <div className="card">
            <div className="img-section">
              <div className="sale-img">
                <img src={Best1} alt="" />
              </div>
              <div className="icon-img">
                <img src={FillEye} alt="" />
                <img src={FillHeart} alt="" />
              </div>
            </div>
            <div className="content">
              <h2>This North Cort</h2>
              <p>$120</p>
            </div>

          </div>
          <div className="card">
            <div className="img-section">
              <div className="sale-img">
                <img src={Best2} alt="" />
              </div>
              <div className="icon-img">
                <img src={FillEye} alt="" />
                <img src={FillHeart} alt="" />
              </div>
            </div>
            <div className="content">
              <h2>Gucci duffle bag</h2>
              <p>$120</p>
            </div>

          </div><div className="card">
            <div className="img-section">
              <div className="sale-img">
                <img src={Best3} alt="" />
              </div>
              <div className="icon-img">
                <img src={FillEye} alt="" />
                <img src={FillHeart} alt="" />
              </div>
            </div>
            <div className="content">
              <h2>RGB liquid CPU Cooler</h2>
              <p>$120</p>
            </div>

          </div><div className="card">
            <div className="img-section">
              <div className="sale-img">
                <img src={Best4} alt="" />
              </div>
              <div className="icon-img">
                <img src={FillEye} alt="" />
                <img src={FillHeart} alt="" />
              </div>
            </div>
            <div className="content">
              <h2>Small Book self</h2>
              <p>$120</p>
            </div>

          </div>









        </div>


      </div>


      {/* Banner Section */}
      <div className="banner-section">
        <div className="content">
          <div className="lft">
            <p>Category</p>
            <h1>Enhance Your Mucic Experience</h1>
            <div className="ct-banner">
              <div className="tym">
                <h3>24</h3>
                <h2>Hours</h2>
              </div>
              <div className="tym">
                <h3>05</h3>
                <h2>Days</h2>
              </div>
              <div className="tym">
                <h3>59</h3>
                <h2>Minutes</h2></div>
              <div className="tym">
                <h3>35</h3>
                <h2>Seconds</h2>
              </div>
            </div>
            <button type="button" class="btn btn-success">Buy Now </button>
          </div>
          <div className="rht">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>


    <Products/>
      <section>
        <div className="arrsection">
          <p>Featured</p>
          <h4>New Arrival</h4>
          <div className="arr-img">
            <div className="left-side">
              <img src={ar1} alt="" />
            </div>
            <div className="right-side">
              <div className='up-right'>
                <div className="cont-right">
                  <h1>Womens collection</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nemo.</p>
                  <a href="#">shop now</a>
                </div>
                <div className="img-right">

                  <img src={ar2} alt="" />
                </div>

              </div>
              <div className="down-right">
                <div className="img1">
                  <img src={ar3} alt="" />
                  <p>Speakers</p>

                </div>
                <div className="img2">
                  <img src={ar4} alt="" />
                  <p>Perfume</p>

                </div>
              </div>

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

export default Home