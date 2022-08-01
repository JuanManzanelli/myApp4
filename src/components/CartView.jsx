import React from 'react'
import { Link } from 'react-router-dom';
import useCartContext from '../store/CartContext';

function CartView() {
  const { cart, removeFromCart,clearCart } = useCartContext();

  if (cart.length === 0) {
    return <div style={{textAling:"center"}}>
      <h4>Carrito Vacio</h4>
      <a href="/">Volver al catalogo</a>
    </div>
  }
  else{
    return  <div> 
    {cart.map(itemCart => {
        return <div style={{textAling:"center"}} key={itemCart.id}>
          <br/>
          <h2>{itemCart.title}</h2>
          <h2>{itemCart.cant}</h2>
          <h2>${itemCart.cant * itemCart.price}</h2> 
          <button onClick={()=> removeFromCart (itemCart.id)} style={{ color:"red"}}>Quitar</button>
          <hr/><br/>
    </div>
    })}
        <button onClick={clearCart}>Vaciar</button>
    </div>

  }
}
export default CartView