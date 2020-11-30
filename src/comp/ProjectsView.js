import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectsView = ({viewProjects, pageLoad}) =>{
    const [projects, setProjects] = useState([])
    const [projectList, setList] = useState([[
        {title: "Sinitha Traditional Plus Modern", source: "images/01-Sinitha Traditional Plus Modern/thumb---1.jpg", location:"/portfolio/sinithatraditionalplusmodern"},
        {title: "Pergola USA", source: "images/PergolaUSA/Pergola_thumb---1.jpg", location:"/portfolio/pergolausa"},
        {title: "SandsHouse", source: "images/SandsHouse/thumb--7.jpg", location:"/portfolio/sandshouse"},
        {title: "Briefing", source: "images/Briefing/thumb--1.jpg", location:"/portfolio/briefing"},
        {title: "House", source: "images/House/thumb--1.jpg", location:"/portfolio/"},
        {title: "PergolaPoolSide", source: "images/PergolaPoolSideUSA/thumb--1.jpg", location:"/portfolio/pergolapoolside"},
        {title: "SalemChurch", source: "images/SalemChurch/thumb--6.jpg", location:"/portfolio/salemchurch"}        
    ],[
        {title: "Int", source: "images/int/thumb--5.jpg", location:"/portfolio/int"},
        {title: "PorterResidency", source: "images/PorterResidency/thumb--7.jpg", location:"/portfolio/porterresidency"},
        {title: "SandsHouse", source: "images/SandsHouse/thumb--5.jpg", location:"/portfolio/sandshouse"},
        {title: "Saloon", source: "images/Saloon/thumb-6.jpg", location:"/portfolio/nikithasaloon"},
        {title: "Reception", source: "images/Reception/thumb--1.jpg", location:"/portfolio/reception"},
        {title: "Enscape", source: "images/Enscape/thumb--2.jpg", location:"/portfolio/enscape"}
    ],[
        {title: "Int", source: "images/int/thumb--6.jpg", location:"/portfolio/int"} 
    ]]);

    useEffect(()=>{
        if(pageLoad){
            const projectType = projectList[viewProjects];
            setProjects(projectType);
        }
    },[pageLoad]);

    return(
        <div className="projectGrid">
            {projects.map(project=>(
                <Link to={project.location} key={`projectKey${project.location}`}>
                <div className="card flex" >
                <img src={project.source} alt=""/>
                <div className="container flex">
                    <h3>{project.title}</h3> 
                         
                </div>
            </div>
            </Link>
            ))}
        </div>
    )
}

export default ProjectsView;