import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import {doc, getDoc} from 'firebase/firestore';
import db from '../../Services/Firebase';

const ItemDetailContainer = () => {

  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState()   //State donde grabo el item  segun el id

  const getSelected = async(idItem) =>{
      try {
          const document = doc(db, "Items", idItem)
          const response = await getDoc(document)
          const result = {id: response.id, ...response.data()}
          setSelectedItem(result)
        

      } catch (error) {
          console.log(error)
      }
  }


  useEffect(() => {
      getSelected(id)
  }, [id])

  return (
    <div>
    <ItemDetail item={selectedItem} />
    </div>
  )

}
export default ItemDetailContainer;