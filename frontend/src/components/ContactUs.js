import React from "react";
import "./ContactUs.css";
import linkedinIcon from './linkedin.png';
import twitterIcon from './twitter.jpg';
import instagramIcon from './instagram.jpg';

const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
      {/* Contact Info Section */}
      <main className="contact-info-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          Feel free to reach out to me using the following details:
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <strong>Owner Name:</strong> Yogesh K Gowda
          </div>
          <div className="contact-item">
            <strong>Email:</strong> <a href="mailto:yogeshkgowda@gmail.com">yogeshkumar20369@gmail.com</a>
          </div>
          <div className="contact-item">
            <strong>Phone:</strong> <a href="tel:+91XXXXXXXXXX">+91 7204311938</a>
          </div>
          <div className="contact-item">
            <strong>Location:</strong> Bengaluru, Karnataka, India
          </div>
        </div>

        {/* Social Icons */}
        <div className="contact-social">
          <h3>Connect with me:</h3>
          <div className="social-icons">
        <a href="https://www.linkedin.com/in/yogesh-k-gowda-18638231b/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://x.com/yogesh__kalki" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="X" />
        </a>
        <a href="https://www.instagram.com/y0gigowda/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Yogesh K Gowda. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUsPage;
