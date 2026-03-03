"use client";
import { useState, useEffect, useRef } from "react";

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => resetTimeout();
  }, [current, images.length]);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="flex-shrink-0 w-full px-5 md:px-0">
            {/* Use a dynamic height container */}
            <div className="rounded-2xl md:rounded-none overflow-hidden w-full">
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Prev/Next buttons */}
      <button
        onClick={prev}
        className="absolute left-[10px] md:left-[1cm] top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-[10px] md:right-[1cm] top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        ›
      </button>
    </div>
  );
}
