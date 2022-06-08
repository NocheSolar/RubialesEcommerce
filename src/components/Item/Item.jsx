import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id,tittle, image, price}) => {     return (
    <div className='cardProduct'>
        <div className='header'>{ tittle }</div>
        <div className='container'>
            <div className='imgProducto'>
                <img className='product-img' src={image} alt="Imagen del producto" />
            </div>
       
            <Link to={`/item/${id}`}><button>Detalle del producto</button></Link>
        </div>
        <div className='precioProducto'>{ price }</div>
    </div>
  )
}

export default Item