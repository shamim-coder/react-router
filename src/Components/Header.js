import React from "react";
import CustomLink from "./CustomLink";

const Header = () => {
    return (
        <div>
            <ul
                style={{
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                }}
            >
                <li>
                    <CustomLink to="/">Home</CustomLink>
                </li>
                <li>
                    <CustomLink to="/posts">Posts</CustomLink>
                </li>
                <li>
                    <CustomLink to="/projects">Project</CustomLink>
                </li>
                <li>
                    <CustomLink to="/about">About Us</CustomLink>
                </li>
                <li>
                    <CustomLink to="/shop">Shop</CustomLink>
                </li>
                <li>
                    <CustomLink to="/friends">Friends</CustomLink>
                </li>
                <li>
                    <CustomLink to="/contact">Contact</CustomLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;
