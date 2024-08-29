// Add this new component
import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you could send formData to a backend or API
  };

  return (
    <section className='bg-gray-100 py-16' id='contact' data-aos="fade-up">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 text-center" data-aos="zoom-in" data-aos-delay="200">
          Contact Me
        </h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="5"
              required
            />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
