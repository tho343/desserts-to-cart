import React from "react";
import { CartItem } from "./CartItem";
import { ReactComponent as EmptyImage } from "../assets/images/Empty Illustration.svg";
import { Button } from "./Button";

export const Cart = ({ cart, onConfirm, onDelete }) => {
  const isEmpty = cart.length === 0;

  const orderTotal = isEmpty
    ? 0
    : cart.map((item) => item.price * item.quantity).reduce((a, b) => (a += b));

  const cartQuantity = isEmpty
    ? 0
    : cart.map((item) => item.quantity).reduce((a, b) => (a += b));

  return (
    <div className="cart">
      <h2>Your Cart ({cartQuantity})</h2>
      {isEmpty ? (
        <div className="container">
          <EmptyImage className="empty-cart" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          {cart?.map((item) => (
            <CartItem cartItem={item} key={item.name} onDelete={onDelete} />
          ))}
          <div className="order-total">
            <p>Order Total</p>
            <h3 className="total-amount">${orderTotal}</h3>
          </div>
          <Button onConfirm={onConfirm}>Confirm Order</Button>
        </>
      )}
    </div>
  );
};
