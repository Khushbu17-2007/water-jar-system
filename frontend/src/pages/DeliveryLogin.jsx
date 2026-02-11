import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/form.css";


const DeliveryLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/delivery-dashboard");
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h2>Delivery Staff Login</h2>
        <p className="subtitle">
          Sign in to access your delivery assignments and update status.
        </p>

        <label>Email</label>
        <input type="email" placeholder="staff@aquaflow.com" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <button className="primary-btn" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default DeliveryLogin;
