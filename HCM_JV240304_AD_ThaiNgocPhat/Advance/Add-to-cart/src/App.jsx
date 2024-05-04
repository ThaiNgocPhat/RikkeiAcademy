import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListProducts from "./ListProducts";
import CartItems from "./CartItem";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    const storedCartCount = storedCartItems ? storedCartItems.reduce((total, item) => total + item.quantity, 0) : 0;
    setCartItems(storedCartItems || []);
    setCartCount(storedCartCount);
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = [...cartItems, { ...product, quantity: 1 }];
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    setCartCount(cartCount + 1);
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartItems(updatedCart);

    const updatedCartCount = updatedCart.length > 0 ? updatedCart.reduce((total, item) => total + item.quantity, 0) : 0;
    setCartCount(updatedCartCount);
  };

  const handleDecrease = (product) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === product.id) {
        const newQuantity = item.quantity - 1;
        return { ...item, quantity: newQuantity >= 0 ? newQuantity : 0 };
      }
      return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    const updatedCartCount = updatedCart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(updatedCartCount);
  };

  const handleIncrease = (product) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    const updatedCartCount = updatedCart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(updatedCartCount);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <Header cartCount={cartCount} toggleCart={toggleCart} />
      <ListProducts handleAddToCart={handleAddToCart} />
      {(showCart && cartItems.length > 0) || cartCount > 0 ? (
        <CartItems
          cartItems={cartItems}
          handleRemoveFromCart={handleRemoveFromCart}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
        />
      ) : (
        <div>Chưa có sản phẩm trong giỏ hàng</div>
      )}
    </div>
  );

}

export default App;
