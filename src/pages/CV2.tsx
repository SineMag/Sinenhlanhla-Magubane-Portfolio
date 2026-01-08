import React from "react";
import { HiCode, HiBriefcase, HiAcademicCap, HiMail, HiPhone, HiLocationMarker, HiExternalLink } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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
      skills: [...(import.meta.env.VITE_FRONTEND_SKILLS || "").split(",").filter(Boolean), "React Native"],
    },
    {
      category: "Backend Development",
      skills: (import.meta.env.VITE_BACKEND_SKILLS || "").split(",").filter(Boolean),
    },
    {
      category: "Tools & Technologies",
      skills: (import.meta.env.VITE_TOOLS_SKILLS || "").split(",").filter(Boolean),
    },
  ];

  const experiences: Experience[] = [
    {
      title: "Full Stack Developer Intern",
      company: import.meta.env.VITE_EXPERIENCE_1_COMPANY || "mLab",
      period: import.meta.env.VITE_EXPERIENCE_1_PERIOD || "",
      description: import.meta.env.VITE_EXPERIENCE_1_DESCRIPTION || "Developing full-stack applications using modern web technologies. Building responsive user interfaces and robust backend APIs. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      title: "General Management",
      company: "P Trimborn Agency (Learnership sponsored) | Facilitated by Edu-Wize Group",
      period: "March 2022 - April 2023",
      description: "Learnership program in business management principles.||Analyzing business information and competitive environment.||Managing budgets and work unit performance.||Leading teams and motivating individuals.||Applying ethical behavior and compliance standards.||Organizing resources and monitoring performance.",
    },
    {
      title: import.meta.env.VITE_EXPERIENCE_3_TITLE || "",
      company: import.meta.env.VITE_EXPERIENCE_3_COMPANY || "",
      period: import.meta.env.VITE_EXPERIENCE_3_PERIOD || "",
      description: import.meta.env.VITE_EXPERIENCE_3_DESCRIPTION || "",
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
    "Full Stack Developer Intern": HiCode,
    "General Management": HiBriefcase,
    "Administrative Assistant": HiBriefcase,
  };

  return (
    <div>
      <div id="cv-content">
        <div className="dashboard-header">
          <h1>{name}</h1>
          <h2>{title}</h2>
          <div className="contact-info">
            {email && (
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <HiMail /> {email}
              </p>
            )}
            {phone && (
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <HiPhone /> {phone}
              </p>
            )}
            {location && (
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <HiLocationMarker /> {location}
              </p>
            )}
          </div>
          <div className="social-links" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="tech-tag" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaLinkedin /> LinkedIn <HiExternalLink style={{ fontSize: '0.75rem' }} />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="tech-tag" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaGithub /> GitHub <HiExternalLink style={{ fontSize: '0.75rem' }} />
              </a>
            )}
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
                    <span key={skillIndex} className="tech-tag">{skill}</span>
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
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Icon /> {exp.title}
                  </h4>
                  <p><strong>{exp.company}</strong> | {exp.period}</p>
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
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <HiAcademicCap /> {edu.degree}
                </h4>
                <p>{edu.institution} | {edu.year}</p>
              </div>
            ))}
          </div>
        )}

        <div className="dashboard-card">
          <h3>Achievements</h3>
          <div className="experience-card">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <HiBriefcase /> Project Manager - Hackathon Winning Team
            </h4>
            <p><strong>September 2023</strong></p>
            <p>Led a winning team in a hackathon competition, demonstrating strong project management, team coordination, and technical leadership skills.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV2;