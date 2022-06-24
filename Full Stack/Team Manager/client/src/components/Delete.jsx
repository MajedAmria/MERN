import React from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

const Delete = (props) => {
    const {playerId,successCallback}=props;
    const deletePlayer =(e)=>{
        axios.delete('http://localhost:8000/players/'+playerId)
        .then(res=>successCallback())
        
    }
  return (
    <div>
        <Button color="danger" outline onClick={deletePlayer}>DELETE</Button>
    </div>
  )
}

export default Delete