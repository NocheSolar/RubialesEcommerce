import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail ( {productsList}){
    const [productsAvailable, setproductsAvailable] = useState (null);
    function onAddCart (quantitytoAdd){
        setproductsAvailable (quantitytoAdd);
    }

    return (
        <div>
            <img src="{productsList.image}" alt="" />
            <h2> {productsList.tittle}</h2>
            <h4>{productsList.price}</h4>
            <div className='itemCounterContainer'>
                <button> <Link to='/cart'/>Finalizar Compra ({productsAvailable})</button>
                <ItemCount initial={0} stock={productsList.stock} onAdd={onAddCart} />
            </div>
        </div>
    )
}







export default ItemDetail;