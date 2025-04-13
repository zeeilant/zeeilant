// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AiCapabilities = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.9, 1], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6, 1], [0, 1, 0]);
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  
  return (
    <section className="capabilities" ref={sectionRef}>
      <div className="parallax-background">
        <div className="parallax-grid"></div>
        <div className="parallax-glow"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="capabilities-title"
          style={{ opacity: opacity1, y: y1 }}
        >
          <h2 className="text-gradient"> Why Choose Zeeilant?</h2>
          <p>We're building powerful AI solutions that support your business needs</p>
        </motion.div>
        
        <div className="capabilities-content">
          <motion.div 
            className="capabilities-image"
            style={{ scale }}
          >
            <div className="orange-circle"></div>
            <div className="capabilities-visual">
              <div className="code-animation">
                <div className="code-line"></div>
                <div className="code-line"></div>
                <div className="code-line"></div>
                <div className="code-line"></div>
                <div className="code-line"></div>
              </div>
            </div>
          </motion.div>
          
          <div className="capabilities-items">
            <motion.div 
              className="capability-card"
              style={{ opacity: opacity1, y: y1 }}
            >
              <div className="capability-icon">
                <div className="ai-icon ai-brain"></div>
              </div>
              <div className="capability-text">
                <h3>Speed Without Sacrifice</h3>
                <p>Our optimized development process means we can deliver quality work in a fraction of the time it would take traditional agencies.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="capability-card"
              style={{ opacity: opacity2, y: y2 }}
            >
              <div className="capability-icon">
                <div className="ai-icon ai-code"></div>
              </div>
              <div className="capability-text">
                <h3>Budget-Friendly Innovation</h3>
                <p>You don't need a Fortune 500 budget to get Fortune 500 quality. Our efficient approach makes advanced technology accessible..</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="capability-card"
              style={{ opacity: opacity3, y: y3 }}
            >
              <div className="capability-icon">
                <div className="ai-icon ai-growth"></div>
              </div>
              <div className="capability-text">
                <h3>Future-Proof Solutions</h3>
                <p>We build with scalability in mind, so your digital assets can grow alongside your business..</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiCapabilities; 