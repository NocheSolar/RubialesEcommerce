import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

function ItemList({ products }) {
    return (
        <div className='itemlist'>
            <h2>Catalogo</h2>
            {products.map (item=> (<Item item={item} key={item.id} />))}
        </div>
    )
}

export default ItemList


