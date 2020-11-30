import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePortfolio = ({pageLoad}) =>{

    const [cardOn, setCard] = useState(0);

    const cardLeft=()=>{
        let currentCard = cardOn;
        currentCard--;
        if(currentCard<0)currentCard=2;
        setCard(currentCard);
    }

    const cardRight=()=>{
        let currentCard = cardOn;
        currentCard++;
        if(currentCard>2)currentCard=0;
        setCard(currentCard);
    }


    return(
        <div className="portfolio flex">
            <h1>Recent Works</h1>
            <div className="works flex">
                <Link className={cardOn==0? "cardLink cardLinkOn": "cardLink"} to="/portfolio/reception">
                <div className="card flex">
                    <img src="images/Reception/thumb--1.jpg" alt=""/>
                    <div className="flex">
                        <h3>Reception</h3>
                    </div>
                </div>
                </Link>
                <Link className={cardOn==1? "cardLink cardLinkOn": "cardLink"} to="/portfolio/enscape" >
                <div className="card flex">
                    <img src="images/Enscape/thumb--2.jpg" alt=""/>
                    <div className="flex">
                        <h3>Enscape</h3>
                    </div>
                </div>
                </Link>
                <Link className={cardOn==2? "cardLink cardLinkOn": "cardLink"} to="/portfolio/nikithasaloon">
                <div className="card flex">
                    <img src="images/Saloon/thumb-4.jpg" alt=""/>
                    <div className="flex">
                        <h3>Nikitha Saloon</h3>
                    </div>
                </div> 
                </Link>
            </div>
            <Link to="/portfolio" className="portfoliolink">
                <button className="btn-secondary">View Portfolio</button>
            </Link>
            <div className="arrows">
                <button onClick={cardLeft}><img src="svgs/left-arrow.svg" alt="<"/></button>
                <button onClick={cardRight}><img src="svgs/right-arrow.svg" alt=">"/></button>
            </div>
        </div>
    )
};

export default HomePortfolio;