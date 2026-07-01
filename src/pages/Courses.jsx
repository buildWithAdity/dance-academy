import "./Courses.css";

function Courses() {
  return (
    <section className="courses-page">

      {/* ================= HERO ================= */}

      <div className="course-hero">

        <span className="hero-badge">
          ✦ Admissions Opening Soon
        </span>

        <h1>
          The Learning Journey
        </h1>

        <h3>
          Authentic Bharatanatyam Education Rooted in the
          Guru–Shishya Parampara
        </h3>

        <div className="hero-divider"></div>

        <p>
          At <strong>Shree Hans Nritya Sadhana Gurukul</strong>, we believe
          Bharatanatyam is more than a dance form—it is a lifelong journey
          of discipline, devotion, culture, and artistic excellence.
        </p>

      </div>

      {/* ================= ABOUT ================= */}

      <section className="bharatanatyam-section">

        <div className="section-heading">
          <h2>About Bharatanatyam</h2>
          <div className="gold-line"></div>
        </div>

        <div className="about-card">

          <p>
            Bharatanatyam is one of India's oldest and most revered classical
            dance traditions, originating from the temples of Tamil Nadu and
            deeply rooted in the principles of the <strong>Natya Shastra</strong>.
          </p>

          <p>
            It beautifully combines <strong>Nritta</strong> (pure dance),
            <strong> Nritya</strong> (expressive storytelling), and
            <strong> Natya</strong> (dramatic performance), creating an art
            form that celebrates rhythm, devotion, expression, and spiritual
            philosophy.
          </p>

          <p>
            Every movement, gesture, rhythm, and expression carries centuries
            of cultural wisdom, making Bharatanatyam not merely a performance,
            but a sacred practice of self-discipline and artistic growth.
          </p>

        </div>

      </section>

      {/* ================= PHILOSOPHY ================= */}

      <section className="philosophy-section">

        <div className="section-heading">
          <h2>Our Philosophy</h2>
          <div className="gold-line"></div>
        </div>

        <div className="philosophy-grid">

          <div className="philosophy-card">
            <h3>Tradition</h3>

            <p>
              Preserving the authenticity of Bharatanatyam through classical
              teachings, cultural values, and respect for its rich heritage.
            </p>
          </div>

          <div className="philosophy-card">
            <h3>Discipline</h3>

            <p>
              Encouraging dedication, consistency, humility, and perseverance
              as essential qualities of every classical dancer.
            </p>
          </div>

          <div className="philosophy-card">
            <h3>Devotion</h3>

            <p>
              Inspiring students to approach Bharatanatyam as a meaningful
              journey of expression, spirituality, and lifelong learning.
            </p>
          </div>

        </div>

      </section>

      {/* ================= LEARNING ================= */}

      <section className="learning-section">

        <div className="section-heading">
          <h2>The Learning Journey</h2>
          <div className="gold-line"></div>
        </div>

        <div className="learning-grid">

          <div className="learning-card">
            <h3>Classical Foundations</h3>
            <p>
              Strong emphasis on posture, balance, body alignment,
              and traditional Adavus.
            </p>
          </div>

          <div className="learning-card">
            <h3>Abhinaya</h3>
            <p>
              Developing expressive storytelling through facial expressions,
              gestures, and emotional interpretation.
            </p>
          </div>

          <div className="learning-card">
            <h3>Rhythm & Tala</h3>
            <p>
              Understanding rhythm, timing, coordination,
              and musical sensitivity.
            </p>
          </div>

          <div className="learning-card">
            <h3>Classical Repertoire</h3>
            <p>
              Learning the traditional structure of Bharatanatyam
              with patience and proper guidance.
            </p>
          </div>

          <div className="learning-card">
            <h3>Theory & Culture</h3>
            <p>
              Appreciating the history, philosophy,
              symbolism, and cultural significance
              of Bharatanatyam.
            </p>
          </div>

          <div className="learning-card">
            <h3>Stage Confidence</h3>
            <p>
              Building confidence, discipline,
              artistic expression,
              and performance etiquette.
            </p>
          </div>

        </div>

      </section>

      {/* ================= CURRICULUM ================= */}

      <section className="curriculum-section">

        <div className="curriculum-card">

          <span className="coming-tag">
            Curriculum Announcement
          </span>

          <h2>Structured Training Programme</h2>

          <p>
            We are currently designing a comprehensive curriculum that
            reflects the traditional values of Bharatanatyam while
            providing systematic learning for students of different age groups.
          </p>

          <p>
            Details regarding admissions, batches, schedules,
            examinations, performances, and training levels
            will be announced soon.
          </p>

        </div>

      </section>

      {/* ================= QUOTE ================= */}

      <section className="quote-section">

        <h2>
          "Dance is not merely movement;
          it is a discipline that shapes
          the body, mind, and soul."
        </h2>

        <p>
          — SHREE HANS NRITYA SADHANA GURUKUL
        </p>

      </section>

      {/* ================= CTA ================= */}

      <section className="cta-section">

        <h2>
          Begin Your Bharatanatyam Journey
        </h2>

        <p>
          Admissions and enquiry details will be announced shortly.
          We look forward to welcoming aspiring students into a journey
          of tradition, discipline, devotion, and artistic excellence.
        </p>

        <button>
          Opening Soon
        </button>

      </section>

    </section>
  );
}

export default Courses;