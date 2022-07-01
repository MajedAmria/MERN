
import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Card, CardBody,Table } from 'reactstrap'
import axios from 'axios';
const Games = (props) => {
  const { gameId} = props;
  const [players,setPlayers]= useState([]);
  const [player, setPlayer] = useState();
  console.log(gameId)

  useEffect(()=>{
    axios.get('http://localhost:8000/players/list')
    .then(res=>setPlayers(res.data))
    .catch(err => console.error(err))
},[]);

  useEffect(()=> {
    axios.get(`http://localhost:8000/status/game/${gameId}`)
    .then(response => {
        setPlayer(response.data);
    })

},[gameId])
const onPlayHandler = (statusNum) => {
  const updatedPlayer = {
    ...player,
    [`game${gameId}`]: statusNum
        }
      
  
  axios.put('http://localhost:8000/players/'+players._id, updatedPlayer)
  .then(response => {
          setPlayer(updatedPlayer);
  })
  .catch(err => {
      console.log("ERROR in update player")
  })
}
  return (
    <div>
     
      
        <br/><br/>
        <Table bordered>
  <thead>
    <tr>
      <th>
        Team Name
      </th>
      
      <th>
        Action
      </th>
   
    </tr>
  </thead>
  <tbody>
    {players.map((player,index)=>{return(
    <tr key={index}>
      <td>
        {player.playername}
        
      </td>
      
      <td>
        <Button value="playing" style={{backgroundColor: player.game1 === "playing" ? "green":""}}  onClick={(e) => onPlayHandler(1)}>Playing</Button>
        <Button>Not Playing</Button>
        <Button style={{backgroundColor: player.game3 === "Undecided" ? "yellow" : ""}} 
                        onClick={(e) => onPlayHandler(3)}>Undecide</Button>
      </td>
     
    </tr>
    )})}
  </tbody>
  </Table>
     
    </div>
  )
}

export default Games