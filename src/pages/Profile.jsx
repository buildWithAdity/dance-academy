import { useLocation } from "react-router-dom";
import "./Profile.css";
import { useState } from "react";

function Profile() {
  const { state } = useLocation();
  const [showInfo, setShowInfo] = useState(false);

  if (!state) {
    return (
      <div className="profile-container">
        <div className="profile-card">
          <h2>No Admission Data Found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">

      <div className="profile-card">

        {/* PHOTO */}
        <div className="profile-left">
          {state.photo ? (
            <img src={state.photo} alt="Student" />
          ) : (
            <div className="placeholder">No Photo</div>
          )}
        </div>

        {/* DETAILS */}
        <div className="profile-right">

          <div className="status-badge">
            ✨ Admission Request Submitted
          </div>

          <h1>Welcome, {state.name}</h1>

          <p><strong>Age:</strong> {state.age}</p>
          <p><strong>Gender:</strong> {state.gender}</p>
          <p><strong>Date of Birth:</strong> {state.dob}</p>
          <p><strong>Selected Course:</strong> {state.course}</p>

          <div className="divider"></div>

          <div className="fee-dropdown">

            <button onClick={() => setShowInfo(!showInfo)}>
              Admission Information ▼
            </button>

            {showInfo && (
              <div className="fee-box">

                <h3>🌸 Opening Soon</h3>

                <p>
                  Thank you for registering your interest in
                  <strong> Shree Hans Nritya Sadhana Gurukul</strong>.
                </p>

                <p>
                  The official fee structure, class schedules,
                  batch timings, and admission guidelines will
                  be announced shortly.
                </p>

                <p>
                  Registered applicants will receive updates
                  regarding admission procedures and upcoming
                  batches.
                </p>

                <p className="gurukul-note">
                  Rooted in Tradition • Guided by Grace
                </p>

              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;