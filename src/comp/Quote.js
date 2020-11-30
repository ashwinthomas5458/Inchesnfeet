import React from 'react';
import { useState } from 'react';
import Form from './Form';

const Quote = ({setQuote})=>{

    const [formOn, setFrom] = useState(null);
    const [index, setIndex] = useState(0);
    const [qType, setQType] = useState([{formName: "Quote-Architecture",label: true, architecture: true, bim: false}, {formName: "Quote-BIM",label: true, architecture: false, bim: true}])

    const cardAction =(e)=>{
        if(e.target.classList.contains('card')){
            const cardName = e.target.firstElementChild.textContent;
            const index = e.target.attributes.dataindex.value;
            setIndex(index);
            setFrom(cardName);
        }
    }

    const exitQuote=(e)=>{
        if(e.target.classList.contains('exitQ')){
            setQuote(false);
        }
        else if(e.target.classList.contains('modal')){
            setQuote(false);
        }
    }
    
    return(
        <div className={formOn? "modal modal-active flex": "modal flex"} onClick={exitQuote}>
            <div className={formOn? "quote quoteActive flex": "quote flex"}>

                {
                    formOn?
                    <>
                    <h2 className="exitQ" onClick={exitQuote}>X</h2>
                    <div style={{width:"100%", height:"5rem"}}></div>
                    <h1>{formOn}</h1>
                    <Form data={qType[index]}/>
                    </>
                    :
                    <>
                    <div className="card flex" dataindex="0" onClick={cardAction}>
                    <h2>Architecture</h2>
                </div>
                <div className="card flex" dataindex="1" onClick={cardAction}>
                    <h2>BIM</h2>
                </div>
                    </>
                }

            </div>
        </div>
    )
};

export default Quote;