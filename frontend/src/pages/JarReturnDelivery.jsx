import React from "react";
import DeliverySidebar from "../components/DeliverySidebar";
import "../styles/layout.css";
import "../styles/deliveryDashboard.css";

const JarReturnDelivery = () => {
  return (
    <div className="app-layout">
      <DeliverySidebar />

      <div className="page-content">
        <h2>Jar Return Update</h2>
        <p>Track and update empty jar collections from customers.</p>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat">
            To Collect
            <b>0 jars</b>
          </div>

          <div className="stat">
            Collected
            <b>2 jars</b>
          </div>

          <div className="stat">
            Pending Orders
            <b>0</b>
          </div>
        </div>

        {/* Pending */}
        <div className="card center-card">
          <h3>Pending Jar Collections</h3>
          <p className="muted">Empty jars to collect from delivered orders</p>

          <div className="empty-state">
            <div className="success-icon">✔</div>
            <h4>All jars collected!</h4>
            <p>No pending jar returns.</p>
          </div>
        </div>

        {/* Collected */}
        <div className="card">
          <h3>Collected Returns</h3>
          <p className="muted">Successfully collected empty jars</p>

          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Jars Collected</th>
                <th>Collection Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ORD004</td>
                <td>Emily Davis</td>
                <td>321 Elm St, Suburb</td>
                <td>2</td>
                <td>Jan 27</td>
                <td className="paid">Collected</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JarReturnDelivery;
