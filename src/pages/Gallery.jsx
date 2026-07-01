import "./Gallery.css";

import heroImage from "../assets/Guru.jpg";
import pose1 from "../assets/Pose1.jpg";
import pose2 from "../assets/Pose2.jpg";
import pose3 from "../assets/Pose3.jpg";

function Gallery() {
  const galleryImages = [
    { image: pose1, title: "Guru Parampara", subtitle: "Tradition • Discipline" },
    { image: pose2, title: "Abhinaya", subtitle: "Expression & Emotion" },
    { image: pose3, title: "Nritta", subtitle: "Grace in Motion" }
  ];

  return (
    <main className="gallery">

      {/* HERO */}
      <section className="hero">
        <img src={heroImage} className="hero-img" alt="hero" />

        <div className="hero-overlay">
          <div className="hero-badge">
            SHREE HANS NRITYA SADHANA GURUKUL
          </div>

          <h1>
            THE ART OF<br />
            BHARATANATYAM
          </h1>

          <div className="line"></div>

          <p>
            A timeless journey of rhythm, expression, devotion, and discipline.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <span className="tag">CURATED COLLECTION</span>
        <h2>Every Movement Tells a Story</h2>
        <p>
          Each frame captures devotion, discipline, and the Guru–Shishya tradition.
        </p>
      </section>

            {/* FEATURED */}
      <section className="featured">

        <div className="text">
          <span>FEATURED PERFORMANCE</span>
          <h2>Grace Beyond Movement</h2>
          <p>
            Bharatanatyam is not performed — it is experienced as devotion in motion.
          </p>
        </div>

        <div className="imgBox">
          <img src={pose3} alt="featured" />
        </div>

      </section>

      {/* LEGACY SPLIT */}
      <section className="legacy">

        <div className="imgBox">
          <img src={pose1} alt="legacy" />
        </div>

        <div className="text">
          <span>GURUKUL LEGACY</span>
          <h2>The Living Tradition</h2>
          <p>
            A sacred bond between Guru and Shishya passed through generations.
          </p>
        </div>

      </section>

            {/* GRID */}
      <section className="gridSection">

        <div className="grid">

          {galleryImages.map((item, i) => (
            <div className="card" key={i}>
              <img src={item.image} alt={item.title} />
              <div className="cardText">
                <h3>{item.title}</h3>
                <span>{item.subtitle}</span>
              </div>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Gallery;