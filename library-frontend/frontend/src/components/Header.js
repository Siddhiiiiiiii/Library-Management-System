import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://static.vecteezy.com/system/resources/previews/005/050/797/original/library-logo-template-design-free-vector.jpg" alt="Library Logo" />
        <h1>DIGITAL LIBRARY</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/books">BOOKS</Link></li>
          <li><Link to="/student-login">STUDENT LOGIN</Link></li>
          <li><Link to="/admin-login">ADMIN LOGIN</Link></li>
          <li><Link to="/registration">REGISTRATION</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
