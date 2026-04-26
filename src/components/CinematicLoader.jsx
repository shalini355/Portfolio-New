import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function CinematicLoader({ onComplete }) {
  const [stage, setStage] = useState(0); 

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),   // Start typing text
      setTimeout(() => setStage(2), 2000),  // Hold text
      setTimeout(() => {
        setStage(3); // Slide up
        setTimeout(onComplete, 1000); // 1000ms slide duration then callback
      }, 3000)
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div 
          exit={{ y: '-100%' }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden"
        >
          <div className="z-10 text-center pointer-events-none">
            <motion.h1 
              className="text-4xl md:text-6xl text-gold font-display tracking-widest uppercase overflow-hidden"
              initial={{ width: 0, borderRight: '2px solid #C9A84C' }}
              animate={{ 
                width: stage >= 1 ? '100%' : '0%', 
                borderRightColor: stage >= 2 ? 'transparent' : '#C9A84C' 
              }}
              transition={{ duration: 1.5, ease: 'linear' }}
              style={{ whiteSpace: 'nowrap', margin: '0 auto' }}
            >
              Shalini Yadav
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
