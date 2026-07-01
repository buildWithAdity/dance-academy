import "./Guru.css";

import guruImage from "../assets/Guru2.jpg";

import pose1 from "../assets/Pose1.jpg";
import pose2 from "../assets/Pose2.jpg";
import pose3 from "../assets/Pose3.jpg";

function Guru() {
  return (
    <section className="guru-page">

      {/* ================= HERO ================= */}

      <div className="guru-hero">

        <span className="guru-badge">
          SHREE HANS NRITYA SADHANA GURUKUL
        </span>

        <h1 className="guru-title">
          Our Guru
        </h1>

        <div className="gold-divider"></div>

        <p className="guru-subtitle">
          Dedicated to preserving the timeless tradition of Bharatanatyam
          through authentic classical training rooted in the
          Guru–Shishya Parampara.
        </p>

      </div>

      {/* ================= MAIN SECTION ================= */}

      <div className="guru-card">

        {/* LEFT IMAGE */}

        <div className="guru-image">

          <img
            src={guruImage}
            alt="Guru Puran Reezong Imsong"
          />

        </div>

        {/* RIGHT CONTENT */}

        <div className="guru-info">

          <h2>
            Guru Puran Reezong Imsong
          </h2>

          <h3>
            Bharatanatyam Artist & Classical Dance Educator
          </h3>

          <div className="info-divider"></div>

          <p>
            Guru Puran Reezong Imsong is a dedicated Bharatanatyam
            practitioner committed to preserving the authenticity,
            discipline, and spiritual essence of Indian classical dance.
          </p>

          <p>
            He received his Bharatanatyam training under the guidance of
            <strong> Karnataka Kalashree Guru Satyanarayana Raju</strong>,
            Bengaluru, following the traditional Guru–Shishya Parampara,
            where discipline, devotion, and continuous practice form the
            foundation of learning.
          </p>

          <p>
            With years of teaching experience across Namchi,
            Jorethang, and other regions of Sikkim, he has trained
            numerous students while nurturing confidence,
            artistic excellence, and respect for India's cultural heritage.
          </p>

          <p>
            Through Shree Hans Nritya Sadhana Gurukul, his vision is to
            establish a centre dedicated exclusively to authentic
            Bharatanatyam education, inspiring future generations to
            appreciate and preserve this timeless classical tradition.
          </p>

          <div className="guru-contact">

            <h4>Contact</h4>

            <p>
              +91 98836 83577
            </p>

          </div>

        </div>

      </div>

      {/* ================= GALLERY ================= */}

      <section className="performance-section">

        <div className="section-heading">

          <h2>
            Performance Gallery
          </h2>

          <div className="gold-divider"></div>

          <p>
            Moments from classical Bharatanatyam performances that
            reflect grace, devotion, rhythm, and artistic expression.
          </p>

        </div>

        <div className="gallery-grid">

          <div className="gallery-large">
            <img
              src={pose1}
              alt="Bharatanatyam Performance"
            />
          </div>

          <div className="gallery-small">
            <img
              src={pose2}
              alt="Bharatanatyam Performance"
            />
          </div>

          <div className="gallery-small">
            <img
              src={pose3}
              alt="Bharatanatyam Performance"
            />
          </div>

        </div>

      </section>

      {/* ================= QUOTE ================= */}

      <section className="guru-quote">

        <h2>

          यतो हस्तस्ततो दृष्टिः ।<br />

          यतो दृष्टिस्ततो मनः ।<br />

          यतो मनस्ततो भावः ।<br />

          यतो भावस्ततो रसः ॥

        </h2>

        <p>

          "Where the hands go, the eyes follow. Where the eyes go,
          the mind follows. Where the mind goes, emotions arise.
          Where emotions arise, aesthetic experience is born."

        </p>

      </section>

    </section>
  );
}

export default Guru;