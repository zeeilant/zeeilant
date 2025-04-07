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
            <h2 className="text-gradient">Beyond Conventional AI</h2>
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
              Through our revolutionary AI-powered workflow, we deliver solutions that would normally take months in just days. Our proprietary techniques combine machine learning, knowledge engineering, and advanced automation to create systems that understand context, adapt to changing requirements, and consistently deliver exceptional results.
            </p>
            
            <div className="innovation-features">
              <div className="feature">
                <div className="feature-icon"></div>
                <span>Adaptive Learning</span>
              </div>
              
              <div className="feature">
                <div className="feature-icon"></div>
                <span>Contextual Understanding</span>
              </div>
              
              <div className="feature">
                <div className="feature-icon"></div>
                <span>Human-AI Collaboration</span>
              </div>
              
              <div className="feature">
                <div className="feature-icon"></div>
                <span>Future-Proof Solutions</span>
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