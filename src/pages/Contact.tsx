import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container page-content">
      <h1>Contact Us</h1>
      <p className="section-subtitle">
        We'd love to hear from you. Reach out to us for any queries.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <MapPin className="info-icon" />
            <div>
              <h3>Our Office</h3>
              <p>
                Near Bus stand, Sinnar
                <br />
                Nashik, Maharashtra - 422101
              </p>
            </div>
          </div>

          <div className="info-item">
            <Phone className="info-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 77200 00934</p>
              <p>+91 77200 00938</p>
            </div>
          </div>

          <div className="info-item">
            <Mail className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>info@bhavnatravels.com</p>
              <p>support@bhavnatravels.com</p>
            </div>
          </div>

          <div className="info-item">
            <Clock className="info-icon" />
            <div>
              <h3>Working Hours</h3>
              <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
              <p>Sun: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
