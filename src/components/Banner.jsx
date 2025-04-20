import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-[400px] w-full">
      <div className="absolute inset-0">
        <img
          src="/banner-image.jpg" // Replace with your actual image path from public folder
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay for better text visibility */}
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Site</h1>
        <p className="text-xl md:text-2xl">Discover Amazing Content</p>
      </div>
    </div>
  );
};

export default Banner; 