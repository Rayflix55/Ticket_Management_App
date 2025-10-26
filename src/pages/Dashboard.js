import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    in_progress: 0,
    closed: 0,
  });

  useEffect(() => {
    const savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(savedTickets);

    // Calculate summary
    const total = savedTickets.length;
    const open = savedTickets.filter((t) => t.status === "open").length;
    const in_progress = savedTickets.filter(
      (t) => t.status === "in_progress"
    ).length;
    const closed = savedTickets.filter((t) => t.status === "closed").length;

    setStats({ total, open, in_progress, closed });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("ticketapp_session");
    navigate("/auth/login");
  };

  return (
    <div className="dashboard-container">
      <h1>🎟️ Ticket Dashboard</h1>

      <div className="stats-grid">
        <div className="card open">
          <h3>Total Tickets</h3>
          <p>{stats.total}</p>
        </div>

        <div className="card green">
          <h3>Open</h3>
          <p>{stats.open}</p>
        </div>

        <div className="card amber">
          <h3>In Progress</h3>
          <p>{stats.in_progress}</p>
        </div>

        <div className="card gray">
          <h3>Closed</h3>
          <p>{stats.closed}</p>
        </div>
      </div>

      <div className="dashboard-actions">
        <button onClick={() => navigate("/tickets")} className="btn">
          Manage Tickets
        </button>
        <button onClick={handleLogout} className="btn logout">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
