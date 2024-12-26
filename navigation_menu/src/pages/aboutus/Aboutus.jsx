import React from 'react';
import './Aboutus.css'; 

const Aboutus = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          Welcome to MySite! We are a dedicated team of professionals committed to providing high-quality services that cater to your needs. Our mission is to help you achieve your goals through innovative solutions and personalized care.
        </p>
        <p>
          Whether you're looking for web development, digital marketing, or any other services, we are here to help. Our team brings years of experience and expertise to every project, ensuring success and customer satisfaction.
        </p>
      </div>
      
      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://www.shutterstock.com/image-photo/close-headshot-portrait-picture-smiling-260nw-1733598437.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=" alt="Team Member 3" />
            <h3>Bob Johnson</h3>
            <p>Marketing Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
