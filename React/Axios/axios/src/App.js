import axios from 'axios';
import React,{useState} from 'react';
import './App.css';

function App() {

  const [responseData, setResponseData] = useState([]);

  const onClilckHandler=()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(response=>{setResponseData(response.data.results)
               console.log(response.data.results+"**")
              // console.log(response.data.title+"<<")
            }
           
            )
            
          }
   
        return (
          <div className="App">
            <button onClick={onClilckHandler}>Fetch Pokemon</button>

            {responseData.map((pokemonName, index)=>{
            return (<li key={index}>{pokemonName.name}</li>)
        })}
        </div>
)}
  

export default App;

