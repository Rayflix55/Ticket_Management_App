import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Just load user data - ProtectedRoute already checked the session!
    const savedUser = JSON.parse(localStorage.getItem("ticketapp_user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("ticketapp_session");
    navigate("/auth/login");
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>🎟️ TicketApp Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <section className="dashboard-content">
        {user ? (
          <>
            <h2>Welcome back, {user.name} 👋</h2>
            <p>Email: {user.email}</p>
          </>
        ) : (
          <p>Loading user info...</p>
        )}

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Tickets Booked</h3>
            <p>12</p>
          </div>
          <div className="stat-card">
            <h3>Upcoming Events</h3>
            <p>3</p>
          </div>
          <div className="stat-card">
            <h3>Points Earned</h3>
            <p>1,540</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;