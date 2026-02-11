import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaClipboardList,
  FaTruck,
  FaUndo,
  FaSignOutAlt
} from "react-icons/fa";
import "../styles/sidebar.css";

const DeliverySidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="logo">AquaFlow</div>

      <nav className="menu">
        <NavLink to="/delivery-dashboard"><FaHome /> Dashboard</NavLink>
        <NavLink to="/assigned-orders"><FaClipboardList /> Assigned Orders</NavLink>
        <NavLink to="/delivery-status"><FaTruck /> Delivery Status</NavLink>
        <NavLink to="/jar-returns-delivery"><FaUndo /> Jar Returns</NavLink>
      </nav>

      <div className="sidebar-footer">
        <button onClick={() => navigate("/")}>⬅ Back to Home</button>
        <button className="logout" onClick={() => navigate("/")}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default DeliverySidebar;
