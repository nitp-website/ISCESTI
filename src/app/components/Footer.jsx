import Link from 'next/link';
import VisitorCounter from '@/components/VisitorCounter';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/img/ICTKS_main.png" alt="ICTKS Logo" />
            <span>ICTKS</span>
          </div>
          <div className="footer-links">
            <div className="links-column">
              <h4>Quick Links</h4>
              <Link href="/">Home</Link>
              <Link href="/schedule">Schedule</Link>
              <Link href="/committee">Committee</Link>
            </div>
            <div className="links-column">
              <h4>Resources</h4>
              <Link href="/registration">Registration</Link>
              <Link href="/sponsors">Sponsors</Link>
              <Link href="/reach">Reach Us</Link>
            </div>
            <div className="links-column">
              <h4>Contact</h4>
              <p><i className="fas fa-map-marker-alt"></i> NIT Patna, Ashok Rajpath, <br /> Patna, Bihar, <br />800005, India</p>
              <p><i className="fas fa-envelope"></i> ictks2026@nitp.ac.in</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 ICTKS - All Rights Reserved</p>
          <VisitorCounter />
          <div className="social-icons">
            <Link href="/reach"><i className="fab fa-facebook-f"></i></Link>
            <Link href="/reach"><i className="fab fa-twitter"></i></Link>
            <Link href="/reach"><i className="fab fa-linkedin-in"></i></Link>
            <Link href="/reach"><i className="fab fa-instagram"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
