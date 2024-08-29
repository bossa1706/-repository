import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A full-fledged e-commerce website built with React and Node.js.',
      image: 'https://th.bing.com/th/id/OIP.gx6xUNY2mTo9m458tIfczQHaHa?rs=1&pid=ImgDetMain', // Update this URL
      link: 'https://github.com/yourusername/ecommerce-site',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my work and skills.',
      image: 'https://th.bing.com/th/id/R.85145fd988be05d24996724770709c5b?rik=pC0ExoXmp%2bV2CQ&pid=ImgRaw&r=0', // Update this URL
      link: 'https://github.com/yourusername/portfolio-site',
    },
    {
      title: 'Task Management App',
      description: 'A task management tool built with React and Firebase.',
      image: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png', // Update this URL
      link: 'https://github.com/yourusername/task-manager',
    },
  ];

  return (
    <section className='bg-gray-100 py-16' id='projects' data-aos="fade-up">
      <div className='container mx-auto'>
        <h1 className="text-3xl font-semibold text-gray-900 text-center" data-aos="zoom-in" data-aos-delay="200">
          My Projects
        </h1>
        <div className="flex flex-wrap justify-center mt-8">
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-1/3 lg:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg" />
                <h2 className="text-2xl font-semibold mt-4">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-indigo-500">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
