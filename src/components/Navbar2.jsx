// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className='bg-blue-500 p-4'>
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className='text-white text-2xl'>Pathanin</a>
          {/* Toggle Menu Button*/}
          <div className="md:hidden">
            <button
              id='menu-toggle'
              className='text-white'
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinejoin='round'
                strokeWidth="2"
                viewBox='0 0 24 24'
                className='w-6 h-6'
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden md:flex space-x-4">
            <li><a href="#" className='text-white hover:text-gray-300'>Home</a></li>
            <li><a href="#about" className='text-white hover:text-gray-300'>About</a></li>
            <li><a href="#experience" className='text-white hover:text-gray-300'>Experience</a></li>
            <li><a href="#contact" className='text-white hover:text-gray-300'>Contact</a></li>
          </ul>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul id="mobile-menu" className="md:hidden flex flex-col pt-3">
            <li><a href="#" className='text-white hover:text-gray-300'>Home</a></li>
            <li><a href="#about" className='text-white hover:text-gray-300'>About</a></li>
            <li><a href="#experience" className='text-white hover:text-gray-300'>Experience</a></li>
            <li><a href="#contact" className='text-white hover:text-gray-300'>Contact</a></li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar2;
