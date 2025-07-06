import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cdex, setCdex] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      const imageList = [];
      let index = 1;
      
      // Try to load images starting from 1, 2, 3, etc.
      while (true) {
        try {
          // Try common image extensions
          const extensions = ['jpg', 'jpeg', 'png'];
          let imageFound = false;
          
          for (const ext of extensions) {
            try {
              const imagePath = `/images/carousel/${index}.${ext}`;
              // Create a test image to check if it exists
              const img = new Image();
              img.src = imagePath;
              
              await new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = reject;
              });
              
              imageList.push({
                id: `${index}`,
                src: imagePath,
                alt: `Carousel Image ${index}`
              });
              imageFound = true;
              break;
            } catch (error) {
              // Continue to next extension
            }
          }
          
          if (!imageFound) {
            // If no image found with current index, stop looking
            break;
          }
          
          index++;
        } catch (error) {
          break;
        }
      }
      
      setImages(imageList);
      setLoading(false);
    };

    loadImages();
  }, []);

  // Fallback images based on your project structure
  const fallbackImages = [
    { id: '1', src: '/images/carousel/1.jpg', alt: 'Carousel Image 1' },
    { id: '2', src: '/images/carousel/2.jpg', alt: 'Carousel Image 2' },
    { id: '3', src: '/images/carousel/3.jpg', alt: 'Carousel Image 3' },
    { id: '4', src: '/images/carousel/4.jpg', alt: 'Carousel Image 4' },
    { id: '5', src: '/images/carousel/5.jpg', alt: 'Carousel Image 5' },
  ];

  const imageListToUse = images.length > 0 ? images : fallbackImages;

  const nextImage = () => {
    setCdex((prev) => (prev + 1) % imageListToUse.length);
  };

  const prevImage = () => {
    setCdex((prev) => (prev - 1 + imageListToUse.length) % imageListToUse.length);
  };

  if (loading && images.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-gray-500">Loading images...</div>
      </div>
    );
  }

  if (imageListToUse.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-gray-500">No images found</div>
      </div>
    );
  }

  return (
    <div className='relative w-full h-[60vh] rounded-xl bg-white overflow-hidden shadow-lg'>
      {/* Main Image Container */}
      <div className='relative w-full h-full'>
        <img 
          src={imageListToUse[cdex].src} 
          alt={imageListToUse[cdex].alt}
          className='w-full h-full object-cover' // object-cover ensures proper fitting
        />
        
        {/* Navigation Buttons */}
        <button 
          onClick={prevImage}
          className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200'
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextImage}
          className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200'
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Dots Indicator */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {imageListToUse.map((_, index) => (
          <button
            key={index}
            onClick={() => setCdex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === cdex 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-70'
            }`}
          />
        ))}
      </div>
      
      {/* Image Counter */}
      <div className='absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm'>
        {cdex + 1} / {imageListToUse.length}
      </div>
    </div>
  );
};

export default Carousel;