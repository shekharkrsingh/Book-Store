import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import {Route, Routes} from 'react-router-dom'
import useFetch from "./components/useFetch";
import {useState, useEffect} from "react";
import HandleError from "./pages/HandleError";
import {useNavigate} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Sell from "./pages/Sell";
import Contact from "./pages/Contact";
import BookDetails from "./components/BookDetails";
import Logout from "./pages/Logout";
import {toast} from "react-hot-toast";
import Buy from "./pages/Buy";
import Footer from "./pages/Footer";
import About from "./pages/About";

function App() {
    const navigate = useNavigate();
    const {data, isPending, error} = useFetch('http://localhost:3030/profiles');
    const [profileId, setProfileId] = useState(null);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const handleNavigation = () => {
            if (profileId !== null && profileId.length === 0) {
                toast.error("Login Failed");
                navigate("/login");
            } else if (profileId !== null && profileId.length === 1) {
                navigate("/");
                toast.success("Logged In");
                setIsLoggedIn(true);
            }
        }

        handleNavigation();
    }, [profileId]);
    return (
        <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <div>
                <Routes>
                    <Route
                        exact="exact"
                        path="/profile"
                        element={<Profile profileId = {
                            profileId
                        } />}></Route>
                    <Route
                        exact="exact"
                        path="/"
                        element={<Home isLoggedIn = {
                            isLoggedIn
                        } />}></Route>
                    <Route
                        exact="exact"
                        path="/login"
                        element={<HandleError isPending = {
                            isPending
                        }
                        data = {
                            data
                        }
                        error = {
                            error
                        }
                        setProfileId = {
                            setProfileId
                        } />}></Route>
                    <Route exact="exact" path="/signUp" element={<SignUp/>}></Route>
                    <Route
                        exact="exact"
                        path="/sell"
                        element={<Sell profileId = {
                            profileId
                        } />}></Route>
                    <Route exact="exact" path="/contact" element={<Contact/>}></Route>
                    <Route exact="exact" path="/bookdetails/:id" element={<BookDetails/>}/>
                    <Route
                        exact="exact"
                        path="/logout"
                        element={<Logout isLoggedIn = {
                            isLoggedIn
                        }
                        setIsLoggedIn = {
                            setIsLoggedIn
                        }
                        setProfileId = {
                            setProfileId
                        }
                        profileId = {
                            profileId
                        } />
                        }
                    />
                    <Route exact="exact" path="/buy" element={<Buy />}/>
                    <Route exact="exact" path="/about" element={<About />}/> {/* <Route exact path="/signUp">
              <SignUp/>
           </Route> */
                    }
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
