import React from 'react'
import imgIcono from '../assets/img/carrito-icono.png';
import useCartContext from '../store/CartContext';

function Cartwidget() {
    
    return (
        <div>
      
       <img className='carrNav' src={imgIcono} alt='carritoNav' />
 
    </div>
    )
}


export default Cartwidget