import React from 'react';
import './Services.css'; 

const Services = () => {
  return (
    <div className="services">
      <div className="services-intro">
        <h1>Our Services</h1>
        <p>
          At MySite, we offer a range of services tailored to meet your needs. Whether you're a business looking to grow your online presence or an individual in need of custom solutions, we’ve got you covered.
        </p>
      </div>

      <div className="services-list">
        <div className="service-item">
          <img src="https://itspectrumsolutions.com/wp-content/uploads/2024/04/1_pE2fOVDikEUwiQJlh4ggzg.jpeg" alt="Service 1" />
          <h3>Web Development</h3>
          <p>
            Build fast, responsive, and user-friendly websites to help your business stand out online.
          </p>
        </div>
        <div className="service-item">
          <img src="https://usa.bootcampcdn.com/wp-content/uploads/sites/119/2020/11/DM_blog_post_image_03.jpg" alt="Service 2" />
          <h3>Digital Marketing</h3>
          <p>
            Enhance your brand's online presence through targeted campaigns and SEO strategies.
          </p>
        </div>
        <div className="service-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9mNHGnYjLt5AasbaOOja-m5u_MzMEpMn7KQ&s" alt="Service 3" />
          <h3>Custom Solutions</h3>
          <p>
            Get personalized solutions designed to meet your unique requirements and goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
