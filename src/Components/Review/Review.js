import React, { useContext } from 'react';
import { UserContext } from "../../App";

const Review = () => {
    const [user] = useContext(UserContext);
    console.log(user);
    return (
        <div>
            <h1>review section</h1>
        </div>
    );
};

export default Review;