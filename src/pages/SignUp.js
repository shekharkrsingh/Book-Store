// import "./SignUp.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";

const SignUp = () => {
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '', email: '', gender: 'male', // Default gender to "male"
        dob: '',
        address: '',
        contact: '',
        password: '',
        storeInfo: false,
        cart: []
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        const newValue = type === 'checkbox'
            ? checked
            : value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue
        }));
    };
    const handleSubmit = (e) => {
        toast.success("Signed Up");
        e.preventDefault();
        setIsPending(true);
        // const detail={Fullname, email, phone, gender, DOB, address, password, cart}
        fetch('http://localhost:3030/profiles', {
            method: 'POST',
            headers: {
                "COntent-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(() => {
            setIsPending(false);
            navigate("/login");
            // return <Navigate to="/login"  />;
        })

    };
    return (
        // <div className=" flex items-center justify-center min-h-screen bg-gray-100">
        // <form id="signup-form" onSubmit={handleSubmit}>     <h2>Sign Up</h2>     <div
        // className="form-group ">       <label htmlFor="name">Name:</label>
        // <input         type="text"         id="name"         name="name"
        // value={formData.name}         onChange={handleChange}         required
        // />     </div>     <div className="form-group">       <label
        // htmlFor="email">Email:</label>       <input         type="email"
        // id="email"         name="email"         value={formData.email}
        // onChange={handleChange}         required       />     </div>     <div
        // className="form-group">       <label>Gender:</label>       <input
        // type="radio"         id="male"         name="gender"         value="male"
        // checked={formData.gender === 'male'}         onChange={handleChange}
        // required       />       <label htmlFor="male">Male</label>       <input
        // type="radio"         id="female"         name="gender"         value="female"
        // checked={formData.gender === 'female'}         onChange={handleChange}
        // required       />       <label htmlFor="female">Female</label>     </div>
        // <div className="form-group">       <label htmlFor="dob">Date of
        // Birth:</label>       <input         type="date"         id="dob"
        // name="dob"         value={formData.dob}         onChange={handleChange}
        // required       />     </div>     <div className="form-group">       <label
        // htmlFor="address">Address:</label>       <textarea         id="address"
        // name="address"         value={formData.address}
        // onChange={handleChange}         required       />     </div>     <div
        // className="form-group">       <label htmlFor="contact">Contact:</label>
        // <input         type="tel"         id="contact"         name="contact"
        // value={formData.contact}         onChange={handleChange}         required
        // />     </div>     <div className="form-group">       <label
        // htmlFor="password">Password:</label>       <input         type="password"
        // id="password"         name="password"         value={formData.password}
        // onChange={handleChange}         required       />     </div>     <div
        // className="form-group">       <input         type="checkbox"
        // id="store-info"         name="storeInfo"         checked={formData.storeInfo}
        // onChange={handleChange}       />       <label htmlFor="store-info">Store my
        // information</label>     </div>     {!isPending && <button type="submit">Sign
        // Up</button>}     {isPending && <button type="submit" disabled>Signing
        // Up</button>}   </form> </div> <div className="min-h-screen py-40"
        // style={{backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)"}}>
        <div className="container mx-auto">
            <div
                className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                <div
                    className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
                    style={{
                        backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)"
                    }}>
                    <h1 className="text-white text-3xl mb-3">Welcome</h1>
                    <div>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac
                            <span>Learn More</span>
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 py-16 px-12">
                    <h2 className="text-3xl mb-4">Register</h2>
                    <p className="mb-4">
                        Create your account. It’s free and only take a minute
                    </p>
                    <form action="#" id="signup-form" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-5">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required="required"
                                placeholder="Name"
                                className="border border-gray-400 py-1 px-2"/>
                        </div>

                        <div className="mt-5">
                            <label>Gender:</label>
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleChange}
                                required="required"/>
                            <label htmlFor="male">Male</label>
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleChange}
                                required="required"/>
                            <label htmlFor="female">Female</label>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="dob">Date of Birth:</label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                required="required"/>
                        </div>

                        <div className="mt-5">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required="required"
                                placeholder="Email"
                                className="border border-gray-400 py-1 px-2 w-full"/>
                        </div>
                        <div className="mt-5">
                            <input
                                type="text"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required="required"
                                placeholder="Password"
                                className="border border-gray-400 py-1 px-2 w-full"/>
                        </div>
                        {/* <div className="mt-5">
                  <input type="checkbox" className="border border-gray-400">
                  <span>
                    I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
                  </span>
                </div> */
                        }
                        <div className="mt-5">
                            <input
                                type="checkbox"
                                id="store-info"
                                name="storeInfo"
                                checked={formData.storeInfo}
                                onChange={handleChange}/>
                            <label htmlFor="store-info">Store my information</label>
                        </div>
                        <div className="mt-5">
                            {
                                !isPending && <button
                                        className="w-full bg-purple-500 py-3 text-center text-white"
                                        type="submit">Sign Up</button>
                            }
                            {
                                isPending && <button
                                        className="w-full bg-purple-500 py-3 text-center text-white"
                                        type="submit"
                                        disabled="disabled">Signing Up</button>
                            }
                        </div>
                    </form>
                </div>

            </div>
        </div>
        // </div>
    );
}

export default SignUp;