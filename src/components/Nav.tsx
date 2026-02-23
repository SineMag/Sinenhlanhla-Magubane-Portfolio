import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiHome,
  HiFolder,
  HiMail,
  HiChartBar,
  HiOfficeBuilding,
  HiInformationCircle,
  HiDotsVertical,
} from "react-icons/hi";
import { companyNavLinks, companyProfile } from "../data/company";

const Nav: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const iconByKey = {
    home: HiHome,
    services: HiOfficeBuilding,
    caseStudies: HiFolder,
    analytics: HiChartBar,
    about: HiInformationCircle,
    contact: HiMail,
  };

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
          {companyProfile.shortName}
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
          {companyNavLinks.map((link) => {
            const Icon = iconByKey[link.iconKey];
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
