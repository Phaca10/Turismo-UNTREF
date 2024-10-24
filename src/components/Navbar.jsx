import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center text-white">
      <div className="text-xl">General La Madrid Turismo</div>
      <button
        className="text-white text-2xl md:hidden"
        onClick={toggleMenu}
      >
        ☰
      </button>
      <div className="flex items-center space-x-4">
        {/* Barra de búsqueda */}
        <input
          type="text"
          placeholder="Buscar..."
          className="bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row items-center md:space-x-4 mt-4 md:mt-0 w-full md:w-auto`}
      >
        <li className="my-2 md:my-0">
          <a href="#Inicio" className="block text-white hover:bg-gray-700 px-4 py-2 rounded">Inicio</a>
        </li>
        <li className="my-2 md:my-0">
          <a href="#Que Hacer" className="block text-white hover:bg-gray-700 px-4 py-2 rounded">Que Hacer</a>
        </li>
        <li className="my-2 md:my-0">
          <a href="#Historia" className="block text-white hover:bg-gray-700 px-4 py-2 rounded">Historia</a>
        </li>
        <li className="my-2 md:my-0">
          <a href="#contactos" className="block text-white hover:bg-gray-700 px-4 py-2 rounded">Contactos</a>
        </li>
        <li className="my-2 md:my-0">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Iniciar Sesión
          </button>
        </li>
        <li className="my-2 md:my-0">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Registrarse
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
