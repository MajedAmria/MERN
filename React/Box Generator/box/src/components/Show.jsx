import React,{ useState } from 'react';

const Show = (props) => {
 
    return (
        <>
        <div style= {{ display:"flex"}}>
        {props.text.map((item,i)=>
            <div key={i} style= {{ margin:"10px",width: "150px",height: "150px",backgroundColor:item.color}}/>
        )}
        </div>
        </>
    );
};
    
export default Show;