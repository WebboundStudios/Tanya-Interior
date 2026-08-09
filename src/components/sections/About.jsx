import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_DATA, SITE_BRAND } from '../../constants/data';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#F7F5EE] text-[#15140F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Overlapping Editorial Imagery + Founder Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start w-full pr-0 lg:pr-8"
          >
            {/* Images Wrapper */}
            <div className="relative flex items-center justify-start w-full pr-8 sm:pr-12 md:pr-16 mb-8 sm:mb-10">
              {/* Main Tall Portrait Image (Principal Designer) */}
              <div className="w-[72%] sm:w-[68%] aspect-[3/4] overflow-hidden rounded-xs bg-[#E4DBC6] shadow-xl border border-[#D9D0BC]/60 relative z-0">
                <img
                  src={ABOUT_DATA.principalImage || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"}
                  alt={ABOUT_DATA.principalName || "Principal Designer"}
                  className="w-full h-full object-cover luxury-image-filter"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlapping Inset Square Architectural Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[48%] sm:w-[45%] aspect-square overflow-hidden rounded-xs bg-[#E4DBC6] shadow-2xl z-10 border-4 border-[#F7F5EE]"
              >
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Architectural Interior Detail"
                  className="w-full h-full object-cover luxury-image-filter"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Quote & Founder Details placed directly below images */}
            {ABOUT_DATA.quote && (
              <blockquote className="border-l-2 border-[#A6813F] pl-4 py-1 text-sm sm:text-base italic text-[#4A453E] max-w-lg mb-4">
                "{ABOUT_DATA.quote}"
              </blockquote>
            )}

            {(ABOUT_DATA.principalName || ABOUT_DATA.principalTitle) && (
              <div className="flex flex-col pl-4">
                <span className="font-serif font-medium text-lg text-[#15140F]">
                  {ABOUT_DATA.principalName}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#6B6459] mt-0.5 font-medium">
                  {ABOUT_DATA.principalTitle}
                </span>
              </div>
            )}
          </motion.div>

          {/* Right Column: Editorial Narrative Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left lg:pl-6 self-start pt-2"
          >
            {/* Subtitle Badge */}
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#6B6459] font-medium block mb-6">
              {ABOUT_DATA.subtitle || "WHO WE ARE"}
            </span>

            {/* Main Editorial Text Paragraph */}
            <p className="text-lg sm:text-xl md:text-2xl font-normal leading-[1.65] text-[#15140F] max-w-xl font-sans">
              {ABOUT_DATA.headline}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
