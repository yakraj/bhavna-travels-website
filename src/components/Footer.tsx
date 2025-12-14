import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div
          className="footer-links"
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Link to="/privacy" style={{ color: "white", fontSize: "0.9rem" }}>
            Privacy Policy
          </Link>
          <Link to="/terms" style={{ color: "white", fontSize: "0.9rem" }}>
            Terms & Conditions
          </Link>
          <Link to="/contact" style={{ color: "white", fontSize: "0.9rem" }}>
            Contact Us
          </Link>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Bhavna Tours Travels and Logistics.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
