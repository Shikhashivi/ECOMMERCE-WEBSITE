import React from 'react'
import QR from '../assets/Qr Code.png'
import Pay from '../assets/googlepay.png'
import Apple from '../assets/appstore.png'


const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="list">
                        <h1>Exclusive</h1>
                        <ul>
                            <li>Get 10% off your first product</li>
                            <li>
                                <input type="text" placeholder='Enter your email' />
                            </li>

                        </ul>

                    </div>
                    <div className="list">
                        <h1>Support</h1>
                        <ul>
                            <li>111 Bijoy sarani Dhaka </li>
                            <li>exclusive@gmail.com </li>
                            <li>+81850-88510-81880</li>

                        </ul>

                    </div> <div className="list">
                        <h1>Account</h1>
                        <ul>
                            <li>My Account </li>
                            <li>Login </li>
                            <li>Cart</li>
                            <li>Wishlist</li>

                        </ul>

                    </div>
                    <div className="list">
                        <h1>Download app</h1>
                        <ul>
                            <li>Save $3 with </li>
                        </ul>
                        <div className="download">
                        <div>
                            <div className="qr">
                            <img src={QR} alt="" />
                            </div>
                            <div className="store">
                                {/* <img src={Pay} alt="" />
                                <img src={Apple} alt="" /> */}
                            </div>

                        </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer