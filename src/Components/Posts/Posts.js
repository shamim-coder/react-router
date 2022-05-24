import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => setPosts(res.data));
    }, []);
    return (
        <div>
            <h1>All Posts</h1>
            <h4>Total Posts: {posts.length}</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(25, 1fr)", gridGap: "5px" }}>
                {posts.map((post) => (
                    <Link style={{ padding: "5px", background: "gray", color: "white", textDecoration: "none" }} key={post.id} to={"/posts/" + post.id}>
                        {post.id}
                    </Link>
                ))}
            </div>
            <Outlet />
        </div>
    );
};

export default Posts;
