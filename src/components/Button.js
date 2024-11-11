import React from "react";

export const Button = ({ children, onConfirm }) => {
  return (
    <button onClick={onConfirm} className="primary-btn">
      {children}
    </button>
  );
};
