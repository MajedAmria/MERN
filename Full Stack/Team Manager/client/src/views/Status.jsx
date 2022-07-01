import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Card, CardBody,Table } from 'reactstrap'
import axios from 'axios';
import Games from '../components/Games';
const Status = (props) => {
    const { gameId} = useParams();
    const [players,setPlayers] = useState([])
    
    useEffect(() => {
      axios.get('http://localhost:8000/status/game/1')
          .then(res=>{
              setPlayers(res.data);
         
          });
  },[])

  return (
    <div>
         <Card className='card'>
        <CardBody>
        <h1>Player Status - Game {gameId}</h1>
        <Link to="/status/game/1">Game 1</Link> | 
        <Link to="/status/game/2"> Game 2</Link> |  
        <Link to="/status/game/3"> Game 3</Link>
       <Games player={players} setPlayer={setPlayers} gameId />
        </CardBody>
        </Card>
    </div>
  )
}

export default Status