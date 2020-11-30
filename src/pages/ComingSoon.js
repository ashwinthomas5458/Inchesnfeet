import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../comp/Footer';

function ComingSoon(){
    return(
        <>
        <div className="Upcoming container flex">
            <div className="container flex">
            <h1>ComingSoon</h1>
            <img src="svgs/under_construction.svg" alt=""/>
            <Link to="/" className="my-2">Back to Home</Link>
            </div>
            <Footer/>
        </div>
        </>
    );
};

export default ComingSoon;