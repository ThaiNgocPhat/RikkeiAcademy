import React from 'react'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';


import "./App.css"

function App() {
  

  return (
    <>
      <div className="boostrap">
        <div className="header">
          <h3>My Cart</h3>
          <div className="cart-number">
            <p>Cart</p>
            <span>2</span>
          </div>
        </div>
        <CardGroup className="example-card">
          <Card className="cart-product">
            <Card.Img
              variant="top"
              src="https://free.vector6.com/wp-content/uploads/2020/12/kho116-vector-giao-duc-hoc-tap.jpg"
            />
            <Card.Body className="card-body">
              <Card.Title>Product 1</Card.Title>
              <Card.Text>$10.00</Card.Text>
            </Card.Body>
            <Button variant="primary">Add to Cart</Button>{" "}
            <p className='title'>PlaceIMG is shutting down on June 30,2023</p>
          </Card>
          <Card className="cart-product">
            <Card.Img
              variant="top"
              src="https://free.vector6.com/wp-content/uploads/2020/12/kho116-vector-giao-duc-hoc-tap.jpg"
            />
            <Card.Body className="card-body">
              <Card.Title>Product 2</Card.Title>
              <Card.Text>$20.00</Card.Text>
            </Card.Body>
            <Button variant="primary">Add to Cart</Button>{" "}
             <p className='title'>PlaceIMG is shutting down on June 30,2023</p>
          </Card>
          <Card className="cart-product">
            <Card.Img
              variant="top"
              src="https://free.vector6.com/wp-content/uploads/2020/12/kho116-vector-giao-duc-hoc-tap.jpg"
            />
            <Card.Body className="card-body">
              <Card.Title>Product 3</Card.Title>
              <Card.Text>$30.00</Card.Text>
            </Card.Body>
            <Button variant="primary">Add to Cart</Button>{" "}
            <p className='title'>PlaceIMG is shutting down on June 30,2023</p>
          </Card>
        </CardGroup>
        <div className='cart-total-product'>
          <h1>Cart</h1>
          <div className='total-header'>
            <p>Product</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Total</p>
          </div>
          <div className='total-product'>
            <p>Product 1</p>
            <p><Form.Select aria-label="Default select example">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select></p>
            <p>$10.00</p>
            <p>$10.00</p>
          </div>
           <div className='total-product'>
            <p>Product 2</p>
            <p><Form.Select aria-label="Default select example">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select></p>
            <p>$20.00</p>
            <p>$40.00</p>
          </div>
         <div className='abc'>
           <div className='subtotal'>  
            <p></p>       
            <p></p>   
            <p>Subtotal</p>
            <p>$50.00</p>
          </div>
          <div className='tax'>
            <p>Tax</p>
            <p>$5.00</p>
          </div>
          <div className='total'>
            <p>Total</p>
            <p>$55.00</p>
          </div>
         </div>
        </div>
         <footer className='footer'>
         <span>© 2023 My Shop</span>
        </footer>
      </div>
    </>
  );
}

export default App
