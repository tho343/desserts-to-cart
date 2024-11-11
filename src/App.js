import { useState } from "react";
import { Cart } from "./components/Cart";
import { ConfirmationModal } from "./components/ConfirmationModal";
import { ProductList } from "./components/ProductList";
const data = require("./data.json");
function App() {
  const [isOrderConfirm, setIsOrderConfirm] = useState(false);
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    const duplicateIndex = cart.findIndex((item) => item.name === product.name);
    const newArray = cart.map((item) =>
      item.name === product.name
        ? { ...item, quantity: item.quantity + product.quantity }
        : item
    );
    setCart(duplicateIndex === -1 ? [...cart, product] : newArray);
  }

  function onClose() {
    setIsOrderConfirm(false);
    setCart([]);
  }

  function onDecrease(product) {
    setCart(
      cart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function onIncrease(product) {
    setCart(
      cart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function onDelete(product) {
    setCart(cart.filter((item) => item.name !== product.name));
  }

  return (
    <div className="App">
      <div className="side-bar">
        <h1>Desserts</h1>
        <ProductList
          data={data}
          onAdd={handleAddToCart}
          cart={cart}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
          onDelete={onDelete}
        />
      </div>
      <Cart
        cart={cart}
        onConfirm={() => setIsOrderConfirm(true)}
        onDelete={onDelete}
      />
      {isOrderConfirm && <ConfirmationModal onClose={onClose} cart={cart} />}
    </div>
  );
}

export default App;
