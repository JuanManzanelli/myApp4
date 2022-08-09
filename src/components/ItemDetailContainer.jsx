import React, { useEffect, useState } from 'react';
import { resolvePath, useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {getItem as getColchon} from '../data/fire';


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