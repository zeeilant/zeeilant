import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'AI Customer Service Agent',
    category: 'agents',
    bgColor: 'var(--primary-teal)',
    description: 'An intelligent customer service agent that handles inquiries across multiple channels.',
    client: 'E-commerce Platform',
    technologies: ['NLP', 'Machine Learning', 'API Integration']
  },
  {
    id: 2,
    title: 'Predictive Analytics Dashboard',
    category: 'solutions',
    bgColor: 'var(--primary-orange)',
    description: 'A data visualization platform that helps businesses predict market trends and customer behavior.',
    client: 'Financial Services Firm',
    technologies: ['Data Analysis', 'Predictive Modeling', 'Dashboard Design']
  },
  {
    id: 3,
    title: 'Process Automation System',
    category: 'integration',
    bgColor: 'var(--light-teal)',
    description: 'A comprehensive automation system that streamlines operational workflows.',
    client: 'Manufacturing Company',
    technologies: ['Process Automation', 'Workflow Design', 'Systems Integration']
  },
  {
    id: 4,
    title: 'AI-powered Content Recommendation',
    category: 'solutions',
    bgColor: 'var(--light-orange)',
    description: 'An intelligent recommendation engine that suggests personalized content to users.',
    client: 'Media Platform',
    technologies: ['Recommendation Systems', 'User Behavior Analysis', 'Content Categorization']
  },
  {
    id: 5,
    title: 'Virtual Assistant for Healthcare',
    category: 'agents',
    bgColor: 'var(--dark-teal)',
    description: 'A virtual assistant that helps patients manage appointments, medication schedules, and health queries.',
    client: 'Healthcare Provider',
    technologies: ['Healthcare AI', 'Conversational UI', 'Appointment Scheduling']
  },
  {
    id: 6,
    title: 'Supply Chain Optimization',
    category: 'consulting',
    bgColor: 'var(--dark-orange)',
    description: 'A strategic consulting project to optimize supply chain operations using AI.',
    client: 'Retail Chain',
    technologies: ['Supply Chain Management', 'Optimization Algorithms', 'Process Redesign']
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  
  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === filter);
    
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'agents', label: 'AI Agents' },
    { id: 'solutions', label: 'Custom Solutions' },
    { id: 'integration', label: 'AI Integration' },
    { id: 'consulting', label: 'AI Consulting' }
  ];
  
  const openProject = (project) => {
    setSelectedProject(project);
  };
  
  const closeProject = () => {
    setSelectedProject(null);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const projectVariants = {
    hidden: { 
      y: 20,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100
      }
    }
  };
  
  const modalVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0 
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our <span className="text-gradient">Projects</span></h2>
          <p>Explore our successful AI implementations</p>
        </motion.div>
        
        <motion.div 
          className="filter-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map(item => (
            <motion.button 
              key={item.id}
              className={`filter-button ${filter === item.id ? 'active' : ''}`}
              onClick={() => setFilter(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="projects-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={projectVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
              }}
              onClick={() => openProject(project)}
            >
              <div className="project-image" style={{ backgroundColor: project.bgColor }}>
                <div className="project-icon">
                  {project.category === 'agents' && <div className="icon-agents-large"></div>}
                  {project.category === 'solutions' && <div className="icon-solutions-large"></div>}
                  {project.category === 'integration' && <div className="icon-integration-large"></div>}
                  {project.category === 'consulting' && <div className="icon-consulting-large"></div>}
                </div>
                <div className="project-overlay">
                  <span>View Project</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-category">
                  <span>{filters.find(f => f.id === project.category)?.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div 
              className="project-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeProject}>×</button>
              <div className="modal-image" style={{ backgroundColor: selectedProject.bgColor }}>
                <div className="project-icon large">
                  {selectedProject.category === 'agents' && <div className="icon-agents-large"></div>}
                  {selectedProject.category === 'solutions' && <div className="icon-solutions-large"></div>}
                  {selectedProject.category === 'integration' && <div className="icon-integration-large"></div>}
                  {selectedProject.category === 'consulting' && <div className="icon-consulting-large"></div>}
                </div>
              </div>
              <div className="modal-content">
                <h2>{selectedProject.title}</h2>
                <p className="project-client"><strong>Client:</strong> {selectedProject.client}</p>
                <p className="project-description">{selectedProject.description}</p>
                <div className="project-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <motion.button 
                  className="button button-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Case Study
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 