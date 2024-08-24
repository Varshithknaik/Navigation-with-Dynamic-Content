import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { MdOutlinePhoneIphone, MdLocationOn } from 'react-icons/md';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h1 className="newsletter-title">Stay tuned for Updates</h1>
        <div className="footer-grid">
          <div className="footer-section">
            <h1 className="section-title">Who We Are</h1>
            <div className="section-content">
              <p>Food Chilli is a registered trademark of IND Company Ltd.</p>
              <p><MdLocationOn /> 438 king's Rd</p>
              <p>Bengalore, Karnataka</p>
            </div>
          </div>
          <div className="footer-section">
            <h1 className="section-title">Contact Us</h1>
            <div className="section-content">
              <p><FaPhoneAlt /> 444 444 4444</p>
              <p><MdOutlinePhoneIphone /> 123 456 7890</p>
              <p><FaEnvelope /> hello@navigatecontent.com</p>
            </div>
          </div>
          <div className="footer-section">
            <h1 className="section-title">Get in Touch</h1>
            <div className="section-content">
              <p><AiOutlineUser /> Connect with us</p>
              <p><AiOutlineMail /> newsletter@navigatecontent.com</p>
            </div>
          </div>
          <div className="footer-section">
            <h1 className="section-title">Help & Support</h1>
            <div className="section-content">
              <p><BiHelpCircle /> FAQ</p>
              <p><AiOutlineMail /> support@navigatecontent.com</p>
            </div>
          </div>
        </div>
        <p className="copyright">Copyright © 2024 Navigater. All rights reserved.</p>
        <p className="policies">Terms of Use | Privacy Policy | Cookie Policy | Accessibility | Sitemap</p>
      </div>
    </div>
  );
};

export default Footer;
