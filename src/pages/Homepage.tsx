
import React from 'react';

const Homepage: React.FC = () => {
  const name = import.meta.env.VITE_NAME || 'Sinenhlanhla Magubane';
  const title = import.meta.env.VITE_TITLE || 'Full Stack Developer';
  const bio = import.meta.env.VITE_BIO || 'Passionate developer building amazing web experiences';

  // Skills from .env
  const frontendSkills = (import.meta.env.VITE_FRONTEND_SKILLS || '').split(',').filter(Boolean);
  const backendSkills = (import.meta.env.VITE_BACKEND_SKILLS || '').split(',').filter(Boolean);

  // Experience from .env
  const experienceTitle = import.meta.env.VITE_EXPERIENCE_1_TITLE || '';
  const experienceCompany = import.meta.env.VITE_EXPERIENCE_1_COMPANY || '';

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div className="dashboard-card">
        <h3>About Me</h3>
        <p>{bio}</p>
      </div>

      <div className="dashboard-card">
        <h3>My Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Frontend</h4>
            <div className="tech-tags">
              {frontendSkills.slice(0, 4).map((skill: string, index: number) => (
                <span key={index} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4>Backend</h4>
            <div className="tech-tags">
              {backendSkills.slice(0, 4).map((skill: string, index: number) => (
                <span key={index} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <h3>My Experience</h3>
        <div className="experience-item">
          <h4>{experienceTitle}</h4>
          <p><strong>{experienceCompany}</strong></p>
        </div>
      </div>

      <div className="dashboard-card">
        <h3>Navigation</h3>
        <div className="hero-buttons">
          <a href="/project" className="btn">View My Work</a>
          <a href="/cv" className="btn">View My CV</a>
          <a href="/contact" className="btn">Get In Touch</a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

