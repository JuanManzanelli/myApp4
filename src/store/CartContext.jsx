import { createContext } from "react";
import { useContext, useState } from 'react';
import Item from "../components/Item";


const CartContext = createContext();
const useCartContext = () => useContext(CartContext);


const {Provider} = CartContext;





export function CartContextProvider ({children}) {
     const [cart, setCart] = useState ([]);
     
     const addToCart = (item, cant) => {
        const newItem = {...item,cant};
        const newCart= [ ...cart];
        
        setCart([...cart, newItem]);
     }
      
    
    const  contextFunction  = () => console.log("Contexto Listo!");
    
    return(
        <Provider value={ { contextFunction, cart, addToCart } }>
             {children}
        </Provider>
    )
}

export default useCartContext;