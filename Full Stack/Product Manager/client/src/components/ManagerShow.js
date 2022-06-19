import React from 'react'
import { useHistory,useParams } from "react-router-dom";
import axios from 'axios';

const ManagerShow = (props) => {
    const history = useHistory();
    const { removeFromDom } = props;
    const fire=()=>{

        {props.products.allProducts.map( (product, i) =>
            history.push("/api/product/"+product._id)
    )}
   
        }
        const deleteProduct = (productId) => {
            axios.delete('http://localhost:8000/api/product/' + productId)
                .then(res => {
                    removeFromDom(productId)
                })
                .catch(err => console.error(err));
        }

  return (
    <div>
        <h1>All Products</h1>
        
        {props.products.allProducts.map( (product, i) =>
            <p><button key={i} onClick={()=>fire()}>{product.title}</button>
            ||
            <button onClick={(e)=>{deleteProduct(product._id)}}>
            Delete
        </button></p>
            )}
    </div>
  )
}

export default ManagerShow;