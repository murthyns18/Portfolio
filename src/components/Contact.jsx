import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Edit3, MessageSquare, Send, Heart, CheckCircle2 } from 'lucide-react';
import { Linkedin, Github } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/murthyns18',
      href: personalInfo.socialLinks.linkedin
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/murthyns18',
      href: personalInfo.socialLinks.github
    }
  ];

  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header Row with Floating Glowing Envelope Aura Graphic */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2.5rem',
            gap: '2rem'
          }}
          className="contact-header-row"
        >
          <div>
            <h2 className="section-title">
              <span className="section-title-icon">
                <Send size={24} />
              </span>
              Let's <span className="text-green">Connect</span>
            </h2>
            <p className="section-subtitle">
              I'm always open to discussing new opportunities, tech collaborations, or software projects.
            </p>
          </div>

          {/* Right Floating Envelope 3D Graphic */}
          <div
            style={{
              position: 'relative',
              width: '110px',
              height: '110px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
            className="envelope-graphic"
          >
            {/* Outer Aura Ring */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 230, 118, 0.25) 0%, rgba(0, 230, 118, 0.05) 60%, transparent 75%)',
                filter: 'blur(10px)'
              }}
            />
            <div
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                border: '1px solid rgba(0, 230, 118, 0.35)',
                background: 'rgba(15, 21, 18, 0.85)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 25px rgba(0, 230, 118, 0.25)',
                zIndex: 2
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: '#00e676',
                  color: '#041209',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.35rem',
                  boxShadow: '0 4px 15px rgba(0, 230, 118, 0.4)'
                }}
              >
                @
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Grid matching reference image */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.95fr 1.05fr',
            gap: '1.75rem',
            alignItems: 'stretch'
          }}
          className="contact-grid"
        >
          {/* Left Card: Contact Information */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'rgba(12, 17, 14, 0.85)',
              border: '1px solid rgba(0, 230, 118, 0.2)'
            }}
          >
            <div>
              {/* Header with User Icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid rgba(0, 230, 118, 0.4)',
                    background: 'rgba(0, 230, 118, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00e676'
                  }}
                >
                  <User size={18} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  Contact Information
                </h3>
              </div>

              {/* Divided List */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {contactItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isLast = idx === contactItems.length - 1;
                  return (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem 0',
                        borderBottom: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      <div className="contact-icon-box">
                        <Icon size={18} className="text-green" />
                      </div>
                      <div>
                        <span style={{ fontSize: '0.76rem', color: '#94a3b8', display: 'block', marginBottom: '2px' }}>
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : '_self'}
                            rel="noreferrer"
                            style={{
                              color: '#ffffff',
                              fontWeight: 600,
                              textDecoration: 'none',
                              fontSize: '0.9rem',
                              transition: 'color 0.2s ease'
                            }}
                            className="contact-link"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.9rem' }}>
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Card: Form matching reference image */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              background: 'rgba(12, 17, 14, 0.85)',
              border: '1px solid rgba(0, 230, 118, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            {submitted ? (
              <div
                style={{
                  padding: '3rem 1rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.85rem'
                }}
              >
                <CheckCircle2 size={48} style={{ color: '#00e676' }} />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>Message Sent!</h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }} className="form-row">
                  {/* Name Input with User Icon */}
                  <div className="input-group">
                    <User size={17} className="input-icon" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input-with-icon"
                    />
                  </div>

                  {/* Email Input with Mail Icon */}
                  <div className="input-group">
                    <Mail size={17} className="input-icon" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input-with-icon"
                    />
                  </div>
                </div>

                {/* Subject Input with Pencil Icon */}
                <div className="input-group">
                  <Edit3 size={17} className="input-icon" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input-with-icon"
                  />
                </div>

                {/* Message Textarea with MessageSquare Icon */}
                <div className="input-group" style={{ alignItems: 'flex-start' }}>
                  <MessageSquare size={17} className="input-icon" style={{ marginTop: '12px' }} />
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input-with-icon"
                    style={{ resize: 'vertical', paddingTop: '0.65rem' }}
                  ></textarea>
                </div>

                {/* Full-width Neon Green Submit Button with Paperplane Icon */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    borderRadius: '10px',
                    backgroundColor: '#00e676',
                    color: '#041209',
                    boxShadow: '0 0 25px rgba(0, 230, 118, 0.4)',
                    height: '46px',
                    gap: '0.6rem',
                    marginTop: '0.5rem'
                  }}
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Decorative Heart Matrix Line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '3.5rem',
            opacity: 0.5
          }}
        >
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(0, 230, 118, 0.3))' }} />
          <Heart size={16} className="text-green" />
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(0, 230, 118, 0.3))' }} />
        </div>
      </div>

      <style>{`
        .contact-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(0, 230, 118, 0.08);
          border: 1px solid rgba(0, 230, 118, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-link:hover {
          color: #00e676 !important;
        }
        .input-group {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
        }
        .input-icon {
          position: absolute;
          left: 14px;
          color: #00e676;
          pointer-events: none;
          z-index: 2;
        }
        .form-input-with-icon {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.75rem;
          border-radius: 8px;
          background: rgba(18, 25, 21, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          font-family: var(--font-main);
          font-size: 0.9rem;
          outline: none;
          transition: all 0.25s ease;
        }
        .form-input-with-icon:focus {
          border-color: #00e676;
          box-shadow: 0 0 15px rgba(0, 230, 118, 0.2);
          background: rgba(22, 32, 27, 0.9);
        }
        @media (max-width: 868px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
          .contact-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .envelope-graphic {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
