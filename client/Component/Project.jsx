import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import RealEstate from "../src/assets/RealEstateWebsite.png";
import dragAndDrop from "../src/assets/dragAndDropCover.png";
import FocusFlow from "../src/assets/focusFlow.png";
import "../src/index.css";

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-sub-container">
        <div
          className="card"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adds a subtle shadow
            borderRadius: "8px",
          }}
        >
          <img
            src={RealEstate}
            className="card-img-top"
            alt="Real Estate Cover."
          />
          <div className="card-body">
            <h5 className="card-title">Real Estate Website</h5>
            <p className="card-text">
              This Real Estate Website project highlights properties with a
              user-friendly layout using HTML and CSS. It features responsive
              design, enabling seamless navigation and viewing of listings,
              images, and property details.
            </p>
            <ul>
              <li>Technologies: HTML, CSS</li>
              <li>Role: Frontend Developer</li>
            </ul>
            <div className="d-flex" style={{ marginTop: "auto", bottom: "0" }}>
              <Link to="/" className="btn btn-secondary m-1">
                View Code
              </Link>
              <Link
                to="http://studentweb.cencol.ca/atiquio/home.html"
                className="btn btn-primary m-1"
              >
                View Live Project
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adds a subtle shadow
            borderRadius: "8px",
          }}
        >
          <img src={dragAndDrop} className="card-img-top" alt="dragAndDrop" />
          <div className="card-body">
            <h5 className="card-title">Game Type Drag and Drop</h5>
            <p className="card-text">
              This interactive web app helps users explore game genres by
              dragging and dropping images into designated areas. It displays
              dynamic descriptions, offering an engaging and user-friendly way
              to learn about game categories.
            </p>
            <ul>
              <li>Technologies: HTML, CSS, JavaScript</li>
              <li>Role: Frontend Developer</li>
            </ul>
            <div className="d-flex">
              <Link to="/" className="btn btn-secondary m-1">
                View Code
              </Link>
              <Link
                to="http://studentweb.cencol.ca/atiquio/home.html"
                className="btn btn-primary m-1"
              >
                View Live Project
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adds a subtle shadow
            borderRadius: "8px",
          }}
        >
          <img src={FocusFlow} className="card-img-top" alt="dragAndDrop" />
          <div className="card-body">
            <h5 className="card-title">Focus Flow</h5>
            <p className="card-text">
              FocusFlow is a productivity app with a to-do list, reminders,
              quotes, a calendar, and a Pomodoro timer to help you stay
              organized, motivated, and focused while managing time and tracking
              progress effectively.
            </p>
            <ul>
              <li>Technologies: ReactJS, JS, HTML, CSS</li>
              <li>Role: Frontend Developer</li>
            </ul>
            <div className="d-flex">
              <Link to="/" className="btn btn-secondary m-1">
                View Code
              </Link>
              <Link
                to="https://codebenderx-focusflow.netlify.app"
                target="_blank"
                className="btn btn-primary m-1"
              >
                View Live Project
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adds a subtle shadow
            borderRadius: "8px",
          }}
        >
          <img
            src={RealEstate}
            className="card-img-top"
            alt="Real Estate Cover."
          />
          <div className="card-body">
            <h5 className="card-title">FreshPlate</h5>
            <p className="card-text">
              This Real Estate Website project highlights properties with a
              user-friendly layout using HTML and CSS. It features responsive
              design, enabling seamless navigation and viewing of listings,
              images, and property details.
            </p>
            <ul>
              <li>Technologies: HTML, CSS</li>
              <li>Role: Frontend Developer</li>
            </ul>
            <div className="d-flex" style={{ marginTop: "auto", bottom: "0" }}>
              <Link to="/" className="btn btn-secondary m-1">
                View Code
              </Link>
              <Link
                to="http://studentweb.cencol.ca/atiquio/home.html"
                className="btn btn-primary m-1"
              >
                View Live Project
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adds a subtle shadow
            borderRadius: "8px",
          }}
        >
          <img src={dragAndDrop} className="card-img-top" alt="dragAndDrop" />
          <div className="card-body">
            <h5 className="card-title">Game Type Drag and Drop</h5>
            <p className="card-text">
              This interactive web app helps users explore game genres by
              dragging and dropping images into designated areas. It displays
              dynamic descriptions, offering an engaging and user-friendly way
              to learn about game categories.
            </p>
            <ul>
              <li>Technologies: HTML, CSS, JavaScript</li>
              <li>Role: Frontend Developer</li>
            </ul>
            <div className="d-flex">
              <Link to="/" className="btn btn-secondary m-1">
                View Code
              </Link>
              <Link
                to="http://studentweb.cencol.ca/atiquio/home.html"
                className="btn btn-primary m-1"
              >
                View Live Project
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adds a subtle shadow
            borderRadius: "8px",
          }}
        >
          <img src={FocusFlow} className="card-img-top" alt="dragAndDrop" />
          <div className="card-body">
            <h5 className="card-title">Focus Flow</h5>
            <p className="card-text">
              FocusFlow is a productivity app with a to-do list, reminders,
              quotes, a calendar, and a Pomodoro timer to help you stay
              organized, motivated, and focused while managing time and tracking
              progress effectively.
            </p>
            <ul>
              <li>Technologies: ReactJS, JS, HTML, CSS</li>
              <li>Role: Frontend Developer</li>
            </ul>
            <div className="d-flex">
              <Link to="/" className="btn btn-secondary m-1">
                View Code
              </Link>
              <Link
                to="https://codebenderx-focusflow.netlify.app"
                target="_blank"
                className="btn btn-primary m-1"
              >
                View Live Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
