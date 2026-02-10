import React from "react";
import { FaHome, FaUsers, FaShoppingCart, FaTruck, FaMoneyBill, FaUndo, FaFileAlt, FaSignOutAlt } from "react-icons/fa";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">AquaFlow</h2>

      <ul>
        <li className="active"><FaHome /> Dashboard</li>
        <li><FaUsers /> Customers</li>
        <li><FaShoppingCart /> Orders</li>
        <li><FaTruck /> Delivery Assignment</li>
        <li><FaMoneyBill /> Payments</li>
        <li><FaUndo /> Jar Returns</li>
        <li><FaFileAlt /> Reports</li>
      </ul>

      <div className="sidebar-footer">
        <p>⬅ Back to Home</p>
        <p className="logout"><FaSignOutAlt /> Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
