import { createContext } from "react";
import { useContext, useState } from 'react';
import Item from "../components/Item";


const CartContext = createContext();
const useCartContext = () => useContext(CartContext);


const {Provider} = CartContext;


export function CartContextProvider ({children}) {
     const [cart, setCart] = useState ([]);
     
     const addToCart = (item, cant) => {
        if (isInCart(item.id)){
              const  newCart = cart.map(cartItem => {
                if(cartItem.id === item.id){
                  const copyItem = {...cartItem};
                   copyItem.cant += cant;
                   return copyItem; 

                }
                else return cartItem; 
            })
            setCart(newCart);
        }
     else{  
        const newItem = {...item, cant};
        setCart([...cart,newItem]);
        }
     }

     const removeFromCart= (id) =>{
        const newCart = [...cart];
        const cartFilter = newCart.filter( item => {
            return item.id!== id;
        })
        setCart(cartFilter);
     }

     const clearCart = () => {
        setCart([]);
     }
      
    const isInCart =  (id) =>{
        return cart.some( itemCart =>itemCart.id === id)
        } 

    const getItemFromCart =  (id) =>{
         return cart.find( itemCart =>itemCart.id === id)
        } 
     
    function getTotalPrice(){
        let totalPrice = 0;
        cart.forEach(item =>totalPrice += item.cant * item.price)
        return totalPrice;
    }
 
    

    const  contextFunction  = () => console.log("Contexto Listo!");
    
    return(
        <Provider value={ { contextFunction, getTotalPrice ,clearCart, getItemFromCart, cart , addToCart, removeFromCart } }>
             {children}
        </Provider>
    )
}

export default useCartContext;