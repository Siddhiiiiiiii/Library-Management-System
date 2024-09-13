import React from 'react';
import '../CSS/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:online.library@gmail.com">online.library@gmail.com</a></p>
          <p>Mobile: <a href="tel:+91123456789">+91 123456789</a></p>
          <p>Address: 123 Library Lane, Booktown, BK 45678</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p><a href="#">Facebook</a></p>
          <p><a href="#">Twitter</a></p>
          <p><a href="#">Instagram</a></p>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are dedicated to providing the best library services to our community. Explore our extensive collection of books and resources.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Online Library. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
