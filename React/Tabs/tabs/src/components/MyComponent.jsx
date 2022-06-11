import React, { useState } from 'react';

const MyComponent = (props) => {
    const [text, setText] = useState("");
    const array=["tab1","tab2","tab3"]

    const onClickHandler = (e, value) => {
      
         props.newText( value );
     
    }
 
    return array.map( (item, index) => {
        return <button key={ index } onClick={ (e) => onClickHandler(e, item) }>{ item }</button>
    });
}

export default MyComponent