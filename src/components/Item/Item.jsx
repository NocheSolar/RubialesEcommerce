import React from 'react';
import { Link } from 'react-router-dom';

function Item({item}) {
  return (
    <div>
        <div >{ item.tittle }</div>
        <div>
            <div >
                <img src={ item.image } alt="Imagen del producto" />
            </div>
            <Link to={'/item/' + item.id}><button>Detalle del producto</button></Link>
        </div>
        <div>{ item.price }</div>
    </div>
  )
}

export default Item