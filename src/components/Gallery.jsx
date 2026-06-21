import "./Gallery.css";

function Gallery() {
  return (
    <section className="gallery-page">

      <div className="gallery-header">

        <div className="gallery-badge">
          ✨ Opening Soon
        </div>

        <h1 className="gallery-title">
          Gallery
        </h1>

        <p className="gallery-subtitle">
          A glimpse into the beauty, grace, discipline, and cultural
          richness of Bharatanatyam.
        </p>

      </div>

      <div className="gallery-coming-card">

        <h2>Our Artistic Journey Begins Soon</h2>

        <p>
          We are currently preparing a collection of performance moments,
          training sessions, cultural celebrations, and artistic milestones.
        </p>

        <p>
          Soon you will be able to explore photographs showcasing the
          dedication, elegance, and spirit of Bharatanatyam at
          Shree Hans Nritya Sadhana Gurukul.
        </p>

        <div className="gallery-tag">
          Performances • Training • Culture • Tradition
        </div>

      </div>

      <div className="gallery-preview">

        <div className="preview-box">
          <span>Coming Soon</span>
        </div>

        <div className="preview-box">
          <span>Coming Soon</span>
        </div>

        <div className="preview-box">
          <span>Coming Soon</span>
        </div>

        <div className="preview-box">
          <span>Coming Soon</span>
        </div>

      </div>

    </section>
  );
}

export default Gallery;