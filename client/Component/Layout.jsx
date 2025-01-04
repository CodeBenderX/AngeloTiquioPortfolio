import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../src/assets/logo.png";
import "../src/App.css";
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
    <div className="container readable-font">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto
          link-body-emphasis text-decoration-none"
        >
          <img src={Logo} alt="logo" className="logo" />
        </Link>

        {isMobile && (
          <button className="burger-menu" onClick={toggleMenu}>
            &#9776; {/* Burger icon */}
          </button>
        )}

        <ul
          className={`${
            isMenuOpen ? "nav-menu show" : "nav-menu hidden"
          } " d-flex nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small"`}
        >
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page" onClick={handleLinkClick}>
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
