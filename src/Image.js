import React from 'react';
import product from './Product';

const Image = () => {
  return <img src={product.image} alt="Product" width="200" height="180"/>;
};

export default Image;