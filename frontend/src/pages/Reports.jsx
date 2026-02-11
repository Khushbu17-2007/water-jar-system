import Sidebar from "../components/Sidebar";
import "../styles/layout.css";

const Reports = () => {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="page-content">
        <div className="page-header">
          <div>
            <h2>Reports</h2>
            <p>View daily, weekly, and monthly business reports.</p>
          </div>
          <button className="primary-btn">Export Report</button>
        </div>

        <div>
          <button className="primary-btn">Daily</button>{" "}
          <button>Weekly</button>{" "}
          <button>Monthly</button>
        </div>

        <div className="card">
          <h3>Daily Report</h3>
          <p>Report for Thursday, January 29, 2026</p>

          <div className="stats-grid">
            <div className="stat">Orders Received <b>8</b></div>
            <div className="stat">Orders Completed <b>6</b></div>
            <div className="stat">Jars Sold <b>42</b></div>
            <div className="stat">Jars Returned <b>28</b></div>
            <div className="stat">Daily Revenue <b>₹840</b></div>
            <div className="stat">Return Rate <b>67%</b></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
