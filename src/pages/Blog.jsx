import "./Blog.css";
import pose2 from "../assets/Pose2.jpg";

function Blog() {
  return (
    <div className="blog-container">

      <div className="blog-hero">
        <h1>History of Bharatanatyam</h1>
        <p>One of the oldest classical dance forms of India</p>
      </div>

      <div className="blog-content">

        <div className="blog-image">
          <img src={pose2} alt="Bharatanatyam" />
        </div>

        <div className="blog-text">

          <h2>Origins</h2>
          <p>
            Bharatanatyam originated in Tamil Nadu temples over 2000 years ago
            as a sacred devotional art form.
          </p>

          <h2>Temple Tradition</h2>
          <p>
            It was performed by Devadasis as an offering to deities like Lord Shiva.
          </p>

          <h2>Revival</h2>
          <p>
            In the 20th century, it was revived and brought to stage performances worldwide.
          </p>

          <h2>Today</h2>
          <p>
            It represents Indian culture, discipline and spiritual expression.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Blog;