import React from 'react'
import carrito from './../../imgs/carrito.jpg'
import './cartwidget.css';

const CartWidget = () => {
  return (
    <div className='logo'>
        <img className='imgcarrito' src={carrito} alt="carrito de compras" />
    </div>
  )
}

export default CartWidget;