import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import GalaxyS21 from "../Picture/samsung_galaxy_s21-_128gb__d1b8fd531ef24903a16cbca1bd666b34.webp"
import Iphone14 from "../Picture/iPhone-14-Pro-Max-space-black-220907-geo-768x1075.webp"
import GalaxyS20 from  "../Picture/samsung_galaxy_s21-_128gb__d1b8fd531ef24903a16cbca1bd666b34.webp"
import Iphone11 from "../Picture/iphone-11-promax.jpeg"
import GalaxyS22 from "../Picture/samsungS22.jpeg"
import GalaxyS23 from "../Picture/samsungS23.jpeg"
import OppoA9 from "../Picture/oppoA9.jpeg"
import OppoV5 from "../Picture/oppoV5.jpeg"
import OppoA5s from "../Picture/oppoA5s.jpeg"
import OppoA73 from "../Picture/oppoA73.jpg"
const listProducts = [
  {
    id: 1,
    name: "Điện thoại Samsung Galaxy S21",
    image: GalaxyS21,
    price: "20.000.000",
  },
  {
    id: 2,
    name: "Điện thoại Iphone 14 Promax",
    image: Iphone14,
    price: "20.500.000",
  },
  {
    id: 3,
    name: "Điện thoại Samsung Galaxy S20",
    image: GalaxyS20,
    price: "21.000.000",
  },
  {
    id: 4,
    name: "Điện thoại Iphone 11 Promax",
    image: Iphone11,
    price: "21.500.000",
  },
  {
    id: 5,
    name: "Điện thoại Samsung Galaxy S22",
    image: GalaxyS22 ,
    price: "22.000.000",
  },
  {
    id: 6,
    name: "Điện thoại Samsung Galaxy S23",
    image: GalaxyS23,
    price: "22.500.000",
  },
  {
    id: 7,
    name: "Điện thoại Oppo A9",
    image: OppoA9,
    price: "23.000.000",
  },
  {
    id: 8,
    name: "Điện thoại Oppo V5",
    image: OppoV5,
    price: "23.500.000",
  },
  {
    id: 9,
    name: "Điện thoại Oppo A5s",
    image:OppoA5s ,
    price: "24.000.000",
  },
  {
    id: 10,
    name: "Điện thoại Oppo A73",
    image: OppoA73,
    price: "24.500.000",
  },
];

export default function ListProducts() {
  return (
    <div id='products'>
      <h1>Danh sách sản phẩm</h1>
      <div className='products'>
        {listProducts.map(product => (
          <div key={product.id} className='product'>
            <img src={product.image} alt={product.name} />
            <span>{product.name}</span>
            <p>{product.price}&nbsp;</p>
            <button><FontAwesomeIcon icon={faCartShopping} /> Thêm vào giỏ hàng</button>
          </div>
        ))}
      </div>
    </div>
  );
}