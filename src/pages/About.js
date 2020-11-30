import React from 'react';
import Nav from '../comp/Nav';
import Preloader from '../comp/Preloader';
import ContactLinks from '../comp/ContactLinks';
import Footer from '../comp/Footer';
import { useState } from 'react';
import { useEffect } from 'react';

function About({pageLoad, navActive}){
    const [mobView, setView] = useState(false);

    useEffect(()=>{
        if(window.innerWidth<=700){
            setView(true);
        }
    },[]);

    return(
        <>
        <Preloader pageLoad={pageLoad}/>
        <div className="About container flex">
            <Nav navActive ={navActive}/>
            <div className="cover flex">
                <h1 className="mx-2">Inches N Feet</h1>
                <p className="mx-2">
                    Behind the scenes
                </p>
            </div>
            <div className="story section flex">
                {mobView? <></>: <img className="m-2" src="../svgs/Preferences.svg" alt=""/>}
                <div className="container flex">
                <h1 >Our Mission</h1>
                <p className="my-2">• To provide affordable design and build services.<br/>
                • To create customer and employee centric company, rather than being profit centric.<br/> 
                • To educate the client on design process, for client's ease and participation.</p>
                </div>
            </div>
            <div className="crew container flex">
            <h1 className="my-2">Our Crew</h1>
            <p>To win the championship, every team member needs to be the best in their skills. Our crew members aspire to be the
                best. They have their own individual dreams to achieve which make our crew more diversified and competitive.</p>
            <div className="section">
            <div class="crewcard flex">
                <img src="../images/crew/Shana.png" alt="" class="icon-rounded"/>
                <h3>Shana Praveen</h3>
                <h6>Co-Founder | Sales Head | Principal Architect</h6>
                <div class="socialmedia flex">
                    <a href="https://www.linkedin.com/in/shana-parveen-17b3851a1">
                        <img src="../svgs/linkedin.svg" alt="" class="icon"/>
                    </a>
                    <a href="https://www.instagram.com/shanaaa.p/">
                        <img src="../svgs/instagram.svg" alt="" class="icon"/>
                    </a>
                </div>
            </div>
            <div class="crewcard flex">
                <img src="../images/crew/Vipan.png" alt="" class="icon-rounded"/>
                <h3>Vipan Singh</h3>
                <h6>Co-Founder | Director | BIM Architect</h6>
                <div class="socialmedia flex">
                    <a href="https://www.linkedin.com/in/vipan-singh-a107b599">
                        <img src="../svgs/linkedin.svg" alt="" class="icon"/>
                    </a>
                    <a href="https://instagram.com/vipan_1134?igshid=1x5h7nl5nkht1">
                        <img src="../svgs/instagram.svg" alt="" class="icon"/>
                    </a>
                </div>
            </div>
            <div class="crewcard flex">
                <img src="../images/crew/Benet.png" alt="" class="icon-rounded"/>
                <h3>Benet Raju</h3>
                <h6>VCD Engineer</h6>
                <div class="socialmedia flex">
                    <a href="https://www.linkedin.com/in/benet-raju-45814b156">
                        <img src="../svgs/linkedin.svg" alt="" class="icon"/>
                    </a>
                    <a href="https://www.instagram.com/cbr3128/">
                        <img src="../svgs/instagram.svg" alt="" class="icon"/>
                    </a>
                    <a href="https://www.facebook.com/benet.raju">
                        <img src="../svgs/facebook.svg" alt="" class="icon"/>
                    </a>
                </div>
            </div>
            <div class="crewcard flex">
                <img src="../images/crew/Pratik.png" alt="" class="icon-rounded"/>
                <h3>Pratik Sanjay Kabadi</h3>
                <h6>BIM Architect</h6>
                <div class="socialmedia flex">
                    <a href="https://www.linkedin.com/in/pratik-kabadi-647b82161">
                        <img src="../svgs/linkedin.svg" alt="" class="icon"/>
                    </a>
                    <a href="https://www.instagram.com/pk_pratik_05/">
                        <img src="../svgs/instagram.svg" alt="" class="icon"/>
                    </a>
                    <a href="https://www.facebook.com/prince.pratik.52438">
                        <img src="../svgs/facebook.svg" alt="" class="icon"/>
                    </a>
                </div>
            </div>
            </div>
            </div>
            <ContactLinks/>
        </div>
        <Footer/>
        </>
    );
};

export default About;