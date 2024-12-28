import React from 'react';
import { services } from '../data/data';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="section-heading">
          <h2>Our Services</h2>
          <p>We offer a range of services to help your business grow and succeed.</p>
        </div>
        <div className="services-list">
          {services.map((item,index) => (
            <div key={index} className="service-item">
            <i className="service-icon">{item.icon}</i>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href="#contact" className="join-us-btn">{item.link}</a>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
