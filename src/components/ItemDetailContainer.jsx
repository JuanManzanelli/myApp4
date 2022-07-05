import React, { useEffect, useState } from 'react';
import colchon from '../data/colchon';
import colchonZ from '../data/colchon';
import ItemDetail from './ItemDetail';


function getColchon(id) {
    return new Promise( (resolve, reject) => {
        setTimeout( ()  => {
            const colchonFound = colchonZ.find( ( colchon)  => {
                return id === colchon.id
        })
        resolve(colchonFound);
        }, 2000); 
    });
}


function ItemListContainer({id}) {
    const [colchon, setColchon] = useState([]);
     
        useEffect( () => {
          getColchon(id).then( respuestaPromise => {
             setColchon(respuestaPromise);
         });
        }, []);

  return (
    <section className='container px-5 py-8 mx-auto'>
        <ItemDetail colchon={colchon}/>  
    </ section>
    
  )
}


export default ItemListContainer