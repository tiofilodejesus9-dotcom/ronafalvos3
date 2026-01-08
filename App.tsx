import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoHighlight } from './components/VideoHighlight';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Banners } from './components/Banners';
import { CtaSection } from './components/CtaSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

const App: React.FC = () => {
  // Simple scroll progress tracker for navbar styling if needed
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden selection:bg-ronaf-blue selection:text-white">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <section id="inicio">
          <Hero />
        </section>

        {/* Video Section added before About Us */}
        <VideoHighlight />

        <section id="sobre">
          <About />
        </section>

        <section id="servicos">
          <Services />
        </section>

        <section id="galeria">
          <Banners />
        </section>

        <section id="por-que-nos">
          <WhyChooseUs />
        </section>

        <CtaSection />

        <section id="contacto">
          <Contact />
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default App;