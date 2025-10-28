import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tickets.css";

function Tickets() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", status: "open" });
  const [editingIndex, setEditingIndex] = useState(null);
  const [error, setError] = useState(""); 

  useEffect(() => {
    const session = localStorage.getItem("ticketapp_session");
    if (!session) {
      alert("Session expired. Please log in again.");
      navigate("/auth/login");
    } else {
      const stored = JSON.parse(localStorage.getItem("tickets")) || [];
      setTickets(stored);
    }
  }, [navigate]);

  
  const saveTickets = (updated) => {
    setTickets(updated);
    localStorage.setItem("tickets", JSON.stringify(updated));
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError(""); 
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.description.trim()) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    if (editingIndex !== null) {
      const updated = [...tickets];
      updated[editingIndex] = form;
      saveTickets(updated);
      setEditingIndex(null);
    } else {
      const newTicket = { ...form, id: Date.now() };
      saveTickets([...tickets, newTicket]);
    }

    setForm({ title: "", description: "", status: "open" });
    setError(""); 
  };

  
  const handleEdit = (index) => {
    setEditingIndex(index);
    setForm(tickets[index]);
    setError(""); 
  };

  
  const handleDelete = (id) => {
    const filtered = tickets.filter((t) => t.id !== id);
    saveTickets(filtered);
  };

  
  const handleLogout = () => {
    localStorage.removeItem("ticketapp_session");
    navigate("/");
  };

  return (
    <div className="tickets-container">
      <h1>Ticket Management</h1>

      <form onSubmit={handleSubmit} className="ticket-form">
        <input
          type="text"
          name="title"
          placeholder="Ticket title"
          value={form.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>

        
        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="btn">
          {editingIndex !== null ? "Update Ticket" : "Add Ticket"}
        </button>
      </form>

      <div className="tickets-list">
        {tickets.length === 0 ? (
          <p className="no-tickets">No tickets yet.</p>
        ) : (
          tickets.map((ticket, index) => (
            <div key={ticket.id} className={`ticket-card ${ticket.status}`}>
              <h3>{ticket.title}</h3>
              <p>{ticket.description}</p>
              <span className={`status ${ticket.status}`}>
                {ticket.status.replace("_", " ")}
              </span>
              <div className="actions">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(ticket.id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>

      <button onClick={handleLogout} className="btn logout">Logout</button>
    </div>
  );
}

export default Tickets;
