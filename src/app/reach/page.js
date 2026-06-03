import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Reach() {
  return (
    <>
      <Navbar />
      
      <section className="contact-container">
        <div className="contact-card">
          <div className="left-section">
            <h2><i className="fas fa-envelope"></i> Get in Touch</h2>
            <form className="contact-form">
              <input type="text" placeholder="Full Name *" required />
              <input type="email" placeholder="Email ID *" required />
              <input type="text" placeholder="Organization Name" />
              <input type="tel" placeholder="Contact No. *" required />
              <textarea placeholder="Your Message *" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="right-section">
            <div className="info-box">
              <h3>Contact Info</h3>
              <p>
                <strong>Address:</strong><br />
                Department of Civil Engineering<br />
                National Institute of Technology Patna<br />
                Ashok Rajpath, Patna, 800005, Bihar
              </p>
              <p>
                <strong>Website:</strong> <a href="https://www.nitp.ac.in/" target="_blank" rel="noopener noreferrer">nitp.ac.in</a>
              </p>
              <p>
                <strong>Email:</strong><br />
                iscesti2027@nitp.ac.in
              </p>
              <p>
                <strong>Enquiries:</strong><br />
                For registration, sponsorship and submission queries, write to <a href="mailto:iscesti2027@nitp.ac.in">iscesti2027@nitp.ac.in</a>
              </p>
              <p>
                <strong>Bank / Payment:</strong><br />
                Account Name: NIT PATNA INNOVATION AND INCUBATION FOUNDATION<br />
                Account Number: 44435230580 · SBI, Mahendru Branch · IFSC: SBIN0003129
              </p>
            </div>
            <div className="map-box">
              <iframe 
                src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5218304670634!2d85.16941987485127!3d25.620800914414065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82f06!2sNational%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1751624475882!5m2!1sen!2sin" 
                allowFullScreen="" 
                loading="lazy"
                title="NIT Patna Location">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
