'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/img/ICTKS_main.png" alt="ICTKS Logo" />
          <span>ICTKS</span>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <i className="fas fa-list" style={{color: '#56301e'}} id="list-icon"></i>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="nav-links">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/committee" onClick={() => setIsMenuOpen(false)}>Committee</Link>
          <Link href="/abstract-paper-submission" onClick={() => setIsMenuOpen(false)}>Abstract and Paper Submission</Link>
          <Link href="/registration" onClick={() => setIsMenuOpen(false)}>Registration</Link>
          <Link href="/schedule" onClick={() => setIsMenuOpen(false)}>Schedule</Link>
          <Link href="/sponsors" onClick={() => setIsMenuOpen(false)}>Sponsors</Link>
          <Link href="/reach" onClick={() => setIsMenuOpen(false)}>Reach Us</Link>
        </div>
      </div>
    </nav>
  );
}
