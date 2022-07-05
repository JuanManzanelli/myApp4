import React, { useEffect, useState } from 'react';
import colchonZ from '../data/colchon';
import ItemDetail from './ItemDetail';


function getColchon() {
    return new Promise( (resolve, reject) => {
        setTimeout( ()  => {
            resolve(colchonZ);
        }, 2000); 
    });
}


function ItemListContainer() {
    const [colchon, setColchon] = useState([]);
     
        useEffect( () => {
          getColchon().then( respuestaPromise => {
             setColchon(respuestaPromise[0]);
         });
        }, []);

  return (
    <div className='container px-5 py-8 mx-auto'>
        <ItemDetail colchon={colchon}/>  
    </div>
    
  )
}


export default ItemListContainer