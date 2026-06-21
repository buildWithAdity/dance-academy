import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-container">

        <div className="contact-badge">
          ✨ Admissions Opening Soon
        </div>

        <h1 className="contact-title">
          Contact Shree Hans Nritya Sadhana Gurukul
        </h1>

        <p className="contact-subtitle">
          We welcome aspiring students, parents, and Bharatanatyam
          enthusiasts to connect with us and learn more about our
          upcoming academy.
        </p>

        <div className="contact-card">

          {/* EMAIL */}

          <div className="contact-item">
            <div className="contact-icon">📧</div>

            <h3>Email</h3>

            <a
              href="mailto:shreehansgurukul@gmail.com"
              className="contact-link"
            >
              shreehansgurukul@gmail.com
            </a>
          </div>

          {/* LOCATION */}

          <div className="contact-item">
            <div className="contact-icon">📍</div>

            <h3>Location</h3>

            <p>
              Rangpo, Sikkim
              <br />
              Pakyong District – 737132
            </p>
          </div>

          {/* PHONE */}

          <div className="contact-item">
            <div className="contact-icon">📞</div>

            <h3>Phone</h3>

            <a
              href="tel:+919064932108"
              className="contact-link"
            >
              9064932108
            </a>

            <br />

            <a
              href="tel:+917364061456"
              className="contact-link"
            >
              7364061456
            </a>
          </div>

        </div>

        {/* COMING SOON SECTION */}

        <div className="contact-coming">

          <h2>
            Admissions & Classes Opening Soon
          </h2>

          <p>
            Shree Hans Nritya Sadhana Gurukul is currently preparing
            its academy facilities, training programs, and admission
            process.
          </p>

          <p>
            Detailed information regarding courses, schedules,
            examinations, and fee structure will be announced soon.
          </p>

          <div className="coming-tag">
            Bharatanatyam • Tradition • Discipline • Devotion
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;