import React, { useState } from "react";
import "../styles/form.css";

const OrderForm = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerJar = 20; // ₹20 per jar

  return (
    <div className="form-page">
      <div className="form-card">
        <h2>Order Water Jars</h2>
        <p className="subtitle">
          Fill in your details below to place an order for water jar delivery.
        </p>

        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />

        <label>Phone Number</label>
        <input type="text" placeholder="Enter your phone number" />

        <label>Delivery Address</label>
        <textarea placeholder="Enter your complete delivery address"></textarea>

        <label>Number of Jars</label>
        <div className="quantity">
          <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <label>Preferred Delivery Date</label>
        <input type="date" />

        <div className="price-box">
          <p>Price per jar <b>₹{pricePerJar}</b></p>
          <p>Quantity <b>{quantity}</b></p>
          <hr />
          <p>Total <b>₹{pricePerJar * quantity}</b></p>
        </div>

        <button className="primary-btn">Place Order</button>
      </div>
    </div>
  );
};

export default OrderForm;
