import "./Courses.css";

function Courses() {
  return (
    <div className="courses-page">

      <h1 className="title">
        Explore Our Comprehensive Curriculum
      </h1>

      <div className="courses-grid">

        <div className="course-card">
          <h2>ARAMBHA</h2>
          <h4>(Beginner Foundation)</h4>
          <p>
            Start your journey with fundamental Bharatanatyam techniques,
            basic adavus, and rhythm (Tala).
          </p>
          <p className="duration">6 Months - Weekend Batches</p>
          <button>Explore Course</button>
        </div>

        <div className="course-card">
          <h2>MADHYAMA</h2>
          <h4>(Intermediate Level)</h4>
          <p>
            Deepen your practice with complex adavus and introductory
            Margam pieces like Alarippu and Jatiswaram.
          </p>
          <p className="duration">12 Months - Mid-week & Weekend</p>
          <button>Explore Course</button>
        </div>

        <div className="course-card">
          <h2>PRAVESHIKA</h2>
          <h4>(Advanced Level)</h4>
          <p>
            Master intricate Margam compositions and expressive Abhinaya.
            Focus on Varnam and Thillana.
          </p>
          <p className="duration">18+ Months - Senior Batches</p>
          <button>Explore Course</button>
        </div>

        <div className="course-card">
          <h2>ARANGETRAM</h2>
          <h4>Preparation</h4>
          <p>
            Intensive training for solo debut performance including stamina,
            costume, and stage presentation.
          </p>
          <p className="duration">Intensive Program</p>
          <button>Explore Course</button>
        </div>

        <div className="course-card">
          <h2>Theory & Sastra</h2>
          <p>
            Learn Natya Shastra, classical texts, iconography,
            and history of Indian dance.
          </p>
          <p className="duration">Comprehensive Course</p>
          <button>Explore Course</button>
        </div>

        <div className="course-card">
          <h2>Online Masterclasses</h2>
          <p>
            Virtual workshops with guest gurus from across India.
          </p>
          <p className="duration">Scheduled Series</p>
          <button>Explore Course</button>
        </div>

      </div>

      {/* WHO THIS IS FOR */}
      <div className="who-section">
        <h2>Who This Is For</h2>

        <div className="who-grid">

          <div className="who-card">
            <h4>All Age Groups</h4>
            <p>
              This approach is for all categories of students who want to learn
              the roots of Indian Bharatanatyam.
            </p>
          </div>

          <div className="who-card">
            <h4>Rare Opportunity in Sikkim</h4>
            <p>
              As there are not many Bharatanatyam dance schools in Rangpo,
              this class provides authentic and pure Bharatanatyam training.
            </p>
          </div>

          <div className="who-card">
            <h4>Exams & Certification</h4>
            <p>
              Regular exams will be conducted and certificates will be
              provided after successful completion of each level.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Courses;