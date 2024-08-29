// eslint-disable-next-line no-unused-vars
import React from 'react';

function Hero() {
  return (
    <div className="bg-gray-900 text-white py-16" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold" data-aos="zoom-in" data-aos-delay="200">
          Hello, I'm Pathanin Salungyu
        </h1>
        <p className="text-lg mt-4" data-aos="fade-up" data-aos-delay="400">
          I’m a third-year student at RBAC. Welcome to my personal website!
        </p>
        <a
          href="#about"
          className="mt-8 inline-block px-8 py-3 text-white bg-indigo-500 hover:bg-indigo-400 rounded-full"
          data-aos="fade-up" data-aos-delay="600"
        >
          Learn More About Me
        </a>
      </div>
    </div>
  );
}

export default Hero;
