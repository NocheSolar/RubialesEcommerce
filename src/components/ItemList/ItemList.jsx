import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

function ItemList({ items }) {
    return (
        <div className='itemlist'>
            <h2>Catalogo</h2>
            {items.map(item => <Item item={item} key={item.id} />)}
        </div>
    )
}

export default ItemList


