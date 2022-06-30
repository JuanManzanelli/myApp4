import React from 'react';
import Item from './Item';

function ItemList ( { Colchon } ) {

    return (
        <> 
        { Colchon.map( thisColchon => {
               return(
               <Item Colchon={thisColchon} key={thisColchon.id} />
               )
    })}
        </>  
    )
}

export default ItemList