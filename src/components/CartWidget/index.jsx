import React from 'react';
import { Link } from 'react-router-dom';
import carrito from './../../imgs/carrito.jpg'
import { useCartContext } from '../Context/CartContextProvider';

const CartWidget = () => {
const {getQuantity} = useCartContext()    

  return (<>
      {
      <Link to={"/cart"}>
        <img src={carrito} alt="cart" />
        {
        getQuantity()>0&&<button>{getQuantity()}</button>
        }
      </Link>
      }
  </>
  );
};

export default CartWidget;