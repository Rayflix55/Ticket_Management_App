import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    
    const existingUser = localStorage.getItem("ticketapp_user");
    if (existingUser) {
      try {
        const parsed = JSON.parse(existingUser);
        if (parsed.email === form.email) {
          setError("An account with this email already exists.");
          return;
        }
      } catch (err) {
        
      }
    }

    
    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    localStorage.setItem("ticketapp_user", JSON.stringify(newUser));

    setSuccess("Account created successfully! Redirecting...");
    setTimeout(() => navigate("/auth/login"), 2000);
  };

  return (
    <div className="auth-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit">Create Account</button>
      </form>

      <p>
        Already have an account?{" "}
        <a href="/auth/login" className="link">
          Login
        </a>
      </p>
    </div>
  );
}

export default Signup;
