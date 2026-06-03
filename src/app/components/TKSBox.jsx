'use client';

import { useState } from 'react';

export default function TKSBox({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="tks-section">
      <div className="tksBox-container">
        <div className="tksBox-header">
          <div className="tksBox-title">{title}</div>
          <button 
            className="tksBox-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'See Less' : 'See More'}
          </button>
        </div>
        <div className={`tksBox-extra ${isOpen ? 'open' : ''}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
