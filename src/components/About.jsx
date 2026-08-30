import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import mbPortrait from '../assets/MB.jpeg';
import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';
import mongoImage from '../assets/about/mongodb.png';
import { personalData, aboutData } from '../data/portfolioData';

const About = () => {
  const aboutRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  // Scroll-driven physical hanging physics for the lanyard + ID card assembly
  const cardY = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [-90, 0, 15, 50]);
  const cardRotate = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [-6, -2.5, 3, -1]);
  const cardRotateY = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [-8, 0, 6, 0]);
  const cardScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.93, 1, 1, 0.96]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.25, 0.85, 1], [0.3, 1, 1, 0.6]);

  // Subtle parallax for decorative stars
  const starY = useTransform(scrollYProgress, [0, 1], [-15, 25]);

  return (
    <section ref={aboutRef} id="about" className="bg-[#ff2a2a] pt-20 pb-36 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Decorative 4-Point Accent Stars */}
      <motion.div style={{ y: starY }} className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 text-black/25 z-10 pointer-events-none">
        <svg className="w-12 h-12 md:w-16 md:h-16 fill-current" viewBox="0 0 24 24">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
        </svg>
      </motion.div>
      <motion.div style={{ y: starY }} className="absolute right-6 md:right-16 top-16 text-black/25 z-10 pointer-events-none">
        <svg className="w-12 h-12 md:w-16 md:h-16 fill-current" viewBox="0 0 24 24">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-16 items-center relative z-20">
        
        {/* Left Side: Restored Shajith ID Card / Lanyard Composition with Scroll-Driven Motion */}
        <div className="flex flex-col items-center w-full md:w-[340px] shrink-0 mt-2 md:mt-0">
          
          <motion.div 
            style={{ 
              y: cardY, 
              rotate: cardRotate, 
              rotateY: cardRotateY, 
              scale: cardScale, 
              opacity: cardOpacity,
              transformPerspective: 1000 
            }}
            className="relative flex flex-col items-center w-full origin-top"
          >
            
            {/* Lanyard Fabric Strap (Hanging down from section top) */}
            <div className="w-7 h-28 bg-[#1a1a1a] shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] z-0 rounded-b-sm border-x border-black/40"></div>
            
            {/* Metal Ring Hardware */}
            <div className="w-8 h-8 rounded-full border-4 border-gray-300 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 shadow-md -mt-2 z-10 flex items-center justify-center">
              <div className="w-3 h-3 bg-black/60 rounded-full"></div>
            </div>
            
            {/* Metal Carabiner Clip Connector */}
            <div className="w-6 h-10 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-500 rounded-md border border-gray-300 shadow-[0_4px_12px_rgba(0,0,0,0.3)] -mt-1 z-10 flex flex-col items-center justify-between p-1">
              <div className="w-4 h-1.5 bg-gray-600 rounded-sm"></div>
              <div className="w-3 h-3 border-2 border-gray-700 rounded-full"></div>
            </div>
            
            {/* Hanging ID Card Frame */}
            <div className="bg-[#141414] border-2 border-black/60 w-full max-w-[310px] rounded-[2.2rem] p-4 shadow-[0_30px_70px_rgba(0,0,0,0.55)] relative z-20 hover:rotate-0 transition-transform duration-500 -mt-2">
              
              {/* Card Grommet Tab */}
              <div className="absolute -top-3 left-1/2 w-14 h-5 bg-[#141414] rounded-t-xl transform -translate-x-1/2 flex justify-center items-center border-t border-x border-black/60">
                <div className="w-6 h-2 bg-black rounded-full shadow-inner border border-gray-700"></div>
              </div>

              {/* Upper Profile Image Container */}
              <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl bg-gray-900 border border-white/10 shadow-inner">
                <img 
                  src={mbPortrait} 
                  alt={`${personalData.displayName} — ${personalData.primaryTitle}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Lower White Label Panel */}
              <div className="bg-white rounded-2xl p-4 mt-3 text-center shadow-md border border-gray-100">
                <h4 className="text-gray-900 font-['Fjalla_One'] text-lg md:text-xl tracking-wider uppercase m-0 leading-tight">
                  {personalData.name}
                </h4>
                <p className="text-[#ff2a2a] font-['Fjalla_One'] text-[11px] md:text-xs tracking-widest uppercase mt-1.5 font-bold leading-snug m-0">
                  FULL STACK DEVELOPER & BIOMEDICAL ENGINEER
                </p>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Right Side: Bio & Identity Content */}
        <div className="flex-1 text-white mt-4 md:mt-0 relative z-20">
          
          <div className="mb-4">
            <span className="inline-block border border-white/40 text-white font-['Fjalla_One'] text-xs px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
              ABOUT ME
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl text-white font-['Fjalla_One'] mb-6 uppercase tracking-wide">
            HELLO!
          </h2>

          <p className="text-lg md:text-xl font-['Gilroy'] mb-6 leading-relaxed max-w-3xl text-red-50">
            I'm <span className="text-black font-bold mx-1 tracking-wide uppercase">{personalData.name}</span>, a Full Stack Developer and Biomedical Engineer dedicated to building modern, responsive, and user-focused digital experiences.
          </p>

          <p className="text-base font-['Gilroy'] mb-4 leading-relaxed text-red-100/90">
            {aboutData.paragraph1}
          </p>

          <p className="text-base font-['Gilroy'] mb-4 leading-relaxed text-red-100/90">
            {aboutData.paragraph2}
          </p>

          <p className="text-base font-['Gilroy'] mb-8 leading-relaxed text-red-100/90">
            {aboutData.paragraph3}
          </p>

          {/* Tech Row */}
          <div className="flex items-center gap-8 pt-2">
            <img src={reactImage} alt="React" className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            <img src={nodeImage} alt="Node.js" className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            <img src={mongoImage} alt="MongoDB" className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" />
          </div>
        </div>

      </div>

      {/* Responsive Organic Curvy Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg 
          className="relative block w-full h-16 md:h-24 lg:h-28 text-white fill-current" 
          viewBox="0 0 1440 160" 
          preserveAspectRatio="none"
        >
          <path d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,64C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default About;
