import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="section-title">Privacy Policy</h1>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#666' }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="card">
          <h3>Introduction</h3>
          <p>
            This privacy policy explains how I collect, use, and protect your personal information when you visit this website.
          </p>

          <h3>Information I Collect</h3>
          <p>I may collect the following types of information:</p>
          <ul>
            <li>Contact information when you use the contact form</li>
            <li>Usage data and analytics</li>
            <li>Technical information (IP address, browser type)</li>
          </ul>

          <h3>How I Use Your Information</h3>
          <ul>
            <li>To respond to your inquiries</li>
            <li>To improve the website</li>
            <li>To analyze usage patterns</li>
          </ul>

          <h3>Data Protection</h3>
          <p>
            I implement appropriate security measures to protect your personal information.
          </p>

          <h3>Cookies</h3>
          <p>
            This website may use cookies to enhance your browsing experience. You can control cookie settings through your browser.
          </p>

          <h3>Third-Party Links</h3>
          <p>
            This website may contain links to third-party websites. I am not responsible for their privacy practices.
          </p>

          <h3>Your Rights</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your data</li>
          </ul>

          <h3>Policy Updates</h3>
          <p>
            I may update this privacy policy from time to time. Changes will be posted on this page.
          </p>

          <h3>Contact</h3>
          <p>
            If you have any questions about this privacy policy, please <a href="/contact">contact me</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
