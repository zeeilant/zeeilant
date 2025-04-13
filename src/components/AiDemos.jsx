import { useState, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ContactPopup from './ContactPopup';


const demos = [
  {
    id: 1,
    title: "Understand",
    description: "We dive deep into your business goals, user needs, and competitive landscape before writing a single line of code.",
    icon: "document"
  },
  {
    id: 2,
    title: "Design",
    description: "Our creative design process generates concepts that we refine with your feedback to ensure they meet your business objective.",
    icon: "decision"
  },
  {
    id: 3,
    title: "Develop",
    description: "We write clean, efficient code while leveraging modern tools to accelerate development – giving you more bang for your buck.",
    icon: "assistant"
  },
  {
    id: 4,
    title: "Test",
    description: "Rigorous testing ensures your product doesn't just work – it excels.",
    icon: "test"
  },
  {
    id: 5,
    title: "Deploy",
    description: "We handle the technical details of deployment so you can focus on what you do best.",
    icon: "deploy"
  },
  {
    id: 6,
    title: "Maintain",
    description: "Technology is never done.We'll help you continuously improve based on real user feedback.",
    icon: "Maintain"
  }
];

const AiDemos = () => {
  const [activeDemo, setActiveDemo] = useState(demos[0].id);
  const sectionRef = useRef(null);
  const demoRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
      case 4:
        return (
          <div className="demo-visual test-demo">
            <div className="test-container">
              <div className="test-header">
                <div className="test-dot"></div>
                <div className="test-dot"></div>
                <div className="test-dot"></div>
              </div>
              <div className="test-messages">
                <div className="test-message user">Running comprehensive test suite...</div>
                <div className="test-message ai">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="message-text">Test results: 98% coverage achieved. All critical paths verified.</div>
                </div>
              </div>
              <div className="test-visualization">
                <div className="test-graph">
                  <div className="graph-bar success" style={{ height: '98%' }}></div>
                  <div className="graph-bar warning" style={{ height: '2%' }}></div>
                </div>
                <div className="test-metrics">
                  <div className="metric success">
                    <span className="metric-value">98%</span>
                    <span className="metric-label">Coverage</span>
                  </div>
                  <div className="metric warning">
                    <span className="metric-value">2%</span>
                    <span className="metric-label">Issues</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="demo-visual deploy-demo">
            <div className="deploy-container">
              <div className="deploy-header">
                <div className="deploy-progress">
                  <div className="circular-progress" style={{ '--progress': '75%' }}>
                    <span>75%</span>
                  </div>
                </div>
                <div className="deploy-steps">
                  <div className="step completed">
                    <div className="step-icon">✓</div>
                    <div className="step-label">Prepared</div>
                  </div>
                  <div className="step completed">
                    <div className="step-icon">✓</div>
                    <div className="step-label">Built</div>
                  </div>
                  <div className="step active">
                    <div className="step-icon">⌛</div>
                    <div className="step-label">Deploying</div>
                  </div>
                </div>
              </div>
              <div className="deploy-status">
                <div className="status-bar">
                  <div className="status-progress" style={{ width: '75%' }}></div>
                </div>
                <div className="status-message">Deploying to production environment...</div>
              </div>
            </div>
          </div>
        );  
      case 6:
        return (
          <div className="demo-visual maintain-demo">
            <div className="maintain-container">
              <div className="health-grid">
                <div className="health-metric">
                  <div className="metric-value">98.9%</div>
                  <div className="metric-label">Uptime</div>
                  <div className="metric-progress success" style={{ width: '98.9%' }}></div>
                </div>
                <div className="health-metric">
                  <div className="metric-value">24ms</div>
                  <div className="metric-label">Response</div>
                  <div className="metric-progress warning" style={{ width: '85%' }}></div>
                </div>
                <div className="health-metric">
                  <div className="metric-value">1.2M</div>
                  <div className="metric-label">Requests</div>
                  <div className="metric-progress success" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div className="system-status">
                <div className="status-indicator active"></div>
                <div className="status-details">
                  <h4>System Health</h4>
                  <p>All systems operational</p>
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
          <h2 className="text-gradient">How We Work</h2>
          <p>We're a team of experienced developers and designers who are passionate about building products that help businesses grow.(click on process)</p>
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
            onClick={() => setIsPopupOpen(true)}
          >
            Need Consultation
          </motion.button>
        </motion.div>
      </div>
      <ContactPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </section>
  );
};

export default AiDemos; 