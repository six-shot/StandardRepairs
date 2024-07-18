import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/home";
import Dashboard from "./modules/orders/feature/order";
import SingleOrder from "./modules/orders/feature/order/singleorder";
import CarOrders from "./modules/orders/feature/cars";

function Routess() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/orders"  element={<Dashboard />} />
          <Route path="/order/:id" element={<SingleOrder />} />
          <Route path="/all-car-orders" element={<CarOrders />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routess;
