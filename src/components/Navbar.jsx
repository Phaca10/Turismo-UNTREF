import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-green-600 text-white p-4 shadow-custom-dark">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://www.lamadrid.gob.ar/wp-content/uploads/2020/10/Diseno-sin-titulo-4-1024x1024.png" alt="Logo" className="inline-block h-12 mr-2 shadow-custom-highlight" />
          <span className="text-3xl font-extrabold tracking-wide font-heading">LA MADRID</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-accent transition-colors duration-300">INICIO</a>
          <a href="#" className="hover:text-accent transition-colors duration-300">TURISMO</a>
          <a href="#" className="hover:text-accent transition-colors duration-300">COMO LLEGAR</a>
          <a href="#" className="hover:text-accent transition-colors duration-300">CONTACTO</a>
        </nav>
        <button className="md:hidden text-white focus:outline-none" aria-label="Open Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
