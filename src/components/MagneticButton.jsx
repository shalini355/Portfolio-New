import { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function MagneticButton({ children, className, onClick }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const springX = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3; // 0.3 sensitivity
    const y = (clientY - (top + height / 2)) * 0.3;
    springX.set(x);
    springY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    springX.set(0);
    springY.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={`relative overflow-hidden cursor-none ${className}`}
    >
      <span className={`relative z-10 block pointer-events-none transition-colors duration-400 ${isHovered ? 'text-background font-bold' : 'text-gold'}`}>
        {children}
      </span>
      
      {/* Liquid Ripple Fill */}
      <motion.div
        className="absolute inset-x-0 bottom-0 bg-gold rounded-[50%]"
        initial={{ y: '160%', scale: 0.8 }}
        animate={{ 
          y: isHovered ? '0%' : '160%',
          scale: isHovered ? 1.5 : 0.8,
          borderRadius: isHovered ? '0%' : '50%'
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ zIndex: 0, height: '100%' }}
      />
    </motion.button>
  );
}
