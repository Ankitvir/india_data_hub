import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./pages/LoginPage";
import ProductCatalog from "./pages/ProductCatalog";
import Header from "./components/Header";

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const islogged = localStorage.getItem("islogged");
    setLogin(Boolean(islogged)); // Ensure login state reflects localStorage
  }, []);

  return (
    <div>
      <Router>
      <Header />

        <Routes>
          {login ? (
            <>
              <Route path="/dashboard" element={<ProductCatalog />} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<LoginForm />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
