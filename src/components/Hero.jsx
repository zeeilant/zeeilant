// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import ParticlesBackground from './ParticlesBackground';
import ContactPopup from './ContactPopup';

const Hero = () => {
  const heroRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Enhanced parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroImageRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  
  // Animated elements parallax
  const shape1Y = useTransform(scrollYProgress, [0, 1], [0, -150]); 
  const shape2Y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const shape3Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  

  const scrollToAiCapabilities = () => {
    
    window.scrollTo({
      top: 1000,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="particles-container">
        <ParticlesBackground />
      </div>
      
      {/* Digital code rain effect */}
      <div className="digital-rain"></div>
      
      {/* Parallax foreground shapes */}
      <motion.div 
        className="parallax-shape shape1"
        style={{ y: shape1Y }}
      />
      <motion.div 
        className="parallax-shape shape2"
        style={{ y: shape2Y }}
      />
      <motion.div 
        className="parallax-shape shape3"
        style={{ y: shape3Y }}
      />
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          style={{ y, opacity, rotateX: rotate }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span>Pioneering AI Solutions</span>
          </motion.div>
          
          <motion.h1 
            className="text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: titleY , fontSize: '2.5rem'}}
            
          >
            Smart Solutions, Exceptional Results:<br/> Software That Works As Hard As You Do
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Custom web apps, websites, and SaaS solutions built by developers who understand your business needs.
          </motion.p>
          
          <motion.div 
            className="tagline-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="tagline-item">
              <span className="tagline-icon"></span>
              <span className="tagline-text">AI Agents</span>
            </div>
            <div className="tagline-item">
              <span className="tagline-icon"></span>
              <span className="tagline-text">Custom Website Development</span>
            </div>
            <div className="tagline-item">
              <span className="tagline-icon"></span>
              <span className="tagline-text">SaaS Solutions</span>
            </div>
            <div className="tagline-item">
              <span className="tagline-icon"></span>
              <span className="tagline-text">Maintenance & Support / Consultation</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.button 
              className="button-primary forsmall"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAiCapabilities}
            >
              Explore Solutions
            </motion.button>
            <motion.button 
              className="button-secondary forsmall"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowContactForm(true)}
            >
              Contact Us
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="scroll-indicator-top"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="scroll-text">Scroll to explore</div>
            <div className="scroll-line"></div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1, 
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          style={{ 
            y: heroImageY, 
            rotateZ: heroImageRotate,
            scale
          }}
        >
          <div className="hero-illustration">
            <div className="ai-circle"></div>
            <div className="ai-grid"></div>
            <div className="ai-dots"></div>
            
            {/* 3D effect layers */}
            <div className="ai-layer layer1"></div>
            <div className="ai-layer layer2"></div>
            <div className="ai-layer layer3"></div>
            
            {/* Add tech nodes */}
            <div className="tech-nodes">
              {[...Array(6)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className={`tech-node node-${i+1}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: isLoaded ? 1 : 0,
                    scale: isLoaded ? 1 : 0 
                  }}
                  transition={{ 
                    delay: 0.5 + (i * 0.15),
                    duration: 0.5,
                    type: "spring"
                  }}
                >
                  <span className="node-label">{getTechLabel(i)}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Floating elements */}
          <motion.div 
            className="floating-icon icon-1"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }}
          >
            <div className="icon-inner icon-brain"></div>
          </motion.div>
          
          <motion.div 
            className="floating-icon icon-2"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }}
          >
            <div className="icon-inner icon-data"></div>
          </motion.div>
          
          <motion.div 
            className="floating-icon icon-3"
            animate={{ 
              y: [0, -10, 0],
              x: [0, 5, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut"
            }}
          >
            <div className="icon-inner icon-robot"></div>
          </motion.div>
          
          <motion.div 
            className="floating-icon icon-4"
            animate={{ 
              y: [0, 12, 0],
              x: [0, -8, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 7,
              ease: "easeInOut"
            }}
          >
            <div className="icon-inner icon-chip"></div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.2, 1, 0.2]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
        
      >
        <div className="scroll-arrow"></div>
        <div className="scroll-text forsmall-text">Scroll Down</div>
      </motion.div>
      
      {/* Digital metrics animation */}
      <div className="digital-metrics ">
        <motion.div 
          className="metric"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="metric-value">98%</span>
          <span className="metric-label">Accuracy</span>
        </motion.div>
        <motion.div 
          className="metric"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <span className="metric-value">5x</span>
          <span className="metric-label">Efficiency</span>
        </motion.div>
        <motion.div 
          className="metric"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <span className="metric-value">24/7</span>
          <span className="metric-label">Support</span>
        </motion.div>
      </div>

      {/* Replace the old contact form with ContactPopup */}
      <ContactPopup 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </section>
  );
};

// Helper function for tech node labels
const getTechLabel = (index) => {
  const labels = ['ML', 'NLP', 'Vision', 'Data', 'Neural', 'Cloud'];
  return labels[index];
};

export default Hero; 