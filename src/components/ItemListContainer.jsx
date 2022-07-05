import React, { useEffect, useState } from 'react';
import Item from './Item';
import colchonZ from '../data/colchon';
import ItemList from './ItemList';


function getColchon() {
    return new Promise( (resolve, reject) => {
        setTimeout( ()  => {
            resolve(colchonZ);
        }, 400); 
    });
}


function ItemListContainer() {
    const [colchon, setColchon] = useState([]);
     
        useEffect( () => {
          getColchon().then( respuestaPromise => {
             setColchon(respuestaPromise);
         });
        }, []);

  return (
    <div className='container px-5 py-8 mx-auto'>
        <div className='flex flex-col text-center w-fullmb-12'>
            <div className='col-md-4'>
              <ItemList colchon={colchon} />
            </div>           
            
        </div>   
        
    </div>
    
  )
}


export default ItemListContainer
