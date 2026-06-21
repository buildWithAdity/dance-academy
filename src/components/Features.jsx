import React from "react";
import "./Features.css";

import traditional from "../assets/traditional.jpg";
import bharatanatyam from "../assets/bharatanatyam.jpg";
import spiritual from "../assets/spiritual.jpg";
import guidance from "../assets/guidance.jpg";
import development from "../assets/development.jpg";

function Features() {
  return (
    <section className="features">

      <div className="section-heading">

        <span className="section-tag">
          WHY SHREE HANS GURUKUL
        </span>

        <h2>
          A Sacred Journey Through
          <br />
          Bharatanatyam
        </h2>

        <p>
          Experience the beauty of Indian classical dance through
          authentic training, cultural immersion, disciplined practice,
          and artistic excellence.
        </p>

      </div>

      <div className="features-container">

        <div className="feature-card">
          <div className="feature-image">
            <img src={traditional} alt="Traditional Gurukul" />
          </div>

          <div className="feature-content">
            <h3>Traditional Gurukul</h3>

            <p>
              Learn through the revered Guru–Shishya Parampara,
              where discipline, devotion, and respect form the
              foundation of artistic growth.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-image">
            <img src={bharatanatyam} alt="Pure Bharatanatyam" />
          </div>

          <div className="feature-content">
            <h3>Pure Bharatanatyam</h3>

            <p>
              Structured and authentic Bharatanatyam training
              preserving the grace, technique, and heritage of
              this timeless classical art form.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-image">
            <img src={spiritual} alt="Spiritual Growth" />
          </div>

          <div className="feature-content">
            <h3>Spiritual & Cultural Values</h3>

            <p>
              Connect deeply with Indian culture, spirituality,
              mythology, and artistic expression through dance.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-image">
            <img src={guidance} alt="Expert Guidance" />
          </div>

          <div className="feature-content">
            <h3>Expert Mentorship</h3>

            <p>
              Receive personalized guidance under experienced
              Bharatanatyam educators committed to every student's journey.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-image">
            <img src={development} alt="Holistic Development" />
          </div>

          <div className="feature-content">
            <h3>Holistic Development</h3>

            <p>
              Develop confidence, stage presence, creativity,
              discipline, and leadership through classical arts.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Features;