import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import type { Project as ProjectType } from "../data/projects";
import { HiCode, HiFolder, HiDeviceMobile, HiClock } from "react-icons/hi";
import laptop from "../assets/laptop.png";
import mobile from "../assets/mobile.png";
import travel from "../assets/travel.jpg";
import dataAnalytics from "../assets/Data Analytics.png";
import "../styles/Banner.css";

const Homepage: React.FC = () => {
  const name = import.meta.env.VITE_NAME || "Sinenhlanhla Magubane";
  const title = import.meta.env.VITE_TITLE || "Full Stack Developer";
  const bio =
    import.meta.env.VITE_BIO ||
    "Passionate developer building amazing web experiences";

  const [cookingProject, setCookingProject] = useState<ProjectType | null>(null);

  const handleProjectClick = (project: ProjectType) => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
      return;
    }
    setCookingProject(project);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCookingProject(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

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
          <p className="hero-description">
            Mentor and part-time high school tutor in Mathematics, Physical
            Science, and Life Science.
          </p>
          <div className="hero-buttons">
            <Link to="/project" className="btn">
              <HiFolder />
              <span>View My Work</span>
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

      {/* Global Opportunities Banner */}
      <div className="global-opportunities-banner">
        <div className="banner-content">
          <img
            src={travel}
            alt="Global Opportunities"
            className="banner-image"
          />
          <div className="banner-text">
            <h3>Open to opportunities around the globe</h3>
            <p>Available for remote work and international collaborations</p>
          </div>
        </div>
      </div>

      <div className="analytics-spotlight">
        <div className="analytics-content">
          <h3>Data Analytics</h3>
          <p>
            I turn raw data into actionable insights with clean dashboards,
            trend analysis, and decision-focused reporting.
          </p>
        </div>
        <div className="analytics-image-wrap">
          <img
            src={dataAnalytics}
            alt="Data analytics dashboard"
            className="analytics-image"
          />
        </div>
      </div>

      {/* Featured Projects Section */}
      <div>
        <h3 className="section-title">Featured Live Projects</h3>
        <div className="projects-grid">
          {liveProjects.map((project, index) => (
            <div
              key={index}
              className="project-card-simple project-card-clickable"
              onClick={() => handleProjectClick(project)}
            >
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

              {!project.link && (
                <div className="project-placeholder">
                  <HiClock className="placeholder-icon" />
                  <span className="placeholder-text">Still cooking</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <Link to="/project" className="btn">
            <HiFolder />
            <span>View All Projects</span>
          </Link>
        </div>

        {cookingProject && (
          <div
            className="cooking-modal-overlay"
            onClick={() => setCookingProject(null)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setCookingProject(null);
              }
            }}
          >
            <div
              className="cooking-modal"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="cooking-modal-close"
                onClick={() => setCookingProject(null)}
                aria-label="Close modal"
              >
                x
              </button>
              <div className="cooking-gif-like" aria-hidden="true">
                <HiClock />
              </div>
              <h3>{cookingProject.name}</h3>
              <p>This project is still cooking. Check back soon for a live demo.</p>
            </div>
          </div>
        )}
      </div>

      {/* Skills Section */}
      <div className="dashboard-card">
        <h3 className="section-title">Technologies I Work With</h3>
        <div className="tech-showcase">
          <div className="tech-category">
            <h4>Frontend</h4>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">React Native</span>
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
