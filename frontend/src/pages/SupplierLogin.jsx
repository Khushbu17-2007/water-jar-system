import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/form.css";

const SupplierLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // direct dashboard open (static login)
    navigate("/supplier-dashboard");
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h2>Supplier Login</h2>
        <p className="subtitle">
          Sign in to access your supplier dashboard and manage orders.
        </p>

        <label>Email</label>
        <input type="email" placeholder="admin@aquaflow.com" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <button className="primary-btn" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SupplierLogin;
