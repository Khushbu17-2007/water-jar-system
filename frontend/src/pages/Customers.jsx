import Sidebar from "../components/Sidebar";
import "../styles/Customers.css";
import { FiSearch, FiUserPlus } from "react-icons/fi";

const customers = [
  {
    id: "CUST001",
    name: "John Smith",
    phone: "555-0101",
    address: "123 Main St, Downtown",
    orders: 15,
    jars: 5,
    joinDate: "Jun 15, 2025",
  },
  {
    id: "CUST002",
    name: "Sarah Johnson",
    phone: "555-0102",
    address: "456 Oak Ave, Uptown",
    orders: 23,
    jars: 3,
    joinDate: "Mar 20, 2025",
  },
  {
    id: "CUST003",
    name: "Michael Brown",
    phone: "555-0103",
    address: "789 Pine Rd, Midtown",
    orders: 45,
    jars: 10,
    joinDate: "Nov 10, 2024",
  },
  {
    id: "CUST004",
    name: "Emily Davis",
    phone: "555-0104",
    address: "321 Elm St, Suburb",
    orders: 8,
    jars: 2,
    joinDate: "Sep 5, 2025",
  },
  {
    id: "CUST005",
    name: "David Lee",
    phone: "555-0105",
    address: "654 Maple Dr, East Side",
    orders: 32,
    jars: 8,
    joinDate: "Jan 18, 2025",
  },
  {
    id: "CUST006",
    name: "Lisa Anderson",
    phone: "555-0106",
    address: "987 Cedar Ln, West End",
    orders: 19,
    jars: 4,
    joinDate: "Apr 22, 2025",
  },
];

function Customers() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="page">
        <div className="page-header">
          <div>
            <h2>Customers</h2>
            <p>Manage your customer base and view their details.</p>
          </div>
          <button className="primary-btn">
            <FiUserPlus /> Add Customer
          </button>
        </div>

        <div className="card search-card">
          <FiSearch />
          <input placeholder="Search customers..." />
          <button className="filter-btn">Filter</button>
        </div>

        <div className="card">
          <h3>All Customers</h3>
          <p className="sub-text">{customers.length} customers registered</p>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Total Orders</th>
                <th>Jars in Possession</th>
                <th>Join Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.name}</td>
                  <td>{c.phone}</td>
                  <td>{c.address}</td>
                  <td><span className="badge">{c.orders}</span></td>
                  <td><span className="badge blue">{c.jars}</span></td>
                  <td>{c.joinDate}</td>
                  <td className="link">View</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Customers;
