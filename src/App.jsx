// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageCarousel from "./components/Carousel";
import Destinos from "./components/Destinos";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      {/* <Destinos nombre={''} categoria={'paseos'} /> */}
      <Navbar />
      <main className="main-content">
        <ImageCarousel />
        {/* Otros componentes o contenido */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
