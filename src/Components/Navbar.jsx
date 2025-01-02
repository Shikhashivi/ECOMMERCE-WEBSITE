import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import Logo from '../Images/Logo.png';
import User from '../assets/user.png';
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from 'react-icons/fa6';
import { CartContext } from './Features/ContextProvider';

const Navbar = ({ searchTerm, setSearchTerm }) => {
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value); // Update the search term
    };

    const { cart } = useContext(CartContext);
    const [search, setSearch] = useState('')
    const [isValidUser, setIsValidUser] = useState(false);
    const navigate = useNavigate();

    // Initialize navigate
    //      useEffect(()=>{
    //        const user= localStorage.getItem('user')
    //        console.log(user)
    //        if(user){
    //         setIsValidUser(true)
    //        }





    //     },[]
    // )
    // const getData = (e) => {
    //     setSearch(e.target.value);
    //     console.log(setSearch)

    // }

    const handleLoginLogout = () => {

        setIsValidUser(prevState => !prevState);
        // Navigate to appropriate route
        if (isValidUser) {
            navigate('/logout'); // Redirect to the logout route
            window.location.reload()
        } else {
            navigate('/'); // Redirect to the signup route
        }

    };

    return (
        <>
            <div className="heading">
                <h2>
                    Summer Sale for All Swim Suits And Free Express Delivery - OFF 50%
                    <Link to="/product"> Shop Now</Link>
                </h2>
            </div>
            <nav>
                <img src={Logo} alt="logo" />

                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>
                        <Link onClick={handleLoginLogout}>
                            {isValidUser ?
                                <li><Link to="/">Signup</Link></li>
                                :
                                <li><Link to="/logout">Logout</Link></li>
                            }
                            {/* {console.log(isValidUser)} */}
                        </Link>
                    </li>
                    {/* <li>
                        <button onClick={handleLoginLogout} className="btn btn-link">
                            {isValidUser ? 
                            <li><Link to='/'>Logout </Link></li>
                                :
                                <li><Link to='/'>Signup </Link></li>
                                 }
                        </button>
                    </li> */}
                </ul>

                <div className="icons">
                    <div className="search-icon">
                        {/* <input type="text" placeholder="Enter here"   /> */}
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={handleInputChange}
                            className="form-control"
                        />

                    </div>
                    <div className="icon">
                        <ul>
                            <li><Link to="/home"><FaHeart /></Link></li>
                            <li>
                                <Link to="/cart" className='cursor-pointer'>
                                    <FaCartShopping />
                                    <span>{cart.length}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <img
                            className="dropdown-toggle"
                            src={User}
                            alt="User"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        />
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link className="dropdown-item" to="./myaccont">     My Account</Link></li>
                            <li><Link className="dropdown-item" to="#">My Order</Link></li>
                            <li><Link className="dropdown-item" to="#">My Cancellations</Link></li>
                            <li><Link className="dropdown-item" to="#">My Reviews</Link></li>
                            <li><Link className="dropdown-item" onClick={handleLoginLogout}>Logout</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <input
                            type="text"
                            placeholder="Search products..."
                            // value={searchTerm}
                            // onChange={handleInputChange}
                            className=" mb-4 search-inp"
                        /> */}
            </nav>
        </>
    );
};

export default Navbar;
