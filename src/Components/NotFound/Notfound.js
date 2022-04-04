import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from './notfound.jpg'

const Notfound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='h-100 w-100 m-5 text-center'>
                <img className='w-75 rounded' src={notfound} alt="" />
            </div>
            <button className='bg-primary text-white w-25 text-center ms-5 p-2' onClick={() => navigate(-1)}>
                <p>Back</p>
            </button>
        </div>
    );
};

export default Notfound;