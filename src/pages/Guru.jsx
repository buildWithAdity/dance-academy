import "./Guru.css";
import guruImage from "../assets/Guru2.jpg";

// Match EXACT file names from your folder
import pose1 from "../assets/Pose1.jpg";
import pose2 from "../assets/Pose2.jpg";
import pose3 from "../assets/Pose3.jpg";

function Guru() {
  return (
    <div className="guru-page">

      <h1 className="guru-title">Our Guru</h1>

      <div className="guru-card">

        {/* LEFT IMAGE */}
        <div className="guru-image">
          <img src={guruImage} alt="Guru Puran Reezong Imsong" />
        </div>

        {/* INFO */}
        <div className="guru-info">
          <h2>Puran Reezong Imsong</h2>
          <h3>Bharatanatyam Dancer</h3>

          <p>
            Disciple of Karnataka Kalashree Guru Satyanarayana Raju, Bangalore.
          </p>

          <p>
            He has completed his Bharatanatyam training under his guru in South India,
            following traditional classical techniques and disciplined practice.
          </p>

          <p>
            He has extensive teaching experience in Namchi, Jorethang and other
            regions of Sikkim.
          </p>

          <p className="contact">📞 Contact: 9883683577</p>
        </div>

        {/* RIGHT GALLERY */}
        <div className="guru-gallery">

          <div className="gallery-item">
            <img src={pose1} alt="Bharatanatyam pose" />
            <p>CLASSICAL POSE 1</p>
          </div>

          <div className="gallery-item">
            <img src={pose2} alt="Bharatanatyam pose" />
            <p>CLASSICAL POSE 2</p>
          </div>

          <div className="gallery-item">
            <img src={pose3} alt="Bharatanatyam pose" />
            <p>CLASSICAL POSE 3</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Guru;