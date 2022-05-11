import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './itemlistcontainer.css';
import ItemList from '../ItemList/ItemList';

function getProduct(category) {
  const myProducts = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 0,
        tittle: 'Mouse logitech g203',
        category: 'Mouses',
        price: '$3500',
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_775601-MLA45385615343_032021-F.webp'
      },
      {
        id: 1,
        tittle: 'Teclado razer blackwidow',
        category: 'Teclados',
        price: '$1700',
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_875425-MLA49294676896_032022-F.webp'
      },
      {
        id: 2,
        tittle: 'Auriculares hyperx cloud stinger',
        category: 'Auriculares',
        price: '$8000',
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_775551-MLA40154584077_122019-F.webp'
      },
    ];
    const productsFilter = category ? productsList.filter(prod => prod.category === category) : productsList;
    setTimeout(() => {
      resolve(productsFilter);
    }, 3000);
  });
  return myProducts;
}
function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProduct(categoryId).then(res => {
      setProducts(res);
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
