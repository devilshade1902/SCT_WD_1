import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className='home'>

      <section className='hero'>
        <h1>Welcome to MySite</h1>
        <p>Your one-stop solution for all your needs.</p>
        <button className='cta-button'>Get Started</button>
      </section>

      <section className='about-us'>
        <h2>About Us</h2>
        <p>
          At MySite, we are dedicated to providing the best services to our
          clients. Our team of professionals works tirelessly to ensure your
          satisfaction.
        </p>
      </section>

      <section className='services'>
        <h2>Our Services</h2>
        <ul>
          <li>
            <h3>Web Development</h3>
            <p>We create stunning, responsive websites tailored to your needs.</p>
          </li>
          <li>
            <h3>Digital Marketing</h3>
            <p>Boost your brand's online presence with our expert strategies.</p>
          </li>
          <li>
            <h3>Consulting</h3>
            <p>Get personalized advice to help your business thrive.</p>
          </li>
        </ul>
      </section>

      <section className='contact'>
        <h2>Contact Us</h2>
        <p>Have questions? We'd love to hear from you!</p>
        <form className='contact-form'>
          <input type='text' placeholder='Your Name' required />
          <input type='email' placeholder='Your Email' required />
          <textarea placeholder='Your Message' rows='5' required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
