import React from 'react';
import CustomerReview from './CustomerReview/CustomerReview';
import './Home.css'
import camera from './images/camrea.jpg'

const Home = () => {
    return (
        <div >
            <div className='home-style m-5'>
                <div>
                    <img className='h-100 w-75 rounded' src={camera} alt="" />
                </div>
                <div>
                    <h1 className='text-primary fs-1 fw-bold'>Get best PhotoGrapher</h1>
                    <h1 className='fs-1 fw-bold'>Get Best Photo</h1>
                    <p><strong>TsPhotgraphy</strong> is best photography you can best service from us.
                        Our photographers are so skilled enough. they make you photo attrictrive and nice.
                    </p>
                    <button className='border rounded bg-primary text-white'>Show more</button>
                </div>
            </div>
            <CustomerReview></CustomerReview>
        </div>

    );
};

export default Home;