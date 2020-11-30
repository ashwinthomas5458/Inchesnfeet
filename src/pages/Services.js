import React, {useState} from 'react';
import Nav from '../comp/Nav';
import Preloader from '../comp/Preloader';
import ContactLinks from '../comp/ContactLinks';
import Quote from '../comp/Quote';
import Footer from '../comp/Footer';

function Services({pageLoad, navActive}){
    const [viewBreakup, setView] = useState(false);
    const [viewQuote, setQuote] = useState(false);

    const serviceBreakup = () =>{
        setView(true);
    }
    
    const quoteView = () =>{
        setQuote(true);
    }

    const exitScope=(e)=>{
        if(e.target.classList.contains('modal')){
            setView(false);
        }
    }

    return(
        <>
            <Preloader pageLoad={pageLoad} />
            <div className={viewQuote||viewBreakup? "Services ServicesStatic container flex": "Services container flex"}>
                <Nav navActive ={navActive}/>
                <div className="cover flex">
                    <h1>Services</h1>
                </div>
                <div className="section flex">
                    <div className="cardcontainer">
                        <div className="card flex">
                            <figure className="flex back">
                                <img src="images/thumbnails/architecture.jpg" alt="" className="images" />
                                <h3>Architecture</h3>
                            </figure>
                            <figure className="flex front">
                                <ul>
                                    <li>•Design & Build​</li>
                                    <li>•Consultany</li>
                                    <li>•Vastu​</li>
                                    <li>•Renovation</li>
                                    <li>•Facade Design​</li>
                                    <li>•Quantity Take-off​</li>
                                    <li>•Construction​​</li>
                                </ul>
                            </figure>
                        </div>
                    </div>
                    <div className="cardcontainer">
                        <div className="card flex">
                            <figure className="flex back">
                                <img src="images/thumbnails/interior.jpg" alt="" className="images" />
                                <h3>Interiors</h3>
                            </figure>
                            <figure className="flex front">
                                <ul>
                                    <li>•Corporate interior design & build</li>
                                    <li>•Furniture design</li>
                                    <li>•Renovation</li>
                                </ul>
                            </figure>
                        </div>
                    </div>
                    <div className="cardcontainer">
                        <div className="card flex">
                            <figure className="flex back">
                                <img src="images/thumbnails/landscape.jpg" alt="" className="images" />
                                <h3>Landscaping</h3>
                            </figure>
                            <figure className="flex front">
                                <ul>
                                    <li>•Landscape design & build​</li>
                                    <li>•Terrace garden designs​</li>
                                    <li>•Grading, planning & Leveling</li>
                                </ul>
                            </figure>
                        </div>
                    </div>
                </div>
                <button className="btn-primary aln-r mx-2" onClick={serviceBreakup}>View Details</button>
                <div className="bim container flex">
                    <h2>BIM Services</h2>
                    <div className="section">
                        <div className="block flex">
                            <h3>Design development</h3>
                            <ul>
                                <li>•CAD to Revit Conversion</li>
                                <li>•3D Modelling​</li>
                                <li>•Design development drawings</li>
                                <li>•Drafting</li>
                                <li>•Renders</li>
                                <li>•Detailed technichal drawings</li>
                            </ul>
                        </div>
                        <div className="block flex">
                            <h3>BIM Modeling</h3>
                            <ul>
                                <li>•Prefab LGSF drawings & models</li>
                                <li>•MEPF design & modeling​</li>
                                <li>•BIM coordination/ clash detection</li>
                                <li>•4D, 5D, 6D, 7D simulation</li>
                                <li>•BIM content creation</li>
                                <li>•BIM Consultancy</li>
                                <li>•Document Management</li>
                            </ul>
                        </div>
                        <div className="block flex">
                            <h3>Visualization</h3>
                            <ul>
                                <li>•AR & VR services</li>
                                <li>•Photorealistic renders</li>
                                <li>•Walkthrough animation</li>
                                <li>•Drafting</li>
                                <li>•Renders</li>
                                <li>•Real Estate marketing presentations</li>
                            </ul>
                        </div>
                    </div>
                    <button className="btn-primary" onClick={quoteView}>Book Now</button>
                </div>
                <ContactLinks/>
            </div>
            {
                viewBreakup?
                <div className="modal flex" onClick={exitScope}>
                    <img className="scope" src="images/scope.jpg" alt=""/>
                </div>
                : 
                viewQuote?
                <Quote setQuote={setQuote}/>
                :
                <>
                </>
            }
            <Footer/>
        </>
    );
};

export default Services;