import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import carrito from './../../imgs/carrito.jpg'
import { useCartContext } from '../Context/CartContextProvider';

const CartWidget = () => {
const {totalCount} = useCartContext()    

  return (<>
      {
      <NavLink to={"/cart"}>
        <img src={carrito} alt="cart" />
        <span >{totalCount()}</span>
      </NavLink>
      }
  </>
  );
};

export default CartWidget;