import React ,{useEffect,useState}from 'react'

const PokemoAPI = () => {
    const [pokemon, setPokemon] = useState([]);



    const onClilckHandler=()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
        
    }
 
    return (
        <div>
            <button onClick={onClilckHandler()}>Fetch Pokemon</button>
            
            {pokemon.length > 0 && pokemon.map((person, index)=>{
            return (<li key={index}>{person.name}</li>)
        })}
        </div>
    );
}

export default PokemoAPI