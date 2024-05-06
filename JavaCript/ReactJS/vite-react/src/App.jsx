import React, { useState } from "react";
import Header from "./Header";
import ListProducts from "./ListProducts";
import CartItems from "./CartItem";


import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartCount(cartCount + 1);
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCartCount(cartCount - 1);
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };
  const handleDecrease = (product) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  }
  const handleIncrease = (product) => { 
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  }
  return (
    <div>
      <Header cartCount={cartCount}
        />
      <ListProducts handleAddToCart={handleAddToCart}
      />
      <CartItems
        cartItems={cartItems}
        handleRemoveFromCart={handleRemoveFromCart}
        handleDecrease = {handleDecrease} 
        handleIncrease = {handleIncrease}
      />
    </div>
  );
}

export default App;


