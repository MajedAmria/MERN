import React, { useState } from  'react';
    
    
const UserForm = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirm, setConfirm] = useState(""); 
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password,confirm };

        console.log("Welcome", newUser.firstname);
        clearState()
    };
    const clearState = () => {
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirm("");
    };
    
    return(
        <form onSubmit={ createUser }>
       
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastname} onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirm} onChange={ (e) => setConfirm(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />

            <h1>Your Form Data</h1>
            <p>First Name:{firstname}</p>
            <p>Last Name:{lastname}</p>
            <p>Email:{email}</p>
            <p>Password:{password}</p>
            <p>Confirm Password:{confirm}</p>
        </form>
        
        
    );
   
};
    
export default UserForm;