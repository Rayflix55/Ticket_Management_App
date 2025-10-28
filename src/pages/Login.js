import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
const handleSubmit = (e) => {
  e.preventDefault();
  setError(""); 

  console.log("🔍 Form submitted with:", form); 

  if (!form.email || !form.password) {
    setError("All fields are required.");
    return;
  }

  
  let savedUser;
  try {
    const storedUser = localStorage.getItem("ticketapp_user");
    console.log("📦 Raw stored user:", storedUser); 
    savedUser = JSON.parse(storedUser);
    console.log("✅ Parsed user:", savedUser); 
  } catch (err) {
    console.error("❌ Parse error:", err);
    setError("Error loading user data. Please sign up again.");
    return;
  }

  console.log("🔐 Comparing credentials:");
  console.log("  Form email:", form.email);
  console.log("  Saved email:", savedUser?.email);
  console.log("  Form password:", form.password);
  console.log("  Saved password:", savedUser?.password);
  console.log("  Email match:", form.email === savedUser?.email);
  console.log("  Password match:", form.password === savedUser?.password);

  if (
    savedUser &&
    form.email === savedUser.email &&
    form.password === savedUser.password
  ) {
    console.log("✅ Credentials match! Saving session..."); 
    
    // Save session data
    const sessionData = {
      token: savedUser.email,
      loginTime: new Date().getTime(),
      email: savedUser.email
    };
    
    localStorage.setItem("ticketapp_session", JSON.stringify(sessionData));
    
    console.log("💾 Session saved:", sessionData); 
    console.log("📦 Session in localStorage:", localStorage.getItem("ticketapp_session")); 

    setLoading(true);
    setTimeout(() => {
      console.log("🚀 Navigating to dashboard..."); 
      navigate("/dashboard");
    }, 2000);
  } else {
    console.log("❌ Credentials don't match!"); 
    setError("Invalid credentials. Try again.");
  }
};
 

  if (loading) return <Loader />;

  return (
    <div className="auth-container">
      <h1>Welcome Back</h1>
      <form onSubmit={handleSubmit}>
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

        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{" "}
        <a href="/auth/signup" className="link">
          Sign up
        </a>
      </p>
    </div>
  );
}


export default Login;

