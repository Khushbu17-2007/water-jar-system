import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OrderForm from "./pages/OrderForm";
import SupplierLogin from "./pages/SupplierLogin";
import DeliveryLogin from "./pages/DeliveryLogin";
import Orders from "./pages/Orders";
import SupplierDashboard from "./pages/SupplierDashboard";
import Customers from "./pages/Customers";
import DeliveryAssignment from "./pages/DeliveryAssignment";
import JarReturns from "./pages/JarReturns";
import Reports from "./pages/Reports";
import Payments from "./pages/Payments";
import DeliveryDashboard from "./pages/DeliveryDashboard";
import AssignedOrders from "./pages/AssignedOrders";
import DeliveryStatus from "./pages/DeliveryStatus";
import JarReturnDelivery from "./pages/JarReturnDelivery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/supplier-login" element={<SupplierLogin />} />
        <Route path="/delivery-login" element={<DeliveryLogin />} />
        <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/delivery" element={<DeliveryAssignment />} />
        <Route path="/jar-returns" element={<JarReturns />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/delivery-dashboard" element={<DeliveryDashboard />} />
        <Route path="/assigned-orders" element={<AssignedOrders />} />
        <Route path="/delivery-status" element={<DeliveryStatus />} />
        <Route path="/jar-returns-delivery" element={<JarReturnDelivery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
