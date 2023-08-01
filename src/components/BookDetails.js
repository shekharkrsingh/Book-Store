import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import useFetch from './useFetch';
import "../components/BookDetails.css"

const BookDetails = () => {

    const navigate = useNavigate();

    const {id} = useParams();
    const {data: bookData, isPending, error} = useFetch(
        "http://localhost:4040/books/" + id
    );

    return (
        <div>
            {
                isPending && <div>
                        Loading....</div>
            }
            {error && <div>{error}</div>}
            {
                bookData && (
                    <div className='wrappers '>
                        <div className='left m-12 p-2'>
                            <div className='image'><img src={bookData.featureImage} alt=''/></div>
                        </div>
                        <div className='right'>
                            <div>
                                <h1>
                                    {bookData.bookName}</h1>
                                <p>Author Name : {bookData.bookAuthor}</p>
                                <p>Condition : {bookData.bookCondition}</p>
                            </div>
                            <div className='price'>
                                <div className='m-2 p-1 line-through'>₹ {bookData.bookActualPrice}</div>
                                <div className='selling-price'>₹ {bookData.bookSellingPrice}</div>
                            </div>

                            <div>
                                <button
                                    onClick={() => {
                                        navigate("/buy");
                                    }}
                                    className='btn'>Buy Now</button>
                            </div>

                            <div className=' max-w-sm '>
                                <div className=' text-2xl'>
                                    <h2>
                                        About :-
                                    </h2>
                                </div>
                                <p className=' text-sm italic'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum est voluptate
                                    earum, atque in accusantium autem iure quae explicabo, rem exercitationem veniam
                                    quas, aliquid maiores labore quasi cum cupiditate. Illo, aperiam tempore.
                                    Accusamus ducimus temporibus quia nemo dolores rerum perferendis non numquam
                                    eveniet iure commodi ab quisquam soluta itaque dicta aperiam hic perspiciatis
                                    minus adipisci esse, earum animi consectetur atque? Earum optio quos delectus
                                    enim, ex sint, dignissimos labore ducimus, voluptatum minima tempore. Excepturi
                                    labore earum, sint quod quas et quisquam sapiente sunt, ipsam ipsa quos eveniet
                                    aut vero, placeat tempore facere debitis officiis quae reiciendis eaque. Harum,
                                    voluptas culpa.{bookData.bookDescription}</p>
                            </div>

                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default BookDetails
