import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import "../components/Card.css"
import {toast} from 'react-hot-toast';
// import { Navigate } from 'react-router-dom';

const Cards = ({data, isLoggedIn}) => {
    const navigate = useNavigate();

    return (
        <div className='cards'>
            {
                data.map((bookData) => (

                    <div className='wrapper'>
                        <div className='card' key={bookData.id}>
                            <Link to={`/bookdetails/${bookData.id}`}>
                                <div className='book-image'><img src={bookData.featureImage} alt='' className='image'/></div>
                                <h2 className='book-name'>{bookData.bookName}</h2>
                            </Link>
                            <div className='book-actual-Price line-through'>
                                ₹ {bookData.bookActualPrice}</div>
                            <div className='book-selling-price'>
                                ₹ {bookData.bookSellingPrice}</div>
                            {
                                isLoggedIn && <button
                                        className='btn'
                                        onClick={() => {
                                            navigate("/buy");
                                        }}>Buy Now</button>
                            }

                            {
                                !isLoggedIn && <button
                                        className='btn'
                                        onClick={() => {
                                            toast.error(" Login first");
                                            navigate("/login");
                                        }}>Buy Now</button>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Cards;