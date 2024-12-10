'use client';

import slideImage from '@/public/image/s.jpg';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 3000;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [slides, setSlides] = useState([
    {
      image: slideImage,
      caption: 'Slide 1',
    },
    {
      image: slideImage,
      caption: 'Slide 3',
    },
    {
      image: slideImage,
      caption: 'Slide 4',
    },
    {
      image: slideImage,
      caption: 'Slide 5',
    },
  ]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval]);

  return (
    <div className="relative w-full overflow-hidden bg-gray-200">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={slide.image}
              alt={slide.caption}
              className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px]"
              width={1920}
              height={1080}
            />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
