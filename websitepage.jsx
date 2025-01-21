import React from "react";
import { useNavigate } from "react-router-dom";
import "./websitepage.css";
import "./style1.css";
import SiteFooter from "./sitefooter.jsx";

function WebsitePage() {
  const navigate = useNavigate();

  return (
    <div className="websitepage">
      <header className="header">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Kustom Kreator" />
          <h1>Kustom Kreator</h1>
        </div>
        <div className="auth-buttons">
          <button className="login" onClick={() => navigate("/websitesignin")}>
            Log In
          </button>
          <button className="signup" onClick={() => navigate("/websitesignup")}>
            Sign Up
          </button>
        </div>
      </header>
      <main className="main-content">
        <div className="text-content">
          <h1>Start selling with Kustom Kreator</h1>
          <p>
            The fastest-growing and preferred acquisition channel for over half
            our multichannel sellers.
          </p>
          <p className="price">₹3999.99 a month + selling fees</p>
          <div className="cta-buttons">
            <button className="signup" onClick={() => navigate("/websitesignup")}>
              Sign Up
            </button>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
        <div className="image-content">
          <img
            src="/websitepage.png"
            alt="Showcase of mobile app"
            className="mockup"
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export default WebsitePage;
