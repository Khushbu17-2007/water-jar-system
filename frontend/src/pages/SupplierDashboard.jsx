import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

const SupplierDashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <p className="subtitle">Welcome back! Here's an overview of your business.</p>

        {/* CARDS */}
        <div className="card-grid">
          <div className="card"><h4>Total Orders</h4><h2>156</h2></div>
          <div className="card"><h4>Pending Orders</h4><h2>12</h2></div>
          <div className="card"><h4>Completed Orders</h4><h2>138</h2></div>
          <div className="card"><h4>Jar Returns</h4><h2>125</h2></div>

          <div className="card"><h4>Total Customers</h4><h2>45</h2></div>
          <div className="card"><h4>Total Revenue</h4><h2>₹15,600</h2></div>
          <div className="card"><h4>Today’s Orders</h4><h2>8</h2></div>
          <div className="card"><h4>Weekly Orders</h4><h2>34</h2></div>
        </div>

        {/* TABLE */}
        <div className="table-box">
          <h3>Recent Orders</h3>

          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Jars</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>ORD001</td><td>John Smith</td><td>555-0101</td><td>5</td><td>Jan 28</td>
                <td><span className="status new">New</span></td>
              </tr>
              <tr>
                <td>ORD002</td><td>Sarah Johnson</td><td>555-0102</td><td>3</td><td>Jan 28</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
              <tr>
                <td>ORD003</td><td>Michael Brown</td><td>555-0103</td><td>10</td><td>Jan 27</td>
                <td><span className="status completed">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default SupplierDashboard;
