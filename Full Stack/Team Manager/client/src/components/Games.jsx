
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody,Table } from 'reactstrap'
import axios from 'axios';
const Games = (props) => {
  const array=["Game1","Game2","Game3"]
  const [players,setPlayers]= useState([]);
    

  useEffect(()=>{
      axios.get('http://localhost:8000/players/list')
      .then(res=>setPlayers(res.data))
      .catch(err => console.error(err))
  },[]);
  const onClickHandler=(e,value)=>{
    props.newGame(value);
}
  return (
    <div>
     
        {array.map( (item, index) => {return(
       <span key={index}> <Link   onClick={ (e) => onClickHandler(e, item) } to={`/status/${item}`}>{item}</Link>  </span> )
        })}
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
        <Button>Playing</Button>
        <Button>Not Playing</Button>
        <Button>Undecide</Button>
      </td>
     
    </tr>
    )})}
  </tbody>
  </Table>
     
    </div>
  )
}

export default Games