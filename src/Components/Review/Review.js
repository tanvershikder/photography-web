import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { UserContext } from "../../App";
import Allreviews from '../AllReviews/Allreviews';
import './Review.css'

const Review = () => {
    const [user] = useContext(UserContext);
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