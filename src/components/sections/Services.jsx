import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { SERVICES_DATA } from '../../constants/data';

function DesktopServiceTextBlock({ service, idx, onActive }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest >= 0 && latest <= 1) {
      onActive(idx);
    }
  });

  return (
    <div
      ref={ref}
      className="min-h-[75vh] flex flex-col justify-center py-16 sm:py-24 border-b border-[#D9D0BC]/40 last:border-b-0"
    >
      <h3 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#15140F] mb-6 leading-[1.1]">
        {idx + 1}. {service.title}
      </h3>

      <p className="text-base sm:text-lg text-[#15140F] font-normal leading-[1.7] max-w-lg font-sans">
        {service.description}
      </p>
    </div>
  );
}

export function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const mobileSectionRef = useRef(null);

  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileSectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(mobileScrollProgress, 'change', (latest) => {
    const index = Math.min(
      SERVICES_DATA.length - 1,
      Math.floor(latest * SERVICES_DATA.length)
    );
    if (index !== mobileActiveIndex) setMobileActiveIndex(index);
  });

  const activeService = SERVICES_DATA[activeIdx] || SERVICES_DATA[0];

  return (
    <section id="services" className="bg-[#F7F5EE] text-[#15140F]">

      {/* MOBILE VIEW ONLY (< lg) — Restored previous mobile horizontal sliding deck layout */}
      <div ref={mobileSectionRef} className="block lg:hidden relative py-12">
        <div className="sticky top-60 z-30 bg-[#F7F5EE] pt-8 pb-4 overflow-hidden border-b border-[#D9D0BC]/50">
          <div className="w-full pl-6 overflow-hidden">
            <motion.div
              className="flex items-center gap-2"
              animate={{ x: `calc(-${mobileActiveIndex * 83}vw - ${mobileActiveIndex * 8}px)` }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {SERVICES_DATA.map((service, idx) => {
                const isActive = idx === mobileActiveIndex;
                return (
                  <motion.div
                    key={service.id}
                    onClick={() => setMobileActiveIndex(idx)}
                    animate={{
                      scale: isActive ? 1 : 0.85,
                    }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative shrink-0 w-[83vw] aspect-[4/3] rounded-xl overflow-hidden bg-[#E4DBC6] border border-[#D9D0BC] cursor-pointer origin-left transition-shadow duration-500 ${isActive ? 'ring-1 ring-[#A6813F]/40 shadow-xl' : ''
                      }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover luxury-image-filter"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-10 pt-10 pb-16">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className="flex flex-col items-start justify-center border-b border-[#D9D0BC]/60 pb-8 last:border-b-0"
            >
              <span className="text-xs font-mono text-[#A6813F] font-semibold mb-2 block tracking-widest">
                0{idx + 1} — {service.subtitle || 'OUR SERVICE'}
              </span>

              <h2 className="font-serif text-3xl font-normal leading-[1.12] text-[#15140F] mb-4">
                {service.title}
              </h2>

              <p className="text-sm text-[#4B473E] font-normal leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW ONLY (≥ lg) — Minimal 2-column natural scroll text + sticky image */}
      <div className="hidden lg:block py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">

            {/* Left Column: Natural Vertical Scroll Text List */}
            <div className="lg:col-span-6 flex flex-col">
              {SERVICES_DATA.map((service, idx) => (
                <DesktopServiceTextBlock
                  key={service.id}
                  service={service}
                  idx={idx}
                  onActive={(index) => setActiveIdx(index)}
                />
              ))}
            </div>

            {/* Right Column: Sticky Morphing Image Frame */}
            <div className="lg:col-span-6 sticky top-28 h-[75vh] w-full">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#E4DBC6] shadow-2xl border border-[#D9D0BC]/80 relative">
                {SERVICES_DATA.map((service, idx) => (
                  <motion.img
                    key={service.id}
                    src={service.image}
                    alt={service.title}
                    initial={false}
                    animate={{
                      opacity: idx === activeIdx ? 1 : 0,
                      scale: idx === activeIdx ? 1 : 1.05,
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover luxury-image-filter absolute inset-0 pointer-events-none"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}