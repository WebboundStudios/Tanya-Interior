import React, { useRef, useEffect } from 'react';
import { PILLARS_DATA } from '../../constants/data';
import { TextRoll } from '../ui/TextRoll';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Define bento grid layout — each card gets a unique span configuration
const BENTO_LAYOUT = [
  { colSpan: 'md:col-span-7', rowSpan: 'md:row-span-2', height: 'min-h-[280px] md:min-h-[520px]', size: 'large' },
  { colSpan: 'md:col-span-5', rowSpan: 'md:row-span-1', height: 'min-h-[240px] md:min-h-[250px]', size: 'small' },
  { colSpan: 'md:col-span-5', rowSpan: 'md:row-span-1', height: 'min-h-[240px] md:min-h-[250px]', size: 'small' },
  { colSpan: 'md:col-span-12', rowSpan: 'md:row-span-1', height: 'min-h-[240px] md:min-h-[280px]', size: 'wide' },
];

export function WhyChooseUs() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const headlineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline text reveal
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Staggered card reveals with different origins based on position
      cardRefs.current.forEach((card, idx) => {
        if (!card) return;

        const directions = [
          { x: -60, y: 40, rotate: -2 },   // large — slide from left
          { x: 60, y: 0, rotate: 1.5 },     // small top-right — slide from right
          { x: 60, y: 30, rotate: -1 },     // small bottom-right — slide from right
          { x: 0, y: 60, rotate: 0 },       // wide bottom — slide from below
        ];

        const dir = directions[idx] || { x: 0, y: 60, rotate: 0 };

        gsap.fromTo(
          card,
          { x: dir.x, y: dir.y, opacity: 0, rotate: dir.rotate, scale: 0.95 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            rotate: 0,
            scale: 1,
            duration: 1,
            delay: idx * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why"
      className="py-24 md:py-36 bg-[#F8F6F2] overflow-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <motion.div
            initial="initial"
            whileHover="hovered"
            className="flex items-center gap-3 mb-5 cursor-pointer"
          >
            <span className="w-8 h-[1.5px] bg-[#A6813F]" />
            <span className="text-xs uppercase tracking-[0.35em] text-[#8C6D46] font-semibold">
              <TextRoll>{PILLARS_DATA.subtitle}</TextRoll>
            </span>
          </motion.div>

          <h2
            ref={headlineRef}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-wide text-[#1F1F1F] max-w-5xl"
          >
            {PILLARS_DATA.headline}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 auto-rows-auto">
          {PILLARS_DATA.items.map((item, idx) => {
            const layout = BENTO_LAYOUT[idx] || BENTO_LAYOUT[0];

            return (
              <div
                key={item.number}
                ref={(el) => (cardRefs.current[idx] = el)}
                className={`
                  group relative overflow-hidden rounded-2xl cursor-pointer
                  ${layout.colSpan} ${layout.rowSpan} ${layout.height}
                `}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent transition-opacity duration-500 group-hover:from-black/85 group-hover:via-black/45" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">



                  {/* Bottom Row — Title + Description */}
                  <div>
                    {/* Accent line */}
                    <div className="w-8 h-[1.5px] bg-[#D4B07A]/60 mb-4 transition-all duration-700 origin-left group-hover:w-14 group-hover:bg-[#D4B07A]" />

                    <h3 className={`font-serif font-normal leading-snug tracking-wide text-white mb-0 transition-all duration-500 group-hover:text-[#F2EFE9] ${
                      layout.size === 'large'
                        ? 'text-2xl sm:text-3xl md:text-4xl'
                        : layout.size === 'wide'
                        ? 'text-xl sm:text-2xl md:text-3xl'
                        : 'text-xl sm:text-2xl'
                    }`}>
                      {item.title}
                    </h3>

                    {/* Description — slides up on hover */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <div className="overflow-hidden">
                        <p className={`opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-light leading-relaxed text-white/75 pt-3 ${
                          layout.size === 'large' || layout.size === 'wide'
                            ? 'text-sm sm:text-base max-w-md'
                            : 'text-xs sm:text-sm max-w-xs'
                        }`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover glow border overlay */}
                <div className="absolute inset-0 z-20 rounded-2xl border-2 border-transparent group-hover:border-[#D4B07A]/25 transition-colors duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}