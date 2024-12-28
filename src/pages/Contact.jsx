import { useRef } from 'react';
import emailjs from 'emailjs-com';

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const templateId = import.meta.env.VITE_TEMPLATE_KEY;
const sessionId = import.meta.env.VITE_SESSION_KEY;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(sessionId, templateId, form.current, publicKey) // Use publicKey directly
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send the message, please try again later.');
        }
      );

    e.target.reset(); // Clear form after submission
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-heading">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you! Please fill out the form below or reach out to us directly.</p>
        </div>
        <div className="contact-form">
          <form id="contactForm" ref={form} onSubmit={sendEmail}>
            {/* Form fields */}
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
