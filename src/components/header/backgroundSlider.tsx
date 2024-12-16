import React, { useState } from "react";

const BackgroundSlider = () => {
  const images = [
    "/images/image1.png",
    "/images/image2.jpg",
    "/images/image3.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-cover bg-center transition-all "
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        opacity: 0.8,
        zIndex: -1, // Coloca o slider atrás de tudo
      }}
    />
  );
};

export default BackgroundSlider;
