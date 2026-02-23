import React from "react";
import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiChartBar,
  HiCode,
  HiDeviceMobile,
  HiLightningBolt,
  HiShieldCheck,
} from "react-icons/hi";
import { projects } from "../data/projects";
import { companyProfile, processSteps, serviceCards } from "../data/company";
import ProjectIcon from "../components/ProjectIcon";
import laptop from "../assets/laptop.png";
import mobile from "../assets/mobile.png";

const Homepage: React.FC = () => {
  const featuredProjects = projects
    .filter((project) => project.status === "live")
    .slice(0, 4);

  return (
    <div className="dashboard-container business-home">
      <div className="business-hero">
        <div>
          <p className="business-kicker">{companyProfile.name}</p>
          <h1 className="business-title">{companyProfile.tagline}</h1>
          <p className="business-subtitle">
            We design and deliver modern web, mobile, and data products for
            teams ready to grow.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn">
              Start A Project
            </Link>
            <Link to="/services" className="btn btn-outline">
              Explore Services
            </Link>
          </div>
        </div>
        <div className="business-hero-right">
          <div className="business-hero-media">
            <div className="hero-device hero-device-web">
              <img src={laptop} alt="Web app design and development" />
              <span>Web Solutions</span>
            </div>
            <div className="hero-device hero-device-mobile">
              <img src={mobile} alt="Mobile app design and development" />
              <span>Mobile Solutions</span>
            </div>
          </div>
          <div className="business-hero-grid">
            <div className="business-metric">
              <HiCode />
              <span>Web Platforms</span>
            </div>
            <div className="business-metric">
              <HiDeviceMobile />
              <span>Mobile Apps</span>
            </div>
            <div className="business-metric">
              <HiChartBar />
              <span>Analytics Products</span>
            </div>
            <div className="business-metric">
              <HiLightningBolt />
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <h3>Core Services</h3>
        <div className="projects-grid">
          {serviceCards.map((service) => (
            <div key={service.title} className="project-card-simple">
              <h4 className="project-name">{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-card">
        <h3>Delivery Process</h3>
        <p style={{ color: "#000000", marginBottom: "1rem" }}>
          A clean and reliable process from first call to post-launch support.
        </p>
        <div className="tech-tags">
          {processSteps.map((step) => (
            <span key={step} className="tech-tag">
              {step}
            </span>
          ))}
        </div>
      </div>

      <div className="dashboard-card">
        <h3>Featured Case Studies</h3>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <article key={project.name} className="project-card-simple">
              <h4 className="project-name">
                <ProjectIcon iconKey={project.iconKey} />
                <span>{project.name}</span>
              </h4>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={`${project.name}-${tech}`} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="view-all-container">
          <Link
            to="/case-studies"
            className="btn"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            <span>View All Case Studies</span>
            <HiArrowRight />
          </Link>
        </div>
      </div>

      <div className="dashboard-card business-trust">
        <div className="business-trust-item">
          <HiShieldCheck />
          <h4>Production Quality</h4>
          <p>Maintainable architecture and practical engineering decisions.</p>
        </div>
        <div className="business-trust-item">
          <HiLightningBolt />
          <h4>Delivery Focused</h4>
          <p>Lean execution cycles with transparent communication.</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
