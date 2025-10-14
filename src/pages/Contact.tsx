import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const email = import.meta.env.VITE_EMAIL || 'snenhlanhlamagubane@gmail.com';
  const phone = import.meta.env.VITE_PHONE || '';
  const location = import.meta.env.VITE_LOCATION || '';
  const linkedin = import.meta.env.VITE_LINKEDIN || '';
  const github = import.meta.env.VITE_GITHUB || '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend or email service
    setStatus('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Get In Touch</h1>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#666' }}>
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div>
            <div className="card">
              <h3>Contact Information</h3>
              {email && <p>Email: <a href={`mailto:${email}`}>{email}</a></p>}
              {phone && <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>}
              {location && <p>Location: {location}</p>}
            </div>

            <div className="card">
              <h3>Connect With Me</h3>
              {github && <p><a href={github} target="_blank" rel="noopener noreferrer">GitHub</a></p>}
              {linkedin && <p><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>}
            </div>
          </div>

          <div className="card">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  placeholder="Your message here..."
                />
              </div>

              <button type="submit" className="btn">Send Message</button>

              {status && <p style={{ marginTop: '1rem', textAlign: 'center', color: 'green' }}>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
