import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './itemlistcontainer.css';
import ItemList from '../ItemList/ItemList';
import Products from "../helper/Products";

const container = ({greetings}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Products.then((response) => setProducts(response))
  }, []);

  return (
    <>
      <div className='containerList'>{greetings}</div>
      <ItemCount stock= {20} initial= {0}/>
      <ItemList products={products} />
    </>
  )
}

export default container;
