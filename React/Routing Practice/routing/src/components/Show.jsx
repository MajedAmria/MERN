import React from 'react'
import { useParams } from "react-router";
const Show = () => {
    const {word}  = useParams();
    const {textColor} = useParams();
    const {backColor} = useParams();
    
       if( isNaN(word)){
        return (
            <div style={{background:backColor }}>
                <h1 style={{color:textColor}}>The word is:{word}</h1>
            </div>
        );
        }
        else{
            return (
                <div style={{background:backColor }}>
                <h1 style={{color:textColor}}>The number is:{word}</h1>
               </div>
               );
        }
    
  
}

export default Show