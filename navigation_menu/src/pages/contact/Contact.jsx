import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out to us with your questions, feedback, or inquiries.</p>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h3>Send us a message</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>

        <div className="contact-details">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> contact@mysite.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
