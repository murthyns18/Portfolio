import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, Mail, Code } from 'lucide-react';
import { Linkedin, Github } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="section" style={{ paddingTop: '8.5rem', paddingBottom: '4.5rem' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '2.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Text & Content with Entrance Animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Badge */}
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="status-badge">
                <span className="status-dot"></span>
                Software Engineer
              </span>
            </div>

            {/* Title & Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-1px',
                marginBottom: '1.25rem',
                color: '#ffffff'
              }}
            >
              Hi, I'm{' '}
              <span
                style={{
                  color: '#00e676',
                  whiteSpace: 'nowrap',
                  display: 'inline-block'
                }}
              >
                {personalInfo.name}
              </span>
            </h1>

            {/* Subtitle Bio */}
            <p
              style={{
                fontSize: '1.05rem',
                color: '#94a3b8',
                lineHeight: 1.6,
                marginBottom: '2rem',
                maxWidth: '540px'
              }}
            >
              {personalInfo.roleHeadline || "Software Engineer with 1+ year of experience building scalable, high-performance web applications using ASP.NET Core, .NET, C#, SQL Server, and React JS."}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2.2rem'
              }}
            >
              <a href="#projects" className="btn btn-primary">
                View My Work <ArrowRight size={17} />
              </a>

              <a href="#contact" className="btn btn-glass">
                Contact Me <Send size={15} />
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="social-circle-btn"
                title="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-circle-btn"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="social-circle-btn"
                title="Email"
              >
                <Mail size={18} />
              </a>

              <a
                href={personalInfo.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="social-circle-btn"
                title="LeetCode"
              >
                <Code size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Animated Profile Image & Orbiting Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '320px',
                height: '320px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="hero-image-wrapper"
            >
              {/* Rotating Outer Glow Orbit Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: '-18px',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, rgba(0, 230, 118, 0.4), transparent 40%, rgba(0, 230, 118, 0.3) 70%, transparent 100%)',
                  filter: 'blur(8px)',
                  opacity: 0.85
                }}
              />

              {/* Pulsing Green Border Circle */}
              <motion.div
                animate={{ scale: [1, 1.02, 1], boxShadow: ['0 0 25px rgba(0, 230, 118, 0.3)', '0 0 40px rgba(0, 230, 118, 0.5)', '0 0 25px rgba(0, 230, 118, 0.3)'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '2px solid #00e676',
                  zIndex: 1
                }}
              />

              {/* Profile Image with Hover Zoom */}
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                style={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  zIndex: 2,
                  border: '4px solid #080c0a',
                  cursor: 'pointer'
                }}
              />

              {/* Floating Animated Code Badge Left (< />) */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.15, boxShadow: '0 0 25px rgba(0, 230, 118, 0.5)' }}
                style={{
                  position: 'absolute',
                  top: '15%',
                  left: '-20px',
                  zIndex: 3,
                  padding: '0.65rem 0.95rem',
                  borderRadius: '12px',
                  background: 'rgba(15, 21, 18, 0.92)',
                  border: '1px solid rgba(0, 230, 118, 0.4)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#00e676',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}
              >
                &lt;/&gt;
              </motion.div>

              {/* Floating Animated Bracket Badge Right ({ }) */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.15, boxShadow: '0 0 25px rgba(0, 230, 118, 0.5)' }}
                style={{
                  position: 'absolute',
                  bottom: '18%',
                  right: '-20px',
                  zIndex: 3,
                  padding: '0.65rem 0.95rem',
                  borderRadius: '12px',
                  background: 'rgba(15, 21, 18, 0.92)',
                  border: '1px solid rgba(0, 230, 118, 0.4)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#00e676',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}
              >
                &#123; &#125;
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .social-circle-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .social-circle-btn:hover {
          background: rgba(0, 230, 118, 0.12);
          border-color: #00e676;
          color: #00e676;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 230, 118, 0.2);
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-image-wrapper {
            width: 260px !important;
            height: 260px !important;
          }
          .hero-image-wrapper img {
            width: 240px !important;
            height: 240px !important;
          }
        }
      `}</style>
    </section>
  );
}
