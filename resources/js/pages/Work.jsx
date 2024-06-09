import React, { useEffect } from 'react';

const Work = () => {
    useEffect(() => {
        //api test
        fetch("/api/type-works")
            .then(Response => Response.json())
            .then(data => console.log(data));

    }, []);


    return (
        <div>
            <h1>Work Component</h1>
        </div>
    );
};

export default Work;
