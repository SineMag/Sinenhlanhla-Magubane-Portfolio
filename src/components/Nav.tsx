import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  const name = import.meta.env.VITE_NAME || 'Sinenhlanhla Magubane';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'CV', path: '/cv' },
    { name: 'Projects', path: '/project' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="nav">
      <div className="nav-content">
        <div>
          <Link to="/" className="nav-logo">
            {name.split(' ').map((n: string) => n[0]).join('')}
          </Link>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
