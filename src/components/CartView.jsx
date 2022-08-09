import React from 'react'
import Item from './Item';
import { Link } from 'react-router-dom';
import useCartContext from '../store/CartContext';
import { createBuyOrder } from '../data/fire';


const CartView = () => {
  const { cart, removeFromCart,clearCart,getTotalPrice } = useCartContext();

  function handleBuy(){

    const itemsToBuy = cart.map((item) => ( {
      title: item.title,
      cant: item.cant,
      price: item.price,
      id: item.id, 
    }

    ))
      const buyOrder = {
        buyer:{
                 name: "Juan",
                 Phone: "123456789",
                 email:"coder@house.com",
        },
        items:itemsToBuy,
        total: getTotalPrice (),
  }
  createBuyOrder(buyOrder);

  clearCart();
}
  
  return (   
     <section>
      
      <div>           
         {cart.length === 0 && (         
              <p className='alert'>Carrito Vacio</p>                  
          )}

          {cart && cart.length !== 0 &&(

              <tbody>        
                  {cart && 
                  cart.map((item) => (  

                       <div style={{textAling:"center"}}>
                       <br/>
                       <h2>{item.title}</h2>
                       <h2>{item.cant}</h2>
                       <h2>${item.cant * item.price}</h2> 
                               
                        <button onClick={()=> removeFromCart (item.id)} style={{ color:"red"}}>
                        Quitar
                        </button>                       
                       <button onClick={handleBuy}>Comprar</button>                     
                       <hr/><br/>                
                  </div>
                  ))}
              </tbody>
          )}
    </div>
  </section>
  
   );
   };
  
export default CartView;