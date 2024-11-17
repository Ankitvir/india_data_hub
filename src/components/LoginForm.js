import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    if (email === "ankit@gmail.com" && password === "ANKIT123") {
        localStorage.setItem("islogged", true);
        navigate("/dashboard"); // Navigate first
        window.location.reload(); // Then reload the page
    } else {
        alert("Invalid Credentials");
    }
};

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ marginBottom: "10px" }}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ marginBottom: "10px" }}
      />
      <button type="submit" style={{ marginTop: "10px", padding: "10px" }}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
