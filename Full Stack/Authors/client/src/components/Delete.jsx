import axios from 'axios';
import React from 'react'
import { Button } from 'reactstrap'

const Delete = (props) => {
    const {authorId,successCallback}=props;
    const deleteAuthor =(e)=>{
        axios.delete('http://localhost:8000/api/author/'+authorId)
        .then(res=>{successCallback();})
    }
  return (
    <div>
        <Button color="danger" outline onClick={deleteAuthor}>Delete</Button>
    </div>
  )
}

export default Delete