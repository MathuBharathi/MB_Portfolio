import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mbPortrait from '../assets/MB.jpeg';
import { personalData, heroData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.2 });

      tl.to('.hero-bounding-elem', {
        y: '0%',
        duration: 1.6,
        stagger: 0.2,
        ease: 'expo.out'
      })
      .to('.hero-profile-img', {
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out'
      }, '-=1.2');

      // Subtle background scroll transition
      gsap.to(heroRef.current, {
        backgroundColor: '#1a1818',
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom 40%',
          scrub: 1
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="w-full bg-[#dadada] transition-colors duration-300 relative">
      <div id="landing-page" className="flex flex-col justify-between">
        <div className="profile">
          <div className="bounding elem1">
            <h1 className="hero-boundingelem hero-bounding-elem">
              <span className="black-text">MATHU</span>
            </h1>
          </div>
          <div className="profile-img">
            <img 
              src={mbPortrait} 
              alt={`${personalData.displayName} — ${personalData.primaryTitle}`} 
              className="hero-profile-img opacity-0 transition-opacity"
            />
          </div>
        </div>

        <div className="bounding elem2">
          <h1 className="hero-boundingelem hero-bounding-elem">
            FULL STACK <span className="hidden md:inline">DEV.</span>
          </h1>
        </div>

        <div className="bounding elem3 md:hidden">
          <h1 className="hero-boundingelem hero-bounding-elem">
            DEV.
          </h1>
        </div>

        {/* Hero CTAs & Supporting Tagline */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-4 border-t border-[#1a1818]/15">
          <p className="font-['Gilroy'] text-sm md:text-base text-[#555] max-w-xl leading-relaxed m-0">
            {heroData.headline}
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a 
              href="#projects"
              className="px-6 py-2.5 bg-[#1a1818] text-[#dadada] font-['Fjalla_One'] text-sm tracking-wider uppercase hover:bg-[#777] transition-all rounded-none"
            >
              VIEW PROJECTS
            </a>
            <a 
              href={personalData.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-[#1a1818] text-[#1a1818] font-['Fjalla_One'] text-sm tracking-wider uppercase hover:bg-[#1a1818] hover:text-[#dadada] transition-all rounded-none"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;