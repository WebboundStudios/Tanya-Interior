import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROCESS_DATA } from '../../constants/data';
import { Compass, PenTool, Wrench, Sparkles } from 'lucide-react';

const STEP_ICONS = [Compass, PenTool, Wrench, Sparkles];

export function Process() {
  // Ref specifically targeting the Cards container
  const cardsRef = useRef(null);

  // Track scroll progress when the cards container enters the viewport
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ['start 85%', 'end 20%'],
  });

  // Fast scroll animation: completes pathLength [0 -> 1] within the first 45% of section scroll
  const pathLength = useTransform(scrollYProgress, [0, 0.45], [0, 1]);

  const steps = PROCESS_DATA.steps || [
    {
      number: "01",
      title: "Understand",
      description: "We begin by understanding your vision, lifestyle, requirements, and practical expectations."
    },
    {
      number: "02",
      title: "Design",
      description: "Our team transforms insights into thoughtful concepts, detailed layouts, material palettes, and 3D visualizations."
    },
    {
      number: "03",
      title: "Execute",
      description: "From vendor coordination and material inspection to site execution and installation, we manage every detail."
    },
    {
      number: "04",
      title: "Deliver",
      description: "A refined, functional, and personalized space designed to inspire and built to last."
    }
  ];

  return (
    <section
      id="process"
      className="bg-grain py-24 md:py-36 bg-[#161616] text-white relative overflow-hidden select-none"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 bg-[#8C6D46]/15 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 bg-[#8C6D46]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24 items-end"
        >
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.35em] text-[#D0C7BC] font-semibold flex items-center gap-3 mb-3">
              {PROCESS_DATA.subtitle || 'WORKING PROCESS'}
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-white max-w-2xl">
              {PROCESS_DATA.headline || 'Our 4-Step Method'}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-xl">
              From initial conceptualization to white-glove turnkey completion, our 4-step architectural methodology ensures total clarity, spatial efficiency, and flawless execution.
            </p>
          </div>
        </motion.div>

        {/* Scroll-Driven SVG Wave Path & Interactive Step Cards (Desktop lg+) */}
        <div ref={cardsRef} className="hidden lg:block relative w-full pt-8 pb-12">
          
          {/* Scroll-animated SVG Wave Path */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg
              viewBox="0 0 1200 400"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
            >
              {/* Background Dashed Guide Line */}
              <path
                d="M 30 140 C 90 140, 110 140, 150 140 C 250 140, 350 40, 450 40 C 550 40, 650 140, 750 140 C 850 140, 950 40, 1050 40 C 1100 40, 1130 40, 1170 40"
                stroke="#8C6D46"
                strokeWidth="4"
                strokeDasharray="8 8"
                strokeLinecap="round"
                fill="none"
                opacity="0.3"
              />

              {/* Fast Animated Foreground Gold Path driven by Scroll */}
              <motion.path
                d="M 30 140 C 90 140, 110 140, 150 140 C 250 140, 350 40, 450 40 C 550 40, 650 140, 750 140 C 850 140, 950 40, 1050 40 C 1100 40, 1130 40, 1170 40"
                stroke="#A6813F"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
                pathLength={pathLength}
              />
            </svg>
          </div>

          {/* 4 Steps Grid overlaying the SVG wave curve */}
          <div className="relative z-10 grid grid-cols-4 gap-6 items-start">
            {steps.map((step, idx) => {
              const Icon = STEP_ICONS[idx % STEP_ICONS.length];
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col items-center text-center group cursor-pointer ${
                    isEven ? 'pt-24' : 'pt-0'
                  }`}
                >
                  {/* Floating Icon Badge on Wave Curve */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#22201E] shadow-xl border border-white/15 flex items-center justify-center text-[#D0C7BC] group-hover:scale-110 group-hover:bg-[#8C6D46] group-hover:text-white group-hover:border-[#8C6D46] transition-all duration-400 z-10 relative">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                    {/* Glowing ring under icon */}
                    <div className="absolute inset-0 bg-[#8C6D46]/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-400" />
                  </div>

                  {/* Step Card Container */}
                  <div className="bg-[#22201E]/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#8C6D46] shadow-xl hover:shadow-[0_20px_50px_-15px_rgba(140,109,70,0.4)] transition-all duration-400 relative overflow-hidden w-full min-h-[220px] flex flex-col justify-between">
                    
                    <div className="relative z-10">
                      <div className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#D0C7BC] mb-2">
                        Phase {step.number}
                      </div>
                      <h3 className="font-sans text-xl md:text-2xl font-normal text-white mb-2 group-hover:text-[#D0C7BC] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Interactive Progress Bar Line */}
                    <div className="w-full h-0.5 bg-white/10 mt-6 relative overflow-hidden rounded-full z-10">
                      <div className="w-0 group-hover:w-full h-full bg-[#8C6D46] transition-all duration-500 ease-out relative" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Flow (sm & md) */}
        <div className="lg:hidden relative pl-6 space-y-10 my-8">
          {/* Vertical scroll progress line */}
          <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-white/10">
            <motion.div
              style={{ scaleY: pathLength, transformOrigin: 'top' }}
              className="w-full h-full bg-[#8C6D46]"
            />
          </div>

          {steps.map((step, idx) => {
            const Icon = STEP_ICONS[idx % STEP_ICONS.length];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative pl-6"
              >
                {/* Node Icon on Timeline */}
                <div className="absolute -left-[25px] top-0 w-12 h-12 rounded-xl bg-[#22201E] border border-white/15 shadow-md flex items-center justify-center text-[#D0C7BC]">
                  <Icon size={20} strokeWidth={2} />
                </div>

                {/* Card Content */}
                <div className="bg-[#22201E]/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-sm relative overflow-hidden">
                  <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D0C7BC] mb-1">
                    Phase {step.number}
                  </div>
                  <h3 className="font-sans text-lg font-medium text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}