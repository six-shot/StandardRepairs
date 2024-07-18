import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/home";
import Dashboard from "./modules/orders/feature/order";
import SingleOrder from "./modules/orders/feature/order/singleorder";

function Routess() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/orders" exact element={<Dashboard />} />
          <Route path="/order/:id" exact element={<SingleOrder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routess;
