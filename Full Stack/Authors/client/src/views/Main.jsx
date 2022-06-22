import React,{useEffect,useState} from "react";
import { Link, useHistory} from "react-router-dom";
import axios from 'axios';
import AuthorShow from '../components/AuthorShow';
export default (props) =>{

    const [authors,setAuthors]=useState([]);
    const [loaded, setLoaded] = useState(false);
    const history =useHistory();
  useEffect(()=>{
    axios.get('http://localhost:8000/api/author')
    .then(res=>{setAuthors(res.data)
    setLoaded(true)})
    .catch(err=>console.error(err))
  },[]);
  const removeFromDom = (authorId) => {
    setAuthors(authors.filter(author => author._id != authorId));
    history.push("/");
}
    
    return(
        <div>
            
            <Link to="/new">Add an Author</Link>
            {loaded && <AuthorShow authorList={authors}   removeFromDom={removeFromDom}  />}
        </div>
    )
}