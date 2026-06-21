import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";
import logo from "../assets/logo.png";

function Navigation() {
  const navigate = useNavigate();

  return (
    <header className="nav-header">

      {/* LEFT BRAND */}
      <div className="brand-section">

        <img
          src={logo}
          alt="Shree Hans Nritya Sadhana Gurukul"
          className="logo-img"
        />

        <div className="brand-text">
          <h1>SHREE HANS</h1>
          <p>NRITYA SADHANA GURUKUL</p>
        </div>

      </div>

      {/* CENTER NAVIGATION */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/guru">Our Guru</Link>
        <Link to="/training">Training</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* RIGHT BUTTON */}
      <button
        className="enroll-btn"
        onClick={() => navigate("/admission")}
      >
        Admission Open
      </button>

    </header>
  );
}

export default Navigation;