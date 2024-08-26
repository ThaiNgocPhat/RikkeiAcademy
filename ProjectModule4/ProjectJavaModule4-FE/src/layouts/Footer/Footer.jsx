import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import các biểu tượng

import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <ul className="footer-list-item">
          <li className="footer-item">
            <a href="/" className="footer-item__link">Về Chúng Tôi</a>
          </li>
          <li className="footer-item">
            <a href="/" className="footer-item__link">Liệu Pháp</a>
          </li>
          <li className="footer-item">
            <a href="/" className="footer-item__link">Giải Trí</a>
          </li>
          <li className="footer-item">
            <a href="/" className="footer-item__link">Thẩm Mỹ</a>
          </li>
          <li className="footer-item">
            <a href="/" className="footer-item__link">Liên Hệ</a>
          </li>
        </ul>
        <ul className="footer-list-item">
          <li className="footer-address">Địa Chỉ</li>
          <li className="footer-item">
            101 - 103 Đường Võ Nguyên Giáp, Phường Khuê Mỹ
          </li>
          <li className="footer-item">
            Quận Ngũ Hành Sơn, Thành phố Đà Nẵng, Việt Nam
          </li>
        </ul>
        <ul className="footer-list-item">
          <li className="footer-contact">Liên Lạc</li>
          <li className="footer-item">
            Số điện thoại: 84-236-3847 333/888
          </li>
          <li className="footer-item">
            Fax: 84-236-3847 666
          </li>
          <li className="footer-item">
            ltdresort@gmail.com
          </li>
        </ul>
        <ul className="footer-list-item">
          <li className="footer-follow-us">Theo Dõi Chúng Tôi</li>
          <li className="footer-item">
            <a href="/" className="footer-item__navigate">
              <FontAwesomeIcon icon={faFacebook} />
              ldtresort.kz
            </a>
          </li>
          <li className="footer-item">
            <a href="/" className="footer-item__navigate">
              <FontAwesomeIcon icon={faInstagram} />
              instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p>© 2023 LTD Resort DaNang</p>
      </div>
    </div>
  );
};

export default Footer;
