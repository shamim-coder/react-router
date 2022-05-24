import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            {/* {match && " >"} */}
            <Link style={{ color: match ? "red" : "black", textDecoration: match ? "underline" : "none" }} to={to} {...props}>
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;
