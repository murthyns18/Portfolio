import { useState } from 'react';
import { FolderGit2, ArrowRight, Target, Network, BarChart3, Utensils, ShoppingBag, Users, Globe } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const filteredProjects = filter === 'All'
    ? projectsData
    : filter === 'Featured'
    ? projectsData.filter(p => p.featured)
    : projectsData.filter(p => p.techStack.some(t => t.toLowerCase().includes(filter.toLowerCase())));

  const renderBadgeIcon = (iconName: string, color?: string) => {
    const props = { size: 24, style: { color: color || '#00e676' } };
    switch (iconName) {
      case 'Target':
        return <Target {...props} />;
      case 'Workflow':
        return <Network {...props} />;
      case 'BarChart3':
        return <BarChart3 {...props} />;
      case 'Utensils':
        return <Utensils {...props} />;
      case 'ShoppingBag':
        return <ShoppingBag {...props} />;
      case 'Users':
        return <Users {...props} />;
      default:
        return <Globe {...props} />;
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div>
            <h2 className="section-title">
              <span className="section-title-icon">
                <FolderGit2 size={26} />
              </span>
              Featured Projects
            </h2>
            <p className="section-subtitle">
              Showcase of web applications, enterprise software solutions, and full-stack projects I've built.
            </p>
          </div>

          <a
            href="#projects"
            onClick={() => setFilter(filter === 'All' ? 'Featured' : 'All')}
            className="view-all-link"
          >
            {filter === 'All' ? 'Show Featured Only' : 'View All Projects'} <ArrowRight size={18} />
          </a>
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
          {['All', 'Featured', 'React', 'ASP.NET', 'Spring Boot', 'Java'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: '8px',
                fontSize: '0.88rem',
                fontWeight: 500,
                border: filter === f ? '1px solid #00e676' : '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: filter === f ? 'rgba(0, 230, 118, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                color: filter === f ? '#00e676' : '#94a3b8',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card project-card-item"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem',
                background: 'rgba(17, 23, 20, 0.75)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorative Accent Glow Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: `${project.accentColor}15` || 'rgba(0,230,118,0.1)',
                    border: `1px solid ${project.accentColor}40` || 'rgba(0,230,118,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 0 15px ${project.accentColor}25`
                  }}
                >
                  {renderBadgeIcon(project.badgeIcon, project.accentColor)}
                </div>

                {/* Circuit lines graphic decoration */}
                <div style={{ opacity: 0.25 }}>
                  <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                    <circle cx="35" cy="5" r="3" fill={project.accentColor || '#00e676'} />
                    <circle cx="10" cy="25" r="3" fill={project.accentColor || '#00e676'} />
                    <path d="M35 5L20 5L10 25" stroke={project.accentColor || '#00e676'} strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.6rem'
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.92rem',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    minHeight: '65px'
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.25rem 0.65rem',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#cbd5e1',
                        fontSize: '0.78rem',
                        fontWeight: 500
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => setSelectedProject(project)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: project.accentColor || '#00e676',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    cursor: 'pointer',
                    padding: 0
                  }}
                  className="project-link"
                >
                  View Project <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        .project-card-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.6);
        }
        .project-link:hover {
          gap: 0.6rem !important;
          text-shadow: 0 0 8px currentColor;
        }
      `}</style>
    </section>
  );
}
