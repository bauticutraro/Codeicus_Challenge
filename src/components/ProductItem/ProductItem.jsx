import React from 'react';
import {
  ProductItemContainer,
  ProductItemCount,
  ProductItemTitle,
  ProductStock
} from './productItemStyles';

const ProductItem = ({ name, stock }) => {
  return (
    <ProductItemContainer>
      <ProductItemTitle>{name}</ProductItemTitle>
      <ProductItemCount type='number' defaultValue='0' max={stock} min='0' />
      <ProductStock>
        {stock > 0 ? `${stock} en stock` : 'Sin stock'}
      </ProductStock>
    </ProductItemContainer>
  );
};

export default ProductItem;
