import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function ProductItem({ product, handleAddToCart }) {
  const addToCart = () => {
    handleAddToCart(product);
  };
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
    <div className="product">
      <img src={product.image} alt={product.name} />
      <span>{product.name}</span>
      <p>{priceDot(product.price)}₫</p>
      <button onClick={addToCart}>
        <FontAwesomeIcon icon={faCartPlus} /> Thêm vào giỏ hàng
      </button>
    </div>
  );
}

