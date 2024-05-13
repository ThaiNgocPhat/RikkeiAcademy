import React from 'react'
import './App.css'
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="cosmectic-header bg-gray">
          <div className="cosmectic-header-nav">
            {[false].map((expand) => (
              <Navbar
                key={expand}
                expand={expand}
                className="bg-body-tertiary mb-3"
              >
                <Navbar.Brand className="brand">BEAUTIFULIFE</Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <div className="end">
                  <FontAwesomeIcon icon={faUser} />
                  <FontAwesomeIcon icon={faShoppingBag} />
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </Navbar>
            ))}
          </div>
        </div>
        <div className="header-content">
          <div className="header-img">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/690/523/small/white-3d-pedestal-background-with-hibiscus-flower-for-cosmetic-product-presentation-fashion-magazine-copy-space-illustration-free-vector.jpg"
              alt=""
            />
          </div>
          <div className="header-title">
            <h1>
              Beauty <br /> Kit
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Repellendus reiciendis doloremque porro ullam, soluta neque <br />
              vero reprehenderit excepturi saepe, facilis temporibus alias
              eveniet dignissimos. Vero earum nam officia fugit? Neque.
            </p>
            <button>Buy Now</button>
          </div>
        </div>
          <div className="hero-content">
            <h1>OUR PRODUCTS</h1>
            <p>
              Incididunt ut labore et dolore magna aliqua.Ut enim ad minim
              veniam, quis noostrud exercitation
            </p>
          </div>
          <div className="our-products">
            <Card className='products'>
              <div className='product-title'>
                <h3>Beauty Bursh</h3>
              <p> Incididunt ut labore et dolore magna</p>
              <p>aliqua.Ut enim</p>
              </div>
              <Card.Img
                variant="top"
                src="https://file.hstatic.net/200000223113/file/co8_0b2e359bb17048279a79ddc5ea574502.png"
              />
               <div className="btn">
                  <button className='btn-buy'>BUY NOW</button>
                  <button>BUY NOW</button> Price: $20
                </div>
            </Card>
             <Card className='products'>
              <div className='product-title'>
                <h3>Beauty Bursh</h3>
              <p> Incididunt ut labore et dolore magna</p>
              <p>aliqua.Ut enim</p>
              </div>
              <Card.Img
                variant="top"
                src="https://file.hstatic.net/200000223113/file/co8_0b2e359bb17048279a79ddc5ea574502.png"
              />
               <div className="btn">
                  <button className='btn-buy'>BUY NOW</button>
                  <button>BUY NOW</button> Price: $20
                </div>
            </Card>
             <Card className='products'>
              <div className='product-title'>
                <h3>Beauty Bursh</h3>
              <p> Incididunt ut labore et dolore magna</p>
              <p>aliqua.Ut enim</p>
              </div>
              <Card.Img
                variant="top"
                src="https://file.hstatic.net/200000223113/file/co8_0b2e359bb17048279a79ddc5ea574502.png"
              />
              <div className="btn">
                  <button className='btn-buy'>BUY NOW</button>
                  <button>BUY NOW</button> Price: $20
                </div>
            </Card>
             <Card className='products'>
              <div className='product-title'>
                <h3>Beauty Bursh</h3>
              <p> Incididunt ut labore et dolore magna</p>
              <p>aliqua.Ut enim</p>
              </div>
              <Card.Img
                variant="top"
                src="https://file.hstatic.net/200000223113/file/co8_0b2e359bb17048279a79ddc5ea574502.png"
              />
              <div className="btn">
                  <button className='btn-buy'>BUY NOW</button>
                  <button>BUY NOW</button> Price: $20
                </div>
            </Card>
            <Card className='products'>
              <div className='product-title'>
                <h3>Beauty Bursh</h3>
              <p> Incididunt ut labore et dolore magna</p>
              <p>aliqua.Ut enim</p>
              </div>
              <Card.Img
                variant="top"
                src="https://file.hstatic.net/200000223113/file/co8_0b2e359bb17048279a79ddc5ea574502.png"
              />
              <div className="btn">
                  <button className='btn-buy'>BUY NOW</button>
                  <button>BUY NOW</button> Price: $20
                </div>
            </Card>
            <Card className='products'>
              <div className='product-title'>
                <h3>Beauty Bursh</h3>
              <p> Incididunt ut labore et dolore magna</p>
              <p>aliqua.Ut enim</p>
              </div>
              <Card.Img
                variant="top"
                src="https://file.hstatic.net/200000223113/file/co8_0b2e359bb17048279a79ddc5ea574502.png"
              />
              <div className="btn">
                  <button className='btn-buy'>BUY NOW</button>
                  <button>BUY NOW</button> Price: $20
                </div>
            </Card>
            <Card className='products'>
              <div className='product-title'>
                <h3>Beauty Bursh</h3>
              <p> Incididunt ut labore et dolore magna</p>
              <p>aliqua.Ut enim</p>
              </div>
              <Card.Img
                variant="top"
                src="https://file.hstatic.net/200000223113/file/co8_0b2e359bb17048279a79ddc5ea574502.png"
              />
              <div className="btn">
                  <button className='btn-buy'>BUY NOW</button>
                  <button>BUY NOW</button> Price: $20
                </div>
            </Card>
            <Card className='products'>
              <div className='product-title'>
                <h3>Beauty Bursh</h3>
              <p> Incididunt ut labore et dolore magna</p>
              <p>aliqua.Ut enim</p>
              </div>
              <Card.Img
                variant="top"
                src="https://file.hstatic.net/200000223113/file/co8_0b2e359bb17048279a79ddc5ea574502.png"
              />
              <div className="btn">
                  <button className='btn-buy'>BUY NOW</button>
                  <button>BUY NOW</button> Price: $20
                </div>
            </Card>
        </div>
      </div>
    </>
  );
}

export default App
