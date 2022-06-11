import React, { useState } from 'react';
    
    
const Form = (props) => {
    const [text, setText] = useState("");
   
    const handleSubmit = (e) => {
        e.preventDefault();
        props.newText( text );
        clearState()
   
    };
    const clearState = () => {
        setText("");
       
    };

   
    
    return (
        <form onSubmit={ handleSubmit }>
            <label >Color</label>
            <input type="text" value={text} onChange={ (e) => setText(e.target.value) } />
            <input type="submit" value="Add" />
        </form>

        
    );
};
    
export default Form;