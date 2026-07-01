import "./Blog.css";

import guru from "../assets/Guru21.jpg";
import pose1 from "../assets/Pose1.jpg";
import pose2 from "../assets/Pose2.jpg";
import pose3 from "../assets/Pose3.jpg";

function Blog() {

  const articles = [

    {
      image: pose1,
      category: "Bharatanatyam",
      title: "Understanding the Beauty of Mudras",
      date: "June 2026"
    },

    {
      image: pose2,
      category: "Tradition",
      title: "Guru–Shishya Parampara: A Sacred Bond",
      date: "June 2026"
    },

    {
      image: pose3,
      category: "Performance",
      title: "Preparing for Your First Stage Performance",
      date: "June 2026"
    }

  ];

  return (

    <section className="blog-page">

      {/* HERO */}

      <section className="blog-hero">

        <img
          src={guru}
          alt="Bharatanatyam"
          className="hero-image"
        />

        <div className="hero-overlay">

          <span className="blog-badge">

            SHREE HANS NRITYA SADHANA GURUKUL

          </span>

          <h1>

            Our Journal

          </h1>

          <div className="gold-line"></div>

          <p>

            Stories, traditions, performances and insights that
            celebrate the timeless beauty of Bharatanatyam.

          </p>

        </div>

      </section>

      {/* FEATURED ARTICLE */}

      <section className="featured-blog">

        <div className="featured-image">

          <img
            src={guru}
            alt="Featured"
          />

        </div>

        <div className="featured-content">

          <span>

            FEATURED ARTICLE

          </span>

          <h2>

            Bharatanatyam:
            <br />
            A Dance Beyond Performance

          </h2>

          <div className="gold-line"></div>

          <p>

            Bharatanatyam is more than movement.
            It is a spiritual language where rhythm,
            expression and devotion unite to narrate
            timeless stories passed through generations.

          </p>

          <button>

            Read Article

          </button>

        </div>

      </section>
            {/* ================= LATEST ARTICLES ================= */}

      <section className="blog-section">

        <div className="section-heading">

          <span className="section-tag">

            LATEST ARTICLES

          </span>

          <h2>

            Explore Our Journal

          </h2>

          <div className="gold-line"></div>

          <p>

            Discover stories, traditions, and insights that
            preserve the spirit of Bharatanatyam while inspiring
            every student on their artistic journey.

          </p>

        </div>

        <div className="blog-grid">

          {articles.map((article, index) => (

            <article
              className="blog-card"
              key={index}
            >

              <div className="blog-image">

                <img
                  src={article.image}
                  alt={article.title}
                />

              </div>

              <div className="blog-content">

                <span className="blog-category">

                  {article.category}

                </span>

                <h3>

                  {article.title}

                </h3>

                <p className="blog-date">

                  {article.date}

                </p>

                <button className="read-btn">

                  Read More →

                </button>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* ================= INSIGHTS ================= */}

      <section className="blog-insight">

        <div className="insight-content">

          <span className="section-tag">

            CLASSICAL INSIGHTS

          </span>

          <h2>

            Preserving Tradition
            <br />
            Through Knowledge

          </h2>

          <div className="gold-line"></div>

          <p>

            Every article shared through our journal reflects
            the philosophy, discipline and timeless heritage
            of Bharatanatyam. From learning mudras to understanding
            the Guru–Shishya tradition, our goal is to inspire
            every dancer beyond the classroom.

          </p>

        </div>

        <div className="insight-image">

          <img
            src={pose3}
            alt="Bharatanatyam"
          />

        </div>

      </section>

            {/* ================= UPCOMING ARTICLES ================= */}

      <section className="blog-coming">

        <div className="coming-content">

          <span className="section-tag">

            COMING SOON

          </span>

          <h2>

            More Stories,
            <br />
            More Inspiration

          </h2>

          <div className="gold-line"></div>

          <p>

            Our journal will continue to share inspiring
            articles about Bharatanatyam, the Guru–Shishya
            Parampara, performance experiences, student
            achievements and the rich cultural heritage that
            shapes every dancer's journey.

          </p>

        </div>

      </section>

      {/* ================= NEWSLETTER ================= */}

      <section className="blog-newsletter">

        <div className="newsletter-content">

          <span className="section-tag">

            STAY CONNECTED

          </span>

          <h2>

            Receive Our Latest
            Articles & Updates

          </h2>

          <div className="gold-line"></div>

          <p>

            Join our community and receive inspiring
            stories, academy news and Bharatanatyam
            insights directly from Shree Hans Nritya
            Sadhana Gurukul.

          </p>

          <div className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>

              Subscribe

            </button>

          </div>

        </div>

      </section>

      {/* ================= QUOTE ================= */}

      <section className="blog-ending">

        <div className="ending-line"></div>

        <h2>

          "Art is not merely learned,
          <br />
          it is lived through devotion."

        </h2>

        <span>

          SHREE HANS NRITYA SADHANA GURUKUL

        </span>

      </section>

    </section>

  );

}

export default Blog;