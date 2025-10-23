
import React from 'react';

interface Project {
  name: string;
  description: string;
  tech: string[];
  link: string;
}

const Project: React.FC = () => {
  const projects: Project[] = [
    {
      name: import.meta.env.VITE_PROJECT_1_NAME || '',
      description: import.meta.env.VITE_PROJECT_1_DESCRIPTION || '',
      tech: (import.meta.env.VITE_PROJECT_1_TECH || '').split(',').filter(Boolean),
      link: import.meta.env.VITE_PROJECT_1_LINK || '',
    },
    {
      name: import.meta.env.VITE_PROJECT_2_NAME || '',
      description: import.meta.env.VITE_PROJECT_2_DESCRIPTION || '',
      tech: (import.meta.env.VITE_PROJECT_2_TECH || '').split(',').filter(Boolean),
      link: import.meta.env.VITE_PROJECT_2_LINK || '',
    },
    {
      name: import.meta.env.VITE_PROJECT_3_NAME || '',
      description: import.meta.env.VITE_PROJECT_3_DESCRIPTION || '',
      tech: (import.meta.env.VITE_PROJECT_3_TECH || '').split(',').filter(Boolean),
      link: import.meta.env.VITE_PROJECT_3_LINK || '',
    },
    {
      name: import.meta.env.VITE_PROJECT_4_NAME || '',
      description: import.meta.env.VITE_PROJECT_4_DESCRIPTION || '',
      tech: (import.meta.env.VITE_PROJECT_4_TECH || '').split(',').filter(Boolean),
      link: import.meta.env.VITE_PROJECT_4_LINK || '',
    },
    {
      name: import.meta.env.VITE_PROJECT_5_NAME || '',
      description: import.meta.env.VITE_PROJECT_5_DESCRIPTION || '',
      tech: (import.meta.env.VITE_PROJECT_5_TECH || '').split(',').filter(Boolean),
      link: import.meta.env.VITE_PROJECT_5_LINK || '',
    },
    {
      name: import.meta.env.VITE_PROJECT_6_NAME || '',
      description: import.meta.env.VITE_PROJECT_6_DESCRIPTION || '',
      tech: (import.meta.env.VITE_PROJECT_6_TECH || '').split(',').filter(Boolean),
      link: import.meta.env.VITE_PROJECT_6_LINK || '',
    },
  ].filter(project => project.name);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>My Projects</h1>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="dashboard-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href={import.meta.env.VITE_GITHUB || '#'} target="_blank" rel="noopener noreferrer" className="btn">
          View All on GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;

