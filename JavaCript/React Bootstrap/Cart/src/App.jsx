import React from 'react'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import "./App.css"

function App() {
  

  return (
    <>
     <div className='boostrap'>
       <Navbar bg="primary" expand="lg" id='navigation' >
      <Navbar.Brand href="#home">Example Site</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <CardGroup id='example-card'>
        <Card className='example'>
          <Card.Img
            variant="top"
            src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1631/posts/29602/preview_image/react-crash-course.jpg"
          />
          <Card.Body className='card-body'>
            <Card.Title>Example Cart</Card.Title>
            <Card.Text>This is a example React cart</Card.Text>
          </Card.Body>
          <Button variant="primary">Primary</Button>{" "}
        </Card>
         <Card className='example'>
          <Card.Img
            variant="top"
            src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1631/posts/29602/preview_image/react-crash-course.jpg"
          />
          <Card.Body className='card-body'>
            <Card.Title>Example Cart</Card.Title>
            <Card.Text>This is a example React cart</Card.Text>
          </Card.Body>
          <Button variant="primary">Primary</Button>{" "}
        </Card>
         <Card className='example'>
          <Card.Img
            variant="top"
            src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1631/posts/29602/preview_image/react-crash-course.jpg"
          />
          <Card.Body className='card-body'>
            <Card.Title>Example Cart</Card.Title>
            <Card.Text>This is a example React cart</Card.Text>
          </Card.Body>
          <Button variant="primary">Primary</Button>{" "}
        </Card>
      </CardGroup>
            <footer className='footer'>
          <Container className='container'>
            <span>© 2024 Example Site. All rights reserved.</span>
          </Container>
        </footer>
     </div>
    </>
  );
}

export default App
