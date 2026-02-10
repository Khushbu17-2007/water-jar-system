import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OrderForm from "./pages/OrderForm";
import SupplierLogin from "./pages/SupplierLogin";
import DeliveryLogin from "./pages/DeliveryLogin";
import SupplierDashboard from "./pages/SupplierDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/supplier-login" element={<SupplierLogin />} />
        <Route path="/delivery-login" element={<DeliveryLogin />} />
        <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
