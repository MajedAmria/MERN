import React, { useState } from  'react';
    
    
const UserForm = () => {
    const [firstname, setFirstname] = useState("");
    const [nameError, setnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastError, setlastError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setemailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setpasswordError] = useState("");  
    const [confirm, setConfirm] = useState(""); 
    const [confirmError, setconfirmError] = useState("");  

    const handleFirstName = (e) => {
        
        if(e.target.value.length < 2) {
            setnameError("First Name must be 2 characters or longer!");
        }
        setFirstname(e.target.value);
    }
    const handleLastName = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2) {
            setlastError("Last Name must be 2 characters or longer!");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 2) {
            setemailError("Email must be 2 characters or longer!");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setpasswordError("Password must be 8 characters or longer!");
        }
    }
    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if(e.target.value.length !=password) {
            setconfirmError("Password must match!");
        }
    }
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
                <input type="text" onChange={handleFirstName} />
                {
                    nameError ?
                    <p style={{color:'red'}}>{ nameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastname} onChange={ handleLastName } />
                {
                    lastError ?
                    <p style={{color:'red'}}>{ lastError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="email" value={email} onChange={handleEmail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ handlePassword } />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirm} onChange={handleConfirm } />
                {
                    confirmError ?
                    <p style={{color:'red'}}>{ confirmError }</p> :
                    ''
                }
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