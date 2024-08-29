// eslint-disable-next-line no-unused-vars
import React from 'react';

function About() {
  return (
    <section className='bg-gray-100 py-16' id='about' data-aos="fade-up">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-3xl font-semibold text-gray-900" data-aos="zoom-in" data-aos-delay="200">
          About Me
        </h1>
        <p className="mt-4 text-gray-800" data-aos="fade-up" data-aos-delay="400">
          I am Pathanin Salungyu, currently in my third year at RBAC. I am passionate about web development and design.
          Feel free to reach out to me at <a href="mailto:bossa1706@gmail.com" className='text-indigo-500'>bossa1706@gmail.com</a>.
        </p>
      </div>
    </section>
  );
}

export default About;
