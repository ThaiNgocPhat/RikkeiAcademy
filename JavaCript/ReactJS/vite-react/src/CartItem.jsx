import React from "react";

export default function CartItems({ cartItems, handleRemoveFromCart, handleDecrease, handleIncrease}) {
  return (
    <div className="cart-items-container">
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-info">
            <img src={item.image} alt={item.name} />
            <p>
              {item.name}
            </p>
            <div className="quantity-controls">
              <button onClick={() => handleDecrease(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrease(item)}>+</button>
              <button onClick={() => handleRemoveFromCart(item)}>Xoá</button>
            </div>
          </div>
          <p>Total price:{item.price * item.quantity}</p>
        </div>
      ))}
    </div>
  );
}
