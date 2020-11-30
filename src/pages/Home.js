import React, { useState, useEffect } from 'react'
import ContactLinks from '../comp/ContactLinks';
import Nav from '../comp/Nav';
import Preloader from '../comp/Preloader';
import Cover from '../comp/Cover';
import Footer from '../comp/Footer';
import Form from '../comp/Form';
import { Link } from 'react-router-dom';
import HomePortfolio from '../comp/HomePortfolio';

function Home({pageLoad, navActive}){
    const [quoteOn, setQuote] = useState(false);

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    return(
        <>
        <Preloader pageLoad ={pageLoad}/>
        <div className={quoteOn? "Home container flex HomeStatic": "Home container flex"}>
        <Nav navActive ={navActive}/>
        <Cover pageLoad ={pageLoad} quoteOn={quoteOn} setQuote={setQuote}/>
        <div className="about flex">
            <div className="textContainer flex">
                <h1>Welcome to INCHES N FEET</h1>
                <p>
                    Where you can find customizable and affordable services that suit your requirements. Here at Inches
                    N Feet, we provide a wide variety of services that you can choose from, based on your need and
                    budget. Being used to working with a wide spectrum of clients, including engineers, entrepreneurs
                    and industrialists, enables us to find suitable solutions based on your requirements, regardless of
                    whether you are an independent budding entrepreneur or an established enterprise.
                </p>
                <Link to="/about">
                <button className="btn-secondary flex">
                    Know Us
                </button>
                </Link>
            </div>
        </div>
        <HomePortfolio pageLoad ={pageLoad}/>
        <div className="blog flex">
            <div className="textContainer flex">
                <h1>Blogs</h1>
                <p>Check out our Inches N Feet blog to see what our crew has to say.</p>
            </div>
            <div className="textbox flex">
                <img src="svgs/person icon.svg" alt="" className="blogicon"/>
                <h3>Coming Soon</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis.
                </p>
            </div>
            <Link to="/blog" className="bloglink">
                <button className="btn-secondary">All Posts</button>
            </Link>
        </div>
        <div className="queries flex">
            <h2>Book a free Appointment</h2>
            <Form data={{formName: "Query", label: false, architecture: false, bim: false}}/>
        </div>
        <ContactLinks/>
    </div>
    <Footer/>
    </>
    );
};

export default Home;