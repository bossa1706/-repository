// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay for better user experience
    autoplaySpeed: 3000, // Adjust autoplay speed (in milliseconds)
    arrows: true, // Show navigation arrows
  };

  return (
    <div className='carousel-container'>
      <Slider {...settings}>
        <div className='carousel-slide'>
          <img
            src="https://th.bing.com/th/id/OIP.rXK9zSoom8OJV2s_RhUMFwHaFP?rs=1&pid=ImgDetMain"
            alt="Slide 1"
            className="w-full h-64 object-cover rounded-lg" // Fixed height and cover object-fit
          />
        </div>
        <div className='carousel-slide'>
          <img
            src="https://th.bing.com/th/id/OIP.9AuIJR3cb81vyv8xC5n9sgAAAA?rs=1&pid=ImgDetMain"
            alt="Slide 2"
            className="w-full h-64 object-cover rounded-lg" // Fixed height and cover object-fit
          />
        </div>
        <div className='carousel-slide'>
          <img
            src="https://th.bing.com/th/id/R.ef03b49629f5db65d9cfc716e90c0c3f?rik=Ex%2bdiGww6Fv%2fQQ&pid=ImgRaw&r=0"
            alt="Slide 3"
            className="w-full h-64 object-cover rounded-lg" // Fixed height and cover object-fit
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
