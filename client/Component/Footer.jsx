// import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../src/assets/logo.png";
import { Link } from "react-router-dom";
import "../src/index.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="sub-footer-container">
        <p>© 2024 Angelo Tiquio</p>

        <Link to="/">
          <img src={Logo} alt="logo" className="footer-logo" />
        </Link>

        <ul className="nav footer-nav">
          <li className="footer-item">
            <Link to="/" className="nav-link-footer">
              Home
            </Link>
          </li>
          <li className="footer-item">
            <Link to="/about" className="nav-link-footer">
              About
            </Link>
          </li>
          <li className="footer-item">
            <Link to="/project" className="nav-link-footer">
              Projects
            </Link>
          </li>
          <li className="footer-item">
            <Link to="/services" className="nav-link-footer">
              Services
            </Link>
          </li>
          <li className="footer-item">
            <Link to="/contact" className="nav-link-footer">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
