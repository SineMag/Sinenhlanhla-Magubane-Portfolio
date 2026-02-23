import React from "react";
import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { companyNavLinks, companyProfile } from "../data/company";

const Footer: React.FC = () => {
  const name = companyProfile.name;
  const email = companyProfile.email;
  const github = companyProfile.github;
  const linkedin = companyProfile.linkedin;
  const currentYear = new Date().getFullYear();
  const quickLinks = [...companyNavLinks, { name: "Privacy", path: "/privacy" }];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>{name}</h4>
          <p>{companyProfile.tagline}</p>
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
