import React from 'react';
import { Link } from 'react-router-dom';

function Item({item}) {
  return (
    <div className='cardProduct'>
        <div className='header'>{ item?.tittle }</div>
        <div className='container'>
            <div className='imgProducto'>
                <img className='product-img' src={ item?.image } alt="Imagen del producto" />
            </div>
            <Link to={'/item/' + item?.id}><button>Detalle del producto</button></Link>
        </div>
        <div className='precioProducto'>{ item?.price }</div>
    </div>
  )
}

export default Item