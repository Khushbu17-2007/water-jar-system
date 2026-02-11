import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/jarReturns.css";

const JarReturns = () => {
  return (
    <div className="layout">
      <Sidebar />

      <div className="page">
        <h2>Jar Return Management</h2>
        <p className="subtitle">Track delivered jars and next-day empty jar return status.</p>

        <div className="stats">
          <div className="stat">Total Delivered <b>28 jars</b></div>
          <div className="stat">Jars Returned <b>18 jars</b></div>
          <div className="stat">Pending Returns <b>10 jars</b></div>
          <div className="stat">Return Rate <b>64%</b></div>
        </div>

        <div className="card">
          <h3>Pending Jar Returns</h3>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Jars Delivered</th>
                <th>Delivery Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ORD003</td>
                <td>Michael Brown</td>
                <td>555-0103</td>
                <td>789 Pine Rd, Midtown</td>
                <td><span className="badge">10</span></td>
                <td>Jan 28</td>
                <td><button className="btn-outline">Mark Returned</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <h3>Customer Jar Inventory</h3>
          <table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Jars in Possession</th>
                <th>Total Orders</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>CUST001</td><td>John Smith</td><td>555-0101</td><td>123 Main St</td><td><span className="badge">5</span></td><td>15</td></tr>
              <tr><td>CUST002</td><td>Sarah Johnson</td><td>555-0102</td><td>456 Oak Ave</td><td><span className="badge">3</span></td><td>23</td></tr>
              <tr><td>CUST003</td><td>Michael Brown</td><td>555-0103</td><td>789 Pine Rd</td><td><span className="badge warning">10</span></td><td>45</td></tr>
              <tr><td>CUST004</td><td>Emily Davis</td><td>555-0104</td><td>321 Elm St</td><td><span className="badge">2</span></td><td>8</td></tr>
              <tr><td>CUST005</td><td>David Lee</td><td>555-0105</td><td>654 Maple Dr</td><td><span className="badge warning">8</span></td><td>32</td></tr>
              <tr><td>CUST006</td><td>Lisa Anderson</td><td>555-0106</td><td>987 Cedar Ln</td><td><span className="badge">4</span></td><td>19</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JarReturns;
