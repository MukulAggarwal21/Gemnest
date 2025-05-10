// import React, { useState, useEffect } from 'react';
// import NecklaceImage from '../images/1.png';
// import Necklace from '../images/2.jpg';
// import Rings from '../images/3.jpg';
// import '../App.css';

// const images = [NecklaceImage, Necklace, Rings];

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(goToNextSlide, 3000); // Change image every 3 seconds
//     return () => clearInterval(intervalId); // Cleanup function to clear interval
//   }, [currentIndex]); // Re-run effect when currentIndex changes

//   const goToNextSlide = () => {
//     const newIndex = (currentIndex + 1) % images.length;
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div className="slider-container">
//       <img className="images" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
//     </div>
//   );
// };

// export default Slider;

import React, { useState, useEffect } from 'react';
import NecklaceImage from '../images/1.png';
import Necklace from '../images/2.jpg';
import Rings from '../images/3.jpg';
import '../App.css';

const images = [NecklaceImage, Necklace, Rings];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000); // Change image every 3 seconds
    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []); // Empty dependency array — only run once when component mounts

  return (
    <div className="slider-container">
      <img className="images" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default Slider;
