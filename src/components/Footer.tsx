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
    { name: "Analytics", path: "/data-analytics" },
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
          <div className="footer-contact-row">
            {email && (
              <a
                href={`mailto:${email}`}
                className="footer-inline-link"
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
                className="footer-inline-link"
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
                className="footer-inline-link"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
          <div className="footer-menu-row">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="footer-menu-link"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {currentYear} {name}
        </p>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
