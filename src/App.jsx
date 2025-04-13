import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AiCapabilities from './components/AiCapabilities';
import Innovation from './components/Innovation';
import Vision from './components/Vision';
import AiDemos from './components/AiDemos';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingButton from './components/FloatingButton';
import CustomCursor from './components/CustomCursor';
import ChatBot from './components/ChatBot';

// Import CSS
import './styles/globals.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/capabilities.css';
import './styles/innovation.css';
import './styles/vision.css';
import './styles/demos.css';
import './styles/testimonials.css';
import './styles/faq.css';
import './styles/footer.css';
import './styles/floating-button.css';
import './styles/cursor.css';
import './styles/ChatBot.css';
import './styles/contact-popup.css';
import { useState } from 'react';



function App() {
  return (
    <Router>
      <CustomCursor />
      <ScrollToTop />
      <div className="app">
        <Navbar />
        
        <main>
          <Hero />
          <AiCapabilities />
          <Innovation />
          <Vision />
          <AiDemos />
          <Testimonials />
          <Faq />
        </main>
        
        <Footer />
        {/* <FloatingButton /> */}
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
