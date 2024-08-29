// eslint-disable-next-line no-unused-vars
import React from 'react';

function CTA() {
  return (
    <div className='bg-blue-500 text-white py-16' data-aos="fade-up">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold" data-aos="zoom-in" data-aos-delay="200">
          Ready to Connect?
        </h1>
        <p className="text-lg mt-4" data-aos="fade-up" data-aos-delay="400">
          I'm excited to connect with fellow developers and tech enthusiasts. Let's collaborate and create something amazing!
        </p>
        <a
          href="mailto:bossa1706@gmail.com"
          className="mt-8 inline-block px-8 py-3 text-blue-500 bg-white hover:bg-indigo-400 rounded-full"
          data-aos="fade-up" data-aos-delay="600"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default CTA;
