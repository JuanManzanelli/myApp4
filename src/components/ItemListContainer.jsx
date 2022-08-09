import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import { getAllItems as getColchon, getItemsByCategory } from '../data/fire';


 
function ItemListContainer( {titulo} ) {

    const [colchonEstado, setColchon] = useState([]);
    const { categoryid } = useParams();
    
        useEffect( () => {
          if (categoryid === undefined) {
          getColchon().then((respuestaPromise) => {
             setColchon(respuestaPromise);
         });
        }
        else{
          getItemsByCategory(categoryid).then((respuestaPromise) => {
            setColchon(respuestaPromise);
        });
        }
        }, [categoryid]);
          
        

  return (
    <section className='body-font'> 
    <div className='container px-5 py-12 mx-auto'>
        <div className='d-flex flex-col text-center w-full mb-12'>
            <div className='col-md-3'>
              <ItemList colchon={colchonEstado} />
              
              <hr />
            </div>           
            
        </div>   
        
    </div>
    </section>
  )
}


export default ItemListContainer
