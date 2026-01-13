import React from "react";
import { projects } from "../data/projects";
import { HiGlobeAlt, HiCode, HiExternalLink } from "react-icons/hi";

const Project: React.FC = () => {
  const githubUrl = import.meta.env.VITE_GITHUB || "https://github.com/SineMag";

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1
          style={{
            color: "#000000",
            fontSize: "2.5rem",
          }}
        >
          My Projects
        </h1>
        <p style={{ color: "#000000", marginTop: "1rem" }}>
          A collection of innovative applications and solutions showcasing my
          technical expertise
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="dashboard-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
                gap: "1rem",
              }}
            >
              <h3
                style={{
                  color: "#000000",
                  margin: 0,
                  flex: 1,
                  minWidth: 0,
                }}
              >
                {project.name}
              </h3>
              <span className={`project-status ${project.status}`}>
                {project.status === "live" ? (
                  <span className="live-dot"></span>
                ) : (
                  <>
                    <HiCode style={{ fontSize: "0.875rem" }} />
                    <span>DEV</span>
                  </>
                )}
              </span>
            </div>
            <p
              style={{
                color: "#000000",
                marginBottom: "1rem",
                lineHeight: "1.6",
              }}
            >
              {project.description}
            </p>
            <div className="tech-tags" style={{ marginBottom: "1rem" }}>
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  title="Visit live site"
                >
                  <HiGlobeAlt />
                  <HiExternalLink style={{ fontSize: "0.875rem" }} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <HiCode />
                  <span>GitHub</span>
                  <HiExternalLink style={{ fontSize: "0.875rem" }} />
                </a>
              )}
              {!project.link && !project.github && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <HiCode />
                  <span>View on GitHub</span>
                  <HiExternalLink style={{ fontSize: "0.875rem" }} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <HiCode />
          <span>View All on GitHub</span>
          <HiExternalLink />
        </a>
      </div>
    </div>
  );
};

export default Project;
