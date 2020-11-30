import React, { useEffect, useState } from 'react';

const Footer = () =>{
    const [year, setYear] = useState('');
    
    useEffect(()=>{
        const today = new Date();
        const value = today.getFullYear().toString();
        setYear(value);
    },[])
      

    return(
        <footer>
            <p>&copy; {year} <strong>Inches N Feet</strong>. All rights reserved.</p>
        </footer>
    )
};

export default Footer;