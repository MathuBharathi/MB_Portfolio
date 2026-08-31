import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import logoImg from '../assets/logo.png';

const Preloader = () => {
  const [isFinished, setIsFinished] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsFinished(true);
        }
      });

      tl.to('.loader3-elem', {
        delay: 0.3,
        y: '0%',
        duration: 1,
        ease: 'expo.out',
        stagger: 0.2
      })
      .to('.loader3', {
        delay: 0.8,
        height: '0vh',
        duration: 0.9,
        ease: 'power2.inOut',
        borderRadius: '0 0 50% 50%'
      })
      .to('.loader2', {
        height: '0vh',
        duration: 0.9,
        ease: 'power2.inOut',
        delay: -0.4,
        borderRadius: '0 0 50% 50%'
      })
      .to('.loader1', {
        height: '0vh',
        duration: 0.9,
        ease: 'power2.inOut',
        delay: -0.4,
        borderRadius: '0 0 50% 50%'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (isFinished) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-999999">
      {/* Panel 1 (Bottom layer) */}
      <div className="loader1 fixed top-0 left-0 w-full h-screen bg-[#1a1818] z-1000 overflow-hidden"></div>

      {/* Panel 2 (Middle layer) */}
      <div className="loader2 fixed top-0 left-0 w-full h-screen bg-[#777] z-1001 overflow-hidden"></div>

      {/* Panel 3 (Top layer with Content) */}
      <div className="loader3 fixed top-0 left-0 w-full h-screen bg-[#dadada] z-1002 flex items-center justify-center gap-4 overflow-hidden pointer-events-auto">
        <div className="bounding border-r-2 border-[#1a1818] pr-4 overflow-hidden">
          <img 
            src={logoImg} 
            alt="Logo" 
            className="loader3-elem w-10 md:w-14 transform translate-y-full block" 
          />
        </div>
        <div className="bounding overflow-hidden">
          <p className="loader3-elem text-[#777] uppercase text-lg md:text-2xl tracking-widest font-['Fjalla_One'] font-normal transform translate-y-full m-0">
            Portfolio of <span className="text-[#1a1818]">MATHUBHARATHI A</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
