import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
} from 'framer-motion';
import { HERO_DATA, SITE_BRAND } from '../../constants/data';

function HeroCardItem({ card, fanProgress, reduceMotion }) {
  // Each card gets its own spring on top of the shared scroll progress.
  // Outer cards run a slightly softer / heavier spring than the center
  // card, so the fan doesn't snap open uniformly — it settles like a
  // hand-dealt stack, with the outer cards trailing a beat behind.
  const smoothProgress = useSpring(
    fanProgress,
    reduceMotion
      ? { stiffness: 1000, damping: 100 } // effectively instant, no bounce
      : { stiffness: card.stiffness, damping: card.damping, mass: 0.6 }
  );

  const rotate = useTransform(smoothProgress, [0, 1], [card.startRotate, card.endRotate]);
  const x = useTransform(smoothProgress, [0, 1], [card.startX, card.endX]);
  const y = useTransform(smoothProgress, [0, 1], [card.startY, card.endY]);
  const scale = useTransform(smoothProgress, [0, 1], [1, card.endScale]);

  // Elevation grows with fan progress — the card reads as physically
  // lifting off the stack rather than just sliding sideways.
  const shadowBlur = useTransform(smoothProgress, [0, 1], [6, card.shadowBlur]);
  const shadowY = useTransform(smoothProgress, [0, 1], [3, card.shadowBlur * 0.45]);
  const boxShadow = useTransform(
    [shadowBlur, shadowY],
    ([blur, sy]) => `0 ${sy}px ${blur}px -${blur * 0.25}px rgba(21, 20, 15, ${card.shadowOpacity})`
  );

  // A soft vignette on non-focal cards — depth-of-field, not a filter,
  // so it layers cleanly over the existing luxury-image-filter class.
  const dim = useTransform(smoothProgress, [0, 1], [0, card.dimAmount]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: card.dealDelay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotate,
        x,
        y,
        scale,
        zIndex: card.zIndex,
        transformOrigin: 'bottom center',
        boxShadow,
      }}
      className="absolute inset-0 rounded-2xl overflow-hidden bg-white border border-[#D9D0BC]/90 pointer-events-none select-none"
    >
      <img
        src={card.src}
        alt={card.title}
        className="w-full h-full object-cover luxury-image-filter"
      />
      <motion.div
        style={{ opacity: dim }}
        className="absolute inset-0 bg-[#15140F] pointer-events-none"
      />
    </motion.div>
  );
}

export function Hero() {
  const heroRef = useRef(null);
  const stackRef = useRef(null);
  const reduceMotion = useReducedMotion();
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

  // Signature interaction: the whole deck tilts gently toward the
  // pointer, like a physical stack of prints on a light table.
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 150, damping: 18, mass: 0.4 });
  const springTiltY = useSpring(tiltY, { stiffness: 150, damping: 18, mass: 0.4 });

  const handlePointerMove = (e) => {
    if (reduceMotion || !stackRef.current) return;
    const rect = stackRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltY.set(px * 12);
    tiltX.set(-py * 8);
  };
  const handlePointerLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  // Cards are defined outer-to-outer so distance-from-center can drive
  // weight, elevation, and reveal order in one pass.
  const rawCards = [
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
      title: "Sculptural Form",
      startRotate: -2, endRotate: -36,
      startX: 0, endX: -260 * spreadFactor,
      startY: 0, endY: 28,
      zIndex: 10, distance: 2,
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      title: "Architectural Light",
      startRotate: -4, endRotate: -18,
      startX: 0, endX: -130 * spreadFactor,
      startY: 6, endY: 6,
      zIndex: 20, distance: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
      title: "Minimalist Lounge",
      startRotate: 0, endRotate: 0,
      startX: 0, endX: 0,
      startY: 12, endY: -16,
      zIndex: 30, distance: 0,
    },
    {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
      title: "Tactile Textures",
      startRotate: 4, endRotate: 18,
      startX: 0, endX: 130 * spreadFactor,
      startY: 18, endY: 6,
      zIndex: 20, distance: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      title: "Organic Chair",
      startRotate: 2, endRotate: 36,
      startX: 0, endX: 260 * spreadFactor,
      startY: 24, endY: 28,
      zIndex: 10, distance: 2,
    },
  ];

  // Distance from the center card drives every "premium" cue: heavier
  // spring + more elevation + more recede the further out a card sits,
  // and the deal animates outward from the center like it's being spread
  // by hand rather than popping in all at once.
  const heroCards = rawCards.map((card) => ({
    ...card,
    endScale: 1.06 - card.distance * 0.07,       // 1.06 / 0.99 / 0.92
    shadowBlur: 34 - card.distance * 6,           // 34 / 28 / 22
    shadowOpacity: 0.3 - card.distance * 0.06,    // 0.30 / 0.24 / 0.18
    dimAmount: card.distance * 0.09,              // 0 / 0.09 / 0.18
    stiffness: 150 - card.distance * 22,          // 150 / 128 / 106
    damping: 19 + card.distance * 2,              // 19 / 21 / 23
    dealDelay: card.distance * 0.1,               // 0 / 0.1 / 0.2
  }));

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full max-w-full flex flex-col justify-between overflow-hidden bg-[#F7F5EE] text-[#15140F] select-none px-6 md:px-12 pt-24 md:pt-28 pb-12"
    >
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
            <h1 className="font-sans font-bold tracking-tight text-[#15140F] text-[11vw] sm:text-[8.5vw] md:text-[7vw] lg:text-[6.5rem] uppercase leading-[0.9]">
              CRAFTING
            </h1>
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
            style={{ perspective: 1400 }}
          >
            <motion.div
              ref={stackRef}
              onMouseMove={handlePointerMove}
              onMouseLeave={handlePointerLeave}
              className="relative w-[180px] sm:w-[240px] md:w-[280px] aspect-[3/4] mx-auto"
              style={{
                rotateX: springTiltX,
                rotateY: springTiltY,
                transformStyle: 'preserve-3d',
              }}
            >
              {heroCards.map((card, idx) => (
                <HeroCardItem key={idx} card={card} fanProgress={fanProgress} reduceMotion={reduceMotion} />
              ))}
            </motion.div>

            {/* Ambient contact shadow grounding the stack */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 bottom-[-14px] h-4 w-[70%] rounded-full bg-[#15140F] blur-xl pointer-events-none"
              style={{ opacity: useTransform(fanProgress, [0, 1], [0.08, 0.16]) }}
            />
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