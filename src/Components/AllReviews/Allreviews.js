import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Allreviews = ({users}) => {
    console.log(users);

    return (
        <Col md={4} className='w-100 mr-5 shadow'>
            <Card>
                <Card.Img className='h-100 w-100 rounded ' src={users.img} />
                <Card.Body>
                    <Card.Title className='text-primary fs-4'>{users.name}</Card.Title>
                    <Card.Text>
                    <strong className='text-info'>Says</strong> :{users.details}
                    </Card.Text>
                    <p><strong className='text-danger'>Review</strong> : <span className='text-warning'>{users.review}</span></p>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Allreviews;