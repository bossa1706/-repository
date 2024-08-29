// eslint-disable-next-line no-unused-vars
import React from 'react';
import Carousel from './Carousel'; // Import the Carousel component

function Experience() {
  return (
    <section className='bg-gray-100 py-16' data-aos="fade-up">
      <div className='container mx-auto flex flex-wrap justify-center'>
        {/* Profile Block */}
        <div className='w-full md:w-1/2 lg:w-1/2 px-4 mb-8'>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-between" style={{ height: '400px' }}>
            <div className="flex justify-center mb-4">
              <img
                src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/322115188_868461334607968_2264297501550425671_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEAvfOqdjT-UPwr7hSHLuKm7y-V-NDrEgPvL5X40OsSA4YLzpVHDCZK2V7mcl2FG2oCafo7phmZuhFmoQHtQTz7&_nc_ohc=R7OaRGJdCWoQ7kNvgExQrK5&_nc_ht=scontent.fbkk29-4.fna&oh=00_AYDpA7pdNDe3KV-iwqXP_4XBHqzaOPefjA09rVYwmzSCrg&oe=66C9E07E"
                alt="Pathanin Salungyu"
                className="w-32 h-32 rounded-full border-4 border-indigo-500"
              />
            </div>
            <p className='text-gray-600 text-center flex-1'>
              Currently in my third year at RBAC, I’m learning and applying new skills in web development.
            </p>
            <p className='text-gray-800 font-semibold mt-4 text-center'>
              Pathanin Salungyu
            </p>
          </div>
        </div>

        {/* Carousel Block */}
        <div className='w-full md:w-1/2 lg:w-1/2 px-4 mb-8'>
          <div className="bg-white p-6 rounded-lg shadow-md" style={{ height: '400px' }}>
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
