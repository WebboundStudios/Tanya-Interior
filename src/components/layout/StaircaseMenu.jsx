import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { SITE_BRAND } from '../../constants/data';

const columnsCount = 5;

const columnVariants = {
  initial: {
    scaleY: 0,
  },
  animate: (i) => ({
    scaleY: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.06,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: (i) => ({
    scaleY: 0,
    transition: {
      duration: 0.45,
      delay: (columnsCount - 1 - i) * 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const contentVariants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const navItems = [
  { name: 'HOME', href: '#hero' },
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'SERVICES', href: '#services' },
  { name: 'PROCESS', href: '#process' },
  { name: 'CONTACT', href: '#contact' },
];

export function StaircaseMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          className="fixed inset-0 z-50 overflow-hidden select-none"
        >
          {/* Alternating Up/Down Animated Column Backdrop */}
          <div className="absolute inset-0 flex w-full h-full pointer-events-none z-0">
            {[...Array(columnsCount)].map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={columnVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`w-1/5 h-full bg-[#20201E] ${
                  i % 2 === 0 ? 'origin-top' : 'origin-bottom'
                } border-r border-white/5 last:border-r-0`}
              />
            ))}
          </div>

          {/* Center Vertical Hairline Divider matching reference design */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 pointer-events-none z-10"
          />

          {/* Fullscreen Navbar Content Overlay */}
          <motion.div
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative z-20 w-full h-full flex flex-col justify-between px-6 md:px-12 pt-8 pb-10 text-[#E8E6E1]"
          >
            {/* Top Bar: Brand Logo & Close Button */}
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
              <a
                href="#hero"
                onClick={onClose}
                className="flex items-center gap-2.5 group cursor-pointer"
              >
                {SITE_BRAND.logoImage ? (
                  <img
                    src={SITE_BRAND.logoImage}
                    alt={SITE_BRAND.name}
                    className="h-8 sm:h-9 w-auto object-contain rounded-xs"
                  />
                ) : (
                  <div className="w-5 h-5 flex items-center justify-center text-[#E8E6E1]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5 h-5">
                      <path d="M3 21V9l9-7 9 7v12H3z" />
                      <path d="M9 21V12h6v9" />
                    </svg>
                  </div>
                )}
                <span className="font-sans font-extrabold text-lg sm:text-xl tracking-wider uppercase text-[#E8E6E1]">
                  {SITE_BRAND.name || 'TT INTERIORS'}
                </span>
              </a>

              <button
                onClick={onClose}
                className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#E8E6E1] hover:opacity-70 transition-opacity px-4 py-2 border border-white/20 rounded-full cursor-pointer"
              >
                <span>CLOSE</span>
                <X size={16} />
              </button>
            </div>

            {/* Center Stacked Navigation Links */}
            <div className="max-w-3xl mx-auto w-full flex-1 flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 md:space-y-5 my-auto py-4">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.25 + idx * 0.04 }}
                  className="font-sans font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#E8E6E1] hover:text-white hover:scale-[1.02] transition-all duration-300 cursor-pointer block leading-tight"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Bottom Social Footer Links matching reference layout */}
            <div className="max-w-7xl mx-auto w-full flex items-center justify-center gap-8 sm:gap-14 md:gap-20 text-[11px] sm:text-xs uppercase tracking-[0.2em] font-medium text-[#A6A49F]">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                TWITTER - X
              </a>
              <a
                href="https://www.instagram.com/tanya.interiors/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                INSTAGRAM
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LINKEDIN
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
