import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/deliveryAssignment.css";
import { FaUserCircle } from "react-icons/fa";

const staff = [
  { name: "Mike Wilson", phone: "555-0201", assigned: 3, completed: 156 },
  { name: "Tom Davis", phone: "555-0202", assigned: 2, completed: 203 },
  { name: "James Miller", phone: "555-0203", assigned: 0, completed: 89 },
];

const unassignedOrders = [
  { id: "ORD001", customer: "John Smith", address: "123 Main St, Downtown", jars: 5, date: "Jan 28" },
  { id: "ORD005", customer: "David Lee", address: "654 Maple Dr, East Side", jars: 8, date: "Jan 29" },
];

const assignedOrders = [
  { id: "ORD002", customer: "Sarah Johnson", address: "456 Oak Ave, Uptown", jars: 3, staff: "Mike Wilson", status: "pending" },
  { id: "ORD003", customer: "Michael Brown", address: "789 Pine Rd, Midtown", jars: 10, staff: "Tom Davis", status: "completed" },
  { id: "ORD004", customer: "Emily Davis", address: "321 Elm St, Suburb", jars: 2, staff: "Mike Wilson", status: "delivered" },
  { id: "ORD006", customer: "Lisa Anderson", address: "987 Cedar Ln, West End", jars: 4, staff: "Tom Davis", status: "completed" },
  { id: "ORD007", customer: "Robert Taylor", address: "147 Birch Way, North Town", jars: 6, staff: "Mike Wilson", status: "pending" },
  { id: "ORD008", customer: "Jennifer White", address: "258 Spruce Ave, South Park", jars: 12, staff: "Tom Davis", status: "delivered" },
];

const DeliveryAssignment = () => {
  return (
    <div className="layout">
      <Sidebar />

      <div className="page">
        <h2>Delivery Assignment</h2>
        <p className="subtitle">Assign orders to delivery staff for fulfillment.</p>

        {/* Staff Cards */}
        <div className="staff-cards">
          {staff.map((s, i) => (
            <div className="staff-card" key={i}>
              <FaUserCircle className="avatar" />
              <div>
                <h4>{s.name}</h4>
                <p>{s.phone}</p>
              </div>
              <div className="staff-stats">
                <span>{s.assigned} assigned</span>
                <small>{s.completed} completed</small>
              </div>
            </div>
          ))}
        </div>

        {/* Unassigned Orders */}
        <div className="card">
          <h3>Unassigned Orders</h3>
          <p className="subtitle">2 orders waiting to be assigned</p>

          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Jars</th>
                <th>Order Date</th>
                <th>Assign To</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {unassignedOrders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.customer}</td>
                  <td>{o.address}</td>
                  <td>{o.jars}</td>
                  <td>{o.date}</td>
                  <td>
                    <select>
                      <option>Select staff</option>
                      {staff.map((s) => (
                        <option key={s.name}>{s.name}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button className="btn-primary">Assign</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Assigned Orders */}
        <div className="card">
          <h3>Assigned Orders</h3>
          <p className="subtitle">6 orders currently assigned for delivery</p>

          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Jars</th>
                <th>Assigned To</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {assignedOrders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.customer}</td>
                  <td>{o.address}</td>
                  <td>{o.jars}</td>
                  <td>{o.staff}</td>
                  <td>
                    <span className={`status ${o.status}`}>{o.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAssignment;
