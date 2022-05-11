import React from 'react';
import { Link } from 'react-router-dom';

function Item({products}) {
  return (
    <div className='cardProduct'>
        <div className='header'>{ products.tittle }</div>
        <div className='container'>
            <div className='imgProducto'>
                <img className='product-img' src={ products.image } alt="Imagen del producto" />
            </div>
            <Link to={'/item/' + products.id}><button>Detalle del producto</button></Link>
        </div>
        <div className='precioProducto'>{ products.price }</div>
    </div>
  )
}

export default Item