import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Quote from './Quote';

const Cover =({pageLoad, quoteOn, setQuote})=>{
    const [pcView, setView] = useState(true);
    const [images, setImage] = useState(['images/Reception/thumb--1.jpg','images/Enscape/thumb--2.jpg', 'images/Saloon/thumb-4.jpg']);

    useEffect(()=>{
        if(window.innerWidth<1160){
            setView(false);
        }
        if(pageLoad){
            let src=[];
            images.forEach(image => {
                src[images.indexOf(image)] = image.replace('thumb', 'Photo');
            });
            setImage(src);
        }
    },[pageLoad]);

    const quoteAction=()=>{
        setQuote(true);
    }

    return(
        <div className="cover flex">
            <div className="imageGrid flex">
                <div className="textContainer flex">
                    <div className="flex">
                        <div className="yLine"></div>
                        <h1>Providing Design Solutions</h1>
                    </div>
                    <button className="btn-secondary flex" onClick={quoteAction}>Get Quote</button>
                </div>
                {
                    pcView ?
                        <>
                            <div className="box large">
                                <div className="imageCont flex">
                                    <img src={images[0]} alt={images[0]} />
                                </div>
                                <Link to="/portfolio/reception">
                                <div className="text flex">
                                    <p>Reception</p>
                                </div>
                                </Link>
                            </div>
                            <div className="box">
                                <div className="imageCont flex">
                                    <img src={images[1]} alt={images[1]} />
                                </div>
                                <Link to="/portfolio/enscape">
                                <div className="text flex">
                                    <p>Enscape</p>
                                </div>
                                </Link>
                            </div>
                            <div className="box">
                                <div className="imageCont flex">
                                    <img src={images[2]} alt={images[2]} />
                                </div>
                                <Link to="/portfolio/nikithasaloon">
                                <div className="text flex">
                                    <p>Nikitha Saloon</p>
                                </div>
                                </Link>
                            </div>
                        </>
                        :
                        <></>
                }
            </div>
            {   quoteOn? <Quote setQuote={setQuote}/>: <></>    }
        </div>
    )
};

export default Cover;