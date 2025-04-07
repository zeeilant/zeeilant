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

function App() {
  return (
    <Router>
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
        <FloatingButton />
      </div>
    </Router>
  );
}

export default App;
