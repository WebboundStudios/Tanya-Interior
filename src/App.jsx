import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { SITE_BRAND } from './constants/data';
import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Process } from './components/sections/Process';
import { Projects } from './components/sections/Projects';
import { Testimonials } from './components/sections/Testimonials';
import { CTASection } from './components/sections/CTASection';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export default function App() {
  // Initialize Lenis smooth scrolling
  useLenis();

  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (SITE_BRAND?.meta?.title) {
      document.title = SITE_BRAND.meta.title;
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f3efe7] text-[#172832] font-sans antialiased w-full max-w-full">
      {/* Fine scroll-progress accent, reinforces the studio's precision-instrument identity */}
      <motion.div
        style={{ scaleX: scrollProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#e66d4b] origin-left z-50"
      />

      <main className="relative bg-[#F7F5EE] w-full max-w-full">
        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Content Wrapper */}
        <div className="relative bg-[#F7F5EE] w-full max-w-full">
          <About />
          <Services />
          <WhyChooseUs />
          <Process />
          <Projects />
          <Testimonials />
          <CTASection />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
