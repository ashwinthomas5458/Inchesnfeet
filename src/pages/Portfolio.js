import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ContactLinks from '../comp/ContactLinks';
import Footer from '../comp/Footer';
import Nav from '../comp/Nav';
import Preloader from '../comp/Preloader';
import ProjectsView from '../comp/ProjectsView';

function Portfolio({pageLoad, navActive}){
    const [viewProjects, setProjects] = useState(false);

    const projectsOn=(e)=>{
        const index = e.target.attributes.dataindex.value;
        setProjects(index);
    }
    
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    const exitView=(e)=>{
        if(e.target.classList.contains('modal')){
            setProjects(false);
        }
        else if(e.target.classList.contains('projectGrid')){
            setProjects(false);
        }
    }

    return(
        <>
        <Preloader pageLoad ={pageLoad}/>
        <div className={viewProjects? "Portfolio container flex PortfolioStatic": "Portfolio container flex"}>
            <Nav navActive ={navActive}/>
            <div className="cover flex">
                <h1>Portfolio</h1>
            </div>
            <div className="parallax flex">
                <h1>Architecture</h1>
                <button dataindex='0' className="btn-secondary" onClick={projectsOn}>View all</button>
            </div>
            <div className="parallax flex">
                <h1>Interior</h1>
                <button dataindex='1' className="btn-secondary" onClick={projectsOn}>View all</button>
            </div>
            <div className="parallax flex">
                <h1>Landscape</h1>
                <button dataindex='2' className="btn-secondary" onClick={projectsOn}>View all</button>
            </div>
            <div className="serviceLink flex">
            <Link to="/services">
                <button className="btn-secondary">
                    View Services
                </button>
            </Link>
            </div>
            <ContactLinks/>
        </div>
        {
           viewProjects?
           <>
           <div className="modal modal-active flex" onClick={exitView}>
               <div style={{width:"100%", height:"4rem"}}></div>
               <ProjectsView viewProjects={viewProjects} pageLoad ={pageLoad}/>
               <div style={{width:"100%", height:"4rem"}}></div>
           </div>
           </>
           :
           <>
           </> 
        }
        <Footer/>
        </>
    );
};

export default Portfolio;