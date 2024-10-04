import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow flex">
        <aside className="w-1/6 bg-blue-500 p-4 text-white">
          <nav className="space-y-2">
            <a href="#" className="block hover:bg-blue-700 p-2 rounded">Atracciones</a>
            <a href="#" className="block hover:bg-blue-700 p-2 rounded">Hoteles</a>
            <a href="#" className="block hover:bg-blue-700 p-2 rounded">Restaurantes</a>
            <a href="#" className="block hover:bg-blue-700 p-2 rounded">Deportes</a>
          </nav>
        </aside>
        <main className="flex-grow bg-gray-300 p-4">
          <h1 className="text-3xl font-bold mb-4">Bienvenido a La Madrid</h1>
          <p className="mb-4">Descubre los mejores lugares para visitar, comer y alojarte en La Madrid.</p>
          <Carousel />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
