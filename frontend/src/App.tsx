import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Classes from './components/Classes';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenRegistration = () => setIsModalOpen(true);
    document.addEventListener('openRegistration', handleOpenRegistration);
    return () => document.removeEventListener('openRegistration', handleOpenRegistration);
  }, []);

  return (
    <div className="min-h-screen bg-chess-dark text-chess-light font-sans selection:bg-chess-accent selection:text-chess-dark">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Classes />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
