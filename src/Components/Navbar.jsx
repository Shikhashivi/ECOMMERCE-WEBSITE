import React, { useContext, useState } from 'react'
import Logo from '../Images/Logo.png'
import User from '../assets/user.png'
import { FaHeart } from "react-icons/fa";
import { CartContext } from './Features/ContextProvider'
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
    const {cart} = useContext(CartContext)

    return (
        <>
            <div className='heading'>
                <h2>Summer Sale for All Swim Suits And Free Express Delivery- OFF 50% <a to="Shop Now"> Shop Now</a></h2>
            </div>
            <nav>
                <img src={Logo} alt="logo" />

                <ul>

                    <li><a href='/'>Home</a></li>
                    <li><a href="./contact">Contact</a></li>
                    <li><a href="./about">About</a></li>
                    <li><a href="./cart1">cart</a></li>

                    <li><a href="./signup">Signup</a></li>


                </ul>
                <div className="icons">
                    <div className="search-icon">
                        <input type="text"  placeholder='Enter here'/>
                   </div>
                    <div className="icon">
                        <ul >

                            <li> <a href="/" className='' ><FaHeart /> </a></li>
                            <li> <a href="/cart" className='link' >< FaCartShopping/> <span>{cart.length}</span></a></li>

                        </ul>

                        {/* <a href="" className='navbar-link fs-5 text-black'><BsCart/></a> */}
                        

                    </div>
                    <div className="dropdown">
                            <img className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" src={User} alt='' />


                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li> 
                                    <a className="dropdown-item" href="#">Manage My Account</a></li>
                                <li>  <a className="dropdown-item" href="#">My Order</a></li>
                                <li>   <a className="dropdown-item" href="#">My Cancellations</a></li>
                                <li>  <a className="dropdown-item" href="#">My Reviews</a></li>

                                <li>  <a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>

                </div>
            </nav>

        </>
    )
}

export default Navbar