import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import {
  HiCode,
  HiFolder,
  HiExternalLink,
  HiGlobeAlt,
  HiDeviceMobile,
} from "react-icons/hi";
import laptop from "../assets/laptop.png";
import mobile from "../assets/mobile.png";

const Homepage: React.FC = () => {
  const name = import.meta.env.VITE_NAME || "Sinenhlanhla Magubane";
  const title = import.meta.env.VITE_TITLE || "Full Stack Developer";
  const bio =
    import.meta.env.VITE_BIO ||
    "Passionate developer building amazing web experiences";

  // Get only live projects for showcase
  const liveProjects = projects
    .filter((project) => project.status === "live")
    .slice(0, 6);

  return (
    <div className="dashboard-container">
      {/* Hero Section with Images */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{name}</h1>
          <h2 className="hero-subtitle">{title}</h2>
          <p className="hero-description">
            {bio ||
              "Data & Tech Enthusiast 👩‍💻 Full-Stack Trainee | Building Projects from Scratch | Giving Life to Ideas"}
          </p>
          <div className="hero-buttons">
            <Link to="/project" className="btn">
              <HiFolder />
              <span>View My Work</span>
              <HiExternalLink />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="hero-images">
          <div className="image-container laptop-container">
            <img src={laptop} alt="Development Setup" className="hero-laptop" />
            <div className="image-label">
              <HiCode /> Full-Stack Development
            </div>
          </div>
          <div className="image-container mobile-container">
            <img src={mobile} alt="Mobile App" className="hero-mobile" />
            <div className="image-label">
              <HiDeviceMobile /> Mobile Apps
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="dashboard-card">
        <h3 className="section-title">Featured Live Projects</h3>
        <div className="projects-grid">
          {liveProjects.map((project, index) => (
            <div key={index} className="project-card-simple">
              <div className="project-header">
                <h4 className="project-name">{project.name}</h4>
                <span className="project-status live">
                  <span className="live-dot"></span>
                </span>
              </div>

              <div className="tech-tags">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    title="Visit live site"
                  >
                    <HiGlobeAlt />
                    <HiExternalLink />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <Link to="/project" className="btn">
            <HiFolder />
            <span>View All Projects</span>
            <HiExternalLink />
          </Link>
        </div>
      </div>

      {/* Skills Section */}
      <div className="dashboard-card">
        <h3 className="section-title">Technologies I Work With</h3>
        <div className="tech-showcase">
          <div className="tech-category">
            <h4>Frontend</h4>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">HTML5</span>
              <span className="tech-tag">CSS3</span>
              <span className="tech-tag">JavaScript</span>
            </div>
          </div>
          <div className="tech-category">
            <h4>Backend</h4>
            <div className="tech-tags">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">REST APIs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
