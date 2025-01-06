// import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../src/assets/logo.png";
import "../src/index.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="sub-footer-container">
        <p>© 2024 Angelo Tiquio</p>

        <a href="/">
          <img src={Logo} alt="logo" className="footer-logo" />
        </a>

        <ul className="nav footer-nav">
          <li className="footer-item">
            <a href="/" className="nav-link-footer">
              Home
            </a>
          </li>
          <li className="footer-item">
            <a href="/about" className="nav-link-footer">
              About
            </a>
          </li>
          <li className="footer-item">
            <a href="/project" className="nav-link-footer">
              Projects
            </a>
          </li>
          <li className="footer-item">
            <a href="/services" className="nav-link-footer">
              Services
            </a>
          </li>
          <li className="footer-item">
            <a href="/contact" className="nav-link-footer">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
