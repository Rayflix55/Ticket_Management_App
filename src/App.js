import React from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();

  // ✅ Show Navbar & Footer only on Landing and Dashboard
  const showLayout = ["/", "/dashboard"].includes(location.pathname);

  return (
    <>
      {showLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tickets"
          element={
            <ProtectedRoute>
              <Tickets />
            </ProtectedRoute>
          }
        />
      </Routes>

      {showLayout && <Footer />}
    </>
  );
}

export default App;
