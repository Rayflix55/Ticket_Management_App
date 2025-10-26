import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-page">
      <header className="hero">
        <div className="hero-content">
          <h1>TicketFlow</h1>
          <p>Manage tickets easily — track, resolve, and stay productive.</p>

          <div className="hero-buttons">
            <a href="/auth/login" className="btn primary">Login</a>
            <a href="/auth/signup" className="btn secondary">Get Started</a>
          </div>
        </div>

        {/* Decorative circles */}
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>

        {/* SVG Wavy Background */}
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#6c63ff"
            fillOpacity="1"
            d="M0,224L80,224C160,224,320,224,480,197.3C640,171,800,117,960,117.3C1120,117,1280,171,1360,197.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </header>

      <section className="features">
        <div className="feature-box">
          <h2>Track Progress</h2>
          <p>View open, in-progress, and closed tickets in real time.</p>
        </div>
        <div className="feature-box">
          <h2>Stay Organized</h2>
          <p>All your support requests in one clean dashboard.</p>
        </div>
        <div className="feature-box">
          <h2>Collaborate Easily</h2>
          <p>Work together to resolve issues faster and smarter.</p>
        </div>
      </section>
    </div>
  );
}

export default Landing;

