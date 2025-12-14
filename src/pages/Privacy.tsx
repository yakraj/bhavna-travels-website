import React from "react";

const Privacy: React.FC = () => {
  return (
    <div className="container page-content">
      <h1>Privacy Policy</h1>
      <div className="terms-content">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Bhavna Tours Travels and Logistics ("we," "our," or
            "us"). We are committed to protecting your privacy and ensuring the
            security of your personal information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you visit our website and use our services.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to
            us when you:
          </p>
          <ul>
            <li>Book a ticket or service</li>
            <li>Register on our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us for support</li>
          </ul>
          <p>
            This information may include your name, email address, phone number,
            billing address, and payment details.
          </p>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process your bookings and transactions</li>
            <li>Send you booking confirmations and updates</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our website and services</li>
            <li>Send you promotional emails (you can opt-out at any time)</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. However, no method of
            transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2>5. Sharing of Information</h2>
          <p>
            We do not sell, trade, or rent your personal identification
            information to others. We may share generic aggregated demographic
            information not linked to any personal identification information
            regarding visitors and users with our business partners, trusted
            affiliates, and advertisers.
          </p>
        </section>

        <section>
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p>
            <strong>Bhavna Tours Travels and Logistics</strong>
            <br />
            Email: support@bhavnatravels.com
            <br />
            Phone: +91 98765 43210
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
