// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageCarousel from './components/Carousel';
import './components/Navbar.css';
import './components/Footer.css';
import './components/Carousel.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <ImageCarousel />
        {/* Otros componentes o contenido */}
      </main>
      <Footer />
    </div>
  );
}

export default App;







