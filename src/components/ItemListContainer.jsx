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
        }, 700); 
    });
}

 
function ItemListContainer( {titulo} ) {
    console.log("Render ItemListContainer");

    const [colchonEstado, setColchon] = useState([]);
    const { categoryid } = useParams();
    

     
        useEffect( () => {
          console.log("use Effect ItemListContainer");

          getColchon(categoryid).then( respuestaPromise => {
             setColchon(respuestaPromise);
         });
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
