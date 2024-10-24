import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageCarousel from "./components/Carousel";
import Destinos from "./components/Destinos";
import "./App.css";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/lamadridfondo.jpg')" }}></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <main className="relative z-10 main-content">
          <ImageCarousel />
          {/* <Destinos nombre={''} categoria={'paseos'} /> */}
          {/* Otros componentes o contenido */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
