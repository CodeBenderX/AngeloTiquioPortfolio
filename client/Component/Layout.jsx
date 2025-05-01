import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../src/assets/logo.png";
import "../src/index.css";
import { Link, useLocation } from "react-router-dom";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Mobile threshold
  const [pageTransition, setPageTransition] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    // Trigger the transition animation
    setPageTransition(true);
    
    // Close the menu when a link is clicked
    setIsMenuOpen(false);
    
    // Reset the transition state after animation completes
    setTimeout(() => {
      setPageTransition(false);
    }, 500); // Match with CSS transition duration
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

  // Track route changes
  useEffect(() => {
    // Reset the transition when we've navigated to a new page
    setPageTransition(false);
  }, [location]);

  return (
    <div className="container">
      <div className={`page-transition ${pageTransition ? 'active' : ''}`}></div>
      
      <header className="d-flex flex-wrap justify-content-between align-items-center py-3">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
          onClick={handleLinkClick}
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
        >
          <li className="nav-item">
            <Link to="/" className="nav-link active" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/project" className="nav-link" onClick={handleLinkClick}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={handleLinkClick}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}