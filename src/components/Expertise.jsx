import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { expertiseData } from '../data/portfolioData';

const TagCard = ({ number, title, text, className, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;

    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;

    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.6, y: 35, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
      className={`w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.01] transition-all duration-500 z-10 ${className} ${
        isActive ? 'bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]' : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* Hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>

      {/* Inner container */}
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-6 flex flex-col justify-between transition-colors duration-500 ${
        isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'
      }`}>
        <div>
          <span className={`text-xl mb-2 font-serif italic block transition-colors duration-500 ${
            isActive ? 'text-red-200' : 'text-gray-400'
          }`}>
            {number}
          </span>

          <h3 className={`text-xl font-['Fjalla_One'] mb-3 tracking-tight transition-colors duration-500 uppercase ${
            isActive ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h3>

          <p className={`text-xs md:text-sm leading-relaxed font-['Gilroy'] transition-colors duration-500 ${
            isActive ? 'text-red-100' : 'text-gray-600'
          }`}>
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Expertise = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="bg-white pt-24 pb-16 md:pb-20 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:min-h-[2100px]">

        {/* Header Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:absolute top-8 left-0 md:w-[480px] z-20 mb-16 md:mb-0"
        >
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-xs font-['Fjalla_One'] text-gray-600 uppercase mb-6 shadow-sm bg-white tracking-widest">
            My Expertise
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1] mb-6 tracking-tight relative font-['Fjalla_One'] uppercase">
            BUILDING MODERN DIGITAL SOLUTIONS WITH CODE & AI
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-md font-['Gilroy'] leading-relaxed">
            Combining full-stack development, artificial intelligence, and cloud technologies to create scalable and impactful digital experiences.
          </p>
        </motion.div>

        {/* Desktop SVG Animated Dashed Line */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[2100px] pointer-events-none z-0"
          viewBox="0 0 1000 2100"
          preserveAspectRatio="none"
        >
          <path
            d="M 680,220 C 400,320 200,450 300,680 C 420,900 780,850 720,1080 C 650,1320 350,1380 450,1650 C 550,1850 620,1980 680,2060"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          <mask id="path-mask">
            <motion.path
              d="M 680,220 C 400,320 200,450 300,680 C 420,900 780,850 720,1080 C 650,1320 350,1380 450,1650 C 550,1850 620,1980 680,2060"
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>

          <path
            d="M 680,220 C 400,320 200,450 300,680 C 420,900 780,850 720,1080 C 650,1320 350,1380 450,1650 C 550,1850 620,1980 680,2060"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
            className="drop-shadow-sm"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="4"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="4"
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">

          {/* Item 01 */}
          <TagCard
            number="01"
            title={expertiseData[0].title}
            text={expertiseData[0].description}
            className="md:absolute md:top-[10px] md:right-[2%] lg:right-[5%] rotate-1 md:rotate-3"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Item 02 */}
          <TagCard
            number="02"
            title={expertiseData[1].title}
            text={expertiseData[1].description}
            className="md:absolute md:top-[420px] md:left-[2%] lg:left-[5%] -rotate-1 md:-rotate-3"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Item 03 */}
          <TagCard
            number="03"
            title={expertiseData[2].title}
            text={expertiseData[2].description}
            className="md:absolute md:top-[830px] md:right-[2%] lg:right-[5%] rotate-1 md:rotate-2"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Item 04 (Full 4-line description) */}
          <TagCard
            number="04"
            title={expertiseData[3].title}
            text={expertiseData[3].description}
            className="md:absolute md:top-[1250px] md:left-[5%] lg:left-[10%] -rotate-1 md:-rotate-2"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Item 05 (Clean 120px visual gap after Card 04) */}
          <TagCard
            number="05"
            title={expertiseData[4].title}
            text={expertiseData[4].description}
            className="md:absolute md:top-[1760px] md:right-[5%] lg:right-[10%] rotate-1 md:rotate-2"
            pathLength={pathLength}
            containerRef={containerRef}
          />

        </div>

      </div>

      {/* Organic Curvy Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg 
          className="relative block w-full h-16 md:h-24 lg:h-28 text-gray-50 fill-current" 
          viewBox="0 0 1440 160" 
          preserveAspectRatio="none"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default Expertise;
