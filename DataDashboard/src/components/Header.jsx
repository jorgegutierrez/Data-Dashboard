import React from 'react'
import '../styles/header.css';
import Logo from './Logo';

const Header = () => {
  return (
    <div className="Header">
      <Logo />
      <h3 className="Header-title">AstroDash</h3>
    </div>
  );
}

export default Header;