import React from 'react'
import { useHistory,useParams } from "react-router-dom";

const ManagerShow = (props) => {
    const history = useHistory();
    const { id } = useParams();
    const fire=()=>{

        {props.products.allProducts.map( (product, i) =>
            history.push("/api/product/"+product._id)
    )}
   
        }

  return (
    <div>
        <h1>All Products</h1>
        
        {props.products.allProducts.map( (product, i) =>
            <button key={i} onClick={()=>fire()}>{product.title}</button>
            )}
    </div>
  )
}

export default ManagerShow;