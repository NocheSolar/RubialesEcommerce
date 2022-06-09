import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount({initial, stock, onAdd }) {
    const [count, setCount] = useState(initial);
    function increaseButton() {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    function decreaseButton() {
        if (count > initial) {
            setCount(count - 1)
        }
    }
    function onAdd (){
        alert(`Tus productos se agregaron correctamente (${count}) `);
        console.log (count);
    }
    return (
        <div className='itemcountcontainer'>
            <div>
                <button onClick={() => decreaseButton()}>-</button>
                <input readOnly value={count} />
                <button onClick={() => increaseButton()}>+</button>
            </div>
            <button onClick={() => (count <= stock) && onAdd(count)}>Agregar al carrito</button>
        </div>
    )
  
}
export default ItemCount