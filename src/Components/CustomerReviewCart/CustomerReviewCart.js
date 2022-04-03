import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Review = ({ user }) => {
    console.log(user);
    return (
        <div className='w-25 shadow'>
            <Card>
                <Card.Img className='h-100 w-100 rounded mx-auto d-block' src={user.img} />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                       {user.details}
                    </Card.Text>
                    <p>Review : <span className='text-warning'>{user.review}</span></p>
                </Card.Body>
            </Card>
        </div>


    );
};

export default Review;