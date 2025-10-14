import React from 'react';

const Homepage: React.FC = () => {
  const name = import.meta.env.VITE_NAME || 'Sinenhlanhla Magubane';
  const title = import.meta.env.VITE_TITLE || 'Full Stack Developer';
  const bio = import.meta.env.VITE_BIO || 'Passionate developer building amazing web experiences';

  return (
    <div className="hero">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{bio}</p>
      <div className="hero-buttons">
        <a href="/project" className="btn">View My Work</a>
        <a href="/contact" className="btn btn-outline">Get In Touch</a>
      </div>
    </div>
  );
};

export default Homepage;
