import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Committee() {
  return (
    <>
      <Navbar />
      
      {/* Chief Patron Section */}
      <section className="organizing-committee">
        <div className="container">
          <h2>Organising Committee</h2>
          <p className="committee-depart">Chief Patron</p>
          <div className="committee-members">
            <div className="member-card">
              <div className="member-info">
                <h3>Prof. Pradip Kumar Jain</h3>
                <p>Director, National Institute of Technology Patna</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patron Section */}
      <section className="organizing-committee">
        <div className="container">
          <p className="committee-depart">Patron</p>
          <div className="committee-members">
            <div className="member-card">
              <div className="member-info">
                <h3>Prof. Sunita Kumari</h3>
                <p>Head, Department of Civil Engineering, NIT Patna</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conveners */}
      <section className="organizing-committee">
        <div className="container">
          <p className="committee-depart">Conveners</p>
          <div className="committee-members">
            <div className="member-card">
              <div className="member-info">
                <h3>Prof. N. S. Maurya</h3>
                <p>Department of Civil Engineering, NIT Patna</p>
              </div>
            </div>
            <div className="member-card">
              <div className="member-info">
                <h3>Prof. Anshuman Singh</h3>
                <p>Department of Civil Engineering, NIT Patna</p>
              </div>
            </div>
            <div className="member-card">
              <div className="member-info">
                <h3>Prof. Bharat Gupta</h3>
                <p>Department of Civil Engineering, NIT Patna</p>
              </div>
            </div>
            <div className="member-card">
              <div className="member-info">
                <h3>Dr. S. K. Suman</h3>
                <p>Department of Civil Engineering, NIT Patna</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizing Chairmen and Secretaries */}
      <section className="organizing-committee">
        <div className="container">
          <p className="committee-depart">Organizing Chairman</p>
          <div className="committee-members">
            <div className="member-card">
              <div className="member-info">
                <h3>Dr. Gyani Jail Singh</h3>
                <p>Organizing Chairman</p>
              </div>
            </div>
            <div className="member-card">
              <div className="member-info">
                <h3>Dr. Bhaban Shankar Das</h3>
                <p>Organizing Chairman</p>
              </div>
            </div>
            <div className="member-card">
              <div className="member-info">
                <h3>Dr. Anil Kumar Sharma</h3>
                <p>Organizing Chairman</p>
              </div>
            </div>
            <div className="member-card">
              <div className="member-info">
                <h3>Dr. Shiv Shankar Kumar</h3>
                <p>Organizing Chairman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organising Secretaries */}
      <section className="organizing-committee">
        <div className="container">
          <p className="committee-depart committee-depart-os">Organising Secretaries</p>
          <div className="committee-members">
            <div className="member-card">
              <div className="member-info">
                <h3>Dr. Joseph Tripura</h3>
                <p>Organising Secretary</p>
              </div>
            </div>
            <div className="member-card">
              <div className="member-info">
                <h3>Dr. Satyajit Mondal</h3>
                <p>Organising Secretary</p>
              </div>
            </div>
            <div className="member-card">
              <div className="member-info">
                <h3>Dr. Govind Mohan</h3>
                <p>Organising Secretary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Advisors */}
      <section className="organizing-committee">
        <div className="container">
          <p className="committee-depart">Technical Advisors</p>
          <div className="committee-members">
            <div className="member-card">
              <div className="member-info">
                <h3>Prof. L. B. Roy</h3>
                <p>Technical Advisor (Geotechnical Engineering)</p>
              </div>
            </div>
            <div className="member-card">
              <div className="member-info">
                <h3>Prof. S. S. Mishra</h3>
                <p>Technical Advisor (Structural Engineering)</p>
              </div>
            </div>
            <div className="member-card">
              <div className="member-info">
                <h3>Prof. N. S. Maurya</h3>
                <p>Technical Advisor (Transportation / Pavement)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Committee */}
      <section className="advisor-cards-section">
        <div className="advisor-cards-container">
          <h2 className="advisor-cards-title">Advisory & Technical Committees</h2>
          <div className="advisor-card-grid">
            <div className="advisor-card">
              <h3 className="advisor-name">National & International Experts</h3>
              <p className="advisor-designation">A large advisory and technical committee comprising senior academics and practitioners from India and abroad (see brochure for full list).</p>
            </div>
            {/* Indian Advisory */}
            <div className="advisor-card">
              <h3 className="advisor-name">Prof. (Dr.) Rama Umesh Pandey</h3>
              <p className="advisor-designation">Dean (Academic), School of Planning and Architecture, Bhopal</p>
            </div>
            <div className="advisor-card">
              <h3 className="advisor-name">Prof. (Dr.) Anil Dewan (Retd.)</h3>
              <p className="advisor-designation">Dean Research, School of Planning and Architecture Delhi</p>
            </div>
            <div className="advisor-card">
              <h3 className="advisor-name">Dr. Sheuli Mitra</h3>
              <p className="advisor-designation">Associate Professor and Head, Department of Urban and Regional Planning, SPA Bhopal</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
