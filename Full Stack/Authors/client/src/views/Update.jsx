import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams,useHistory } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'

const Update = () => {
  const {id} = useParams();
  const [author,setAuthor]=useState();
  const [loaded, setLoaded] = useState(false);
  const history=useHistory();
  useEffect(()=>{
    axios.get('http://localhost:8000/api/author/'+id)
    .then(res =>setAuthor(res.data.name) )
    .then(res => setLoaded(true))
  },[])
  

  const updateThisAuthor = (author) =>{
    axios.put('http://localhost:8000/api/auhtor/edit/'+id,{name:author})
    .then(history.push("/"))
    .catch(err => console.error(err))
  }
  return (
    <div>
      <Link to="/">Home</Link>
      <p>Edit this author</p>
           
      {loaded &&(<AuthorForm onSubmitProp={updateThisAuthor} initialName={author} clickButton="Edit this Author" />)}
    </div>
  )
}

export default Update;