import React, { useEffect, useState } from "react";
import { projects } from "../data/projects";
import { HiCode, HiClock } from "react-icons/hi";
import type { Project as ProjectType } from "../data/projects";
import ProjectIcon from "../components/ProjectIcon";

const Project: React.FC = () => {
  const githubUrl = import.meta.env.VITE_GITHUB || "https://github.com/SineMag";
  const [cookingProject, setCookingProject] = useState<ProjectType | null>(null);

  const handleCardClick = (project: ProjectType) => {
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
          <div
            key={index}
            className={`dashboard-card project-card-clickable ${!project.link ? "project-card-cooking" : ""}`}
            onClick={() => handleCardClick(project)}
          >
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
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <ProjectIcon iconKey={project.iconKey} />
                <span>{project.name}</span>
              </h3>
              <span className={`project-status ${project.status}`}>
                {project.status === "live" && (
                  <span className="live-dot"></span>
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
            {!project.link && (
              <div className="project-placeholder">
                <HiClock className="placeholder-icon" />
                <span className="placeholder-text">Still cooking</span>
              </div>
            )}
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
        </a>
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
  );
};

export default Project;
