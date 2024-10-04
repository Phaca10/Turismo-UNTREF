import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Lugares Recomendados</h2>
      <Slider {...settings}>
        <div className="w-48 h-32 bg-gray-200 rounded">Imagen 1</div>
        <div className="w-48 h-32 bg-gray-200 rounded">Imagen 2</div>
        <div className="w-48 h-32 bg-gray-200 rounded">Imagen 3</div>
      </Slider>
    </div>
  );
};

export default Carousel;
