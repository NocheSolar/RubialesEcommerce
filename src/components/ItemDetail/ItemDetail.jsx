import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemCount from '../ItemCount/ItemCount';
import Cart from '../Cart/Cart';
import { useCartContext } from "../Context/CartContextProvider";

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad]= useState(0);
    const { addItem} = useCartContext();   

    const handleOnAdd = (count) =>{ 
        setCantidad(count) 
        console.log(`Se agregaron ${count} ${item.name}`)
        addItem(item, count)
        };
    
    return (
        <div>
            <img src={item.image} alt="producto" />
            <h2> {item.tittle}</h2>
            <h4>{item.price}</h4>
            <div className='itemCounterContainer'>
                {cantidad === 0 ? (
                    <ItemCount initial={0} stock={item.stock}  onAdd={handleOnAdd} />
                ) : (
                    <Cart />
                )}
            </div>
        </div>
    );
};





export default ItemDetail;