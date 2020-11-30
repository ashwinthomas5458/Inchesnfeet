import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav({navActive}){
    const [burgerActive, setBurger] = useState(false);
    const burgerClick = () =>{
        setBurger(!burgerActive);
    }
    
    return(
        <header className={navActive? "navbaractive":""}>
            <div className="navname">
                <Link to="/" className="name flex">
                    <img src="../favicon-32x32.png" alt="" />
                    <li>Inches N Feet</li>
                </Link>
            </div>
            <div className="nav" onClick={burgerClick}>
                <div className={burgerActive? "navlist nav-active": "navlist"} id="nvlist">
                    <ul>
                        <Link to="/"><li className="navLinks">Home</li></Link>
                        <Link to="/portfolio"><li className="navLinks">Portfolio</li></Link>
                        <Link to="/products"><li className="navLinks">Products</li></Link>
                        <Link to="/services"><li className="navLinks">Services</li></Link>
                        <Link to="/blog"><li className="navLinks">Blogs</li></Link>
                        <Link to="/contact"><li className="navLinks">Contact Us</li></Link>
                        
                    </ul>
                </div>
                <div className={burgerActive? "navicon x": "navicon"}>
                    <div className="line1 item"></div>
                    <div className="line2 item"></div>
                    <div className="line3 item"></div>
                </div>
            </div>
        </header>  
    )
}

export default Nav;