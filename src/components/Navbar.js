import {Link} from "react-router-dom"
import logo from "../assets/logo.png"
import {toast} from "react-hot-toast";
const Navbar = (props) => {
    const isLoggedIn = props.isLoggedIn;
    // const setIsLoggedIn = props.setIsLoggedIn;
    const handleSell = () => {
        // console.log(isLoggedIn);
        if (!isLoggedIn) {
            return (
                <Link to="/login" className=" hover:text-lg hover:shadow-sm">Sell</Link>
            )
        } else {
            return (
                <Link to="/sell" className=" hover:text-lg hover:shadow-sm">
                    Sell
                </Link>
            )
        }
    }

    return (
        <div
            className="flex justify-between items-center w-11/12 max-w-[1160px]  mx-auto shadow-md">

            <Link to="/">
                <img
                    src={logo}
                    alt="logo"
                    width={160}
                    height={32}
                    loading="lazy"
                    className=" hover:translate-x-1"/>
            </Link>
            <nav>
                <ul className=" text-richblack-100 flex gap-x-6">
                    <li>
                        <Link to="/" className=" hover:text-lg hover:shadow-sm">
                            Home
                        </Link>
                    </li>

                    <li>
                        {handleSell()}
                    </li>
                    <li>
                        <Link to="/contact" className=" hover:text-lg hover:shadow-sm">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className=" hover:text-lg hover:shadow-sm">
                            About Us
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-x-4">
                {
                    isLoggedIn && <Link to="/profile" className=" hover:text-lg hover:shadow-sm">
                            Profile</Link>
                }

                {
                    isLoggedIn && <Link to="/logout">
                            <button
                                onClick={() => {
                                    toast.success("Logged Out");
                                }}className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 hover:bg-lime-400' >
                                Logout
                            </button>
                        </Link>
                }

                {
                    !isLoggedIn && <Link to="/login">
                            <button
                                className='bg-richblack-800 text-richblack-100 py-[8px]
                        px-[12px] rounded-[8px] border border-richblack-700 hover:bg-lime-400'>
                                Login
                            </button>
                        </Link>
                }

                {
                    !isLoggedIn && <Link to="/signUp">
                            <button
                                className='bg-richblack-800 text-richblack-100 py-[8px]
                    px-[12px] rounded-[8px] border border-richblack-700 hover:bg-lime-400'>
                                Sign up
                            </button>
                        </Link>
                }

            </div>
        </div>

    );
}

export default Navbar;