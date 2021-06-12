import React from 'react';
import {
  ProductItemContainer,
  ProductItemCount,
  ProductItemTitle,
  ProductStock
} from './productItemStyles';

const ProductItem = ({
  name,
  stock,
  id,
  cod,
  addedProducts,
  setAddedProducts
}) => {
  const handleOnChnage = count => {
    let newProducts = [...addedProducts];

    if (count === 0) {
      newProducts = newProducts.filter(({ id: productId }) => productId !== id);
    } else {
      const productPosition = newProducts.findIndex(
        ({ id: productId }) => productId === id
      );
      productPosition !== -1
        ? (newProducts[productPosition].count = count)
        : newProducts.push({ name, stock, id, cod, count });
    }
    setAddedProducts(newProducts);
  };

  return (
    <ProductItemContainer>
      <ProductItemTitle>{name}</ProductItemTitle>
      <ProductItemCount
        type='number'
        defaultValue='0'
        max={stock}
        min='0'
        onChange={e => handleOnChnage(parseInt(e.target.value))}
      />
      <ProductStock>
        {stock > 0 ? `${stock} en stock` : 'Sin stock'}
      </ProductStock>
    </ProductItemContainer>
  );
};

export default ProductItem;
