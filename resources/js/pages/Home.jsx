import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        //api test
        console.log('Home!');

    }, []);


    return (
        <div>
            <h1>Home Component</h1>
        </div>
    );
};

export default Home;
