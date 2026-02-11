import DeliverySidebar from "../components/DeliverySidebar";
import "../styles/layout.css";
import "../styles/deliveryDashboard.css";

const DeliveryDashboard = () => {
  return (
    <div className="app-layout">
      <DeliverySidebar />

      <div className="page-content">
        <h2>Delivery Dashboard</h2>
        <p>Welcome back, Mike! Here's your delivery overview for today.</p>

        <div className="stats-grid">
          <div className="stat">Assigned Orders <b>5</b></div>
          <div className="stat">Completed Today <b>3</b></div>
          <div className="stat">Pending Deliveries <b>2</b></div>
          <div className="stat">Jars to Collect <b>12</b></div>
        </div>

        <div className="card">
          <h3>Today's Deliveries</h3>

          <div className="delivery-item">
            <div>
              <strong>ORD002</strong> <span className="pending">pending</span>
              <p>Sarah Johnson</p>
              <p>555-0102</p>
              <p>456 Oak Ave, Uptown</p>
            </div>

            <div className="delivery-action">
              <h3>3</h3>
              <p>Jars</p>
              <button>Start Delivery</button>
            </div>
          </div>

          <div className="delivery-item">
            <div>
              <strong>ORD007</strong> <span className="pending">pending</span>
              <p>Robert Taylor</p>
              <p>555-0107</p>
              <p>147 Birch Way, North Town</p>
            </div>

            <div className="delivery-action">
              <h3>6</h3>
              <p>Jars</p>
              <button>Start Delivery</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDashboard;
