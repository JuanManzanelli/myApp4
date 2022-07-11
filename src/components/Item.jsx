import React from "react";

import { Link } from "react-router-dom";

function Item( {colchon }) {


  return (
   <div className="card  bg-dark">
       <img alt={colchon.title}
            className="image objetc-contain bg-placeholder h-60 rounded w-full objetc-center mn-6"
            src={colchon.imgUrl}/>
       <div className="card-body text-light">
       <h4 className="card-title">{colchon.title}</h4>
       <p className="card-text text-secondary text-center">{colchon.color}</p>
       <p className="card-text text-secondary text-center">{colchon.price}</p>
       
        <hr></hr>
        <Link to={`/colchon/${colchon.id}`}>
         <button className="btn btn-outline-secondary  items-center mt-2 ">
          Comprar
         </button>
        </Link>
        
    
        
        <hr/>
        <br/>
     </div>
    </div>
  );
} 

export default Item