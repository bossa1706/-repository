import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote: "Pathanin's work is top-notch! His attention to detail and commitment to quality are outstanding.",
      name: 'John Doe',
      position: 'CEO, Tech Corp',
      image: 'https://example.com/john-doe-image.jpg' // Update this URL
    },
    {
      quote: "I’ve had the pleasure of mentoring Pathanin. His growth in web development has been remarkable.",
      name: 'Jane Smith',
      position: 'Senior Developer, Web Innovations',
      image: 'https://example.com/jane-smith-image.jpg' // Update this URL
    },
    {
      quote: "Working with Pathanin was a great experience. He's a quick learner and a strong team player.",
      name: 'Alex Johnson',
      position: 'Project Manager, Creatives Inc.',
      image: 'https://example.com/alex-johnson-image.jpg' // Update this URL
    },
  ];

  return (
    <section className='bg-white py-16' data-aos="fade-up">
      <div className='container mx-auto text-center'>
        <h1 className="text-3xl font-semibold text-gray-900" data-aos="zoom-in" data-aos-delay="200">
          Testimonials
        </h1>
        <div className="flex flex-wrap justify-center mt-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 lg:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <p className="text-gray-800 font-semibold mt-4">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
