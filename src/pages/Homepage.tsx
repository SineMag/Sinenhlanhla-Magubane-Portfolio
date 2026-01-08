
import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { HiCode, HiFolder, HiExternalLink } from 'react-icons/hi';

const Homepage: React.FC = () => {
  const name = import.meta.env.VITE_NAME || 'Sinenhlanhla Magubane';
  const title = import.meta.env.VITE_TITLE || 'Full Stack Developer';
  const bio = import.meta.env.VITE_BIO || 'Passionate developer building amazing web experiences';

  // Skills from .env
  const frontendSkills = (import.meta.env.VITE_FRONTEND_SKILLS || 'React,TypeScript,HTML,CSS').split(',').filter(Boolean);
  const backendSkills = (import.meta.env.VITE_BACKEND_SKILLS || 'Node.js,Express,MongoDB,Python').split(',').filter(Boolean);

  // Duplicate projects for seamless carousel
  const carouselProjects = [...projects, ...projects];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 style={{ 
          color: '#0a5786',
          fontSize: '3rem',
          marginBottom: '0.5rem'
        }}>
          {name}
        </h1>
        <h2 style={{ fontSize: '1.5rem', color: '#8b6f5e', fontWeight: '400' }}>{title}</h2>
      </div>

      <div className="dashboard-card">
        <h3>About Me</h3>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#0a5786' }}>
          {bio || 'Data & Tech Enthusiast 👩‍💻 Full-Stack Trainee | Building Projects from Scratch | Giving Life to Ideas'}
        </p>
      </div>

      <div className="dashboard-card">
        <h3>My Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4 style={{ color: '#0a5786', marginBottom: '1rem' }}>Frontend</h4>
            <div className="tech-tags">
              {frontendSkills.map((skill: string, index: number) => (
                <span key={index} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4 style={{ color: '#a7a88a', marginBottom: '1rem' }}>Backend</h4>
            <div className="tech-tags">
              {backendSkills.map((skill: string, index: number) => (
                <span key={index} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <h3>Featured Projects</h3>
        <p style={{ marginBottom: '2rem', color: '#0a5786' }}>
          Explore my portfolio of innovative applications and solutions
        </p>
        <div className="projects-carousel">
          <div className="projects-carousel-track">
            {carouselProjects.map((project, index) => (
              <div key={`${project.name}-${index}`} className="project-carousel-item">
                <span className={`project-status ${project.status}`}>
                  {project.status === 'live' ? (
                    <>
                      <span className="live-dot"></span>
                      <span>LIVE</span>
                    </>
                  ) : (
                    <>
                      <HiCode />
                      <span>IN DEVELOPMENT</span>
                    </>
                  )}
                </span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tech-tags" style={{ marginTop: '1rem' }}>
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/project" className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <HiFolder />
            <span>View All Projects</span>
            <HiExternalLink />
          </Link>
        </div>
      </div>

      <div className="dashboard-card">
        <h3>Get In Touch</h3>
        <p style={{ marginBottom: '1.5rem', color: '#0a5786' }}>
          Ready to collaborate or discuss opportunities? Let's connect!
        </p>
        <div className="hero-buttons">
          <Link to="/project" className="btn">View My Work</Link>
          <Link to="/cv" className="btn btn-outline">View My CV</Link>
          <Link to="/contact" className="btn">Get In Touch</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

