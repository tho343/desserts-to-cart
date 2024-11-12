import React from "react";
import { AddButton } from "./AddButton";
import { ReactComponent as DeleteIcon } from "../assets/images/icon-add-to-cart.svg";
import { ReactComponent as IncreaseIcon } from "../assets/images/icon-increment-quantity.svg";
import { ReactComponent as DecreaseIcon } from "../assets/images/icon-decrement-quantity.svg";

export const Product = ({
  product,
  onAdd,
  cart,
  onDecrease,
  onDelete,
  onIncrease,
}) => {
  const productIndex = cart.findIndex((item) => item.name === product.name);
  const isProductAdded = productIndex > -1;

  function handleOnClick() {
    onAdd({ ...product, quantity: 1 });
  }

  function handleDecrease() {
    if (cart[productIndex].quantity <= 0) {
      return;
    } else if (cart[productIndex].quantity === 1) {
      onDelete(cart[productIndex]);
    } else {
      onDecrease(product);
    }
  }

  function handleIncrease() {
    onIncrease(product);
  }

  return (
    <div className="product">
      <img
        alt="image thumbnail"
        src={require(`${product.image.desktop}`)}
        className={`${isProductAdded ? "selected" : ""}`}
      />

      <div className="btn-container">
        {isProductAdded ? (
          <AddButton className="quantity-btn">
            <div onClick={handleDecrease}>
              <DecreaseIcon />
            </div>
            <p>{cart[productIndex].quantity}</p>{" "}
            <div>
              <IncreaseIcon onClick={handleIncrease} />
            </div>
          </AddButton>
        ) : (
          <AddButton onAdd={handleOnClick} className="add-to-cart-btn">
            <DeleteIcon /> Add to Cart
          </AddButton>
        )}
      </div>

      <p className="category">{product.category}</p>
      <p className="name">{product.name}</p>
      <p className="price">${product.price}</p>
    </div>
  );
};
