import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white p-4 flex justify-between items-center shadow-custom-light">
      <div>© 2024 Turismo La Madrid</div>
      <div className="space-x-4">
        <a href="#" className="hover:text-accent transition-colors duration-300">Facebook</a>
        <a href="#" className="hover:text-accent transition-colors duration-300">Twitter</a>
        <a href="#" className="hover:text-accent transition-colors duration-300">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
