import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetails = () => {
    const { friendID } = useParams();

    const [friend, setFriend] = useState({});
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            const data = res.data;
            const friendData = data.find((friend) => friend.id === parseInt(friendID));
            setFriend(friendData);
        });
    }, [friendID]);
    const { name, phone, username, website, email, id } = friend;
    return (
        <div>
            <h2>Friend Details</h2>
            <h1>#{id}</h1>
            <h4>Name: {name}</h4>
            <h4>Username: {username}</h4>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default FriendDetails;
