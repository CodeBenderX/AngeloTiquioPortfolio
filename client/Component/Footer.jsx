// import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../src/assets/logo.png";
import "../src/index.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="sub-footer-container">
        <p>© 2024 Angelo Tiquio</p>

        <a
          href="/"
        >
          <img src={Logo} alt="logo" height={40} />
        </a>

        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a href="/" className="nav-link-footer px-2">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link-footer px-2">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/project" className="nav-link-footer px-2 ">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link-footer px-2 ">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link-footer px-2 ">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
    
  );
}
