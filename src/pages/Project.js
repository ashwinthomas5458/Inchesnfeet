import React, {useState} from 'react';
import { useEffect } from 'react';
import Footer from '../comp/Footer';
import Nav from '../comp/Nav';
import Preloader from '../comp/Preloader';
 
const Project = ({match, pageLoad, navActive}) =>{
    const [project, setProject] = useState(null);
    const [count, setCount] = useState(1);
    const [imageCount, setImage] = useState(0);
    const [translateValue, setValue] = useState('80vw');
    const [transitionType, setType] = useState('none');
    const [containerWidth, setWidth] = useState('');
    const [projectList, setList] = useState({
        briefing:{images:[
            "/images/Briefing/Photo--1.jpg",
            "/images/Briefing/Photo--2.jpg",
            "/images/Briefing/Photo--3.jpg",
            "/images/Briefing/Photo--4.jpg",
            "/images/Briefing/Photo--5.jpg",
            "/images/Briefing/Photo--6.jpg",
            "/images/Briefing/Photo--7.jpg"
        ]},
        enscape:{images:[
            "/images/Enscape/Photo--1.jpg",
            "/images/Enscape/Photo--2.jpg",
            "/images/Enscape/Photo--3.jpg",
            "/images/Enscape/Photo--4.jpg",
            "/images/Enscape/Photo--5.jpg",
            "/images/Enscape/Photo--6.jpg"
        ]},
        house:{images:[
            "/images/House/Photo--1.jpg",
            "/images/House/Photo--2.jpg",
            "/images/House/Photo--3.jpg",
            "/images/House/Photo--4.jpg"
        ]},
        nikithasaloon:{images:[
            "/images/Saloon/Photo-1.jpg",
            "/images/Saloon/Photo-2.jpg",
            "/images/Saloon/Photo-3.jpg",
            "/images/Saloon/Photo-4.jpg",
            "/images/Saloon/Photo-5.jpg",
            "/images/Saloon/Photo-6.jpg",
            "/images/Saloon/Photo-7.jpg",
            "/images/Saloon/Photo-8.jpg",
            "/images/Saloon/Photo-9.jpg"
        ]},
        pergolapoolside:{images:[
            "/images/PergolaPoolSideUSA/Photo--1.jpg",
               "/images/PergolaPoolSideUSA/Photo--2.jpg",
               "/images/PergolaPoolSideUSA/Photo--3.jpg",
               "/images/PergolaPoolSideUSA/Photo--4.jpg",
               "/images/PergolaPoolSideUSA/Photo--5.jpg",
               "/images/PergolaPoolSideUSA/Photo--6.jpg",
               "/images/PergolaPoolSideUSA/Photo--7.jpg",
               "/images/PergolaPoolSideUSA/Photo--8.jpg"
        ]},
        pergolausa:{images:[
            "/images/PergolaUSA/Pergola_Photo---1.jpg",
               "/images/PergolaUSA/Pergola_Photo---2.jpg",
               "/images/PergolaUSA/Pergola_Photo---3.jpg",
               "/images/PergolaUSA/Pergola_Photo---4.jpg",
               "/images/PergolaUSA/Pergola_Photo---5.jpg",
               "/images/PergolaUSA/Pergola_Photo---6.jpg",
               "/images/PergolaUSA/Pergola_Photo---7.jpg",
               "/images/PergolaUSA/Pergola_Photo---8.jpg",
               "/images/PergolaUSA/Pergola_Photo---9.jpg",
               "/images/PergolaUSA/Pergola_Photo---10.jpg",
               "/images/PergolaUSA/Pergola_Photo---11.jpg"
        ]},
        porterresidency:{images:[
            "/images/PorterResidency/Photo--1.jpg",
                "/images/PorterResidency/Photo--2.jpg",
                "/images/PorterResidency/Photo--3.jpg",
                "/images/PorterResidency/Photo--4.jpg",
                "/images/PorterResidency/Photo--5.jpg",
                "/images/PorterResidency/Photo--6.jpg",
                "/images/PorterResidency/Photo--7.jpg",
                "/images/PorterResidency/Photo--8.jpg",
                "/images/PorterResidency/Photo--9.jpg",
                "/images/PorterResidency/Photo--10.jpg"
        ]},
        reception:{images:[
            "/images/Reception/Photo--1.jpg",
                "/images/Reception/Photo--2.jpg",
                "/images/Reception/Photo--3.jpg",
                "/images/Reception/Photo--4.jpg"
        ]},
        salemchurch:{images:[
            "/images/SalemChurch/Photo--1.jpg",
                "/images/SalemChurch/Photo--2.jpg",
                "/images/SalemChurch/Photo--3.jpg",
                "/images/SalemChurch/Photo--4.jpg",
                "/images/SalemChurch/Photo--5.jpg",
                "/images/SalemChurch/Photo--6.jpg",
                "/images/SalemChurch/Photo--7.jpg",
                "/images/SalemChurch/Photo--8.jpg",
                "/images/SalemChurch/Photo--9.jpg",
                "/images/SalemChurch/Photo--10.jpg",
                "/images/SalemChurch/Photo--11.jpg"
        ]},
        sandshouse:{images:[
            "/images/SandsHouse/Photo--1.jpg",
                "/images/SandsHouse/Photo--2.jpg",
                "/images/SandsHouse/Photo--3.jpg",
                "/images/SandsHouse/Photo--4.jpg",
                "/images/SandsHouse/Photo--5.jpg",
                "/images/SandsHouse/Photo--6.jpg",
                "/images/SandsHouse/Photo--7.jpg",
                "/images/SandsHouse/Photo--8.jpg",
                "/images/SandsHouse/Photo--9.jpg",
                "/images/SandsHouse/Photo--10.jpg"
        ]},
        sinithatraditionalplusmodern:{images:[
            "/images/01-Sinitha Traditional Plus Modern/Photo---1.jpg",
                "/images/01-Sinitha Traditional Plus Modern/Photo---2.jpg",
                "/images/01-Sinitha Traditional Plus Modern/Photo---3.jpg",
                "/images/01-Sinitha Traditional Plus Modern/Photo---4.jpg",
                "/images/01-Sinitha Traditional Plus Modern/Photo---5.jpg",
                "/images/01-Sinitha Traditional Plus Modern/Photo---6.jpg",
                "/images/01-Sinitha Traditional Plus Modern/Photo---7.jpg",
                "/images/01-Sinitha Traditional Plus Modern/Photo---8.jpg",
                "/images/01-Sinitha Traditional Plus Modern/Photo---9.jpg"
        ]},
        int:{images:[
            "/images/int/Photo--1.jpg",
                "/images/int/Photo--2.jpg",
                "/images/int/Photo--3.jpg",
                "/images/int/Photo--4.jpg",
                "/images/int/Photo--5.jpg",
                "/images/int/Photo--6.jpg"
        ]}
    });

    useEffect(()=>{
        const imageList = projectList[match.params.id];
        setProject(imageList);
        if(imageList){
            const number = imageList.images.length+2;
            const distance = `${80*number}vw`;
            setWidth(distance);
            setImage(number);
        }
        
    },[]);

    const slideLeft = () =>{
        let counter = count;
        let distance = 80*(count-1);
        if(counter<=0) return;
        counter--;
        let transition='0.5s ease-in-out'
        let transform = `${distance}vw`;
        setCount(counter);
        setValue(transform);
        setType(transition);
    }

    const slideRight = () =>{
        let counter = count;
        let distance = 80*(count+1);
        if(counter>=(imageCount-1)) return;
        counter++;
        let transition='0.5s ease-in-out'
        let transform = `${distance}vw`;
        setCount(counter);
        setValue(transform);
        setType(transition);
    }
    
    const slideActual =()=>{
        let counter = count;
        let transition, transform;
        if(counter==0){
            transition='none';
            counter=imageCount-2;
            transform = `${counter*80}vw`;
        }
        if(counter==imageCount-1){
            transition ='none';
            counter=1;
            transform = `${counter*80}vw`;
        }
        setCount(counter);
        setValue(transform);
        setType(transition);
    }
    
    return(
        <>
        <Preloader pageLoad ={pageLoad}/>
        <div className="Project container flex">
            <Nav navActive ={navActive}/>
        <div className="section flex">
        {
            project?
            <>
            <div className="imageView">
            <div className="imageContainer flex" style={{width: containerWidth, transform:`translateX(-${translateValue})`, transition: transitionType}} onTransitionEnd={slideActual}>
            <div className="image flex">
                           <img src={project.images[imageCount-3]} alt=""/>
                       </div>  
            {project.images.map(image =>(
                       <div className="image flex" key={`keyproject${image}image`}>
                           <img src={image} alt=""/>
                       </div>
            ))}
             <div className="image flex">
                           <img src={project.images[0]} alt=""/>
                       </div>
             </div>
                </div>
            <div className="arrows">
                <button onClick={slideLeft} ><img src="/svgs/left-arrow.svg" alt="<"/></button>
                <button onClick={slideRight}><img src="/svgs/right-arrow.svg" alt=">"/></button>
            </div>
            </>
            :
            <>
            <h1>Invalid Project</h1>
            </>
        }
        </div>
        <Footer/>
        </div>
        </>
    )
}
export default Project;