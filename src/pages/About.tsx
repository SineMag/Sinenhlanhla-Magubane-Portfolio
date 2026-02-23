import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiLightningBolt, HiShieldCheck } from "react-icons/hi";
import { companyProfile } from "../data/company";
import mlabLogo from "../assets/mlab-logo.png";

const About: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 style={{ color: "#000000", fontSize: "2.5rem" }}>About Us</h1>
        <p style={{ color: "#000000", marginTop: "1rem" }}>
          {companyProfile.name} is a software studio focused on modern products
          that solve real operational and growth challenges.
        </p>
      </div>

      <div className="dashboard-card">
        <h3>Who We Are</h3>
        <p style={{ color: "#000000", lineHeight: "1.7" }}>
          We build reliable web, mobile, and data solutions for businesses that
          need speed without sacrificing quality. Our delivery model emphasizes
          clean architecture, clear communication, and production-ready results.
        </p>
      </div>

      <div className="dashboard-card about-experience">
        <h3>Industry Experience</h3>
        <div className="about-experience-row">
          <div className="about-logo-wrap">
            <img src={mlabLogo} alt="mLab Southern Africa logo" className="about-logo" />
          </div>
          <div>
            <p style={{ color: "#000000", lineHeight: "1.7" }}>
              Our founder gained practical software delivery experience through
              <a
                href="https://mlab.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-inline-link"
              >
                {" "}
                mLab Southern Africa
              </a>
              , contributing to full-stack product development across web and
              mobile projects. This background informs our engineering standards,
              delivery discipline, and client-first execution model.
            </p>
          </div>
        </div>
      </div>

      <div className="projects-grid">
        <div className="dashboard-card">
          <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <HiLightningBolt />
            <span>Execution</span>
          </h3>
          <p style={{ color: "#000000" }}>
            Lean delivery cycles with clear milestones from discovery to launch.
          </p>
        </div>
        <div className="dashboard-card">
          <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <HiShieldCheck />
            <span>Quality</span>
          </h3>
          <p style={{ color: "#000000" }}>
            Maintainable code, robust backend foundations, and business-focused
            user experiences.
          </p>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link
          to="/contact"
          className="btn"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
        >
          <span>Start A Project</span>
          <HiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default About;
