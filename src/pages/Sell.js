import {useState} from 'react';
import {useNavigate} from "react-router-dom"

import {toast} from "react-hot-toast";

const Sell = ({profileId}) => {
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const sellerProfileId = profileId[0].id;
    const [formData, setFormData] = useState({
        sellerProfileId: {
            sellerProfileId
        },
        bookName: '',
        featureImage: '',
        bookAuthor: '',
        bookDescription: '',
        bookActualPrice: '',
        bookSellingPrice: '',
        bookCondition: 'good', // Default book condition to "good"
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Book Added");
        setIsPending(true);
        // const detail={Fullname, email, phone, gender, DOB, address, password, cart}
        fetch('  http://localhost:4040/books', {
            method: 'POST',
            headers: {
                "COntent-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(() => {
            setIsPending(false);
            navigate("/");
            // return <Navigate to="/login"  />;
        })
    };
    return (
        // <div className="flex justify-center mt-24 ">   <form className=" leading-5"
        // id="book-form" onSubmit={handleSubmit}>     <h2 className="mb-4 text-4xl
        // tracking-tight font-extrabold text-center text-gray-900" >Add Book
        // Information</h2>     <div>       <label htmlFor="bookName">Book Name:</label>
        // <input         type="text"         id="bookName"         name="bookName"
        // value={formData.bookName}         onChange={handleChange}         required
        // />     </div>     <div>       <label htmlFor="featureImage">Feature Image
        // URL:</label>       <input         type="text"         id="featureImage"
        // name="featureImage"         value={formData.featureImage}
        // onChange={handleChange}         required       />     </div>     <div>
        // <label htmlFor="bookAuthor">Book Author:</label>       <input
        // type="text"         id="bookAuthor"         name="bookAuthor"
        // value={formData.bookAuthor}         onChange={handleChange}         required
        // />     </div>     <div>       <label htmlFor="bookDescription">Book
        // Description:</label>       <textarea         id="bookDescription"
        // name="bookDescription"         value={formData.bookDescription}
        // onChange={handleChange}         required       />     </div>     <div>
        // <label htmlFor="bookActualPrice">Book Actual Price:</label>       <input
        // type="number"         id="bookActualPrice"         name="bookActualPrice"
        // value={formData.bookActualPrice}         onChange={handleChange}
        // required       />     </div>     <div>       <label
        // htmlFor="bookSellingPrice">Book Selling Price:</label>       <input
        // type="number"         id="bookSellingPrice"         name="bookSellingPrice"
        // value={formData.bookSellingPrice}         onChange={handleChange}
        // required       />     </div>     <div>       <label
        // htmlFor="bookCondition">Book Condition:</label>       <select
        // id="bookCondition"         name="bookCondition"
        // value={formData.bookCondition}         onChange={handleChange}
        // required       >         <option value="good">Good</option>         <option
        // value="better">Better</option>         <option value="best">Best</option>
        // </select>     </div>     {!isPending && <button type="submit">Sell</button>}
        // {isPending && <button type="submit" disabled>Posting ...</button>}   </form>
        // </div>

        <div>
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 ">Add a new Book</h2>
                    <form action="#" onSubmit={handleSubmit}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Book Name</label>
                                <input
                                    type="text"
                                    name="bookName"
                                    id="bookName"
                                    value={formData.bookName}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type Book name"
                                    required="required"/>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    for="featureImage"
                                    className="block mb-2 text-sm font-medium text-gray-900">Image URL</label>
                                <input
                                    type="text"
                                    name="featureImage"
                                    id="featureImage"
                                    value={formData.featureImage}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type Book name"
                                    required="required"/>
                            </div>

                            <div className="w-full">
                                <label
                                    for="bookAuthor"
                                    className="block mb-2 text-sm font-medium text-gray-900">Author Name</label>
                                <input
                                    type="text"
                                    name="bookAuthor"
                                    id="bookAuthor"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="e.g. Dr. J. Murphy"
                                    required=""/>
                            </div>

                            <div>
                                <label
                                    for="bookCondition"
                                    className="block mb-2 text-sm font-medium text-gray-900 ">Book Condition</label>
                                <select
                                    id="bookCondition"
                                    name='bookCondition'
                                    value={formData.bookCondition}
                                    onChange={handleChange}
                                    required="required"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option selected="">Select condition</option>
                                    <option value="Good">Good</option>
                                    <option value="Better">Better</option>
                                    <option value="Best">Best</option>
                                </select>
                            </div>

                            <div className="w-full">
                                <label
                                    for="bookActualPrice"
                                    className="block mb-2 text-sm font-medium text-gray-900 ">Actual Price
                                </label>
                                <input
                                    type="number"
                                    name="bookActualPrice"
                                    id="bookActualPrice"
                                    value={formData.bookActualPrice}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder=" e.g. 500"
                                    required="required"/>
                            </div>

                            <div className="w-full">
                                <label
                                    for="bookSellingPrice"
                                    className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Selling Price</label>
                                <input
                                    type="number"
                                    name="bookSellingPrice"
                                    id="bookSellingPrice"
                                    onChange={handleChange}
                                    value={formData.bookSellingPrice}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder=" e.g. 350"
                                    required="required"/>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    for="bookDescription"
                                    className="block mb-2 text-sm font-medium text-gray-900">
                                    Book Description</label>
                                <textarea
                                    id="bookDescription"
                                    name='bookDescription'
                                    value={formData.bookDescription}
                                    onChange={handleChange}
                                    rows="8"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    required="required"
                                    placeholder="Book description here"></textarea>
                            </div>
                        </div>
                        {
                            !isPending && <button
                                    type="submit"
                                    className="flex  m-auto items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-green-200 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-green-400">
                                    Add Book
                                </button>
                        }
                        {
                            isPending && <button
                                    type="submit"
                                    disabled="disabled"
                                    className="flex m-auto items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-green-200 bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-green-400 ">
                                    Adding Book
                                </button>
                        }
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Sell;