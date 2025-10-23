
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mnngkkbj");

  if (state.succeeded) {
    return <div className="success-message-container"><div className="success-message-card"><p className="success-message">Thanks for your message! I’m grateful you took the time to connect and will respond shortly.</p></div></div>;
  }

  const email = import.meta.env.VITE_EMAIL || 'snenhlanhlamagubane@gmail.com';
  const phone = import.meta.env.VITE_PHONE || '';
  const location = import.meta.env.VITE_LOCATION || '';
  const linkedin = import.meta.env.VITE_LINKEDIN || '';
  const github = import.meta.env.VITE_GITHUB || '';

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
              id="name"
              type="text" 
              name="name"
              className="form-input"
              placeholder="Your Name"
            />
            <ValidationError 
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email" 
              name="email"
              className="form-input"
              placeholder="your.email@example.com"
            />
            <ValidationError 
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input
              id="subject"
              type="text" 
              name="subject"
              className="form-input"
              placeholder="What's this about?"
            />
            <ValidationError 
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder="Your message here..."
            />
            <ValidationError 
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" className="btn" disabled={state.submitting}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

