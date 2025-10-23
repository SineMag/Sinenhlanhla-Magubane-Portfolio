
import React, { useState } from 'react';

const Snackbar: React.FC<{ message: string; show: boolean }> = ({ message, show }) => {
  return (
    <div className={`snackbar ${show ? "show" : ""}`}>
      {message}
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [showSnackbar, setShowSnackbar] = useState(false);

  const emailTo = 'snenhlanhlamagubane99@gmail.com';
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
    const { name, subject, message } = formData;
    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\n\nMessage: ${message}`)}`;
    window.location.href = mailtoLink;
    setShowSnackbar(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowSnackbar(false), 5000);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Get In Touch</h1>
      </div>
      <div className="dashboard-card">
        <h3>Contact Information</h3>
        {email && <p className="contact-link">Email: <a href={`mailto:${email}`}>{email}</a></p>}
        {phone && <p className="contact-link">Phone: <a href={`tel:${phone}`}>{phone}</a></p>}
        {location && <p>Location: {location}</p>}
      </div>
      <div className="dashboard-card">
        <h3>Connect With Me</h3>
        {github && <p className="contact-link"><a href={github} target="_blank" rel="noopener noreferrer">GitHub</a></p>}
        {linkedin && <p className="contact-link"><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>}
      </div>
      <div className="dashboard-card">
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
        </form>
      </div>
      <Snackbar message="Your message has been sent!" show={showSnackbar} />
    </div>
  );
};

export default Contact;

