import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">

      {/* BRAND */}
      <div className="brand">
        <img
          src={logo}
          alt="Shree Hans Nritya Sadhana Gurukul"
          className="logo-img"
        />

        <div className="brand-text">
          <h1>SHREE HANS</h1>
          <h2>NRITYA SADHANA GURUKUL</h2>
          <p>Rooted in Tradition • Guided by Grace</p>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/guru">Our Guru</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* BUTTON */}
      <button
        className="enroll-btn"
        onClick={() => navigate("/admission")}
      >
        Enroll Now
      </button>

    </header>
  );
}

export default Header;