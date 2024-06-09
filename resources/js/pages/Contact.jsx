import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        console.log('Contact!');
    }, []);


    return (
        <div>
            <h1>Contact Component</h1>
        </div>
    );
};

export default Contact;
