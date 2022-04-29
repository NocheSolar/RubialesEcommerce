import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList({ items }) {
    return (
        <div className='itemlist'>
            <h2>Catalogo</h2>
            {items.map(item => <Item item={item} key={item.id} />)}
        </div>
    )
}

export default ItemList