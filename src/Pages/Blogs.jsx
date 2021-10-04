import React from 'react';
import ReactGA from 'react-ga';
// Adding Google Analytics
ReactGA.initialize('UA-201766739-1');
// Adding Page View Property
ReactGA.pageview('/blogs');

const Blogs = () => {
    return (
        <div className="container text-center">
            <h1>Blogs</h1>
        </div>
    )
}

export default Blogs;
