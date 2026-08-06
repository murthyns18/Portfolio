import React from 'react';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import { Github } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          borderTop: `4px solid ${project.accentColor || '#00e676'}`
        }}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              backgroundColor: `${project.accentColor}20` || 'rgba(0,230,118,0.15)',
              border: `1px solid ${project.accentColor}50` || 'rgba(0,230,118,0.3)',
              color: project.accentColor || '#00e676',
              fontWeight: 600,
              fontSize: '0.85rem'
            }}
          >
            {project.techStack[0]}
          </div>
        </div>

        <h3
          style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '0.75rem'
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            color: '#cbd5e1',
            fontSize: '1rem',
            lineHeight: 1.7,
            marginBottom: '1.5rem'
          }}
        >
          {project.longDescription || project.description}
        </p>

        {/* Tech Stack Pills */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Technologies Used
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#e2e8f0',
                  fontSize: '0.85rem',
                  fontWeight: 500
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{
                backgroundColor: project.accentColor || '#00e676',
                color: '#000',
                flex: 1
              }}
            >
              <Github size={18} /> View Code on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
