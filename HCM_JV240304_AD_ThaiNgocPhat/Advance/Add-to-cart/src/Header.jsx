import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header({ cartCount, toggleCart }) {
  return (
    <>
      <div id="nav-shoping">
        <div className="nav">
          <a href="#">Trang Chủ</a>
          <a href="#">Danh sách sản phẩm</a>
        </div>
        <div className="shoping">
          <button onClick={toggleCart}>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <span>{cartCount}</span>
        </div>
      </div>
    </>
  );
}
