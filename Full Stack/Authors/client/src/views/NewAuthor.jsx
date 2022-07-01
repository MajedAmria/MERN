import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'



const NewAuthor = () => {
    // const [author, setAuthors]= useState()
    const history =useHistory();
    const [errors, setErrors] = useState([]); 
  
    // useEffect(()=>{
    //   axios.get('http://localhost:8000/api/author')
    //   .then(res=>setAuthors(res.data))
    //   .catch(err=>console.error(err))
    // },[authors]);

    const createAuthor=(authorName)=>{
        axios.post('http://localhost:8000/api/author/new',{name : authorName})
        .then(history.replace("/"))
        .catch(err=>{
          const errorResponse = err.response.data.errors; // Get the errors from err.response.data
          const errorArr = []; // Define a temp error array to push the messages in
          for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
              errorArr.push(errorResponse[key].message)
          }
          // Set Errors
          setErrors(errorArr);
      })           
    }
  return (
    <div>
        <Link to="/">Home</Link>
        <p>Add a new author</p>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
         <AuthorForm onSubmitProp={createAuthor} initialName="" clickButton="Add new Author"/>
    </div>
  )
}

export default NewAuthor