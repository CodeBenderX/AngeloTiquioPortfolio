//
/* @vite-ignore */
import React, { useState, useEffect } from "react";
import profilePicture from "../src/assets/portfolioHero.png";
import TypingBadge from "./TypingBadge";
import "../Component/Home.css"; // Import external CSS for the animated background

export default function Home() {
  return (
    <div className="home-container">
      {/* Animated SVG Background */}
      <div className="svg-background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 10 100 100"
          className="cancer-constellation"
        >
          <circle cx="10" cy="20" r="1" fill="white" />
          <circle cx="40" cy="30" r="1" fill="white" />
          <circle cx="70" cy="50" r="1" fill="white" />
          <circle cx="90" cy="80" r="1" fill="white" />
          <circle cx="60" cy="70" r="1" fill="white" />
          <line
            x1="10"
            y1="20"
            x2="40"
            y2="30"
            stroke="white"
            strokeWidth="0.2"
          />
          <line
            x1="40"
            y1="30"
            x2="70"
            y2="50"
            stroke="white"
            strokeWidth="0.2"
          />
          <line
            x1="70"
            y1="50"
            x2="90"
            y2="80"
            stroke="white"
            strokeWidth="0.2"
          />
          <line
            x1="70"
            y1="50"
            x2="60"
            y2="70"
            stroke="white"
            strokeWidth="0.2"
          />

          <circle cx="120" cy="40" r="1" fill="white" />
          <circle cx="140" cy="60" r="1" fill="white" />
          <circle cx="160" cy="50" r="1" fill="white" />
          <circle cx="170" cy="70" r="1" fill="white" />
          <circle cx="150" cy="90" r="1" fill="white" />
          <circle cx="130" cy="80" r="1" fill="white" />

          <line
            x1="120"
            y1="40"
            x2="140"
            y2="60"
            stroke="white"
            strokeWidth="0.2"
          />
          <line
            x1="140"
            y1="60"
            x2="160"
            y2="50"
            stroke="white"
            strokeWidth="0.2"
          />
          <line
            x1="160"
            y1="50"
            x2="170"
            y2="70"
            stroke="white"
            strokeWidth="0.2"
          />
          <line
            x1="170"
            y1="70"
            x2="150"
            y2="90"
            stroke="white"
            strokeWidth="0.2"
          />
          <line
            x1="150"
            y1="90"
            x2="130"
            y2="80"
            stroke="white"
            strokeWidth="0.2"
          />
          <line
            x1="130"
            y1="80"
            x2="120"
            y2="40"
            stroke="white"
            strokeWidth="0.2"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 200"
          className="cancer-constellation"
        >
          <circle cx="50" cy="150" r="2" fill="white" />
          <circle cx="80" cy="100" r="2" fill="white" />
          <circle cx="110" cy="120" r="2" fill="white" />
          <circle cx="140" cy="90" r="2" fill="white" />
          <circle cx="170" cy="50" r="2" fill="white" />

          <line
            x1="50"
            y1="150"
            x2="80"
            y2="100"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="80"
            y1="100"
            x2="110"
            y2="120"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="110"
            y1="120"
            x2="140"
            y2="90"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="140"
            y1="90"
            x2="170"
            y2="50"
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Left Side: Profile Image */}
      <div className="profile-section">
        <div className="profile-picture-container">
          <img src={profilePicture} alt="Profile" className="profile-picture" />
        </div>
        {/* Typing Badge Component */}
        <TypingBadge />
      </div>

      {/* Right Side: Content */}
      <div className="content-section">
        <h1>
          Hello, I'm <br />
          <span className="highlight">Angelo Tiquio</span>
        </h1>
        <h2 className="subtitle">Building Tomorrow’s Technology Today</h2>
        <p className="description">
          My mission is to leverage my technical expertise and educational
          background to create innovative and impactful software solutions that
          enhance learning experiences, drive business success, and foster
          community development.
        </p>
        <div className="button-group">
          <a href="/about" className="btn btn-outline-light me-2">
            About
          </a>
          <a href="/contact" className="btn btn-outline-light">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
