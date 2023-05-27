import React from "react";
import PaymentSuccess from "./pages/PaymentSuccess";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pay from "./pages/Pay";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/pay" element={<Pay />} />
        <Route path="/success" element={<PaymentSuccess />} />
    </Routes>
    </Router>
  );
}

export default App;


