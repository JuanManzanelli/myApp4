import React, {useEffect, useState } from 'react';
import ColchonDB from "../data/Colchon";
import ItemList from './ItemList';
import Item from './Item';

 function getColchon(){
    return new Promise ((resolve, reject) => {  
           setTimeout(() => {
            resolve(ColchonDB);
           }, 500);
     });
}  

function ItemListContainer(props) {
    const [Colchon, setColchon] = useState([]);
 
    useEffect( () => {
    getColchon().then( respuestaPromise => {
    setColchon(respuestaPromise);
     });
    }, []);
    
    return (
        <div>
        
        <ItemList colchon={Colchon}/>
    
        </div>
    )
}

export default ItemListContainer
