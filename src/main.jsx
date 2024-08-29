import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './AppTail.jsx';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import 'slick-carousel/slick/slick.css'; // Corrected import for slick-carousel
import 'slick-carousel/slick/slick-theme.css'; // Corrected import for slick-carousel

// Initialize AOS with custom settings
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  easing: 'ease-in-out', // Animation easing
  once: false, // Animation triggers every time the element comes into view
  offset: 100, // Offset from the viewport (in px) before the animation triggers
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
