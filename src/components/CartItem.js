import React from "react";
import { ReactComponent as RemoveIcon } from "../assets/images/icon-remove-item.svg";
export const CartItem = ({ cartItem, onDelete }) => {
  return (
    <div className="cart-item">
      <div className="">
        <p className="name">{cartItem.name}</p>
        <div className="detail">
          <span className="quantity">{cartItem.quantity}x</span>{" "}
          <span className="price">@{cartItem.price}</span>{" "}
          <span>${cartItem.quantity * cartItem.price}</span>
        </div>
      </div>
      <RemoveIcon className="remove-icon" onClick={() => onDelete(cartItem)} />
    </div>
  );
};
