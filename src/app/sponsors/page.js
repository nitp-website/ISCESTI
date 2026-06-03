import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Sponsors() {
  return (
    <>
      <Navbar />
      
      <section className="sponsors-section-sp">
        <h1 className="sponsors-title-sp">Our Generous Sponsors</h1>
        <p>
          Sponsors are invited for this international conference. Any contribution shall be appreciated.  
          Please note that sponsorship shall include of GST 18%.
        </p>

        {/* Sponsorship Tiers Section */}
        <div className="sponsorship-tiers-container">
          <h2 className="tiers-heading">Sponsorship Categories</h2>
          <div className="tiers-grid">
            {/* Title Sponsor */}
            <div className="tier-card tier-title-card">
              <div className="tier-ribbon">PREMIUM</div>
              <div className="tier-icon">👑</div>
              <h3 className="tier-name">Title Sponsor</h3>
              <p className="tier-amount">₹3,00,000</p>
              <div className="tier-line"></div>
              <ul className="tier-benefits">
                <li>Premium logo placement</li>
                <li>Keynote opportunity</li>
                <li>Exclusive branding</li>
              </ul>
            </div>

            {/* Diamond Sponsor */}
            <div className="tier-card tier-diamond-card">
              <div className="tier-ribbon">ELITE</div>
              <div className="tier-icon">💎</div>
              <h3 className="tier-name">Diamond Sponsor</h3>
              <p className="tier-amount">₹2,00,000</p>
              <div className="tier-line"></div>
              <ul className="tier-benefits">
                <li>Featured visibility</li>
                <li>Speaking slot</li>
                <li>VIP networking</li>
              </ul>
            </div>

            {/* Gold Sponsor */}
            <div className="tier-card tier-gold-card">
              <div className="tier-ribbon">GOLD</div>
              <div className="tier-icon">🥇</div>
              <h3 className="tier-name">Gold Sponsor</h3>
              <p className="tier-amount">₹1,00,000</p>
              <div className="tier-line"></div>
              <ul className="tier-benefits">
                <li>Logo on materials</li>
                <li>Booth space</li>
                <li>Conference pass</li>
              </ul>
            </div>

            {/* Silver Sponsor */}
            <div className="tier-card tier-silver-card">
              <div className="tier-ribbon">SILVER</div>
              <div className="tier-icon">🥈</div>
              <h3 className="tier-name">Silver Sponsor</h3>
              <p className="tier-amount">₹50,000</p>
              <div className="tier-line"></div>
              <ul className="tier-benefits">
                <li>Logo on website</li>
                <li>Event mention</li>
                <li>Promotional items</li>
              </ul>
            </div>

            {/* Bronze Sponsor */}
            <div className="tier-card tier-bronze-card">
              <div className="tier-ribbon">BRONZE</div>
              <div className="tier-icon">🥉</div>
              <h3 className="tier-name">Bronze Sponsor</h3>
              <p className="tier-amount">₹25,000</p>
              <div className="tier-line"></div>
              <ul className="tier-benefits">
                <li>Logo in program</li>
                <li>Event access</li>
                <li>Digital display</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="instructions-section">
          <div className="instructions-container">
            <h3 className="guidelines-subtitle">
              <i className="fas fa-book"></i> Sponsorship Highlights
            </h3>
            <p>We invite industry partners and institutions to support ISCESTI-2027. Sponsorship funds will help host keynote lectures, technical sessions and an exhibition.</p>
            <p><strong>Benefits (typical):</strong></p>
            <ul className="guidelines-list">
              <li><strong>Brand visibility:</strong> Logo on conference materials, website and brochure.</li>
              <li><strong>Exhibition space:</strong> Stall or display area for products and outreach.</li>
              <li><strong>Networking:</strong> Access to keynote, panel and VIP networking sessions.</li>
              <li><strong>CSR alignment:</strong> Support for traditional knowledge and community outreach initiatives.</li>
            </ul>
            <p className="center bold">Support the Artisans | Celebrate Knowledge | Strengthen Traditions</p>
            <p>For sponsorship enquiries contact: <a href="mailto:iscesti2027@nitp.ac.in">iscesti2027@nitp.ac.in</a></p>
          </div>
        </section>

        <div className="contact-for-sponsors">
          <Link href="/reach">Contact for Sponsors</Link>
        </div>

        <div className="sponsors-container-sp">
          <p className="muted">Sponsorship partner details and logos will be displayed here once confirmed.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
