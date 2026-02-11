import {
  FaHome,
  FaUsers,
  FaShoppingCart,
  FaTruck,
  FaMoneyBill,
  FaUndo,
  FaFileAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // static logout → home
  };

  return (
    <div className="sidebar">
      <div className="logo">AquaFlow</div>

      <nav className="menu">
        <NavLink to="/supplier-dashboard"><FaHome /> Dashboard</NavLink>
        <NavLink to="/customers"><FaUsers /> Customers</NavLink>
        <NavLink to="/orders"><FaShoppingCart /> Orders</NavLink>
        <NavLink to="/delivery"><FaTruck /> Delivery Assignment</NavLink>
        <NavLink to="/payments"><FaMoneyBill /> Payments</NavLink>
        <NavLink to="/jar-returns"><FaUndo /> Jar Returns</NavLink>
        <NavLink to="/reports"><FaFileAlt /> Reports</NavLink>
      </nav>

      <div className="sidebar-footer">
        <button onClick={() => navigate("/")}>⬅ Back to Home</button>
        <button className="logout" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
