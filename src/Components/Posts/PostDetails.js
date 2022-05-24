import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
    const { postID } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`).then((res) => setPost(res.data));
    }, [postID]);

    return (
        <div>
            <h3>Post #{post.id}</h3>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;
