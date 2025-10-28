import React, { useEffect, useState } from "react";
import "./Landing.css";

function Landing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-page">
      
      <div className="wave-container">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="100%" stopColor="#764ba2" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f093fb" />
              <stop offset="100%" stopColor="#f5576c" />
            </linearGradient>
          </defs>
          <path className="wave wave1" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="url(#gradient1)" opacity="0.7" />
          <path className="wave wave2" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="url(#gradient2)" opacity="0.5" />
          <path className="wave wave3" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="#fff" opacity="0.3" />
        </svg>
      </div>

      
      <div className="floating-elements">
        <div className="float-circle circle1"></div>
        <div className="float-circle circle2"></div>
        <div className="float-circle circle3"></div>
        <div className="float-circle circle4"></div>
      </div>

      
      <header className="hero">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="ticket-icon">
            <span className="icon-text">🎟️</span>
            <div className="icon-glow"></div>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">TicketFlow</span>
            <span className="title-highlight">Manage Tickets Effortlessly</span>
          </h1>
          
          <p className="hero-subtitle">
            Track, resolve, and stay productive. All your support requests in one clean, powerful dashboard.
          </p>

          <div className="hero-buttons">
            <a href="/auth/signup" className="btn primary">
              <span>Get Started Free</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/auth/login" className="btn secondary">
              <span>Login</span>
            </a>
          </div>

          
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Happy Users</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Tickets Resolved</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">4.9★</div>
              <div className="stat-label">User Rating</div>
            </div>
          </div>
        </div>
      </header>

      
      <section className="features">
        <div className="feature-box">
          <div className="feature-icon">📊</div>
          <h2>Track Progress</h2>
          <p>View open, in-progress, and closed tickets in real time.</p>
        </div>
        
        <div className="feature-box">
          <div className="feature-icon">📁</div>
          <h2>Stay Organized</h2>
          <p>All your support requests in one clean dashboard.</p>
        </div>
        
        <div className="feature-box">
          <div className="feature-icon">🤝</div>
          <h2>Collaborate Easily</h2>
          <p>Work together to resolve issues faster and smarter.</p>
        </div>
      </section>

      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </div>
  );
}

export default Landing;

