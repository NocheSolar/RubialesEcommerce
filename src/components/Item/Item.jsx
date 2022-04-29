import React from 'react';

const Item = ({ tittle, price }) => {
    return (
      <>
        <h1>{tittle}</h1>
        <h2>${price}</h2>
      </>
    );
  };
  export default Item;