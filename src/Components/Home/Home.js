import React from 'react';
import CustomerReview from './CustomerReview/CustomerReview';
import './Home.css'
import mackbook from './images/macbook.jpg'

const Home = () => {
    return (
        <div >
            <div className='home-style m-5'>
                <div>
                    <img className='h-100 w-75 rounded' src={mackbook} alt="" />
                </div>
                <div>
                    <h1 className='text-primary fs-1 fw-bold'>Get best MackBook</h1>
                    <h1 className='fs-1 fw-bold'>Get Best Service</h1>
                    <p><strong>MackBook</strong> is an apple product .it has large company . the service of apple is too fast and easy. mack product is too update .
                    </p>
                    <button className='border rounded bg-primary text-white'>Show more</button>
                </div>
            </div>
            <CustomerReview></CustomerReview>
        </div>

    );
};

export default Home;