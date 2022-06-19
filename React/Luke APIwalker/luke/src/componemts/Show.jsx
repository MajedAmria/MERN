import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Show = () => {

    const {result,idNumber}= useParams();
    const[results,setResults]=useState({});
    

    useEffect(()=>{
            axios.get(`https://swapi.dev/api/${result}/${idNumber}`)
            .then(response => setResults(response.data))
        
    },[result,idNumber]);
  return (
    <div>

     <h1>{results.name}</h1>
     {
        Object.keys(results).slice(1,5).map((key,i)=>
        <h2>{key}:{results[key]}</h2>)
     }
    </div>
  )
}

export default Show