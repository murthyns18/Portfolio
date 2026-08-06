import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '2rem 0',
        backgroundColor: '#060a08',
        position: 'relative'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
          © 2025 {personalInfo.name}. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: '#00e676',
            color: '#041209',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 0 15px rgba(0, 230, 118, 0.4)',
            transition: 'transform 0.2s ease, background-color 0.2s ease'
          }}
          className="scroll-top-btn"
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </button>
      </div>

      <style>{`
        .scroll-top-btn:hover {
          transform: translateY(-4px);
          background-color: #00ff84;
        }
      `}</style>
    </footer>
  );
}
