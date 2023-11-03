import React from 'react';
import './LandingPage.css'; // Import your CSS file
import { useAuth0 } from "@auth0/auth0-react";
function LandingPage() {
    const { loginWithRedirect } = useAuth0();

  return (
    <div className="landing-container">
      <header>
        <h1>Welcome to Todo App</h1>
        <p>Your Perfect Companion for Task Management</p>
        <button onClick={() => loginWithRedirect()} className="get-started-button">Get Started</button>
      </header>
      <section className="features">
        <div className="feature">
          <i className="icon fa fa-check-circle"></i>
          <h2>Easy to Use</h2>
          <p>Create, manage, and complete tasks effortlessly.</p>
        </div>
        <div className="feature">
          <i className="icon fa fa-list-ul"></i>
          <h2>Stay Organized</h2>
          <p>Keep track of your tasks and prioritize your work.</p>
        </div>
        <div className="feature">
          <i className="icon fa fa-mobile"></i>
          <h2>Sync Across Devices</h2>
          <p>Access your tasks from anywhere, anytime.</p>
        </div>
      </section>
      <div className="decorative-box"></div>
    </div>
  );
}

export default LandingPage;
