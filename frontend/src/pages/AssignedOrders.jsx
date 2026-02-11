import DeliverySidebar from "../components/DeliverySidebar";
import "../styles/layout.css";
import "../styles/deliveryDashboard.css";

const AssignedOrders = () => {
  return (
    <div className="app-layout">
      <DeliverySidebar />

      <div className="page-content">
        <h2>Assigned Orders</h2>
        <p>View all orders assigned to you for delivery.</p>

        <div className="stats-grid">
          <div className="stat">Total Assigned <b>3</b></div>
          <div className="stat">Pending <b>2</b></div>
          <div className="stat">Completed <b>1</b></div>
        </div>

        <div className="card">
          <h3>Pending Deliveries</h3>

          <div className="delivery-item">
            <div>
              <strong>ORD002</strong> <span className="pending">Pending</span>
              <p>Sarah Johnson</p>
              <p>555-0102</p>
              <p>456 Oak Ave, Uptown</p>
            </div>

            <div className="delivery-action">
              <h3>3</h3>
              <p>Jars</p>
              <button>Navigate</button>
              <button className="secondary-btn">Mark Delivered</button>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Completed Deliveries</h3>

          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Jars</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ORD004</td>
                <td>Emily Davis</td>
                <td>321 Elm St, Suburb</td>
                <td>2</td>
                <td className="paid">Delivered</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssignedOrders;
