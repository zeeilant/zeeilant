import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Zeeilant's AI solutions transformed our business operations. Their custom implementation reduced our development time by 75% while increasing accuracy.",
    author: "Sarah Johnson",
    position: "CTO, TechVision Inc.",
    company: "TechVision"
  },
  {
    id: 2,
    quote: "Working with Zeeilant gave us a competitive edge. Their AI agents understand our business context and deliver results that feel like they come from team members who've been with us for years.",
    author: "Michael Chen",
    position: "Director of Innovation, Apex Solutions",
    company: "Apex Solutions"
  },
  {
    id: 3,
    quote: "The level of sophistication in Zeeilant's AI technology is unmatched. Their solutions helped us process data 10x faster with 30% more accuracy than our previous systems.",
    author: "Emma Rodriguez",
    position: "Head of R&D, Nexus Group",
    company: "Nexus Group"
  },
  {
    id: 4,
    quote: "We approached Zeeilant with a complex challenge that other vendors said was impossible. Within weeks, their team delivered a solution that exceeded our expectations and transformed our workflow.",
    author: "David Wilson",
    position: "CEO, Innovate Partners",
    company: "Innovate Partners"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const autoplayTimerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  useEffect(() => {
    if (isAutoplay) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isAutoplay]);
  
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
  };
  
  const handleMouseEnter = () => {
    setIsAutoplay(false);
  };
  
  const handleMouseLeave = () => {
    setIsAutoplay(true);
  };
  
  return (
    <section className="testimonials" ref={sectionRef}>
      <div className="testimonials-bg"></div>
      
      <div className="container">
        <motion.div 
          className="testimonials-title"
          style={{ opacity, y }}
        >
          <h2 className="text-gradient">What Our Clients Say</h2>
          <p>Trusted by innovative companies worldwide</p>
        </motion.div>
        
        <motion.div 
          className="testimonials-slider"
          ref={sliderRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ opacity }}
        >
          <div className="testimonials-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div className="testimonial-slide" key={testimonial.id}>
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">{testimonial.quote}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.author}</h4>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonial-controls">
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`testimonial-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => handleSlideChange(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="testimonial-arrows">
              <button 
                className="testimonial-arrow prev"
                onClick={() => handleSlideChange((currentSlide - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
              >
                <span></span>
              </button>
              <button 
                className="testimonial-arrow next"
                onClick={() => handleSlideChange((currentSlide + 1) % testimonials.length)}
                aria-label="Next testimonial"
              >
                <span></span>
              </button>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="testimonials-companies"
          style={{ opacity, y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        >
          <div className="company-logos">
            <div className="company-logo">TechVision</div>
            <div className="company-logo">Apex</div>
            <div className="company-logo">Nexus</div>
            <div className="company-logo">Innovate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 