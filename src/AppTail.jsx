// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar2 from './components/Navbar2';
import Hero from './components/Hero';
import About from './components/About';
import InfoOne from './components/InfoOne';
import InfoTwo from './components/InfoTwo';
import CTA from './components/CTA';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';


function AppTail() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <div>
      <Navbar2 />
      <Hero />
      <Experience />
      <About />
      <InfoOne />
      <Projects />
      <Testimonials />
      <InfoTwo />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default AppTail;
