import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function ProductItem({ product, handleAddToCart }) {
  const addToCart = () => {
    handleAddToCart(product);
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <span>{product.name}</span>
      <p>{product.price}&nbsp;</p>
      <button onClick={addToCart}>
        <FontAwesomeIcon icon={faCartPlus} /> Thêm vào giỏ hàng
      </button>
    </div>
  );
}

