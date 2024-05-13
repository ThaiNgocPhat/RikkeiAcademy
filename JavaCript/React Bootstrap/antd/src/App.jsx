import React from 'react'
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function App() {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <span className="badge">5</span>
          <FontAwesomeIcon icon={faCartShopping} className="icon" />
          <FontAwesomeIcon icon={faHeart} className="icon" />
          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Products</Breadcrumb.Item>
        </Breadcrumb>
        <div className="cards">
          <Card className='antd-card'>
            <Card.Img
              variant="top"
              src="https://pantravel.vn/wp-content/uploads/2023/11/ruong-bac-thang-kiet-tac-thien-nhien-vi-dai-tu-ban-tay-con-nguoi.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Title>Price: $10</Card.Title>
            </Card.Body>
            <Button variant="primary">Go somewhere</Button>
          </Card>
        </div>
      </div>
    </>
  );
}
