import React from "react";
import "../styles/form.css";

const SupplierLogin = () => {
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

        <button className="primary-btn">Sign In</button>

        
      </div>
    </div>
  );
};

export default SupplierLogin;
