import React from "react";
import DeliverySidebar from "../components/DeliverySidebar";
import "../styles/layout.css";
import "../styles/deliveryDashboard.css";

const DeliveryStatus = () => {
  return (
    <div className="app-layout">
      <DeliverySidebar />

      <div className="page-content">
        <h2>Delivery Status Update</h2>
        <p>Update the delivery status for your assigned orders.</p>

        <div className="two-column">
          {/* LEFT SIDE */}
          <div className="card">
            <h3>Select Order</h3>
            <p className="muted">Choose an order to update its delivery status</p>

            <div className="delivery-item">
              <div>
                <strong>ORD002</strong>
                <span className="pending">pending</span>
                <p>Sarah Johnson</p>
                <p>456 Oak Ave, Uptown</p>
              </div>

              <div className="delivery-action">
                <h3>3</h3>
                <p>jars</p>
              </div>
            </div>

            <div className="delivery-item">
              <div>
                <strong>ORD007</strong>
                <span className="pending">pending</span>
                <p>Robert Taylor</p>
                <p>147 Birch Way, North Town</p>
              </div>

              <div className="delivery-action">
                <h3>6</h3>
                <p>jars</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="card center-card">
            <h3>Update Status</h3>
            <p className="muted">Select an order to update its status</p>

            <div className="empty-state">
              <div className="empty-icon">📦</div>
              <h4>No order selected</h4>
              <p>Select an order from the left to update its status.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryStatus;
