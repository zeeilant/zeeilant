import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Working with Zeeilant was refreshingly straightforward. No tech jargon, no unnecessary complexity – just intelligent solutions delivered on time and on budget.",
    author: "Khushi",
    position: "Founder, KASOS.",
    company: "KASOS"
  },
  {
    id: 2,
    quote: "As a non-technical founder, I was worried about communicating my vision effectively. The team at Zeeilant made the entire process painless and even enjoyable.",
    author: "Bobby Ran",
    position: "Founder, Dxer Studio",
    company: "Dxer Studio"
  },
  {
    id: 3,
    quote: "Zeeilant transformed our outdated website into a powerful business tool in half the time we expected. Their combination of technical expertise and business understanding made all the difference.",
    author: "Emma Rodriguez",
    position: "Head of R&D, Nexus Group",
    company: "Nexus Group"
  },
  {
    id: 4,
    quote: "Zeeilant's AI solutions transformed our business operations. Their custom implementation reduced our development time by 75% while increasing accuracy.",
    author: "Rahul",
    position: "Trainer, Rahul's Fitness",
    company: "Rahul's Fitness"
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
            <div className="company-logo">Dxer Studio</div>
            <div className="company-logo">KASOS</div>
            <div className="company-logo">Nexus Group</div>
            <div className="company-logo">Rahul's Fitness</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 