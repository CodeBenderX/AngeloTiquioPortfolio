import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../src/assets/logo.png";
import "../src/index.css";
import { Link } from "react-router-dom";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Mobile threshold

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  // Update `isMobile` on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-between align-items-center py-3">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
        >
          <img src={Logo} alt="logo" className="logo" />
        </Link>

        {isMobile && (
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <span>&times;</span> : <span>&#9776;</span>}
          </button>
        )}

        <ul
          className={`nav-menu ${
            isMenuOpen ? "show" : "hidden"
          } ${isMobile ? "mobile" : "desktop"}`}
          onClick={handleLinkClick}
        >
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/project" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
