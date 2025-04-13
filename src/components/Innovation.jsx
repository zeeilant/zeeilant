import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Innovation = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  return (
    <section className="innovation" ref={sectionRef}>
      <div className="innovation-overlay"></div>
      
      <div className="container">
        <div className="innovation-content">
          <motion.div 
            className="innovation-text"
            style={{ y: y1, opacity }}
          >
            <h2 className="text-gradient">Who We Are!</h2>
            <p className="highlight">We're not just using AI—we're redefining it.</p>
            
            <div className="innovation-stats">
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Faster Development</span>
              </div>
              
              <div className="stat">
                <span className="stat-number">80%</span>
                <span className="stat-label">Cost Reduction</span>
              </div>
              
              <div className="stat">
                <span className="stat-number">3x</span>
                <span className="stat-label">Productivity Boost</span>
              </div>
            </div>
            
            <p className="description">
            At Zeeilant, we're not just another tech company. We're a small, nimble team of developers who believe that advanced technology should work for everyone – not just tech giants with unlimited resources.Zeeilant combines creative problem-solving with modern development approaches to deliver custom software solutions that would typically require much larger teams and budgets.
            </p>
            
            <div className="innovation-features">
              <div className="feature">
                <div className="feature-icon"></div>
                <span>Your Friendly Neighborhood</span>
              </div>
              
              <div className="feature">
                <div className="feature-icon"></div>
                <span>When you need us, we're here</span>
              </div>
              
              <div className="feature">
                <div className="feature-icon"></div>
                <span>We're try to use AI to make your life easier</span>
              </div>
              
              <div className="feature">
                <div className="feature-icon"></div>
                <span>Together we can make a amazing product</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="innovation-visual"
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
              opacity: opacity 
            }}
          >
            <div className="visual-container">
              <div className="hexagon-grid">
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
              </div>
              <div className="visual-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Innovation; 