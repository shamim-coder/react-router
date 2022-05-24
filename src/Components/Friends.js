import axios from "axios";
import React, { useEffect, useState } from "react";
import Friend from "./Friend";

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => setFriends(res.data));
    }, []);

    return (
        <React.Fragment>
            <h1>Total Friends: {friends.length}</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: "15px" }}>
                {friends.map((friend) => (
                    <Friend key={friend.id} friend={friend} />
                ))}
            </div>
        </React.Fragment>
    );
};

export default Friends;
