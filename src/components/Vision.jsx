import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Vision = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  
  return (
    <section className="vision" ref={sectionRef}>
      <div className="container">
        <div className="vision-content">
          <div className="vision-quote-container">
            <motion.div 
              className="vision-quote"
              style={{ y: y1, opacity }}
            >
              <div className="quote-mark">"</div>
              <h2>Artificial intelligence isn't just our expertise—it's our vision for a more efficient, intuitive future.</h2>
              <p className="quote-author">— Zeeilant Leadership Team</p>
            </motion.div>
          </div>
          
          <motion.div 
            className="vision-philosophy"
            style={{ 
              opacity, 
              y: useTransform(scrollYProgress, [0, 1], [100, -100]) 
            }}
          >
            <h3 className="text-gradient">Our Philosophy</h3>
            <p>
            We don't just build software; we build relationships. When you work with Zeeilant, you're partnering with people who genuinely care about your success. Our streamlined development process means we can work faster and smarter, but every line of code still benefits from human oversight and ingenuity.

What makes us different? We're transparent, we speak in plain language (not tech jargon), and we're committed to making technology that actually makes your life easier.            </p>
            
            <div className="philosophy-items">
              <div className="philosophy-item">
                <span className="number">01</span>
                <span className="text">Human-Centered Design</span>
              </div>
              
              <div className="philosophy-item">
                <span className="number">02</span>
                <span className="text">Ethical AI Development</span>
              </div>
              
              <div className="philosophy-item">
                <span className="number">03</span>
                <span className="text">Continuous Innovation</span>
              </div>
              
              <div className="philosophy-item">
                <span className="number">04</span>
                <span className="text">Measurable Outcomes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="vision-divider"></div>
    </section>
  );
};

export default Vision; 