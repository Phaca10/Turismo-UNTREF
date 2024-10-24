import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Esto se mantiene para los estilos por defecto

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageDescriptions = [
    "Disfruta de nuestro Balneario Municipal",
    "Tambien de las mejores Actividades y Deportes",
    "Y si te gusta la pezca o paseos en kayak "
  ];

  const handleChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-2/3">
        <Carousel showThumbs={false} autoPlay infiniteLoop onChange={handleChange}>
          <div>
            <img src="images/carousel1.jpg" alt="Image 1" className="h-[400px] object-contain" />
          </div>
          <div>
            <img src="images/carousel2.jpg" alt="Image 2" className="h-[400px] object-contain" />
          </div>
          <div>
            <img src="images/carousel4.jpg" alt="Image 3" className="h-[400px] object-contain" />
          </div>
        </Carousel>
      </div>
      <div className="w-1/3 flex items-center justify-center ml-4">
        <p className="text-4xl font-bold text-white">{imageDescriptions[currentSlide]}</p>
      </div>
    </div>
  );
};

export default ImageCarousel;
