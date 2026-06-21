import "./Footer.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-section">
          <h2>Shree Hans Nritya Sadhana Gurukul</h2>
          <p>
            Dedicated to preserving and promoting Bharatanatyam through structured training,
            cultural education, and disciplined artistic expression.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Training</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p>
            📧{" "}
            <a href="mailto:shreehansgurukul@gmail.com?subject=Admission Inquiry&body=Hello, I want to know more about your Bharatanatyam classes.">
              shreehansgurukul@gmail.com
            </a>
          </p>

          <p>📍 Rangpo, Sikkim, Pakyong District - 737132</p>
          <p>📞 9064932108 / 7364061456</p>
        </div>

        {/* SOCIAL */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/shreehansgurukul?igsh=MTg1ZHAxcnd6bHdzZw=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={22} />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Shree Hans Nritya Sadhana Gurukul</p>
        <p className="slogan">
          नृत्यं साधनम्, जीवनम् साधना
        </p>
      </div>

    </footer>
  );
}

export default Footer;