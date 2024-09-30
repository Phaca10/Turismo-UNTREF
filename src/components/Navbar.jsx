// src/components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Turismo</div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
        <li><a href="#Inicio">Inicio</a></li>
        <li><a href="#Que Hacer">Que Hacer</a></li>
        <li><a href="#Historia">Historia</a></li>
        <li><a href="#contactos">Contactos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
