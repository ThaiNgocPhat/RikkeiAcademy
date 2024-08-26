import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // You can create a separate CSS file for the header if needed
import homeImg from '../../img/home.jpg';

export default function Header() {
  return (
    <div className="header">
      <nav className="nav">
        <div className="header-navbar">
          <div className="header-navbar__logo">
            <p className="logo-main">LUXURY</p>
            <p className="logo-title">HOTELS</p>
          </div>
          <div className="header-navbar__link">
            <ul className="link-container">
              <li className="link-item">
                <a href="/" className="navbar-link navbar-link__active">Trang chủ</a>
              </li>
              <li className="link-item">
                <a href="/facilities" className="navbar-link">Tiện ích</a>
              </li>
              <li className="link-item">
                <a href="/rooms" className="navbar-link">Phòng</a>
              </li>
              <li className="link-item">
                <a href="/news" className="navbar-link">Nhà hàng</a>
              </li>
            </ul>
          </div>
          <div className="header-navbar__auth">
            <Link to="/login">
              <button className="auth-login">Đăng nhập</button>
            </Link>
            <a href="/register">
              <button className="auth-signup">Đăng ký</button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
