import React from 'react';
import './Footer.css'; 
import logo from './../assets/Symbol.svg'
import sendIcon from './../assets/sendIcon.svg'
import fbIcon from './../assets/fbIcon.svg'
import linkedinIcon from './../assets/linkedin.svg'
import xIcon from './../assets/xIcon.svg'
import youtubeIcon  from './../assets/youtubeIcon.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo and Newsletter Signup Section */}
        <div className="footer-logo-newsletter">
          <div className="footer-logo">
            <img src={logo} alt="Estatein Logo" />
            <p>Estatein</p>
          </div>
          <div className="newsletter-signup">
            <input type="email" placeholder="Enter Your Email" className="newsletter-input" />
            <button className="newsletter-button"> 
              <img src={sendIcon} alt="Send Icon" />
            </button>
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Home</h4>
            <ul>
              <li><a href="/hero-section">Hero Section</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/properties">Properties</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/faqs">FAQ's</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li><a href="/our-story">Our Story</a></li>
              <li><a href="/our-works">Our Works</a></li>
              <li><a href="/how-it-works">How It Works</a></li>
              <li><a href="/our-team">Our Team</a></li>
              <li><a href="/our-clients">Our Clients</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Properties</h4>
            <ul>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/categories">Categories</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="/valuation-mastery">Valuation Mastery</a></li>
              <li><a href="/strategic-marketing">Strategic Marketing</a></li>
              <li><a href="/negotiation-wizardry">Negotiation Wizardry</a></li>
              <li><a href="/closing-success">Closing Success</a></li>
              <li><a href="/property-management">Property Management</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="/contact-form">Contact Form</a></li>
              <li><a href="/our-offices">Our Offices</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media and Copyright Section */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>&copy; 2023 Estatein. All Rights Reserved. <a href="/terms-conditions">Terms & Conditions</a></p>
              </div>
              <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> <img src={fbIcon} alt="facebook logo" /> </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> <img src={linkedinIcon} alt="facebook logo" />   </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <img src={xIcon} alt="facebook logo" />  </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"> <img src={youtubeIcon} alt="facebook logo" />  </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
