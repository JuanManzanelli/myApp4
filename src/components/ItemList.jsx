import React from 'react';
import Item from './Item';

function ItemList ( { colchon } ) {

    return (
        <> 
        { colchon.map( thiscolchon => {
               return(
               <Item colchon={thiscolchon} key={thiscolchon.id} />
               )
    })}
        </>  
    )
}

export default ItemList