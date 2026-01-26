import React from "react";
import { Link } from "react-router-dom";
import { HiCode, HiHome, HiMail, HiArrowLeft } from "react-icons/hi";

const Error404Page: React.FC = () => {
  return (
    <div className="error-404-container">
      <div className="error-404-content">
        <div className="error-404-visual">
          <div className="code-brackets">
            <span className="bracket">{`{`}</span>
            <span className="error-code">404</span>
            <span className="bracket">{`}`}</span>
          </div>
          <div className="error-message">
            <HiCode className="error-icon" />
            <h1>Oops! Code Not Found</h1>
            <p>
              Looks like you've hit a breakpoint in my digital journey. This
              page doesn't exist in my repository.
            </p>
          </div>
        </div>

        <div className="error-404-actions">
          <div className="action-suggestions">
            <h3>Where were you trying to go?</h3>
            <div className="suggestion-grid">
              <Link to="/" className="suggestion-card">
                <HiHome />
                <span>Homepage</span>
                <small>View my projects & skills</small>
              </Link>
              <Link to="/project" className="suggestion-card">
                <HiCode />
                <span>Projects</span>
                <small>Explore my work</small>
              </Link>
              <Link to="/cv" className="suggestion-card">
                <HiCode />
                <span>CV</span>
                <small>My experience & qualifications</small>
              </Link>
              <Link to="/contact" className="suggestion-card">
                <HiMail />
                <span>Contact</span>
                <small>Let's connect!</small>
              </Link>
            </div>
          </div>

          <div className="back-navigation">
            <Link to="/" className="btn btn-primary">
              <HiArrowLeft />
              Go Back Home
            </Link>
            <p className="help-text">
              Or if you think this is an error, feel free to
              <Link to="/contact"> contact me</Link>
            </p>
          </div>
        </div>

        <div className="error-decoration">
          <div className="code-line">// This page is undefined</div>
          <div className="code-line">const missingPage = null;</div>
          <div className="code-line">return redirect('/home');</div>
        </div>
      </div>
    </div>
  );
};

export default Error404Page;
