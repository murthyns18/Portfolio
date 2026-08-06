import { User, MapPin, GraduationCap, Mail, Briefcase, Code, Rocket, Trophy } from 'lucide-react';
import { personalInfo, statsData } from '../data/portfolioData';

export default function About() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={28} className="text-green" />;
      case 'Briefcase':
        return <Briefcase size={28} className="text-green" />;
      case 'Rocket':
        return <Rocket size={28} className="text-green" />;
      case 'Trophy':
        return <Trophy size={28} className="text-green" />;
      default:
        return <Code size={28} className="text-green" />;
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div>
            <h2 className="section-title">
              <span className="section-title-icon">
                <User size={26} />
              </span>
              About Me
            </h2>
          </div>
        </div>

        {/* Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2.5rem',
            alignItems: 'start'
          }}
          className="about-grid"
        >
          {/* Left Side: Bio & Quick Facts */}
          <div>
            <p
              style={{
                color: '#cbd5e1',
                fontSize: '1.05rem',
                lineHeight: '1.8',
                marginBottom: '2rem'
              }}
            >
              {personalInfo.aboutText}
            </p>

            {/* Facts Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="fact-icon-wrapper">
                  <MapPin size={18} className="text-green" />
                </div>
                <div>
                  <span style={{ fontSize: '0.95rem', color: '#e2e8f0', fontWeight: 500 }}>
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="fact-icon-wrapper">
                  <GraduationCap size={18} className="text-green" />
                </div>
                <div>
                  <span style={{ fontSize: '0.95rem', color: '#e2e8f0', fontWeight: 500 }}>
                    {personalInfo.educationDegree}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="fact-icon-wrapper">
                  <Mail size={18} className="text-green" />
                </div>
                <div>
                  <span style={{ fontSize: '0.95rem', color: '#e2e8f0', fontWeight: 500 }}>
                    {personalInfo.email}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="fact-icon-wrapper">
                  <Briefcase size={18} className="text-green" />
                </div>
                <div>
                  <span style={{ fontSize: '0.95rem', color: '#e2e8f0', fontWeight: 500 }}>
                    {personalInfo.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: 4 Stat Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.25rem'
            }}
          >
            {statsData.map((stat) => (
              <div
                key={stat.id}
                className="glass-card"
                style={{
                  padding: '1.75rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'rgba(17, 23, 20, 0.65)'
                }}
              >
                <div style={{ marginBottom: '0.75rem' }}>
                  {getIcon(stat.icon)}
                </div>
                <div
                  style={{
                    fontSize: '2.2rem',
                    fontWeight: 800,
                    color: '#00e676',
                    letterSpacing: '-1px',
                    lineHeight: 1.1,
                    marginBottom: '0.4rem',
                    textShadow: '0 0 15px rgba(0, 230, 118, 0.3)'
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.88rem',
                    color: '#94a3b8',
                    fontWeight: 500
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .fact-icon-wrapper {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(0, 230, 118, 0.08);
          border: 1px solid rgba(0, 230, 118, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        @media (max-width: 868px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
