import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import { Button, Card ,CardBody,Table} from 'reactstrap'
import axios from 'axios';
import Delete from '../components/Delete';
const Dashbord = (props) => {
    const [players,setPlayers]= useState([]);
    

    useEffect(()=>{
        axios.get('http://localhost:8000/players/list')
        .then(res=>setPlayers(res.data))
        .catch(err => console.error(err))
    },[]);
    const removeFromDom = (playerId) => {
        setPlayers(players.filter(player => player._id != playerId));
    }
  return (
    <div>
        <Card className='card'>
        <CardBody>
        <Link to="/">List</Link>
        <span> | </span>
        <Link to="/addplayer">Add Player</Link>
        <Table bordered>
  <thead>
    <tr>
      <th>
        Team Name
      </th>
      <th>
        Prefered Postion
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
      {player.preferedposition}
      </td>
      <td>
        <Delete playerID={player._id} successCallback={() => removeFromDom(player._id)}/>
      </td>
     
    </tr>
    )})}
  </tbody>
</Table>
        </CardBody>
        </Card>
    </div>
  )
}

export default Dashbord