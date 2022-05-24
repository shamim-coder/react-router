import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
    const { id } = friend;
    const navigate = useNavigate();

    const handleDetails = () => {
        const path = `/friend/${id}`;
        navigate(path);
    };

    return (
        <div>
            <h3>{friend.name}</h3>
            <p>{friend.email}</p>
            <p>{friend.phone}</p>
            <Link to={"/friend/" + id}>See Details</Link>
            <button onClick={handleDetails}>Details</button>
        </div>
    );
};

export default Friend;
