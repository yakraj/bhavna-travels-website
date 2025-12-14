import React from "react";

const Terms: React.FC = () => {
  return (
    <div className="container page-content">
      <h1>Terms and Conditions</h1>
      <div className="terms-content">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
        <p>
          Please read these Terms and Conditions ("Terms", "Terms and
          Conditions") carefully before using the Bhavna Tours Travels and
          Logistics website and services operated by us.
        </p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our Service, you agree to be bound by these
            Terms. If you disagree with any part of the terms, then you may not
            access the Service.
          </p>
        </section>

        <section>
          <h2>2. Booking and Reservations</h2>
          <p>
            All bookings are subject to availability. We reserve the right to
            refuse any booking at our discretion. A valid ticket or booking
            confirmation must be presented at the time of travel or service
            usage.
          </p>
          <p>
            <strong>Identity Proof:</strong> Passengers must carry a valid
            government-issued photo ID (Aadhar Card, Voter ID, Passport, Driving
            License) while travelling. Failure to produce a valid ID may result
            in denial of boarding.
          </p>
        </section>

        <section>
          <h2>3. Payment Policy</h2>
          <p>
            Full payment must be made at the time of booking unless otherwise
            specified. We accept payments via credit/debit cards, net banking,
            and UPI. All prices are in Indian Rupees (INR) and include
            applicable taxes unless stated otherwise.
          </p>
        </section>

        <section>
          <h2>4. Cancellation and Refund Policy</h2>
          <ul>
            <li>
              <strong>More than 24 hours before departure:</strong> 50%
              cancellation charges apply.
            </li>
            <li>
              <strong>Within 24 hours of departure:</strong> No refund will be
              provided.
            </li>
            <li>
              <strong>No Show:</strong> No refund will be provided if the
              passenger fails to report at the boarding point at the scheduled
              time.
            </li>
            <li>
              Refunds, if applicable, will be processed within 7-10 working days
              to the original mode of payment.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Luggage and Parcel Policy</h2>
          <p>
            <strong>Passenger Luggage:</strong> Each passenger is allowed up to
            15kg of personal luggage. Excess luggage will be charged as per
            standard rates. We are not responsible for any loss or damage to
            valuables kept in the luggage.
          </p>
          <p>
            <strong>Logistics/Parcels:</strong> We do not transport prohibited
            items, including but not limited to explosives, flammable materials,
            illegal drugs, and contraband. We are not liable for damage to
            fragile items if they are not packed according to our safety
            standards.
          </p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            Bhavna Tours Travels and Logistics shall not be liable for any
            indirect, incidental, special, consequential or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from (i) your access to or use
            of or inability to access or use the Service; (ii) any conduct or
            content of any third party on the Service.
          </p>
          <p>
            We are not responsible for delays or cancellations caused by "Force
            Majeure" events such as natural disasters, strikes, riots, or
            government restrictions.
          </p>
        </section>

        <section>
          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. What constitutes a material change will be
            determined at our sole discretion. By continuing to access or use
            our Service after those revisions become effective, you agree to be
            bound by the revised terms.
          </p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at
            support@bhavnatravels.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
