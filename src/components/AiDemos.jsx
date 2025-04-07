import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const demos = [
  {
    id: 1,
    title: "Intelligent Document Analysis",
    description: "Our AI system processes complex documents and extracts structured data in seconds, reducing manual work by 95%.",
    icon: "document"
  },
  {
    id: 2,
    title: "Real-time Decision Engine",
    description: "Make data-driven decisions with our AI engine that processes thousands of variables to deliver actionable insights.",
    icon: "decision"
  },
  {
    id: 3,
    title: "Generative Assistant",
    description: "Experience our AI assistant that understands context, learns preferences, and provides personalized responses.",
    icon: "assistant"
  }
];

const AiDemos = () => {
  const [activeDemo, setActiveDemo] = useState(demos[0].id);
  const sectionRef = useRef(null);
  const demoRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  
  const renderDemoVisual = (id) => {
    switch(id) {
      case 1:
        return (
          <div className="demo-visual document-demo">
            <div className="document-container">
              <div className="document-page">
                <div className="doc-line"></div>
                <div className="doc-line"></div>
                <div className="doc-line"></div>
                <div className="doc-line short"></div>
                <div className="doc-highlight"></div>
                <div className="doc-line"></div>
                <div className="doc-line short"></div>
              </div>
              <div className="extraction-animation">
                <div className="data-point"></div>
                <div className="data-point"></div>
                <div className="data-point"></div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="demo-visual decision-demo">
            <div className="decision-graph">
              <div className="graph-node central"></div>
              <div className="graph-node n1"></div>
              <div className="graph-node n2"></div>
              <div className="graph-node n3"></div>
              <div className="graph-node n4"></div>
              <div className="graph-node n5"></div>
              <div className="graph-connection c1"></div>
              <div className="graph-connection c2"></div>
              <div className="graph-connection c3"></div>
              <div className="graph-connection c4"></div>
              <div className="graph-connection c5"></div>
              <div className="decision-pulse"></div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="demo-visual assistant-demo">
            <div className="chat-container">
              <div className="chat-header">
                <div className="chat-dot"></div>
                <div className="chat-dot"></div>
                <div className="chat-dot"></div>
              </div>
              <div className="chat-messages">
                <div className="chat-message user">How can AI improve our workflow?</div>
                <div className="chat-message ai">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="message-text">Based on your team's current processes, I recommend automating your document processing and implementing a real-time analytics dashboard to reduce decision time by 70%.</div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <section className="ai-demos" ref={sectionRef}>
      <div className="demos-bg"></div>
      
      <div className="container">
        <motion.div 
          className="demos-title"
          style={{ opacity, y }}
        >
          <h2 className="text-gradient">AI in Action</h2>
          <p>Experience the power of our intelligent solutions</p>
        </motion.div>
        
        <motion.div 
          className="demos-content"
          style={{ opacity, scale }}
          ref={demoRef}
        >
          <motion.div className="demos-visual">
            <div className="demo-frame">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDemo}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="demo-container"
                >
                  {renderDemoVisual(activeDemo)}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
          
          <div className="demos-controls">
            {demos.map(demo => (
              <motion.div
                key={demo.id}
                className={`demo-item ${activeDemo === demo.id ? 'active' : ''}`}
                onClick={() => setActiveDemo(demo.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`demo-icon ${demo.icon}-icon`}></div>
                <div className="demo-info">
                  <h3>{demo.title}</h3>
                  <p>{demo.description}</p>
                </div>
                {activeDemo === demo.id && (
                  <motion.div 
                    className="active-indicator"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="demos-cta"
          style={{ opacity, y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        >
          <motion.button 
            className="button-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AiDemos; 