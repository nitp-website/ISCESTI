import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Registration() {
  return (
    <>
      <Navbar />
      
      <section className="modern-reg-section">
        <div className="modern-reg-container">
          <h1 className="modern-reg-title">Registration</h1>
          <p className="modern-reg-subtitle">
            Join us at <span>NIT Patna</span>
          </p>
          <p className="event-date-reg">Conference Dates: May 27-29, 2027</p>

          <div className="modern-reg-header">
            <h2><i className="fas fa-location-arrow"></i> Registration Fee</h2>
            <p className="modern-reg-note">(Include free fooding [Breakfast, lunch and dinner])</p>
          </div>

          <div className="modern-fee-cards">
            <div className="modern-fee-card">
              <h3><i className="fas fa-user-graduate"></i> Student (Indian)</h3>
              <p>Early bird: INR 4,500 + 18% GST · After: INR 5,500 + 18% GST</p>
            </div>
            <div className="modern-fee-card">
              <h3><i className="fas fa-chalkboard-teacher"></i> Faculty / Officer / Scientist (Indian)</h3>
              <p>Early bird: INR 7,000 + 18% GST · After: INR 8,500 + 18% GST</p>
            </div>
            <div className="modern-fee-card">
              <h3><i className="fas fa-user-friends"></i> Accompanying Person (Indian)</h3>
              <p>Early bird: INR 5,000 + 18% GST · After: INR 6,000 + 18% GST</p>
            </div>
          </div>
          <p className="modern-early-bird-note">Early bird rates apply until 15 November, 2026 (category-specific).</p>

          <div className="modern-payment-section">
            <div className="modern-payment-info">
              <h3>Payment / Bank Transfer</h3>
              <ul>
                <li><strong>Account Name:</strong> NIT PATNA INNOVATION AND INCUBATION FOUNDATION</li>
                <li><strong>Account Number:</strong> 44435230580</li>
                <li><strong>Bank Name:</strong> SBI, Mahendru Branch</li>
                <li><strong>IFSC Code:</strong> SBIN0003129</li>
              </ul>
              <p className="small">Please mention the participant name and transaction ID when registering. GST will be charged as applicable.</p>
            </div>
            <div className="modern-payment-right">
              <img src="/img/QRCODE.png" alt="Registration QR Code" />
              <div className="modern-register-info">
                <h4>SCAN & REGISTER</h4>
                <p><strong>Note:</strong> Upload transaction number and payment receipt when completing registration.</p>
              </div>
              <span><b>or</b></span>
            </div>
            <a
              href="https://shorturl.at/P80k2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn submit-paper"
            >
              Register Online
            </a>
          </div>
        </div>

        <section className="conf-highlights-container">
          <div className="conf-highlights-header">
            <h2 className="conf-highlights-title">Conference Highlights</h2>
            <div className="conf-highlights-decoration"></div>
          </div>
          
          <div className="conf-highlights-grid">
            <div className="conf-highlight-card">
              <div className="conf-card-icon">📚</div>
              <h3 className="conf-card-title">Publication Opportunities</h3>
              <p className="conf-card-content">
                The conference proceedings as well as selected high quality research papers would be published in SCOPUS/SCIE Journal. 
                All Papers will be published in Conference proceedings (Springer/Elsevier/other Indexed in SCOPUS/SCI/SCIE/ESCI).
              </p>
            </div>
            
            <div className="conf-highlight-card">
              <div className="conf-card-icon">🏆</div>
              <h3 className="conf-card-title">Awards & Recognition</h3>
              <p className="conf-card-content">
                The Best paper award and certificate shall be given in each session. Awards shall be provided for Best papers in different 
                themes for Oral and Poster presentation. The overall best presentation shall be considered for award.
              </p>
            </div>
            
            <div className="conf-highlight-card">
              <div className="conf-card-icon">🍽️</div>
              <h3 className="conf-card-title">Included Amenities</h3>
              <p className="conf-card-content">
                Conference breakfast, lunch, dinner, and tea is included in the registration fee of the students, faculties and officers.
              </p>
            </div>
            
            <div className="conf-highlight-card">
              <div className="conf-card-icon">🎭</div>
              <h3 className="conf-card-title">Cultural Program</h3>
              <p className="conf-card-content">
                A cultural program shall be organised on the cocluding day of the conference related to traditional knowledge system among 
                participants (Students/Officers). Participants can show their talent and win attractive prizes.
              </p>
            </div>
            
            <div className="conf-highlight-card">
              <div className="conf-card-icon">🏨</div>
              <h3 className="conf-card-title">Accommodation</h3>
              <p className="conf-card-content">
                Limited seats in boys and girls hostels will be available on first come first served basis. Many budget hotels near NIT Patna 
                are also available.
              </p>
            </div>
            
            <div className="conf-highlight-card">
              <div className="conf-card-icon">🌍</div>
              <h3 className="conf-card-title">Global Participation</h3>
              <p className="conf-card-content">
                This international conference is expected to be a grand assembly of experts and participants, both international and national, 
                at NIT Patna.
              </p>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}
