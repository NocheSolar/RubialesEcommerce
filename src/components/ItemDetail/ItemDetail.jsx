import React from 'react'
import { isCompositeComponent } from 'react-dom/test-utils';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function ItemDetail ( {productsList}){
    return (
        <div>
            <img src="{productsList.image}" alt="" />
            <h2> {productsList.tittle}</h2>
            <h4>{productsList.price}</h4>
        </div>
        //agregar contador
    )
}







export default ItemDetail;