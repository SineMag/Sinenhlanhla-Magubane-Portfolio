import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiOfficeBuilding } from "react-icons/hi";
import { companyProfile, processSteps, serviceCards } from "../data/company";

const Services: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 style={{ color: "#000000", fontSize: "2.5rem" }}>Services</h1>
        <p style={{ color: "#000000", marginTop: "1rem" }}>
          {companyProfile.name} delivers practical software solutions for
          startups and growing teams.
        </p>
      </div>

      <div className="projects-grid">
        {serviceCards.map((service) => (
          <div key={service.title} className="dashboard-card">
            <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <HiOfficeBuilding />
              <span>{service.title}</span>
            </h3>
            <p style={{ color: "#000000" }}>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="dashboard-card">
        <h3>How We Work</h3>
        <div className="tech-tags">
          {processSteps.map((step) => (
            <span key={step} className="tech-tag">
              {step}
            </span>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link
          to="/contact"
          className="btn"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
        >
          <span>Request A Proposal</span>
          <HiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Services;
