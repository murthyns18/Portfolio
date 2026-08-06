import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Award, ExternalLink, Calendar, MapPin, Building2, LucideIcon } from 'lucide-react';
import { Linkedin } from './SocialIcons';
import { workExperienceData, educationData, certificationsData } from '../data/portfolioData';

interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs: TabItem[] = [
    { id: 'all', label: 'All', icon: Briefcase },
    { id: 'experience', label: 'Work Experience', icon: Building2 },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div>
            <h2 className="section-title">
              <span className="section-title-icon">
                <Briefcase size={24} />
              </span>
              Experience & Qualifications
            </h2>
            <p className="section-subtitle">
              My professional full-stack software development experience, academic background, and technical certifications.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            flexWrap: 'wrap',
            marginBottom: '2.2rem'
          }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.45rem 1rem',
                  borderRadius: '6px',
                  fontSize: '0.84rem',
                  fontWeight: 500,
                  border: isActive ? '1px solid #00e676' : '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: isActive ? 'rgba(0, 230, 118, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                  color: isActive ? '#00e676' : '#94a3b8',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Tab Content with Animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
          >
            {/* Section 1: Work Experience */}
            {(activeTab === 'all' || activeTab === 'experience') && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <Building2 size={20} className="text-green" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>Professional Experience</h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}>
                  {workExperienceData.map((exp, idx) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.1 }}
                      whileHover={{ x: 6, transition: { duration: 0.2 } }}
                      className="glass-card"
                      style={{
                        padding: '1.5rem',
                        borderLeft: '3px solid #00e676',
                        background: 'rgba(15, 21, 18, 0.85)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                        <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                          {exp.companyLogo && (
                            <img
                              src={exp.companyLogo}
                              alt={exp.company}
                              className="company-logo-img"
                              style={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '8px',
                                objectFit: 'cover',
                                border: '1px solid rgba(255, 255, 255, 0.12)',
                                flexShrink: 0
                              }}
                            />
                          )}
                          <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>{exp.role}</h4>
                            {exp.companyLinkedin ? (
                              <a
                                href={exp.companyLinkedin}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                  color: '#00e676',
                                  fontSize: '0.92rem',
                                  fontWeight: 600,
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.35rem',
                                  textDecoration: 'none',
                                  marginTop: '0.2rem'
                                }}
                                className="company-link"
                              >
                                {exp.company} <Linkedin size={13} />
                              </a>
                            ) : (
                              <p style={{ color: '#00e676', fontSize: '0.92rem', fontWeight: 600, marginTop: '0.2rem' }}>
                                {exp.company}
                              </p>
                            )}
                          </div>
                        </div>

                        <span
                          style={{
                            padding: '0.2rem 0.65rem',
                            borderRadius: '4px',
                            backgroundColor: exp.type === 'Full-time' ? 'rgba(0, 230, 118, 0.12)' : 'rgba(168, 85, 247, 0.12)',
                            border: exp.type === 'Full-time' ? '1px solid rgba(0, 230, 118, 0.25)' : '1px solid rgba(168, 85, 247, 0.25)',
                            color: exp.type === 'Full-time' ? '#00e676' : '#c084fc',
                            fontSize: '0.78rem',
                            fontWeight: 600
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: '#94a3b8', fontSize: '0.83rem', marginBottom: '0.85rem', marginTop: '0.6rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Calendar size={13} className="text-green" /> {exp.period} {exp.duration && `• ${exp.duration}`}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <MapPin size={13} className="text-green" /> {exp.location}
                        </span>
                      </div>

                      <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                        {exp.description}
                      </p>

                      {/* Skills Pills */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            style={{
                              padding: '0.2rem 0.55rem',
                              borderRadius: '4px',
                              backgroundColor: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid rgba(255, 255, 255, 0.07)',
                              color: '#e2e8f0',
                              fontSize: '0.78rem',
                              fontWeight: 500
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 2: Education */}
            {(activeTab === 'all' || activeTab === 'education') && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <GraduationCap size={20} className="text-green" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>Education</h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
                  {educationData.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.1 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="glass-card"
                      style={{
                        padding: '1.4rem',
                        borderLeft: '3px solid #3b82f6',
                        background: 'rgba(15, 21, 18, 0.85)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.3rem' }}>
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>{edu.degree}</h4>
                        <span
                          style={{
                            padding: '0.15rem 0.55rem',
                            borderRadius: '4px',
                            backgroundColor: 'rgba(59, 130, 246, 0.12)',
                            border: '1px solid rgba(59, 130, 246, 0.25)',
                            color: '#60a5fa',
                            fontSize: '0.78rem',
                            fontWeight: 700
                          }}
                        >
                          {edu.percentage}
                        </span>
                      </div>

                      <p style={{ color: '#60a5fa', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                        {edu.institution}
                      </p>

                      <div style={{ display: 'flex', gap: '0.85rem', color: '#94a3b8', fontSize: '0.82rem', marginBottom: '0.6rem' }}>
                        <span>📍 {edu.location}</span>
                        <span>🗓️ {edu.period}</span>
                      </div>

                      <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.5 }}>
                        {edu.highlight}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 3: Certifications */}
            {(activeTab === 'all' || activeTab === 'certifications') && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <Award size={20} className="text-green" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>Certifications</h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
                  {certificationsData.map((cert, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.1 }}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className="glass-card"
                      style={{
                        padding: '1.25rem 1.4rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1rem',
                        background: 'rgba(15, 21, 18, 0.85)'
                      }}
                    >
                      <div>
                        <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>
                          {cert.title}
                        </h4>
                        <p style={{ color: '#94a3b8', fontSize: '0.82rem' }}>
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>

                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline"
                        style={{
                          padding: '0.35rem 0.75rem',
                          fontSize: '0.78rem',
                          height: '32px',
                          borderRadius: '6px',
                          whiteSpace: 'nowrap',
                          flexShrink: 0
                        }}
                      >
                        View PDF <ExternalLink size={13} />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
