import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Esto se mantiene para los estilos por defecto

const ImageCarousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      <div>
        <img src="path/to/image1.jpg" alt="Image 1" className="w-full h-auto" />
        <p className="bg-black bg-opacity-50 text-white p-2">Image 1</p>
      </div>
      <div>
        <img src="path/to/image2.jpg" alt="Image 2" className="w-full h-auto" />
        <p className="bg-black bg-opacity-50 text-white p-2">Image 2</p>
      </div>
      <div>
        <img src="path/to/image3.jpg" alt="Image 3" className="w-full h-auto" />
        <p className="bg-black bg-opacity-50 text-white p-2">Image 3</p>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
