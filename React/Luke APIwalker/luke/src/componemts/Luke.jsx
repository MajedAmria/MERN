import React,{useEffect,useState}from 'react'
import { useHistory} from "react-router-dom";

const Luke = () => {

    
    const[result,setResult]=useState("");
    const[idNumber,setidNumber]=useState("");
   
    const history = useHistory();
  
  

    const handleSubmit=(e)=>{
        e.preventDefault();


        history.push("/"+result+"/"+idNumber);

        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Search for : </label>
        <select  onChange={e => setResult(e.target.value)}>
                <option>people</option>
                <option>planets</option>
        </select>

        <label>  ID : </label>
        <input type="number" onChange={e => setidNumber(e.target.value)}/>

        <button>Search</button>
        </form>


    </div>
  )
}

export default Luke