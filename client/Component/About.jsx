"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faDatabase,
  faServer,
  faProjectDiagram,
  faHashtag,
  faCode,
  faLaptopCode,
  faDatabase as faDbIcon,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import aboutPicture from "../src/assets/aboutMeProfile.png";
import "../src/index.css";

export default function About() {
  const [visibleSkills, setVisibleSkills] = useState({});
  const [activeCategory, setActiveCategory] = useState("all");
  const skillsContainerRef = useRef(null);

  const skillCategories = [
    { id: "all", name: "All Skills", icon: faCode },
    { id: "frontend", name: "Frontend", icon: faLaptopCode },
    { id: "backend", name: "Backend", icon: faServer },
    { id: "database", name: "Database", icon: faDbIcon },
    { id: "other", name: "Other", icon: faCogs },
  ];

  const skills = [
    {
      name: "HTML",
      icon: faHtml5,
      color: "#E34F26",
      category: "frontend",
    },
    {
      name: "CSS",
      icon: faCss3Alt,
      color: "#1572B6",
      category: "frontend",
    },
    {
      name: "JavaScript",
      icon: faJs,
      color: "#F7DF1E",
      category: "frontend",
    },
    {
      name: "JS Frameworks",
      icon: faLayerGroup,
      color: "#61DAFB",
      category: "frontend",
    },
    {
      name: "SQL",
      icon: faDatabase,
      color: "#336791",
      category: "database",
    },
    {
      name: "Python",
      icon: faPython,
      color: "#3776AB",
      category: "backend",
    },
    {
      name: "C#",
      icon: faHashtag,
      color: "#68217A",
      category: "backend",
    },
    {
      name: "ReactJS",
      icon: faReact,
      color: "#61DAFB",
      category: "frontend",
    },
    {
      name: "MongoDB",
      icon: faServer,
      color: "#47A248",
      category: "database",
    },
    {
      name: "Agile",
      icon: faProjectDiagram,
      color: "#0078D7",
      category: "other",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  useEffect(() => {
    // Reset visible skills when category changes
    setVisibleSkills({});

    // Set up the observer when component mounts or category changes
    if (!skillsContainerRef.current) return;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number.parseInt(
          entry.target.getAttribute("data-index") || "0",
          10
        );
        if (entry.isIntersecting) {
          setVisibleSkills((prev) => ({ ...prev, [index]: true }));
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe all skill elements
    const skillElements =
      skillsContainerRef.current.querySelectorAll(".skill-item");
    skillElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      if (skillElements) {
        skillElements.forEach((element) => {
          observer.unobserve(element);
        });
      }
    };
  }, [activeCategory]);

  return (
    <main className="about-container">
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

        {/* Profile, Interests, & Philosophy Section */}
        <div className="row g-0 overflow-hidden flex-md-row mb-4 position-relative">
          <div className="col-md-12 p-4">
            <div className="profile-combined">
              <div className="profile-image-container">
                <img
                  src={aboutPicture || "/placeholder.svg"}
                  alt="Profile"
                  className="profile-image"
                />
                <div className="profile-contact">
                  <Link to="/contact">
                    <button className="btn btn-contact">Contact Me</button>
                  </Link>
                </div>
              </div>

              <div className="profile-content">
                <div className="profile-section">
                  <h3 className="section-title">Passions & Interests</h3>
                  <p>
                    Passionate about integrating technology into education to
                    make learning accessible and engaging for everyone.
                  </p>
                </div>

                <div className="profile-section">
                  <h4 className="section-title">Values & Philosophy</h4>
                  <p>
                    Believes in continuous learning, collaboration, and
                    innovation to create solutions that make a meaningful
                    impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <h3 className="skills-title">Skills and Expertise</h3>

            <div className="skills-content">
              <div className="category-filters">
                {skillCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`category-btn ${
                      activeCategory === category.id ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <FontAwesomeIcon
                      icon={category.icon}
                      className="category-icon"
                    />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>

              <div ref={skillsContainerRef} className="skills-grid">
                {filteredSkills.map((skill, index) => (
                  <div
                    key={index}
                    data-index={index}
                    className={`skill-item ${
                      visibleSkills[index] ? "visible" : ""
                    } ${skill.category}`}
                  >
                    {visibleSkills[index] ? (
                      <>
                        <div className="skill-icon-wrapper">
                          <FontAwesomeIcon
                            icon={skill.icon}
                            style={{ color: skill.color }}
                            className="skill-icon"
                          />
                        </div>
                        <span className="skill-name" style={{ color: "white" }}>
                          {skill.name}
                        </span>
                      </>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
