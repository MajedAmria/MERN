import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'



const NewAuthor = () => {
    // const [author, setAuthors]= useState()
    const history =useHistory();
    
  
    // useEffect(()=>{
    //   axios.get('http://localhost:8000/api/author')
    //   .then(res=>setAuthors(res.data))
    //   .catch(err=>console.error(err))
    // },[authors]);

    const createAuthor=(authorName)=>{
        axios.post('http://localhost:8000/api/author/new',{name : authorName})
        .then(history.replace("/"))
        .catch(err=>console.error(err))
    }
  return (
    <div>
        <Link to="/">Home</Link>
        <p>Add a new author</p>
         <AuthorForm onSubmitProp={createAuthor} initialName="" clickButton="Add new Author"/>
    </div>
  )
}

export default NewAuthor