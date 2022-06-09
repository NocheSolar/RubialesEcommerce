import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import carrito from './../../imgs/carrito.jpg'
import { useCartContext } from '../Context/CartContextProvider';

const CartWidget = () => {
const {getQuantity} = useContext(useCartContext)    

  return (<>
      {
      <Link to={"/cart"}>
        <img src={carrito} alt="cart" width={32} height={32} />
        {
        getQuantity()>0&&<button>{getQuantity()}</button>
        }
      </Link>
      }
  </>
  );
};

export default CartWidget;