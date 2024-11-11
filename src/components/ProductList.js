import React from "react";
import { Product } from "./Product";

export const ProductList = ({
  data,
  onAdd,
  cart,
  onDecrease,
  onDelete,
  onIncrease,
}) => {
  return (
    <div className="product-list">
      {data.map((product) => (
        <Product
          key={product.name}
          product={product}
          onAdd={onAdd}
          cart={cart}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
