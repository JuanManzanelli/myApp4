import React from "react";
import Contador from "./Contador";
import { useState } from "react";
import useCartContext from "../store/CartContext";


const ItemDetail = ({ colchon }) => {
  const[isInCart,setIsInCart] = useState(false);
   const {addToCart} =useCartContext();

  function onAdd(count){
    setIsInCart(true);
}


    function onAdd(count){
      setIsInCart(true);
      addToCart(colchon, count)
      console.log("agregado al cart: ", colchon, count); 
    }
      
      



    return (
   <div className="card  bg-dark object-center">
      



       <div className="card-body text-light object-center">
      <div>
       <h4 className="card-title">{colchon.title}</h4>
       </div>


       <div className="card  bg-dark">
       <img alt={colchon.title}
            className="image objetc-contain bg-placeholder h-0 rounded w-10 objetc-center mn-6"
            src={colchon.imgUrl}/>
       </div>




       <div>
       <p className="card-text text-secondary text-center">{colchon.color}</p>
       </div>

       <div>
       <p className="card-text text-secondary text-center">{colchon.price}</p>
       </div>

       <div>
       <p className="card-text text-secondary text-center">{colchon.stock}</p>
       </div>
           
        <br/>
        <div class=" text-center">

          {isInCart?
          <button className="btn btn-outline-secondary text-center rounded-0 border-white">
            Ver el carrito
          </button>
         :
          <button className="btn btn-outline-secondary text-center rounded-0">Ver el carrito</button>
          }
        <Contador onAdd={onAdd} stock={colchon.stock} initial={1} />   
        </div>
        
 
        
        
     </div>
    </div>
  );
};

export default ItemDetail;