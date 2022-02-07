import React from 'react';
import ProductFilter from '../../Components/ProductFilter';

// 현재는 가데이터 사용
const animals = [
  {
    name: '강아지',
    value: 'dog',
  },
  {
    name: '고양이',
    value: 'cat',
  },
  {
    name: '패럿',
    value: 'parrot',
  },
  {
    name: '물고기',
    value: 'fish',
  },
];

const Product = () => {
  return (
    <div>
      <ProductFilter list={animals} />
    </div>
  );
};

export default Product;
