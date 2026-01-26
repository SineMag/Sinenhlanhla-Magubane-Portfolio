import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiHome,
  HiDocumentText,
  HiFolder,
  HiMail,
  HiDotsVertical,
} from "react-icons/hi";

const Nav: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Home", path: "/", icon: HiHome },
    { name: "CV", path: "/cv", icon: HiDocumentText },
    { name: "Projects", path: "/project", icon: HiFolder },
    { name: "Contact", path: "/contact", icon: HiMail },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav-content">
        <Link to="/" className="nav-logo signature" onClick={closeMenu}>
          SineMag
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <HiDotsVertical />
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "nav-open" : ""}`}>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={isActive ? "active" : ""}
                  onClick={closeMenu}
                >
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
