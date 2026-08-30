import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalData, heroData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const fullText = "FULL STACK DEV.";

const Hero = () => {
  const heroRef = useRef(null);

  // Animation states: 'TYPING_FORWARD' | 'STATIC' | 'DELETING_BACKWARD'
  const [animState, setAnimState] = useState('TYPING_FORWARD');
  const [charIndex, setCharIndex] = useState(0); // Starts at 0 to type on initial page load
  const hasLeftHomeRef = useRef(false);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // GSAP Entrance & Scroll Background Effect
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.2 });

      tl.to('.hero-bounding-elem', {
        y: '0%',
        duration: 1.6,
        stagger: 0.2,
        ease: 'expo.out'
      });

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

  // IntersectionObserver to detect when user leaves Home and returns to Home
  useEffect(() => {
    if (!heroRef.current || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // User scrolled away from Home section
            hasLeftHomeRef.current = true;
          } else {
            // User returned to Home section
            if (hasLeftHomeRef.current && animState === 'STATIC') {
              hasLeftHomeRef.current = false;
              setAnimState('DELETING_BACKWARD');
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [animState, prefersReducedMotion]);

  // Typewriter state machine timer logic
  useEffect(() => {
    if (prefersReducedMotion) return;

    let timer;

    if (animState === 'TYPING_FORWARD') {
      if (charIndex < fullText.length) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, 100);
      } else {
        // Finished typing -> Stay STATIC until user leaves & returns
        setAnimState('STATIC');
      }
    } else if (animState === 'DELETING_BACKWARD') {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, 60);
      } else {
        // Reached empty -> Immediately type forward
        setAnimState('TYPING_FORWARD');
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, animState, prefersReducedMotion]);

  const displayedText = prefersReducedMotion ? fullText : fullText.slice(0, charIndex);

  return (
    <section id="home" ref={heroRef} className="w-full bg-[#dadada] transition-colors duration-300 relative">
      <div id="landing-page" className="flex flex-col justify-between">
        <div className="profile">
          <div className="bounding elem1">
            <h1 className="hero-boundingelem hero-bounding-elem">
              <span className="black-text">MATHU</span>
            </h1>
          </div>
        </div>

        <div className="bounding elem2 relative">
          <h1 className="hero-boundingelem hero-bounding-elem relative">
            {/* Invisible placeholder maintaining exact layout dimensions */}
            <span className="opacity-0 pointer-events-none select-none inline-block" aria-hidden="true">
              FULL STACK DEV.
            </span>

            {/* Typewriter text overlay */}
            <span className="red-text absolute left-0 top-0 inline-block whitespace-nowrap">
              {displayedText}
              {!prefersReducedMotion && (
                <span className="typewriter-cursor ml-1">|</span>
              )}
            </span>
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