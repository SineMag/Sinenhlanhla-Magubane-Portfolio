import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiBriefcase,
  HiCode,
  HiChatAlt2,
} from "react-icons/hi";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mnngkkbj");

  if (state.succeeded) {
    return (
      <div className="success-message-container">
        <div className="success-message-card">
          <p className="success-message">
            Thanks for your message! I’m grateful you took the time to connect
            and will respond shortly.
          </p>
        </div>
      </div>
    );
  }

  const email = import.meta.env.VITE_EMAIL || "snenhlanhlamagubane@gmail.com";
  const phone = import.meta.env.VITE_PHONE || "";
  const location = import.meta.env.VITE_LOCATION || "";
  const linkedin = import.meta.env.VITE_LINKEDIN || "";
  const github = import.meta.env.VITE_GITHUB || "";

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Let's Connect</h1>
        <p>
          Have a project in mind or want to collaborate? I'd love to hear from
          you!
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info-section">
          <div className="dashboard-card">
            <h3>
              <HiChatAlt2 /> Get In Touch
            </h3>
            <div className="contact-info-grid">
              {email && (
                <div className="contact-info-item">
                  <HiMail />
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              )}
              {phone && (
                <div className="contact-info-item">
                  <HiPhone />
                  <a href={`tel:${phone}`}>{phone}</a>
                </div>
              )}
              {location && (
                <div className="contact-info-item">
                  <HiLocationMarker />
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>

          <div className="dashboard-card">
            <h3>
              <HiCode /> Project Types
            </h3>
            <div className="project-types">
              <div className="project-type">
                <HiBriefcase />
                <span>Web Development</span>
              </div>
              <div className="project-type">
                <HiCode />
                <span>Mobile Apps</span>
              </div>
              <div className="project-type">
                <HiChatAlt2 />
                <span>Consultation</span>
              </div>
              <div className="project-type">
                <HiBriefcase />
                <span>Administration Dashboard Management</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="dashboard-card">
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Your Full Name"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="projectType" className="form-label">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  className="form-input"
                >
                  <option value="">Select a project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile Application</option>
                  <option value="admin-dashboard">
                    Administration Dashboard Management
                  </option>
                  <option value="consultation">Consultation</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder="What's this about?"
                  required
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  rows={6}
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
