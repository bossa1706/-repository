// eslint-disable-next-line no-unused-vars
import React from 'react';

function InfoOne() {
  return (
    <div className='container mx-auto flex items-center py-4' data-aos="fade-up">
      <div 
        className="w-1/2" 
        data-aos="zoom-in" 
        data-aos-delay="200"
      >
        <img 
          src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/434657071_1606676516539297_7590483789065299286_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGtAa2E04z4POA5ML3EhQn6Lp4DhLSxVvkungOEtLFW-dnW-pgvSS1kR6_a_LrDs9edDkR8Ic0aS_F7CnKfOXJF&_nc_ohc=LzAKQXhcK4oQ7kNvgH0elaX&_nc_ht=scontent.fbkk29-4.fna&oh=00_AYC2UU2SdqtvU27Ck2txIMGOzGYTsY10PuPXoYpNfE3zhQ&oe=66CA0A83"
          alt="A description of the image"
          className='w-full h-auto rounded-lg'
        />
      </div>
      <div className="w-1/2 px-6" data-aos="fade-up" data-aos-delay="400">
        <h2 className="text-3xl font-semibold">My Experience</h2>
        <p className="text-gray-600 mt-4">
          I'm currently honing my skills in web development and design, looking forward to applying what I've learned in real-world projects.
        </p>
      </div>
    </div>
  );
}

export default InfoOne;
