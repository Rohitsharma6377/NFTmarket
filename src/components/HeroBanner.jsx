import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative h-[500px] w-full">
      <div className="absolute inset-0">
        <img
          src="/hero-banner.jpg" // Replace with your actual hero image path
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto h-full flex flex-col items-start justify-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Your Hero Title
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl">
          Your compelling hero description goes here. Make it engaging and informative.
        </p>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroBanner; 