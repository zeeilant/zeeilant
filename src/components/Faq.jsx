import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ContactPopup from './ContactPopup';
import '../styles/faq.css';

const faqItems = [
  {
    id: 1,
    question: "I don't have a clear idea of what I need. Can you still help?",
    answer: "Absolutely! Many of our clients come to us with business problems rather than specific technical requirements. We'll work together to define your needs and find the right solution – whether that's a simple website or a complex custom application."
  },
  {
    id: 2,
    question: "Do I need to understand technology to work with you?",
    answer: "Not at all. We speak human first, tech second. We'll explain everything in plain language and handle all the technical details so you don't have to."
  },
  {
    id: 3,
    question: "How much does a project typically cost?",
    answer: "Every project is unique, so costs vary based on complexity, timeline, and specific requirements. We're transparent about pricing and will provide a detailed estimate before any work begins. What we can promise: you'll get excellent value for your investment."
  },
  {
    id: 4,
    question: "How long does a typical project take?",
    answer: "Our streamlined development process allows us to work significantly faster than traditional methods. A standard website might take 2-4 weeks, while more complex applications could require 8-12 weeks. We'll provide a timeline estimate during our initial consultation."
  },
  {
    id: 5,
    question: "Can you help with ongoing maintenance after launch?",
    answer: "Definitely! We offer flexible maintenance packages to keep your digital assets secure, up-to-date, and performing optimally."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
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
              onClick={() => setIsPopupOpen(true)}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>

      <ContactPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
};

export default Faq; 