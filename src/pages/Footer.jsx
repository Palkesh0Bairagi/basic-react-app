import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>CraftMyWeb</h2>
          <p>Providing modern web solutions tailored to your business needs.</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><strong>Email:</strong> palkeshbairagi040@gmail.com</p>
          <p><strong>Phone:</strong> +91-7047696432</p>
          <p><strong>Address:</strong> 214 Safi Nagar Ratlam, (M.P) India</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/palkesh-bairagi-916161218/"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 CraftMyWeb. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
