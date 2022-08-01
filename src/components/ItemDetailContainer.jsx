import React, { useEffect, useState } from 'react';
import { resolvePath, useParams } from 'react-router-dom';
import colchonZ from '../data/colchon';
import ItemDetail from './ItemDetail';


function getColchon(id) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
         const colchonFound = colchonZ.find ((colchon)=>{
            return parseInt(id) === colchon.id;
         })
         resolve(colchonFound)
        },2000);
    });
}


function ItemDetailContainer() {
    const [colchon, setColchon] = useState();
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


export default ItemDetailContainer