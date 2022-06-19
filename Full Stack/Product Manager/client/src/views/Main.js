import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ManagerForm from '../components/ManagerForm';
import ManagerShow from '../components/ManagerShow';
export default (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api')
        .then(res=>{
            setProducts(res.data);
            setLoaded(true);
        })
        .catch(err=>console.error(err));
    },[products]);
    return (
        <div>
            <ManagerForm/>
            <hr/>
            {loaded && <ManagerShow products={products} />}
        </div>
    )
}