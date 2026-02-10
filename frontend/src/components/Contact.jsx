import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p className="subtitle">Have questions? Reach out to us anytime.</p>

      <div className="contact-grid">
        <div>
          <h4>Phone</h4>
          <p>+1 (555) 123-4567</p>
        </div>

        <div>
          <h4>Email</h4>
          <p>info@aquaflow.com</p>
        </div>

        <div>
          <h4>Address</h4>
          <p>123 Water St, City</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
