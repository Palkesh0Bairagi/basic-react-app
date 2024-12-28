import React from 'react';
import lap from '../assets/pexels-fauxels-3183150.jpg'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={lap} alt="About Us" />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>Welcome to <strong>Our Company</strong>, where innovation meets excellence.</p>
          <p>We specialize in delivering high-quality solutions tailored to your needs.</p>
          <a href="#services" className="learnMoreBtn">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default About;
