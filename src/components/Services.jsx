import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const servicesData = [
  {
    id: 1,
    iconClass: 'icon-agents',
    title: 'AI Agents',
    description: 'Custom AI agents designed to automate tasks, assist customers, and optimize workflows.',
    features: [
      'Natural language processing',
      'Task automation',
      'Learning capabilities',
      'Integration with existing systems'
    ]
  },
  {
    id: 2,
    iconClass: 'icon-solutions',
    title: 'Custom AI Solutions',
    description: 'Tailored AI solutions to address specific business challenges and opportunities.',
    features: [
      'Problem-specific algorithms',
      'Data analysis and insights',
      'Predictive modeling',
      'Decision support systems'
    ]
  },
  {
    id: 3,
    iconClass: 'icon-integration',
    title: 'AI Integration',
    description: 'Seamless integration of AI technologies into your existing infrastructure and workflows.',
    features: [
      'API development',
      'System integration',
      'Workflow optimization',
      'Performance monitoring'
    ]
  },
  {
    id: 4,
    iconClass: 'icon-consulting',
    title: 'AI Consulting',
    description: 'Strategic guidance on implementing AI solutions for maximum business impact.',
    features: [
      'Opportunity assessment',
      'Technology selection',
      'Implementation roadmap',
      'ROI analysis'
    ]
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our <span className="text-gradient">Services</span></h2>
          <p>Transforming businesses with cutting-edge AI solutions</p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="services-container"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {servicesData.map((service) => (
            <motion.div 
              key={service.id}
              className="service-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' 
              }}
            >
              <div className="service-icon">
                <div className={service.iconClass}></div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="feature-list">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <motion.button 
                className="button button-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="background-shapes">
        <motion.div 
          className="shape shape-1"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 360],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="shape shape-2"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -360],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="shape shape-3"
          animate={{ 
            x: [0, 20, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default Services; 