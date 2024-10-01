import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Kevas Wihanto</h1>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;