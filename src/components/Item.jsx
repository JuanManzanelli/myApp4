import React from "react";
import Contador from "./Contador";
import colchon from "../data/colchon";

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
       <p className="card-text text-secondary text-center">{colchon.stock}</p>
       
       <a href="#!" className="btn btn-outline-secondary rounded-0">
            Detalle
        </a> 
        <hr></hr>
        <div> 
          {/*<Contador />*/}
        </div>
        <a href="#!" className="btn btn-outline-secondary rounded-0">
            Comprar
        </a> 
        <hr/>
        <br/>
     </div>
    </div>
  );
} 

export default Item