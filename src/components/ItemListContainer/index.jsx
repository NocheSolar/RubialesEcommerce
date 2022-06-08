import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './itemlistcontainer.css';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, query, where} from 'firebase/firestore';
import db from '../../Services/Firebase';


function getProduct(category) {

  const itemCollection = collection (db, 'items');

  const q = category && query (
    itemCollection, where ('category', '==', category)
  );

  return getDocs ( q|| itemCollection);
  //getDocs(itemCollection).then (snapshot => {
  //  console.log(snapshot.docs.map(doc => { return{ ...doc.data(), id: doc.id}}));
  //})

}
function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProduct(categoryId).then(res => {
      setProducts(res.docs.map(doc =>{return {...doc.data(), id: doc.id}}));
    })
    .catch(err => {
      console.log(err, "error");
    });
  }, [categoryId]);


  return (
    <div>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer;
