import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useScramble } from '../utils/textScrambler';
import MagneticButton from './MagneticButton';

export default function ContactAurora() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const title = useScramble('Initiate Contact', isInView);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden flex flex-col items-center justify-center">
      {/* Aurora CSS Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, #C9A84C, #0A0A08, #1A1A08, #C9A84C)',
          backgroundSize: '400% 400%',
          animation: 'aurora 15s ease infinite',
          filter: 'blur(80px)'
        }}
      />
      
      <div className="relative z-10 w-full max-w-lg mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl text-textMain font-display tracking-widest uppercase mb-6">{title}</h2>
        <p className="text-textMuted font-body mb-6">
          I am actively seeking Software Development and AI Internship opportunities. If you are working on exciting ideas or innovative products, I would love to contribute and collaborate.
        </p>
        <p className="text-textMuted font-body mb-16">
          Reach me directly via email or explore my work online.
        </p>
        
        <div className="flex flex-col items-center gap-8 text-center glass-card p-10 rounded-2xl w-full border border-white/5 hover:border-gold/30 transition-colors duration-500">
          <div className="flex flex-col gap-2">
            <h3 className="text-gold font-display uppercase tracking-widest text-sm"><i className="fa-solid fa-envelope mr-2"></i>Email</h3>
            <a href="mailto:syhalini@gmail.com" target="_blank" rel="noopener noreferrer" className="text-textMain hover:text-gold transition-colors text-lg">syhalini@gmail.com</a>
          </div>
          
          <div className="w-1/2 h-px bg-white/5"></div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-gold font-display uppercase tracking-widest text-sm"><i className="fa-brands fa-github mr-2"></i>GitHub</h3>
            <a href="https://github.com/shalini355" target="_blank" rel="noopener noreferrer" className="text-textMain hover:text-gold transition-colors text-lg">github.com/shalini355</a>
          </div>
          
          <div className="w-1/2 h-px bg-white/5"></div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-gold font-display uppercase tracking-widest text-sm"><i className="fa-brands fa-linkedin mr-2"></i>LinkedIn</h3>
            <a href="https://linkedin.com/in/shalini-yadav-355abc" target="_blank" rel="noopener noreferrer" className="text-textMain hover:text-gold transition-colors text-lg">linkedin.com/in/shalini-yadav-355abc</a>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes aurora {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}} />
    </section>
  );
}
