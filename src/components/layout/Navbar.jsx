import React, { useState, useEffect } from 'react';
import { SITE_BRAND } from '../../constants/data';
import { StaircaseMenu } from './StaircaseMenu';
import { TextRoll } from '../ui/TextRoll';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [staircaseMenuOpen, setStaircaseMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F5EE]/95 backdrop-blur-md py-3.5 shadow-sm border-b border-[#D9D0BC]/60'
            : 'bg-[#F7F5EE]/80 backdrop-blur-sm py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <motion.a href="#hero" className="flex items-center gap-2.5 group cursor-pointer" initial="initial" whileHover="hovered">
            {SITE_BRAND.logoImage ? (
              <img
                src={SITE_BRAND.logoImage}
                alt={SITE_BRAND.name}
                className="h-8 md:h-9 w-auto object-contain rounded-xs"
              />
            ) : (
              <div className="w-5 h-5 flex items-center justify-center text-[#15140F]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5 h-5">
                  <path d="M3 21V9l9-7 9 7v12H3z" />
                  <path d="M9 21V12h6v9" />
                </svg>
              </div>
            )}
            <span className="font-sans font-extrabold text-lg tracking-wider uppercase text-[#15140F]">
              <TextRoll>{SITE_BRAND.name || 'TT INTERIORS'}</TextRoll>
            </span>
          </motion.a>




          {/* Right Action Menu Button (2 Horizontal Lines Icon) */}
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
              aria-label="Open Fullscreen Staircase Menu"
            >
              <div className="flex flex-col gap-1.5 w-6 items-end">
                <span className="w-6 h-[2px] bg-[#15140F]" />
                <span className="w-4 h-[2px] bg-[#15140F]" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Staircase Overlay Menu */}
      <StaircaseMenu
        isOpen={staircaseMenuOpen}
        onClose={() => setStaircaseMenuOpen(false)}
      />
    </>
  );
}