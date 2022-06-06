import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import {doc, getDoc} from 'firebase/firestore';
import db from '../../Services/Firebase';

function getProduct (id) {
  
  const itemFind = doc (db, 'items', id);
  
  return getDoc (itemFind);
}

function ItemDetailContainer(){
  const [productList, setProduct] = useState ([]);
  const {id} = useParams ();

  useEffect(()=>{
    getProduct(id).then (res =>{
      setProduct ({...res.data(), id: res.id});
    })
    .catch ( err =>{
      console.log (err, "error");
    })
  }, [id]);

  return (
    <div>
      <ItemDetail item ={productList} />
    </div>
  )

}
export default ItemDetailContainer;