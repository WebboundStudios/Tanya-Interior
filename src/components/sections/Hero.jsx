import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HERO_DATA, SITE_BRAND } from '../../constants/data';
import { StaircaseMenu } from '../layout/StaircaseMenu';

function HeroCardItem({ card, fanProgress }) {
  const rotate = useTransform(fanProgress, [0, 1], [card.startRotate, card.endRotate]);
  const x = useTransform(fanProgress, [0, 1], [card.startX, card.endX]);
  const y = useTransform(fanProgress, [0, 1], [card.startY, card.endY]);

  return (
    <motion.div
      style={{
        rotate,
        x,
        y,
        zIndex: card.zIndex,
        transformOrigin: 'bottom center',
      }}
      className="absolute inset-0 rounded-2xl overflow-hidden bg-white shadow-2xl border border-[#D9D0BC]/90 pointer-events-none select-none"
    >
      <img
        src={card.src}
        alt={card.title}
        className="w-full h-full object-cover luxury-image-filter"
      />
    </motion.div>
  );
}

export function Hero() {
  const heroRef = useRef(null);
  const [staircaseMenuOpen, setStaircaseMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const fanProgress = useTransform(scrollYProgress, [0, 0.14], [0, 1]);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const spreadFactor = isMobile ? 0.38 : isTablet ? 0.65 : 1;

  const heroCards = [
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
      title: "Sculptural Form",
      category: "Bespoke Styling",
      startRotate: -2,
      endRotate: -36,
      startX: 0,
      endX: -260 * spreadFactor,
      startY: 0,
      endY: 28,
      zIndex: 10,
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      title: "Architectural Light",
      category: "Spatial Flow",
      startRotate: -4,
      endRotate: -18,
      startX: 0,
      endX: -130 * spreadFactor,
      startY: 6,
      endY: 6,
      zIndex: 20,
    },
    {
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
      title: "Minimalist Lounge",
      category: "Materiality",
      startRotate: 0,
      endRotate: 0,
      startX: 0,
      endX: 0,
      startY: 12,
      endY: -16,
      zIndex: 30,
    },
    {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
      title: "Tactile Textures",
      category: "Curated Living",
      startRotate: 4,
      endRotate: 18,
      startX: 0,
      endX: 130 * spreadFactor,
      startY: 18,
      endY: 6,
      zIndex: 20,
    },
    {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      title: "Organic Chair",
      category: "Curved Furniture",
      startRotate: 2,
      endRotate: 36,
      startX: 0,
      endX: 260 * spreadFactor,
      startY: 24,
      endY: 28,
      zIndex: 10,
    },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-visible bg-[#F7F5EE] text-[#15140F] select-none px-6 md:px-12 pt-6 pb-12"
    >
        {/* 1. Header / Navigation Bar */}
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-7xl mx-auto flex items-center justify-between z-30"
        >
          {/* Left: Brand Identity Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group cursor-pointer">
            {SITE_BRAND.logoImage ? (
              <img
                src={SITE_BRAND.logoImage}
                alt={SITE_BRAND.name}
                className="h-8 md:h-10 w-auto object-contain rounded-xs"
              />
            ) : (
              <div className="w-5 h-5 flex items-center justify-center text-[#15140F]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5 h-5">
                  <path d="M3 21V9l9-7 9 7v12H3z" />
                  <path d="M9 21V12h6v9" />
                </svg>
              </div>
            )}
            <span className="font-sans font-extrabold text-lg sm:text-xl tracking-wider uppercase text-[#15140F]">
              {SITE_BRAND.name || "TT INTERIORS"}
            </span>
          </a>

          {/* Center: Micro Category Tagline */}
          <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#6B6459] font-medium">
            <span className="text-[#A6813F]">✳</span>
            <span>INTERIOR STYLING — LIGHTING — TURNKEY</span>
          </div>

          {/* Right: Get In Touch CTA + Menu */}
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#15140F] border-b border-[#15140F] pb-0.5 hover:opacity-70 transition-opacity"
            >
              <span>GET IN TOUCH</span>
            </a>

            <button
              onClick={() => setStaircaseMenuOpen(true)}
              className="p-1.5 text-[#15140F] hover:opacity-75 transition-opacity focus:outline-none cursor-pointer"
              aria-label="Open Fullscreen Menu"
            >
              <div className="flex flex-col gap-1.5 w-6 items-end">
                <span className="w-6 h-[2px] bg-[#15140F]" />
                <span className="w-4 h-[2px] bg-[#15140F]" />
              </div>
            </button>
          </div>

          {/* Fullscreen Staircase Overlay Menu */}
          <StaircaseMenu
            isOpen={staircaseMenuOpen}
            onClose={() => setStaircaseMenuOpen(false)}
          />
        </motion.header>

        {/* 2. Main Hero Content — Huge Centered Headline + Overlapping Fanning Image Card Stack */}
        <div className="relative w-full max-w-7xl mx-auto flex-1 flex flex-col items-center justify-center text-center my-auto py-8">
          {/* Micro sub-headline for mobile/tablet */}
          <div className="md:hidden flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#6B6459] font-medium mb-3">
            <span className="text-[#A6813F]">✳</span>
            <span>INTERIOR STYLING — LIGHTING</span>
          </div>

          {/* Massive Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center leading-none z-10 select-none"
          >
            {/* Top Line: Bold Modern Sans */}
            <h1 className="font-sans font-bold tracking-tight text-[#15140F] text-[11vw] sm:text-[8.5vw] md:text-[7vw] lg:text-[6.5rem] uppercase leading-[0.9]">
              CRAFTING
            </h1>

            {/* Bottom Line: High-contrast Elegant Serif */}
            <h2 className="font-serif font-normal tracking-tight text-[#15140F] text-[12vw] sm:text-[9.5vw] md:text-[8vw] lg:text-[7.5rem] uppercase leading-[0.9] mt-1">
              LUXURY SPACES
            </h2>
          </motion.div>

          {/* Scroll-Fanning Cards Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-8 sm:mt-10 md:mt-12 z-20 mb-8 sm:mb-12"
          >
            <div className="relative w-[180px] sm:w-[240px] md:w-[280px] aspect-[3/4] mx-auto">
              {heroCards.map((card, idx) => (
                <HeroCardItem key={idx} card={card} fanProgress={fanProgress} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* 3. Bottom Hero Footer Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-7xl mx-auto flex items-center justify-between z-30 pt-4"
        >
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#15140F]">
            LUXURY RESIDENTIAL & COMMERCIAL
          </span>

          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#15140F]">
            INTERIOR DESIGN STUDIO
          </span>
        </motion.div>
    </section>
  );
}