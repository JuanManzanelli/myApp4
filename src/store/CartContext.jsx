import { createContext } from "react";
import { useContext } from 'react';


const CartContext = createContext();
const useCartContext = () => useContext(CartContext);


const {Provider} = CartContext;

export function CartContextProvider ({children}) {

    const  contextFunction  = () => console.log("Contexto Listo!");
    
    return(
        <Provider value={ { contextFunction } }>
             {children}
        </Provider>
    )
}

export default useCartContext;