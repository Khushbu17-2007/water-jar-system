import Sidebar from "../components/Sidebar";
import "../styles/layout.css";
import "../styles/payments.css";

const Payments = () => {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="page-content">
        <h2>Payments</h2>
        <p>Track and manage payment status for all orders.</p>

        <div className="stats-grid">
          <div className="stat">Total Revenue <b>₹560</b></div>
          <div className="stat">Pending Amount <b>₹440</b></div>
          <div className="stat">Paid Orders <b>4</b></div>
          <div className="stat">Pending Payments <b>4</b></div>
        </div>

        <div className="card">
          <h3>Payment Records</h3>

          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Jars</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ORD001</td>
                <td>John Smith</td>
                <td>5</td>
                <td>₹100</td>
                <td className="pending">Pending</td>
                <td><button>Mark Paid</button></td>
              </tr>
              <tr>
                <td>ORD003</td>
                <td>Michael Brown</td>
                <td>10</td>
                <td>₹200</td>
                <td className="paid">Paid</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;
