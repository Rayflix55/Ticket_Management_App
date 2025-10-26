import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
const handleSubmit = (e) => {
  e.preventDefault();
  setError(""); // Clear previous errors

  console.log("🔍 Form submitted with:", form); // Debug

  if (!form.email || !form.password) {
    setError("All fields are required.");
    return;
  }

  // Get saved user with error handling
  let savedUser;
  try {
    const storedUser = localStorage.getItem("ticketapp_user");
    console.log("📦 Raw stored user:", storedUser); // Debug
    savedUser = JSON.parse(storedUser);
    console.log("✅ Parsed user:", savedUser); // Debug
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
    console.log("✅ Credentials match! Saving session..."); // Debug
    
    // Save session data
    const sessionData = {
      token: savedUser.email,
      loginTime: new Date().getTime(),
      email: savedUser.email
    };
    
    localStorage.setItem("ticketapp_session", JSON.stringify(sessionData));
    
    console.log("💾 Session saved:", sessionData); // Debug
    console.log("📦 Session in localStorage:", localStorage.getItem("ticketapp_session")); // Debug

    setLoading(true);
    setTimeout(() => {
      console.log("🚀 Navigating to dashboard..."); // Debug
      navigate("/dashboard");
    }, 2000);
  } else {
    console.log("❌ Credentials don't match!"); // Debug
    setError("Invalid credentials. Try again.");
  }
};
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setError(""); // Clear previous errors

  //   if (!form.email || !form.password) {
  //     setError("All fields are required.");
  //     return;
  //   }

  //   // Get saved user with error handling
  //   let savedUser;
  //   try {
  //     savedUser = JSON.parse(localStorage.getItem("ticketapp_user"));
  //   } catch (err) {
  //     setError("Error loading user data. Please sign up again.");
  //     return;
  //   }

  //   if (
  //     savedUser &&
  //     form.email === savedUser.email &&
  //     form.password === savedUser.password
  //   ) {
  //     // Save session data
  //     localStorage.setItem(
  //       "ticketapp_session",
  //       JSON.stringify({
  //         token: savedUser.email,
  //         loginTime: new Date().getTime(),
  //         email: savedUser.email
  //       })
  //     );

  //     setLoading(true);
  //     setTimeout(() => {
  //       navigate("/dashboard");
  //     }, 2000);
  //   } else {
  //     setError("Invalid credentials. Try again.");
  //   }
  // };

  if (loading) return <Loader />;

  return (
    <div className="auth-container">
      <h1>Login</h1>
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

