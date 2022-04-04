import React, {useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Allreviews from '../AllReviews/Allreviews';
import './Review.css'

const Review = () => {
    
    const [user,setUser] = useState([]);
    useEffect(()=>{
        fetch('user.json')
        .then(res => res.json())
        .then(data => setUser(data));
    },[])
    // console.log(user)
    return (
        <Row className="reviews m-5">
            {
                user.map(users=><Allreviews key={users.id} users={users}></Allreviews>)
            }
        </Row>
    );
};

export default Review;