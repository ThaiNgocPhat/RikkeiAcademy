import React from 'react';
import './Login.css';
import logo from '../../img/logo.png';
import Header from '../../layouts/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import carousel1 from '../../img/carousel1.png';
import carousel2 from '../../img/carousel2.png';
import carousel3 from '../../img/carousel3.png';
import Carousel from '../../components/Carousel/Carousel';

const Login = () => {
  const slides = [
    { url: carousel1, title: 'Carousel 1' },
    { url: carousel2, title: 'Carousel 2' },
    { url: carousel3, title: 'Carousel 3' },
  ];
  return (
    <>
    <Header/>
    <div className="wrapper">
      <div className="wrapper__left">
        <div className="login-container">
          <div className="login-container__logo">
            <a href='/'>
              <img src={logo} alt='Logo' />
            </a>
          </div>
          <div className="login-container__main">
            <div className="title">Login</div>
            <p className="title-description">Login to access your LTD account</p>
            <div className="form-container">
              <form>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="john.doe@gmail.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="******"
                    required
                  />
                </div>
                <div className='checkbox-forgot'>
                  <div className="form-group">
                      <input type="checkbox" /> Remember me
                  </div>
                  <div className="forgot__password">
                    <a href="/forgot-password" className="forgot__password__link">
                      Forgot Password
                    </a>
                  </div>
                </div>
                <button type="submit" className="button">
                  Login
                </button>
              </form>
            </div>
            <div className="signup">
              <div className="signup__title">Don't have an account yet?</div>
              <div>
                <a href="/register" className="signup__link">Sign up here</a>
              </div>
            </div>
            <hr className="seperate-line" />
            <div className="social-media">
              <a href="/" className="social-media__link">
                <button className="social-media__button">
                  <FontAwesomeIcon icon={faFacebook} className="social-media__icon" />
                </button>
              </a>
              <a href="/" className="social-media__link">
                <button className="social-media__button">
                  <FontAwesomeIcon icon={faGoogle} className="social-media__icon" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper__right">
        <Carousel slides={slides} />
      </div>
    </div>
    </>
  );
};

export default Login;
