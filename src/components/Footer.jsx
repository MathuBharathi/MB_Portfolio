import React from 'react';
import { personalData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[45vh]">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="flex flex-col gap-1">
          <p className="text-white font-['Fjalla_One'] text-sm tracking-wider uppercase m-0">{personalData.name}</p>
          <p className="text-gray-500 font-['Gilroy'] text-xs m-0">{personalData.supportingIdentity}</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p className="text-gray-400 font-['Gilroy'] text-xs m-0">{personalData.location}</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p className="text-gray-400 font-['Gilroy'] text-xs m-0">Worldwide Available</p>
          <p className="text-gray-500 font-['Gilroy'] text-xs m-0">{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-16 md:py-20 overflow-hidden">
        <h2 className="text-[14vw] md:text-[11vw] leading-none font-['Fjalla_One'] tracking-tighter uppercase select-none text-[#f4f4f4] w-full text-center m-0">
          MATHUBHARATHI
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-end">
        <div className="flex flex-col gap-3">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 font-['Gilroy'] text-xs">Contact</a>
          <p className="text-gray-500 font-['Gilroy'] text-xs m-0">
            &copy; {new Date().getFullYear()} {personalData.displayName}. All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-col gap-2 md:items-center">
          <a href={`mailto:${personalData.email}`} className="underline hover:text-white transition-colors underline-offset-4 font-['Gilroy'] text-xs lowercase">
            {personalData.email}
          </a>
          <a href={`tel:+91${personalData.phone}`} className="hover:text-white transition-colors text-xs font-['Gilroy']">
            {personalData.phoneDisplay}
          </a>
        </div>
        
        <div className="flex items-center gap-6 md:justify-end">
          <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-['Fjalla_One'] text-xs uppercase">
            GitHub
          </a>
          <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-['Fjalla_One'] text-xs uppercase">
            LinkedIn
          </a>
          <a href={personalData.resumePdf} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-['Fjalla_One'] text-xs uppercase">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
