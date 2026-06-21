import "./About.css";

function About() {
  return (
    <section className="about-page">

      <div className="about-container">

        <div className="about-badge">
          ✨ Opening Soon
        </div>

        <h1 className="about-title">
          About Shree Hans Nritya Sadhana Gurukul
        </h1>

        <p className="about-subtitle">
          Preserving the timeless heritage of Bharatanatyam through
          discipline, devotion, culture, and artistic excellence.
        </p>

        <div className="about-card">

          <h2>Our Vision</h2>

          <p>
            Shree Hans Nritya Sadhana Gurukul is being established with the
            vision of nurturing students through the sacred Guru–Shishya
            Parampara, where dance is not merely taught but lived as a path
            of discipline, devotion, and self-development.
          </p>

          <p>
            Our academy is dedicated to preserving the rich traditions of
            Bharatanatyam while creating an inspiring environment where
            students can develop confidence, grace, cultural awareness,
            and artistic expression.
          </p>

          <p>
            Under the guidance of experienced Bharatanatyam mentor
            <strong> Guru Puran Reezong Imsong</strong>, students will
            receive authentic training rooted in classical techniques and
            traditional values.
          </p>

        </div>

        <div className="about-highlights">

          <div className="highlight-card">
            <h3>Traditional Training</h3>
            <p>
              Authentic Bharatanatyam instruction following classical
              South Indian traditions.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Guru–Shishya Parampara</h3>
            <p>
              Personalized guidance emphasizing discipline, respect,
              and dedication.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Holistic Development</h3>
            <p>
              Building confidence, character, cultural values,
              and artistic excellence.
            </p>
          </div>

        </div>

        <div className="coming-section">
          <h2>Admissions Opening Soon</h2>

          <p>
            We are currently preparing our academy and course structure.
            Admission details, class schedules, and fee information will
            be announced soon.
          </p>

          <div className="coming-tag">
            Launching Soon • Stay Connected
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;