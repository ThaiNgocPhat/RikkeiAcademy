import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header({ cartCount }) {
  return (
    <>
      <div id="nav-shoping">
        <div className="nav">
          <a href="#">Trang Chủ</a>
          <a href="#">Danh sách sản phẩm</a>
        </div>
        <div className="shoping">
          <p>
            <FontAwesomeIcon icon={faCartShopping} />
          </p>
          <span>{cartCount}</span>
        </div>
      </div>
    </>
  );
}
