import React from "react";
import { Cart } from "./Cart";
import { CartItem } from "./CartItem";
import { Button } from "./Button";

export const ConfirmationModal = ({ cart, onClose }) => {
  const orderTotal = cart
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => (a += b));
  return (
    <div className="confirm-modal">
      <div className="modal">
        <h1>Order Confirmed</h1>
        <span>Hope you enjoy our food</span>
        <div>
          {cart.map((item) => (
            <CartItem cartItem={item} key={item.name} />
          ))}
          <div className="order-total">
            <p>Order Total</p>
            <h3 className="total-amount">${orderTotal}</h3>
          </div>
        </div>
        <button onClick={onClose} className="primary-btn">
          Start New Order
        </button>
      </div>
    </div>
  );
};
