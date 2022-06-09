import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemCount from '../ItemCount/ItemCount';
import Cart from '../Cart/Cart';
import { useCartContext } from "../Context/CartContextProvider";

const ItemDetail = ({ item }) => {
    const { tittle, price, image, stock, id } = item;
    const [countToAdd, setCountToAdd] = useState(0);
    const { addToCart, unitsPerProduct } = useCartContext();

    const handleOnAdd = (count) => {
        if (count + unitsPerProduct(id) > stock) {
          const availableToAdd = stock - unitsPerProduct(id);
          return alert(`Podes agregar ${availableToAdd} productos`);
        }
        setCountToAdd(count);
        addToCart(item, count);
      };
    
      return (
        <div>
            <img src={image} alt="producto" />
            <h2> {tittle}</h2>
            <h4>{price}</h4>
            <div className='itemCounterContainer'>
                <ItemCount initial={1} stock={stock}  onAdd={handleOnAdd} />
                {countToAdd>0&& <Link to="/Cart"><button>Ir a tu carrito de compras</button></Link>}
            </div>
        </div>
    );
};





export default ItemDetail;