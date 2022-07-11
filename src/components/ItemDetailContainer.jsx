import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import colchon from '../data/colchon';
import colchonZ from '../data/colchon';
import ItemDetail from './ItemDetail';


function getColchon(id) {
    return new Promise( (resolve, reject) => {
        setTimeout( ()  => {
            const colchonFound = colchonZ.find( ( colchon)  => {
                return parseInt(id) === colchon.id;
        })
        resolve(colchonFound);
        }, 2000); 
    });
}


function ItemListContainer() {
    const [colchon, setColchon] = useState([]);
    const {itemid} = useParams();
        
     useEffect( () => {
          getColchon(itemid).then( respuestaPromise => {
             setColchon(respuestaPromise);
         });
        }, [itemid]);

  return (
    <section className='container px-5 py-8 mx-auto'>
        <ItemDetail colchon={colchon}/>  
    </ section>
    
  )
}


export default ItemListContainer