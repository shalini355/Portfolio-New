import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  // Outer ring physics
  const springX = useSpring(0, { damping: 25, stiffness: 120, mass: 0.5 });
  const springY = useSpring(0, { damping: 25, stiffness: 120, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX - 16); // offset by radius
      springY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isVisible, springX, springY]);

  // If mobile/touch device, don't show custom cursor
  const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (isTouch) {
    document.body.style.cursor = 'auto';
    return null;
  }

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[9999] opacity-0 transition-opacity duration-300"
        style={{
          transform: `translate3d(${mousePosition.x - 4}px, ${mousePosition.y - 4}px, 0)`,
          opacity: isVisible ? 1 : 0
        }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border border-gold/60 rounded-full pointer-events-none z-[9998]"
        style={{
          x: springX,
          y: springY,
          opacity: isVisible ? 1 : 0
        }}
      />
    </>
  );
}
