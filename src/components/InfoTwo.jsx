// eslint-disable-next-line no-unused-vars
import React from 'react';

function InfoTwo() {
  return (
    <div className='container mx-auto flex items-center py-16' data-aos="fade-up">
      <div className="w-1/2 px-6" data-aos="fade-up" data-aos-delay="400">
        <h2 className="text-3xl font-semibold">More About Me</h2>
        <p className="text-gray-600 mt-4">
          I have a keen interest in software development and enjoy working on both front-end and back-end projects. 
          I’m eager to continue learning and growing in this field.
        </p>
      </div>
      <div  className="w-1/2" data-aos="zoom-in" data-aos-delay="200">
        <img 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Description"
          className='w-full h-auto rounded-lg'
        />
      </div>
    </div>
  );
}

export default InfoTwo;
