import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import zeeilantlogo from '../assets/images/zeeilantlogo.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-minimal">
          <div className="footer-logo-container">
            <motion.div 
              className="footer-logo"
            >
              <Link to="/" className="footer-logo-link">
                <img 
                  src={zeeilantlogo} 
                  alt="Zeeilant Logo" 
                  className="footer-logo-image"
                  style={{ width: '20%', height: '20%', borderRadius: '50%' }}
                />
              </Link>
            </motion.div>
          </div>
          
          <div className="footer-contact">
            <a href="mailto:info@zeeilant.com" className="footer-email">wecare@zeeilant.com</a>
          </div>
          
          <div className="footer-social">
            <motion.a 
              href="https://x.com/zeeilant" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Twitter"
            >
              <div className="social-icon twitter-icon"></div>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/company/zeeilant/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <div className="social-icon linkedin-icon"></div>
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/zeeilant/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Instagram"
            >
              <div className="social-icon instagram-icon"></div>
            </motion.a>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p>© {currentYear} Zeeilant AI Solutions. All rights reserved.</p>
          <p>Designed with <span className="heart">❤</span> for innovation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 