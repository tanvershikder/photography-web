import React, { useContext, useEffect, useState } from 'react';
import CustomerReviewCart from '../../CustomerReviewCart/CustomerReviewCart'
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

const CustomerReview = () => {
    // const [users,setUsers] = useState([]);
    const [users,setUsers] = useContext(UserContext);
    useEffect(()=>{
        fetch('user.json')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[])
    
    const carduser = users.slice(0,3);
    // console.log(carduser);
    return (
        <div>
            <h1 className='text-success text-center'>Customer Review (3)</h1>
            <div  className="d-flex justify-content-between m-5 ">
            {
                carduser.map(user=><CustomerReviewCart key={user.id} user={user}></CustomerReviewCart>)
            }
            </div>
            <Link to='/review' className='bg-primary m-3 p-2 text-white ms-5 rounded text-decoration-none'>See All Review</Link>
        </div>
    );
};

export default CustomerReview;