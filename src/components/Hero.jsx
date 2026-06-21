import "./Hero.css";
import pose1 from "../assets/Pose1.jpg";

function Hero() {
  return (
    <section className="hero">

      {/* LEFT CONTENT */}
      <div className="hero-content">

        <div className="coming-badge">
          ✨ Admissions Opening Soon
        </div>

        <h1>
          SHREE HANS <br />
          NRITYA SADHANA <br />
          GURUKUL
        </h1>

        <h3>
          Preserving the Timeless Legacy of Bharatanatyam
        </h3>

        <p>
          Shree Hans Nritya Sadhana Gurukul is dedicated to nurturing
          discipline, devotion, grace, and artistic excellence through the
          sacred Guru–Shishya Parampara.
        </p>

        <p>
          More than a dance academy, it is a journey into the rich heritage
          of Indian classical arts, where every student learns to express
          culture, spirituality, and confidence through Bharatanatyam.
        </p>

        <button className="hero-btn">
          Admissions Opening Soon
        </button>

        <div className="hero-slogan">
          नृत्यं साधना • नृत्यं संस्कारः
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-image">
        <img
          src={pose1}
          alt="Bharatanatyam Dancer"
        />
      </div>

    </section>
  );
}

export default Hero;