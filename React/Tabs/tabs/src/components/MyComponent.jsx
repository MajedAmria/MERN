
import React from 'react';

const MyComponent = (props) => {

    const array=["tab1","tab2","tab3"]

    const onClickHandler=(e,value)=>{
        props.newMessage(value);
    }
    return array.map( (item, index) => {
        return <button class="btn btn-dark" key={ index } onClick={ (e) => onClickHandler(e, item) }>{ item }</button>
    });
}

export default MyComponent