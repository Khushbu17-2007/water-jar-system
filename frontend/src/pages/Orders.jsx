import Sidebar from "../components/Sidebar";
import "../styles/Orders.css";
import { FiSearch, FiEye } from "react-icons/fi";

const orders = [
  { id: "ORD001", name: "John Smith", phone: "555-0101", jars: 5, date: "Jan 28", status: "New", payment: "Pending" },
  { id: "ORD002", name: "Sarah Johnson", phone: "555-0102", jars: 3, date: "Jan 28", status: "Pending", payment: "Pending" },
  { id: "ORD003", name: "Michael Brown", phone: "555-0103", jars: 10, date: "Jan 27", status: "Completed", payment: "Paid" },
  { id: "ORD004", name: "Emily Davis", phone: "555-0104", jars: 2, date: "Jan 27", status: "Delivered", payment: "Paid" },
  { id: "ORD005", name: "David Lee", phone: "555-0105", jars: 8, date: "Jan 29", status: "New", payment: "Pending" },
  { id: "ORD006", name: "Lisa Anderson", phone: "555-0106", jars: 4, date: "Jan 26", status: "Completed", payment: "Paid" },
  { id: "ORD007", name: "Robert Taylor", phone: "555-0107", jars: 6, date: "Jan 29", status: "Pending", payment: "Pending" },
  { id: "ORD008", name: "Jennifer White", phone: "555-0108", jars: 12, date: "Jan 25", status: "Delivered", payment: "Paid" },
];

function Orders() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="page">
        <h2>Orders</h2>
        <p>Manage and track all customer orders.</p>

        <div className="order-stats">
          <div className="stat blue">New Orders <b>2</b></div>
          <div className="stat yellow">Pending Orders <b>2</b></div>
          <div className="stat green">Completed Orders <b>4</b></div>
        </div>

        <div className="card">
          <div className="table-header">
            <h3>Order Management</h3>
            <div className="search">
              <FiSearch />
              <input placeholder="Search orders..." />
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Jars</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.name}</td>
                  <td>{o.phone}</td>
                  <td>{o.jars}</td>
                  <td>{o.date}</td>
                  <td><span className={`tag ${o.status.toLowerCase()}`}>{o.status}</span></td>
                  <td><span className={`tag ${o.payment.toLowerCase()}`}>{o.payment}</span></td>
                  <td><FiEye className="icon" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
