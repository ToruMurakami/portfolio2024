import React, { useEffect } from 'react';

const Blog = () => {
    useEffect(() => {
        fetch("/api/type-blog")
            .then(Response => Response.json())
            .then(data => console.log(data));

    }, []);


    return (
        <div>
            <h1>Blog Component</h1>
        </div>
    );
};

export default Blog;
