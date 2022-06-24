import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody,Table } from 'reactstrap'
import axios from 'axios';
import Games from '../components/Games';
const Status = () => {
    const [currentGame, setCurrentGame] = useState("Game 1");

    const youHaveGame = ( newGame ) => {
        setCurrentGame( newGame );
    }
  return (
    <div>
         <Card className='card'>
        <CardBody>
        <h1>Player Status - {currentGame}</h1>
        <Games newGame={youHaveGame} />
        </CardBody>
        </Card>
    </div>
  )
}

export default Status