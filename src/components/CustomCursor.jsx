import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    // Hide cursor on touch devices or small screens
    if (window.innerWidth <= 768 || 'ontouchstart' in window) {
      return;
    }

    const circle = circleRef.current;
    if (!circle) return;

    const handleMouseMove = (e) => {
      gsap.to(circle, {
        x: e.clientX,
        y: e.clientY,
        ease: 'expo.out',
        duration: 0.6,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="circle" ref={circleRef}>
      <p id="circle-text"></p>
    </div>
  );
};

export default CustomCursor;
