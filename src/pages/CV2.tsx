import React from "react";
import {
  HiCode,
  HiBriefcase,
  HiAcademicCap,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
  HiDownload,
} from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import cvFile from "../assets/SineMagubaneCV.pdf";
import cert1 from "../assets/certs/Screenshot 2026-01-13 131239.png";
import cert2 from "../assets/certs/Screenshot 2026-01-13 131250.png";
import cert3 from "../assets/certs/Screenshot 2026-01-13 131325.png";
import cert4 from "../assets/certs/Screenshot 2026-01-13 131337.png";
import cert5 from "../assets/certs/Screenshot 2026-01-13 131351.png";
import cert6 from "../assets/certs/Screenshot 2026-01-13 131403.png";
import cert7 from "../assets/certs/Screenshot 2026-01-13 131411.png";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface SkillCategory {
  category: string;
  skills: string[];
}

const CV2: React.FC = () => {
  const name = import.meta.env.VITE_NAME || "Sinenhlanhla Magubane";
  const title = import.meta.env.VITE_TITLE || "Full Stack Developer";
  const email = import.meta.env.VITE_EMAIL || "";
  const phone = import.meta.env.VITE_PHONE || "";
  const location = import.meta.env.VITE_LOCATION || "";
  const linkedin = import.meta.env.VITE_LINKEDIN || "";
  const github = import.meta.env.VITE_GITHUB || "";

  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend Development",
      skills: [
        ...(import.meta.env.VITE_FRONTEND_SKILLS || "")
          .split(",")
          .filter(Boolean),
        "React Native",
        "Redux",
      ],
    },
    {
      category: "Backend Development",
      skills: [
        ...(import.meta.env.VITE_BACKEND_SKILLS || "")
          .split(",")
          .filter(Boolean),
        "MongoDB",
      ],
    },
    {
      category: "Data Science & Machine Learning",
      skills: [
        "Machine Learning",
        "Jupyter Notebooks",
        "Numpy",
        "Scikit-Learn",
        "Neural Networks",
        "Tree-Based Models",
        "K-Means Clustering",
        "Hierarchical Clustering",
        "Pandas",
      ],
    },
    {
      category: "Tools & Software",
      skills: [
        ...(import.meta.env.VITE_TOOLS_SKILLS || "").split(",").filter(Boolean),
        "Sage Pastel Accounting",
        "Microsoft Office Suite",
      ],
    },
  ];

  const experiences: Experience[] = [
    {
      title: "Full Stack Developer",
      company: import.meta.env.VITE_EXPERIENCE_1_COMPANY || "mLab",
      period: import.meta.env.VITE_EXPERIENCE_1_PERIOD || "",
      description:
        "Currently learning Ruby on Rails using The Odin Project.||Developing full-stack applications using modern web technologies including React, React Native, Node.js, and MongoDB.||Building responsive user interfaces and robust backend APIs.||Collaborating with international clients to deliver high-quality software solutions.",
    },
    {
      title: "Administrative Assistant",
      company: "P Trimborn Agency",
      period: "December 2020 - June 2024",
      description:
        "Managed client correspondence and maintained organized filing systems, both digital and physical, improving document retrieval time.||Assisted with data entry and invoice generation using Sage Pastel Accounting Software, ensuring a high degree of accuracy and attention to detail.||Supported office operations by scheduling appointments and coordinating meetings, enhancing overall administrative efficiency.",
    },
    {
      title: "Junior General Manager",
      company:
        "P Trimborn Agency (Learnership sponsored) | Facilitated by Edu-Wize Group",
      period: "March 2022 - April 2023",
      description:
        "Learnership program in business management principles.||Analyzing business information and competitive environment.||Managing budgets and work unit performance.||Leading teams and motivating individuals.||Applying ethical behavior and compliance standards.||Organizing resources and monitoring performance.",
    },
  ].filter((exp) => exp.title);

  const educationList: Education[] = [
    {
      degree: import.meta.env.VITE_EDUCATION_1_DEGREE || "",
      institution: import.meta.env.VITE_EDUCATION_1_INSTITUTION || "",
      year: import.meta.env.VITE_EDUCATION_1_YEAR || "",
    },
    {
      degree: import.meta.env.VITE_EDUCATION_2_DEGREE || "",
      institution: import.meta.env.VITE_EDUCATION_2_INSTITUTION || "",
      year: import.meta.env.VITE_EDUCATION_2_YEAR || "",
    },
    {
      degree: import.meta.env.VITE_EDUCATION_3_DEGREE || "",
      institution: import.meta.env.VITE_EDUCATION_3_INSTITUTION || "",
      year: import.meta.env.VITE_EDUCATION_3_YEAR || "",
    },
    {
      degree: import.meta.env.VITE_EDUCATION_4_DEGREE || "",
      institution: import.meta.env.VITE_EDUCATION_4_INSTITUTION || "",
      year: import.meta.env.VITE_EDUCATION_4_YEAR || "",
    },
  ].filter((edu) => edu.degree);

  const experienceIconMap: { [key: string]: React.ComponentType } = {
    "Full Stack Developer": HiCode,
    "Junior General Manager": HiBriefcase,
    "Administrative Assistant": HiBriefcase,
  };

  const certificates = [
    { name: "Data Science with Python", image: cert1 },
    { name: "DataBase Design", image: cert2 },
    { name: "Introduction to JavaScript", image: cert3 },
    { name: "Machine Learning", image: cert4 },
    { name: "Python Programming", image: cert5 },
    { name: "Understanding Artificial Intelligence", image: cert6 },
    { name: "Understanding Data Engineering", image: cert7 },
    { name: "Hackathon | Geekulcha", image: cert7 },
    { name: "Responsive Web Design", image: cert7 },
    { name: "JavaScript Algorithms and Data Structures", image: cert7 },
  ];

  return (
    <div>
      <div id="cv-content">
        <div className="dashboard-header">
          <h1>{name}</h1>
          <h2>{title}</h2>
          <div
            className="contact-info"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            {email && (
              <span
                className="tech-tag"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <HiMail /> {email}
              </span>
            )}
            {phone && (
              <span
                className="tech-tag"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <HiPhone /> {phone}
              </span>
            )}
            {location && (
              <span
                className="tech-tag"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <HiLocationMarker /> {location}
              </span>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-tag"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <FaLinkedin /> LinkedIn{" "}
                <HiExternalLink style={{ fontSize: "0.75rem" }} />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-tag"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <FaGithub /> GitHub{" "}
                <HiExternalLink style={{ fontSize: "0.75rem" }} />
              </a>
            )}
            <a
              href={cvFile}
              download="SineMagubaneCV.pdf"
              className="tech-tag"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "#000000",
                color: "#ffffff",
              }}
            >
              <HiDownload /> Download as PDF
            </a>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Skills</h3>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h4>{category.category}</h4>
                <div className="tech-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Experience</h3>
          <div className="experience-grid">
            {experiences.map((exp, index) => {
              const Icon = experienceIconMap[exp.title] || HiBriefcase;
              return (
                <div key={index} className="experience-card">
                  <h4
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Icon /> {exp.title}
                  </h4>
                  <p>
                    <strong>{exp.company}</strong> | {exp.period}
                  </p>
                  <ul>
                    {exp.description.split("||").map((duty, idx) => (
                      <li key={idx}>{duty}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {educationList.length > 0 && (
          <div className="dashboard-card">
            <h3>Education</h3>
            {educationList.map((edu, index) => (
              <div key={index} className="education-item">
                <h4
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <HiAcademicCap /> {edu.degree}
                </h4>
                <p>
                  {edu.institution} | {edu.year}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="dashboard-card">
          <h3>Certificates</h3>
          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <div key={index} className="certificate-item">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="certificate-image"
                />
                <p className="certificate-name">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <h3>To Ponder</h3>
          <div className="experience-card">
            <h4
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <HiCode /> International Software Developer
            </h4>
            <p>
              <strong>Freelancing</strong>
            </p>
            <p>
              Collaborating with international clients to deliver high-quality
              software solutions. Developing full-stack applications using
              modern web technologies including React, React Native, Node.js,
              and MongoDB. Building responsive user interfaces and robust
              backend APIs for diverse global projects.
            </p>
          </div>
          <div className="experience-card">
            <h4
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <HiCode /> Next.js Developer
            </h4>
            <p>
              <strong>Freelancing</strong>
            </p>
            <p>
              <strong>Responsibilities:</strong>
              <br />
              • Design, build, and maintain efficient, reusable, and reliable
              code
              <br />
              • Ensure the best possible performance, quality, and
              responsiveness of applications
              <br />
              • Identify and track bottlenecks and bugs, and devise solutions to
              these problems
              <br />• Help maintain code quality, organization, and internal
              standards
            </p>
            <p>
              <strong>Technical Requirements:</strong>
              <br />
              • Experience with testing frameworks, building backend APIs and
              user-centric frontends
              <br />
              • Solid Computer Science fundamentals (algorithms, data
              structures, concurrency)
              <br />• Languages: React.js, Node.js, TypeScript
            </p>
            <p>
              <strong>Bonus Skills:</strong>
              <br />
              • Experience with Next.js, Responsive Web Design, state management
              patterns (Redux)
              <br />
              • ES2015+, HTML5 APIs, CSS3, CI/CD
              <br />• Cloud platforms: Kubernetes, AWS, Google Cloud
            </p>
            <p>
              I worked closely with the CEO for the projects and reported to him
            </p>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Achievements</h3>
          <div className="experience-card">
            <h4
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <HiBriefcase /> Project Manager - Hackathon Winning Team
            </h4>
            <p>
              <strong>September 2023</strong>
            </p>
            <p>
              Led a winning team in a hackathon competition, demonstrating
              strong project management, team coordination, and technical
              leadership skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV2;
