import React,{useEffect,useState}from 'react'
import { useHistory} from "react-router-dom";

const Luke = () => {

    
    const[result,setResult]=useState('people');
    const[idNumber,setidNumber]=useState("");
    const[results,setResults]=useState("");
    const history = useHistory();
  
  

    const handleSubmit=(e)=>{
        e.preventDefault();

        fetch('https://swapi.dev/api/'+result+'/'+idNumber)
        .then(response => response.json())
        .then(response => setResults(response.name))
        console.log(results+"+**");
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

       <h1>{results}</h1>

    </div>
  )
}

export default Luke