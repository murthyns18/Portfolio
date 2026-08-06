import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import { techStack } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Databases', 'Frameworks', 'Tools'];

  const filteredTech = selectedCategory === 'All'
    ? techStack
    : techStack.filter(t => t.category === selectedCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div>
            <h2 className="section-title">
              <span className="section-title-icon">
                <Code2 size={26} />
              </span>
              Tech Stack
            </h2>
            <p className="section-subtitle">
              Technologies, programming languages, frameworks, and developer tools I leverage to build modern software.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: 500,
                border: selectedCategory === cat ? '1px solid #00e676' : '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: selectedCategory === cat ? 'rgba(0, 230, 118, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                color: selectedCategory === cat ? '#00e676' : '#94a3b8',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="tech-card"
              style={{
                background: 'rgba(17, 23, 20, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '1.5rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.85rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <div
                style={{
                  fontSize: '2.2rem',
                  color: tech.color || '#00e676',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '42px'
                }}
              >
                <i className={tech.iconClass}></i>
              </div>
              <span
                style={{
                  color: '#e2e8f0',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textAlign: 'center'
                }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tech-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 230, 118, 0.4) !important;
          box-shadow: 0 10px 25px -5px rgba(0, 230, 118, 0.2);
          background: rgba(22, 32, 27, 0.9) !important;
        }
      `}</style>
    </section>
  );
}
