import React, { useEffect, useState } from 'react';
import Item from './Item';
import colchonZ from '../data/colchon';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';


function getColchon(categoryid) {
    return new Promise( (resolve, reject) => {
        setTimeout( ()  => {
            if (categoryid !== undefined){
              const arrrayFiltered = colchonZ.filter ( ( colchon ) => { 
              return colchon.genre === categoryid;
            });
            resolve(arrrayFiltered);
            }
            else { 
            resolve(colchonZ);
            }
        }, 400); 
    });
}

 
function ItemListContainer( {titulo} ) {
    const [colchon, setColchon] = useState([]);
    const { categoryid } = useParams();
    console.log("ID:" + categoryid);

     
        useEffect( () => {
          getColchon(categoryid).then( respuestaPromise => {
             setColchon(respuestaPromise);
         });
        }, [categoryid]);

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
