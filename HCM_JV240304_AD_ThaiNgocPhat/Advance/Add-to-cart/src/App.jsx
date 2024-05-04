import React, { useState } from "react";
import Header from "./Header";
import ListProducts from "./ListProducts";
import CartItems from "./CartItem";
import "./App.css";

function App() {
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const storedCartCount = storedCartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const [cartCount, setCartCount] = useState(storedCartCount);
  const [cartItems, setCartItems] = useState(storedCartItems);
  const [showCart, setShowCart] = useState(false);

  const updateCart = (updatedCart) => {
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    const updatedCartCount = updatedCart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartItems(updatedCart);
    setCartCount(updatedCartCount);
  };

  const handleAddToCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[itemIndex].quantity += 1;
      updateCart(updatedCart);
    } else {
      const updatedCart = [...cartItems, { ...product, quantity: 1 }];
      updateCart(updatedCart);
    }
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    updateCart(updatedCart);
  };

  const handleDecrease = (product) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === product.id) {
        const newQuantity = item.quantity - 1;
        return { ...item, quantity: newQuantity >= 0 ? newQuantity : 0 };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  const handleIncrease = (product) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  return (
    <div>
      <Header cartCount={cartCount} toggleCart={toggleCart} />
      <ListProducts handleAddToCart={handleAddToCart} />
      {showCart && (
        <CartItems
          cartItems={cartItems}
          handleRemoveFromCart={handleRemoveFromCart}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          calculateTotalPrice={calculateTotalPrice}
        />
      )}
    </div>
  );
}

export default App;
