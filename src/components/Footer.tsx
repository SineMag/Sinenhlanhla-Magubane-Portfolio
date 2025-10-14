import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const name = import.meta.env.VITE_NAME || 'Sinenhlanhla Magubane';
  const email = import.meta.env.VITE_EMAIL || '';
  const github = import.meta.env.VITE_GITHUB || '';
  const linkedin = import.meta.env.VITE_LINKEDIN || '';
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'CV', path: '/cv' },
    { name: 'Projects', path: '/project' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy', path: '/privacy' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h4>{name}</h4>
          <p>Full Stack Developer</p>
          {email && <a href={`mailto:${email}`}>{email}</a>}
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Connect</h4>
          {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #333' }}>
        <p>© {currentYear} {name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
