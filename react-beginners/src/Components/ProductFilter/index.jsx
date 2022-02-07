import React from 'react';
import Selector from '../Selector';

const ProductFilter = ({ list }) => {
  return (
    <div>
      <Selector list={list} />
    </div>
  );
};

export default ProductFilter;
