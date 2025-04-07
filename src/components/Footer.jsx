import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-minimal">
          <div className="footer-logo-container">
            <motion.div 
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
            >
              <span className="logo-z">Z</span>eeilant
            </motion.div>
          </div>
          
          <div className="footer-contact">
            <a href="mailto:info@zeeilant.com" className="footer-email">info@zeeilant.com</a>
          </div>
          
          <div className="footer-social">
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Twitter"
            >
              <div className="social-icon twitter-icon"></div>
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <div className="social-icon linkedin-icon"></div>
            </motion.a>
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <div className="social-icon github-icon"></div>
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