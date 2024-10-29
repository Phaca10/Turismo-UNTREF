import React, { useState } from 'react';
import logo from '../assets/logoglm.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-900 p-4 flex justify-between items-center text-white">
      <div className="text-xl"><img src={logo} alt="Logo" className="h-12 w-auto mr-2" /></div>
      <button
        className="text-white text-2xl md:hidden"
        onClick={toggleMenu}
      >
        ☰
      </button>
      <div className="flex items-center space-x-4">
        {/* Barra de búsqueda con mayor ancho */}
        <input
          type="text"
          placeholder="Buscar..."
          className="bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-80"
        />
      </div>
      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row items-center md:space-x-4 mt-4 md:mt-0 w-full md:w-auto`}
      >
        <li className="my-2 md:my-0 transition-transform duration-300 transform hover:scale-105">
          <a href="#Inicio" className="block text-white hover:bg-gray-700 px-4 py-2 rounded">Inicio</a>
        </li>
        <li className="my-2 md:my-0 transition-transform duration-300 transform hover:scale-105">
          <a href="#QueHacer" className="block text-white hover:bg-gray-700 px-4 py-2 rounded">Que Hacer</a>
        </li>
        <li className="my-2 md:my-0 transition-transform duration-300 transform hover:scale-105">
          <a href="#Historia" className="block text-white hover:bg-gray-700 px-4 py-2 rounded">Historia</a>
        </li>
        <li className="my-2 md:my-0 transition-transform duration-300 transform hover:scale-105">
          <a href="#contactos" className="block text-white hover:bg-gray-700 px-4 py-2 rounded">Contactos</a>
        </li>
        {/* Reemplazo de botones por el ícono SVG */}
        <li className="my-2 md:my-0">
          <a href="#profile" className="block text-white hover:bg-gray-700 px-4 py-2 rounded">
            <svg className="h-8 w-8 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



