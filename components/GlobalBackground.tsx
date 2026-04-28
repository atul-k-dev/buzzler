'use client';

import React, { useEffect, useState } from 'react';
import DarkVeil from './DarkVeil';
import { useTheme } from 'next-themes';

export default function GlobalBackground() {
  const [show, setShow] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      const threshold = hero ? hero.offsetHeight * 0.5: window.innerHeight * 0.5;
      if (window.scrollY > threshold) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLight = resolvedTheme === 'light';

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full h-[600px] z-[1] pointer-events-none rotate-180 transition-all duration-1000 ease-in-out ${
        show 
          ? (isLight ? 'translate-y-0 opacity-40' : 'translate-y-0 opacity-60') 
          : 'translate-y-12 opacity-0'
      } ${isLight ? 'filter invert mix-blend-darken' : ''}`}
    >
      <DarkVeil
        hueShift={240}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={2.5}
        scanlineFrequency={0}
        warpAmount={2}
      />
    </div>
  );
}
