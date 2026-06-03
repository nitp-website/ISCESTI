import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AbstractPaperSubmission() {
  return (
    <>
      <Navbar />

      <section className="dates-section">
        <div className="dates-container">
          <h2 className="dates-title">
            <i className="fas fa-file-pen"></i> Submission Guidelines
          </h2>
          <p className="lead">Authors are invited to submit extended abstracts (max 2 pages) or full length papers on conference themes. All submissions will undergo peer review.</p>

          <div className="dates-grid">
            <div className="date-card">
              <h3 className="card-title">Extended Abstract Submission</h3>
              <p className="card-date">30 June, 2026</p>
            </div>

            <div className="date-card">
              <h3 className="card-title">Extended Abstract Closing</h3>
              <p className="card-date">31 July, 2026</p>
            </div>

            <div className="date-card">
              <h3 className="card-title">Abstract Acceptance</h3>
              <p className="card-date">31 August, 2026</p>
            </div>

            <div className="date-card">
              <h3 className="card-title">Full Paper Submission</h3>
              <p className="card-date">30 September, 2026</p>
            </div>

            <div className="date-card">
              <h3 className="card-title">Final Notification of Acceptance</h3>
              <p className="card-date">31 October, 2026</p>
            </div>
          </div>

          <h3 className="guidelines-subtitle">
            <i className="fas fa-book"></i> How to Submit
          </h3>
          <ul className="guidelines-list">
            <li>Submit an extended abstract (max 2 pages) or a full paper following the template.</li>
            <li>Papers must be original and not under consideration elsewhere.</li>
            <li>Use the conference submission link: <a href="https://shorturl.at/P80k2" target="_blank" rel="noopener noreferrer">https://shorturl.at/P80k2</a></li>
            <li>Accepted papers may be invited for oral or poster presentation.</li>
            <li>Selected papers will be considered for publication in partner indexed proceedings.</li>
          </ul>

          <div className="cta-buttons-overlay">
            <a href="https://shorturl.at/P80k2" target="_blank" rel="noopener noreferrer" className="btn submit-paper">Submit Paper</a>
            <a href="/brochure.pdf" className="btn" download>Download Brochure (PDF)</a>
          </div>

          <p className="contact-note">For queries: <strong>iscesti2027@nitp.ac.in</strong></p>
        </div>
      </section>

      <Footer />
    </>
  );
}
