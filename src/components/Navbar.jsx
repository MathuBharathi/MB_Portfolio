import React, { useState, useEffect } from 'react';
import { personalData } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', tag: 'home', href: '#home' },
    { name: 'About', tag: 'about', href: '#about' },
    { name: 'Expertise', tag: 'expertise', href: '#expertise' },
    { name: 'Skills', tag: 'skill', href: '#skills' },
    { name: 'Projects', tag: 'project', href: '#projects' },
    { name: 'Certifications', tag: 'certificate', href: '#certifications' },
    { name: 'Contact', tag: 'contact', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav 
        className={`fixed top-0 left-0 w-full h-[4.5vw] min-h-[60px] z-50 px-6 md:px-[6vw] flex items-center justify-between transition-colors duration-300 ${
          isScrolled 
            ? 'bg-[#dadada]/90 backdrop-blur-md shadow-sm text-[#1a1818]' 
            : 'bg-[#dadada] text-[#1a1818]'
        }`}
      >
        {/* Brand Logo */}
        <a href="#home" className="font-['Fjalla_One'] text-xl md:text-2xl tracking-wider text-[#1a1818] uppercase">
          MATHUBHARATHI <span className="text-[#ff2a2a]">.</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-[2vw] m-0 p-0 list-none">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="underlineB text-[#777] hover:text-[#1a1818] uppercase font-['Fjalla_One'] text-[1.1vw] tracking-wider transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href={personalData.resumePdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-[1.6vw] py-[0.4vw] bg-[#dadada] text-[#1a1818] border border-[#777] hover:bg-[#1a1818] hover:text-[#dadada] uppercase font-['Fjalla_One'] text-[1vw] tracking-wider transition-all duration-200 inline-block"
            >
              MY CV
            </a>
          </li>
        </ul>

        {/* Mobile Menu Trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden font-['Fjalla_One'] text-base tracking-widest text-[#1a1818] uppercase focus:outline-none"
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </nav>

      {/* Mobile Drawer Menu Overlay */}
      <div 
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#1a1818] z-40 transition-all duration-500 overflow-hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full h-full pt-24 px-8 pb-12 flex flex-col justify-between items-center text-center">
          <div className="flex flex-col gap-4 w-full">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-['Fjalla_One'] text-xl sm:text-2xl uppercase text-[#dadada] hover:text-white transition-colors tracking-widest py-1"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="w-full flex flex-col items-center gap-4 border-t border-[#777]/30 pt-6">
            <a 
              href={personalData.resumePdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-['Fjalla_One'] text-base text-[#dadada] border border-[#dadada] px-8 py-2 uppercase tracking-widest"
            >
              MY CV
            </a>
            <p className="text-xs text-[#777] font-['Gilroy'] tracking-wider m-0">
              &copy; Copyright 2026 {personalData.displayName}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;