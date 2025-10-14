import React from 'react';
import { Link } from 'react-router-dom';

const Error404Page: React.FC = () => {
  return (
    <div className="section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: '8rem', fontWeight: 'bold', marginBottom: '1rem' }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#666' }}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="hero-buttons">
          <Link to="/" className="btn">Go Home</Link>
          <Link to="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Error404Page;
