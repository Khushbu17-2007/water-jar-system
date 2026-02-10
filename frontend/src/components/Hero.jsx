import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" id="hero">
      <h1>
        Pure Water Delivered <br /> to Your Doorstep
      </h1>

      <p>
        AquaFlow is your trusted partner for clean, safe drinking water.
        Order water jars easily and get them delivered fresh to your home or office.
      </p>

      <div className="hero-buttons">
        <button
          className="btn primary"
          onClick={() => navigate("/order")}
        >
          Order Water Jar
        </button>

        <button
          className="btn outline"
          onClick={() => navigate("/supplier-login")}
        >
          Supplier Login
        </button>

        <button
          className="btn outline"
          onClick={() => navigate("/delivery-login")}
        >
          Delivery Staff Login
        </button>
      </div>
    </section>
  );
};

export default Hero;
