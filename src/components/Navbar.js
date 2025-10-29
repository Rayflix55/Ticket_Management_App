import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const session = localStorage.getItem('ticketapp_session');

  const handleLogout = () => {
    localStorage.removeItem('ticketapp_session');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo">🎟️ TicketFlow</div>
      <div className="links">
        {session ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/tickets">Tickets</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/signup">Get Started</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
