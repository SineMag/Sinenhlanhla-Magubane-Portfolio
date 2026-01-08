
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiHome, HiDocumentText, HiFolder, HiMail } from 'react-icons/hi';

const Nav: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: HiHome },
    { name: 'CV', path: '/cv', icon: HiDocumentText },
    { name: 'Projects', path: '/project', icon: HiFolder },
    { name: 'Contact', path: '/contact', icon: HiMail },
  ];

  return (
    <nav className="nav">
      <div className="nav-content">
        <Link to="/" className="nav-logo signature">
          SineMag
        </Link>
        <ul className="nav-links">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link to={link.path} className={isActive ? 'active' : ''}>
                  <Icon className="nav-icon" />
                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

