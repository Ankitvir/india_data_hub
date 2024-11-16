import React from "react";
import LoginPage from "./pages/LoginPage";
import ProductCatalog from "./pages/ProductCatalog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/catalog" element={<ProductCatalog />} />
          {/* Add other routes here as needed */}
        </Routes>
      </Router>

      <LoginPage />
    </div>
  );
}

export default App;
