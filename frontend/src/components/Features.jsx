import React from "react";
import "../styles/features.css";

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>Why Choose AquaFlow?</h2>
      <p className="subtitle">
        We provide the best water delivery service with quality and reliability.
      </p>

      <div className="features-grid">
        <div className="feature-card">
          <h3>Pure & Clean Water</h3>
          <p>
            Our water goes through rigorous purification processes to ensure the highest quality.
          </p>
        </div>

        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>
            Same-day delivery available. Get your water jars delivered when you need them.
          </p>
        </div>

        <div className="feature-card">
          <h3>Quality Assured</h3>
          <p>
            Regular quality checks and certified processes ensure your safety.
          </p>
        </div>

        <div className="feature-card">
          <h3>Easy Scheduling</h3>
          <p>
            Schedule your deliveries at your convenience. Flexible timing options available.
          </p>
        </div>

        <div className="feature-card">
          <h3>Jar Return System</h3>
          <p>
            Eco-friendly jar return and exchange program. Return empty jars hassle-free.
          </p>
        </div>

        <div className="feature-card">
          <h3>24/7 Support</h3>
          <p>
            Our customer support team is always ready to assist you with any queries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
