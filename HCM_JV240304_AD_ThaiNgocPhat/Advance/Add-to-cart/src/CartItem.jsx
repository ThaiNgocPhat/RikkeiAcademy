import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CartItems({ cartItems, handleRemoveFromCart, handleDecrease, handleIncrease, calculateCartTotal }) {
  const priceDot = (price) => { 
  let result2 = price.toString();
  let result3 = ""; 
  let count = 0; 
  for (let i = result2.length - 1; i >= 0; i--) {
    count++;
    result3 = result2[i] + result3;
    if (count % 3 === 0 && i !== 0) result3 = "." + result3; 
  }
  return result3; 
};
 return (
    <div className="cart-items-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <>
          <span>Chưa có sản phẩm trong giỏ hàng</span>
          <p>Total price: 0₫</p>
        </>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
                <div className="quantity-trash">
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrease(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item)}>+</button>
                  </div>
                  <div className="trash">
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleRemoveFromCart(item)}
                      className="trash-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p>Total price: {priceDot(calculateCartTotal())}₫</p>
        </>
      )}
    </div>
  );
}



