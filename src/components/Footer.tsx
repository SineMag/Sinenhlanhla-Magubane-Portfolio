import React from "react";
import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  const name = import.meta.env.VITE_NAME || "Sinenhlanhla Magubane";
  const email = import.meta.env.VITE_EMAIL || "";
  const github = import.meta.env.VITE_GITHUB || "";
  const linkedin = import.meta.env.VITE_LINKEDIN || "";
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "CV", path: "/cv" },
    { name: "Projects", path: "/project" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy", path: "/privacy" },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>{name}</h4>
          <p>Full Stack Developer</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "1rem",
              alignItems: "center",
            }}
          >
            {email && (
              <a
                href={`mailto:${email}`}
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <HiMail />
                <span>{email}</span>
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            )}
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {currentYear} {name}
        </p>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
