import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  // Helper: adds "active" class if the current page matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Neel<span>.</span>
      </Link>

      <div className="navbar-links">
        <Link to="/"         className={isActive("/")         ? "nav-link active" : "nav-link"}>Home</Link>
        <Link to="/projects" className={isActive("/projects") ? "nav-link active" : "nav-link"}>Projects</Link>
        <Link to="/contact"  className={isActive("/contact")  ? "nav-link active" : "nav-link"}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;