import React from 'react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface SkillCategory {
  category: string;
  skills: string[];
}

const CV: React.FC = () => {
  const name = import.meta.env.VITE_NAME || 'Sinenhlanhla Magubane';
  const title = import.meta.env.VITE_TITLE || 'Full Stack Developer';
  const email = import.meta.env.VITE_EMAIL || '';
  const phone = import.meta.env.VITE_PHONE || '';
  const location = import.meta.env.VITE_LOCATION || '';
  const linkedin = import.meta.env.VITE_LINKEDIN || '';
  const github = import.meta.env.VITE_GITHUB || '';

  // Skills from .env
  const skillCategories: SkillCategory[] = [
    {
      category: 'Frontend Development',
      skills: (import.meta.env.VITE_FRONTEND_SKILLS || '').split(',').filter(Boolean),
    },
    {
      category: 'Backend Development',
      skills: (import.meta.env.VITE_BACKEND_SKILLS || '').split(',').filter(Boolean),
    },
    {
      category: 'Tools & Technologies',
      skills: (import.meta.env.VITE_TOOLS_SKILLS || '').split(',').filter(Boolean),
    },
  ];

  // Experiences from .env
  const experiences: Experience[] = [
    {
      title: import.meta.env.VITE_EXPERIENCE_1_TITLE || '',
      company: import.meta.env.VITE_EXPERIENCE_1_COMPANY || '',
      period: import.meta.env.VITE_EXPERIENCE_1_PERIOD || '',
      description: import.meta.env.VITE_EXPERIENCE_1_DESCRIPTION || '',
    },
    {
      title: import.meta.env.VITE_EXPERIENCE_2_TITLE || '',
      company: import.meta.env.VITE_EXPERIENCE_2_COMPANY || '',
      period: import.meta.env.VITE_EXPERIENCE_2_PERIOD || '',
      description: import.meta.env.VITE_EXPERIENCE_2_DESCRIPTION || '',
    },
    {
      title: import.meta.env.VITE_EXPERIENCE_3_TITLE || '',
      company: import.meta.env.VITE_EXPERIENCE_3_COMPANY || '',
      period: import.meta.env.VITE_EXPERIENCE_3_PERIOD || '',
      description: import.meta.env.VITE_EXPERIENCE_3_DESCRIPTION || '',
    },
  ].filter(exp => exp.title);

  // Education from .env
  const educationList: Education[] = [
    {
      degree: import.meta.env.VITE_EDUCATION_1_DEGREE || '',
      institution: import.meta.env.VITE_EDUCATION_1_INSTITUTION || '',
      year: import.meta.env.VITE_EDUCATION_1_YEAR || '',
    },
    {
      degree: import.meta.env.VITE_EDUCATION_2_DEGREE || '',
      institution: import.meta.env.VITE_EDUCATION_2_INSTITUTION || '',
      year: import.meta.env.VITE_EDUCATION_2_YEAR || '',
    },
    {
      degree: import.meta.env.VITE_EDUCATION_3_DEGREE || '',
      institution: import.meta.env.VITE_EDUCATION_3_INSTITUTION || '',
      year: import.meta.env.VITE_EDUCATION_3_YEAR || '',
    },
    {
      degree: import.meta.env.VITE_EDUCATION_4_DEGREE || '',
      institution: import.meta.env.VITE_EDUCATION_4_INSTITUTION || '',
      year: import.meta.env.VITE_EDUCATION_4_YEAR || '',
    },
  ].filter(edu => edu.degree);

  return (
    <div className="section">
      <div className="container">
        <div className="card">
          <h1>{name}</h1>
          <h2>{title}</h2>
          <div>
            {email && <p>Email: {email}</p>}
            {phone && <p>Phone: {phone}</p>}
            {location && <p>Location: {location}</p>}
          </div>
          <div>
            {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
            {github && <a href={github} target="_blank" rel="noopener noreferrer"> | GitHub</a>}
          </div>
        </div>

        <div className="card">
          <h3>Skills</h3>
          <div className="skills-section">
            {skillCategories.map((category, index) => (
              <div key={index} className="skills-category">
                <h4>{category.category}</h4>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Experience</h3>
          {experiences.map((exp, index) => {
            const duties = exp.description.split('||').filter(Boolean);
            return (
              <div key={index} style={{ marginBottom: '2rem' }}>
                <h4>{exp.title}</h4>
                <p><strong>{exp.company}</strong></p>
                <p>{exp.period}</p>
                {duties.length > 1 ? (
                  <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                    {duties.map((duty, idx) => (
                      <li key={idx}>{duty}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{exp.description}</p>
                )}
              </div>
            );
          })}
        </div>

        {educationList.length > 0 && (
          <div className="card">
            <h3>Education</h3>
            {educationList.map((edu, index) => (
              <div key={index} style={{ marginBottom: index < educationList.length - 1 ? '1.5rem' : '0' }}>
                <h4>{edu.degree}</h4>
                <p>{edu.institution}</p>
                <p>{edu.year}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CV;
