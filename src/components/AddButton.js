import React from "react";

export const AddButton = ({ children, className, onAdd }) => {
  return (
    <button onClick={onAdd} className={`${className} button`}>
      {children}
    </button>
  );
};
