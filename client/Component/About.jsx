import React, { useState } from "react";
import { Link } from "react-router-dom";
import aboutPicture from "../src/assets/aboutMeProfile.png";
import "../src/index.css";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => setIsOpen(!isOpen);

  const containerHeight = isOpen ? "auto" : "auto";

  return (
    <main className="about-container" style={{ height: containerHeight }}>
      <div className="sub-container">
        <section className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          <div className="col px-0">
            <h1 className="display-4 fst-italic">About Me</h1>
            <p className="lead my-3">
              Dedicated <strong>Software Engineer</strong> with a unique
              background in education, blending technical expertise with a
              passion for teaching and learning.
            </p>
          </div>
        </section>

        <div className="row mb-4">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <img
                  src={aboutPicture}
                  alt="Profile"
                  className="img-fluid rounded mb-3"
                  style={{ maxHeight: "300px", objectFit: "contain" }} // Ensures the profile image fits well
                />
                <div className="mt-auto d-flex justify-content-center">
                  <Link to="/contact">
                    <button className="btn btn-contact">Contact Me</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3>Passions & Interests</h3>
                <p>
                  Passionate about integrating technology into education to make
                  learning accessible and engaging for everyone.
                </p>
                <h4>Values & Philosophy</h4>
                <p>
                  Believes in continuous learning, collaboration, and innovation
                  to create solutions that make a meaningful impact.
                </p>
                <h3>Skills and Interests</h3>
                <button className="btn btn-skills" onClick={toggleCollapsible}>
                  {isOpen ? "Hide Skills" : "Show Skills"}
                </button>
                {isOpen && (
                  <ul className="list-unstyled mt-3">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JavaScript Frameworks</li>
                    <li>SQL</li>
                    <li>Python</li>
                    <li>C#</li>
                    <li>ReactJS</li>
                    <li>MongoDB</li>
                    <li>Agile Methodologies</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
