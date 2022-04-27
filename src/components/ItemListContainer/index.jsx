import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './itemlistcontainer.css';

const container = ({greetings}) => {
  return (
    <>
      <div className='containerList'>{greetings}</div>
      <ItemCount stock= {20} initial= {0}/>
    </>
  )
}

export default container;
