import React from 'react';
import Colchon from '../data/Colchon';

function Item ({ Colchon}) {

    return (
   <div>
        <h1>{Colchon.title}</h1>
        <small>{Colchon.color}</small>
        <p>{Colchon.price}</p>
        <h4>{Colchon.stock}</h4>
              
    </div>
    )  
    
}

export default Item