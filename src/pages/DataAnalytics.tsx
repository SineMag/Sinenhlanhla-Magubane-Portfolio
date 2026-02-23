import React from "react";
import { Link } from "react-router-dom";
import {
  HiChartBar,
  HiDatabase,
  HiSparkles,
  HiPresentationChartLine,
} from "react-icons/hi";
import uctCertificate from "../assets/UCT.png";

const DataAnalytics: React.FC = () => {
  return (
    <div className="analytics-page">
      <div className="analytics-bg analytics-bg-back" aria-hidden="true">
        <span className="analytics-shape stat-pie"></span>
        <span className="analytics-shape stat-donut"></span>
        <span className="analytics-shape stat-line"></span>
        <span className="analytics-shape stat-histogram"></span>
        <span className="analytics-shape stat-pie stat-pie-2"></span>
        <span className="analytics-shape stat-donut stat-donut-2"></span>
        <span className="analytics-shape stat-bars stat-bars-2"></span>
        <span className="analytics-shape stat-line stat-line-2"></span>
        <span className="analytics-shape stat-grid"></span>
        <span className="analytics-shape stat-wave"></span>
      </div>
      <div className="analytics-bg analytics-bg-front" aria-hidden="true">
        <span className="analytics-shape stat-bars"></span>
        <span className="analytics-shape stat-scatter"></span>
        <span className="analytics-shape stat-linegraph"></span>
        <span className="analytics-shape stat-scatter stat-scatter-2"></span>
        <span className="analytics-shape stat-ring"></span>
        <span className="analytics-shape stat-bars stat-bars-3"></span>
        <span className="analytics-shape stat-line stat-line-3"></span>
      </div>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div>
            <h1 style={{ color: "#000000", fontSize: "2.5rem" }}>
              Data Science & Analytics
            </h1>
            <p style={{ color: "#000000", marginTop: "1rem" }}>
              Turning raw data into clear insights, useful dashboards, and
              decision-ready reports.
            </p>
          </div>
          <div className="certificate-header-trigger" aria-hidden="true">
            <img
              src={uctCertificate}
              alt="University of Cape Town Data Science short course preview"
              className="certificate-preview-image"
            />
          </div>
        </div>

        <div className="dashboard-card">
          <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <HiChartBar />
            <span>Core Focus Areas</span>
          </h3>
          <div className="tech-tags">
            <span className="tech-tag">Data Cleaning</span>
            <span className="tech-tag">Exploratory Data Analysis</span>
            <span className="tech-tag">Dashboarding</span>
            <span className="tech-tag">Data Storytelling</span>
            <span className="tech-tag">Predictive Modeling</span>
          </div>
        </div>

        <div className="dashboard-card">
          <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <HiDatabase />
            <span>Tools & Stack</span>
          </h3>
          <div className="tech-tags">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Pandas</span>
            <span className="tech-tag">SQL</span>
            <span className="tech-tag">Power BI</span>
            <span className="tech-tag">Excel</span>
            <span className="tech-tag">Scikit-learn</span>
            <span className="tech-tag">Matplotlib</span>
            <span className="tech-tag">Seaborn</span>
          </div>
        </div>

        <div className="dashboard-card">
          <h3
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            <HiPresentationChartLine />
            <span>Experience Highlights</span>
          </h3>
          <div className="projects-grid">
            <div className="project-card-simple">
              <h4 style={{ marginBottom: "0.5rem" }}>Insight Dashboards</h4>
              <p>
                Built interactive reporting views that track trends, KPIs, and
                business performance over time.
              </p>
            </div>
            <div className="project-card-simple">
              <h4 style={{ marginBottom: "0.5rem" }}>Data Preparation</h4>
              <p>
                Cleaned and transformed datasets to improve reliability before
                visualization and modeling.
              </p>
            </div>
            <div className="project-card-simple">
              <h4 style={{ marginBottom: "0.5rem" }}>Modeling Basics</h4>
              <p>
                Applied machine learning fundamentals for classification,
                comparison, and practical prediction use cases.
              </p>
            </div>
          </div>
        </div>

        <div className="dashboard-card" style={{ textAlign: "center" }}>
          <h3
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            <HiSparkles />
            <span>Open To Data Roles</span>
          </h3>
          <p style={{ margin: "1rem 0", color: "#000000" }}>
            Available for Data Analyst and Data Science opportunities.
          </p>
          <Link to="/contact" className="btn">
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataAnalytics;
