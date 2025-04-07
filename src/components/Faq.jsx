import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    id: 1,
    question: "How does Zeeilant implement AI solutions for businesses?",
    answer: "We take a consultative approach, first understanding your specific business challenges and objectives. Our team then designs custom AI solutions using a combination of cutting-edge models, proprietary algorithms, and integration frameworks. Each implementation follows our proven methodology: consultation, design, development, integration, testing, deployment, and ongoing optimization."
  },
  {
    id: 2,
    question: "What industries does Zeeilant specialize in?",
    answer: "While our AI solutions are adaptable across sectors, we have deep expertise in financial services, healthcare, manufacturing, retail, and technology. Our specialized knowledge in these areas allows us to understand industry-specific challenges and create AI systems that address unique regulatory, operational, and competitive factors."
  },
  {
    id: 3,
    question: "How long does it typically take to implement an AI solution?",
    answer: "Implementation timelines vary based on project complexity and scope. Simple AI integrations can be completed in 2-4 weeks, while comprehensive enterprise solutions typically require 2-6 months. Our agile methodology ensures you see progressive results throughout the development process, with regular deployments of functional components."
  },
  {
    id: 4,
    question: "What kind of ROI can we expect from your AI solutions?",
    answer: "Our clients typically experience ROI in multiple dimensions: cost reduction (20-50% for automated processes), productivity increases (30-80% for augmented workflows), error reduction (up to 90% in critical operations), and new revenue opportunities. We work with you to establish clear baseline metrics and track improvements across relevant KPIs specific to your business objectives."
  },
  {
    id: 5,
    question: "How does Zeeilant handle data privacy and security?",
    answer: "We implement comprehensive security measures at every level of our AI solutions. This includes data encryption (at rest and in transit), secure development practices, regular security audits, and compliance with industry standards (GDPR, HIPAA, etc.). We can deploy solutions in your existing secure infrastructure or provide secure cloud environments based on your requirements."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section className="faq" ref={sectionRef}>
      <div className="container">
        <motion.div 
          className="faq-title"
          style={{ opacity, y }}
        >
          <h2 className="text-gradient">Frequently Asked Questions</h2>
          <p>Get answers to common questions about our AI solutions</p>
        </motion.div>
        
        <motion.div 
          className="faq-content"
          style={{ opacity, y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        >
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <motion.div 
                key={item.id}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div 
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3>{item.question}</h3>
                  <span className="faq-icon"></span>
                </div>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div 
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <div className="faq-cta">
            <h3>Still have questions?</h3>
            <p>Contact our team for personalized guidance on how our AI solutions can help your business.</p>
            <motion.button 
              className="button-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq; 