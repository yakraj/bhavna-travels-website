import React from "react";

const About: React.FC = () => {
  return (
    <div className="container page-content">
      <h1>About Us</h1>
      <div className="about-content">
        <p>
          Welcome to <strong>Bhavna Tours Travels and Logistics</strong>, your
          trusted partner for travel and transportation needs.
        </p>

        <p>
          Established with a vision to provide safe, reliable, and comfortable
          travel experiences, we have grown to become a leading name in the
          industry. Whether you are planning a family vacation, a business trip,
          or need to send a parcel across the city, we have got you covered.
        </p>

        <h3>Our Mission</h3>
        <p>
          To deliver exceptional travel and logistics services with a focus on
          customer satisfaction, safety, and punctuality.
        </p>

        <h3>Why Choose Us?</h3>
        <ul>
          <li>Modern fleet of buses and cars</li>
          <li>Experienced and professional drivers</li>
          <li>Real-time tracking for parcels</li>
          <li>24/7 Customer Support</li>
          <li>Affordable pricing</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
