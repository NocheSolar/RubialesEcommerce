import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

function getProduct (id) {
  const myProducts = new Promise ((resolve, reject) =>{
    const productsList = [
      {
        id: 0,
        name: 'Mouse logitech g203',
        price: '$3500',
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_775601-MLA45385615343_032021-F.webp',
        stock : '25',
      },
      {
        id: 1,
        name: 'Teclado razer blackwidow',
        price: '$1700',
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_875425-MLA49294676896_032022-F.webp',
        stock : '20',
      },
      {
        id: 2,
        name: 'Auriculares hyperx cloud stinger',
        price: '$8000',
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_775551-MLA40154584077_122019-F.webp',
        stock : '30',
      },
    ];
    const item = productsList.filter(item => item.id == parseInt(id));
    setTimeout(()=> {
      resolve (item [0]);
    }, 3000);
  });
  return myProducts;
}

function ItemDetailContainer(){
  const [productList, setProduct] = useState ([]);
  const {id} = useParams ();

  useEffect(()=>{
    getProduct(id).then (res =>{
      setProduct (res);
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