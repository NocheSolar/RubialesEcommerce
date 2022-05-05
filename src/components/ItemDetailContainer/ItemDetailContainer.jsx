import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

function getProduct () {
  const myProducts = new Promise ((resolve, reject) =>{
    const productsList = [
      {
        id: 0,
        tittle: 'Mouse logitech g203',
        price: '$3500',
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_775601-MLA45385615343_032021-F.webp'
      },
      {
        id: 1,
        tittle: 'Teclado razer blackwidow',
        price: '$1700',
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_875425-MLA49294676896_032022-F.webp'
      },
      {
        id: 2,
        tittle: 'Auriculares hyperx cloud stinger',
        price: '$8000',
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_775551-MLA40154584077_122019-F.webp'
      },
    ];
    setTimeout(()=> {
      resolve (productsList);
    }, 3000);
  });
  return myProducts;
}
function ItemDetailContainer(){
  const [productList, setProduct] = useState ([]);
  useEffect(()=>{
    getProduct().then (res =>{
      setProduct (res);
    })
    getProduct().catch ( err =>{
      console.log (err, "error");
    })
  }, []);

  return (
    <div>
      <ItemDetail item ={productList} />
    </div>
  )

}
export default ItemDetailContainer;