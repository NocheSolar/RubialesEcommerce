import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemCount from '../ItemCount/ItemCount';
import Cart from '../Cart/Cart';

const ItemDetail = ({ product }) => {
    const { tittle, price, image, stock, id } = product;
    const [countToAdd, setCountToAdd] = useState(0);
    const { addToCart, unitsPerProduct } = useCartContext();

    const handleOnAdd = (count) => {
        if (count + unitsPerProduct(id) > stock) {
          const availableToAdd = stock - unitsPerProduct(id);
          return alert(`Solamente podes agregar ${availableToAdd} productos`);
        }
        setCountToAdd(count);
        addToCart(product, count);
      };
    
    return (
        <div>
            <img src={image} alt="producto" />
            <h2> {tittle}</h2>
            <h4>{price}</h4>
            <div className='itemCounterContainer'>
                {countToAdd === 0 ? (
                    <ItemCount initial={0} stock={stock}  onAdd={handleOnAdd} />
                ) : (
                    <Cart />
                )}
            </div>
        </div>
    );
};





export default ItemDetail;