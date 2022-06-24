import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card ,CardBody,Form,FormGroup,Input,Label} from 'reactstrap';
import { Link, useHistory} from "react-router-dom";
const PlayerForm = () => {
    const [playerName,setPlayerName]=useState("");
    const [position,setPosition]=useState("");
    const history =useHistory();

    const onSubmit = ()=>{
        axios.post('http://localhost:8000/players/addplayer',{
            playername: playerName,
            preferedposition:position
            
        })
        .then(history.replace("/"))
    }
  return (
    <div>
        <Card className='card'>
        <CardBody>
        <Link to="/">List</Link>
        <span> | </span>
        <Link to="/addplayer">Add Player</Link>
        <Card className='card'>
        <CardBody>
            <h1>Add Player</h1>
        <Form inline onSubmit={onSubmit}>
    <FormGroup floating>
      <Input
        id="exampleEmail"
        name="name"
        placeholder="Player Name"
        type="text"
        value={playerName}
        onChange ={(e)=>setPlayerName(e.target.value)}
      />
      <Label for="exampleEmail">
      Player Name
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="position"
        placeholder="Prefered Position"
        type="text"
        value={position}
        onChange={(e)=>setPosition(e.target.value)}
      />
      <Label for="examplePassword">
      Prefered Position
      </Label>
    </FormGroup>
    {' '}
    <Button  color="success" outline>
      Add Player
    </Button>
  </Form>
        </CardBody>
        </Card>
        </CardBody>
        </Card>
    </div>
  )
}

export default PlayerForm