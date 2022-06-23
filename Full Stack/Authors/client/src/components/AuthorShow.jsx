import React from "react";
import axios from 'axios';
import { useParams,useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Table,Button } from 'reactstrap';
import Delete from "./Delete";

const AuthorShow =(props)=>{
  
  const { id } = useParams();
  const [author,setAuthor]=useState([]);
  const history=useHistory();
  const { removeFromDom } = props;
  useEffect(()=>{
      axios.get('http://localhost:8000/api/author/'+id)
      .then(res=>setAuthor(res.data))
      .catch(err=>console.error(err))
    },[id]);

   
    return (
    <div className="center">
        <p>We have quotes by:</p>
        <Table dark hover>
  <thead>
    <tr>
      <th>
        Author
      </th>
      <th>
        Action available
      </th>
    </tr>
  </thead>
  <tbody>
    {props.authorList.map((author,index)=>{return(
    <tr key={index}>
      <th scope="row" >
        {author.name}
      </th>
      <td className="show">
      <Button onClick={()=>history.push("/edit/"+author._id)} color="primary" outline>
        Edit
     </Button>
      <Delete  authorId={author._id} successCallback={() => removeFromDom(author._id)}>
        Delete
     </Delete>
      </td>
    </tr>
    )}
    )}
  
  
  </tbody>
</Table>
    </div>
    )
}
export default AuthorShow;