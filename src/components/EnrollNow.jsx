import { Link } from "react-router-dom";
import "./EnrollNow.css";

function EnrollNow() {
  return (
    <div className="enroll-now-container">
      <div className="enroll-box">
        <h3>Start Learning Bharatanatyam</h3>
        <p>Join our Gurukul today and begin your journey</p>

        <Link to="/enroll" className="enroll-btn">
          Enroll Now
        </Link>
      </div>
    </div>
  );
}

export default EnrollNow;