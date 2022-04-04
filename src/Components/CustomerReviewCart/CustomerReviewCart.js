import React from 'react';
import { Card} from 'react-bootstrap';

const Review = ({ user }) => {
    return (
        <div className='w-25 shadow'>
            <Card>
                <Card.Img className='h-100 w-100 rounded mx-auto d-block' src={user.img} />
                <Card.Body>
                    <Card.Title className='text-primary'>{user.name}</Card.Title>
                    <Card.Text>
                       <strong className='text-info'>Says</strong> :{user.details}
                    </Card.Text>
                    <p><strong className='text-danger'>Review</strong> : <span className='text-warning'>{user.review}</span></p>
                </Card.Body>
            </Card>
        </div>


    );
};

export default Review;