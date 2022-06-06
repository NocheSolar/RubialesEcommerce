import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import carrito from './../../imgs/carrito.jpg'
import { useCartContext } from '../Context/CartContextProvider';

const CartWidget = () => {
const {getQuantity} = useContext(useCartContext)    

  return (<>
      {
      <Link to={"/cart"} style={{ backgroundColor: '#e4c360', border: 'none', marginLeft: 16, marginRight: 24 }}>
        <img src={carrito} alt="cart" width={32} height={32} />
        {
        getQuantity()>0&&<button style={{ backgroundColor: '#e4c360', border: 'none'}}>{getQuantity()}</button>
        }
      </Link>
      }
  </>
  );
};

export default CartWidget;