import React, { useContext, useEffect, useState } from 'react';
import CustomerReviewCart from '../../CustomerReviewCart/CustomerReviewCart'
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';
import './CustomerReview.css'

const CustomerReview = () => {
    // const [users,setUsers] = useState([]);
    const [users, setUsers] = useContext(UserContext);
    useEffect(() => {
        fetch('user.json')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    const carduser = users.slice(0, 3);
    // console.log(carduser);
    return (
        <div>
            <h1 className='text-success text-center'>Customer Review (3)</h1>
            <div className="d-flex justify-content-between m-5 ">
                {
                    carduser.map(user => <CustomerReviewCart key={user.id} user={user}></CustomerReviewCart>)
                }
            </div>
            <div className='seeall'>
                <Link to='/review' className='bg-primary w-100 px-5 py-2 text-white rounded text-decoration-none'>See All Review</Link>
            </div>
        </div>
    );
};

export default CustomerReview;