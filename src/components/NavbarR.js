import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/logo.png"

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    return (
        <div className='flex justify-evenly'>
            <Link >
                <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
            </Link>

            <nav>
                <ul className='flex ml-5 mr-3 gap-3'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/buy">Buy</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/sell">Sell</Link>
                    </li>
                </ul>
            </nav>

            {/*login - signup - logout */}
            <div className='flex ml-5 mr-3 gap-3'>
                {
                    !isLoggedIn && <Link to="/login">
                            <button>
                                LogIn
                            </button>
                        </Link>
                }

                {
                    !isLoggedIn && <Link to="/signup">
                            <button>
                                Sign Up
                            </button>
                        </Link>
                }

                {
                    isLoggedIn && <Link to="/">
                            <button
                                onClick={() => {
                                    setIsLoggedIn(false);
                                    // toast.success("Logged Out");
                                }}>
                                Logout
                            </button>
                        </Link>
                }
            </div>

        </div>

    )
}

export default Navbar
