import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item';
import Cart from '../Cart/Cart';

function ItemDetail ({item}){
    const [productsAvailable, setproductsAvailable] = useState (null);
    function onAddCart (quantitytoAdd){
        setproductsAvailable (quantitytoAdd);
    }

    return (
        <div>
            <img src={item.image} alt="producto" />
            <h2> {item.tittle}</h2>
            <h4>{item.price}</h4>
            <div className='itemCounterContainer'>
                <button> <Link to='/Cart'/>Finalizar Compra </button>
                <ItemCount initial={0} stock={item.stock} onAdd={onAddCart} />
            </div>
        </div>
    )
}







export default ItemDetail;