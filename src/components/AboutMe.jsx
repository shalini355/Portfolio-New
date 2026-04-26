import React from 'react';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section id="about" className="w-full relative overflow-hidden bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-20 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="label block mb-6 tracking-[4px]">PERSONAL PHILOSOPHY ✦</span>
            <h2 className="text-textMain mb-10 leading-[1.2]">
              I believe great software is a <span className="gold-italic">blend of logic and art.</span>
            </h2>
            
            <p className="text-textMuted text-lg leading-relaxed mb-8">
              As a Computer Science student at Pranveer Singh Institute of Technology, I’ve dedicated my 
              journey to mastering the art of full-stack engineering and its convergence with AI. 
              My goal isn't just to write code, but to engineer experiences that feel alive.
            </p>
            
            <p className="text-textMuted text-lg leading-relaxed mb-12">
              Currently specialized in React, Next.js, and Node.js, I bridge the gap between 
              technical complexity and intuitive design. Every pixel and every line of code 
              is an opportunity to create something premium.
            </p>

            <div className="grid grid-cols-2 gap-10 border-t border-gold/10 pt-10">
              <div>
                <span className="text-4xl font-display text-gold mb-2 block">7.6</span>
                <span className="text-[10px] tracking-[2px] uppercase text-textMuted/60 font-body">Current CGPA</span>
              </div>
              <div>
                <span className="text-4xl font-display text-gold mb-2 block">2027</span>
                <span className="text-[10px] tracking-[2px] uppercase text-textMuted/60 font-body">Graduation Year</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Professional Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-[400px] glass-card rounded-2xl relative group overflow-hidden"
          >
             {/* A stylized placeholder image or graphic */}
             <div className="absolute inset-0 bg-gradient-to-tr from-background to-[#1a1a24] opacity-80 z-10"></div>
             <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-48 h-48 border border-gold/30 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center shadow-[0_0_15px_rgba(201,168,76,0.1)]">
                   <div className="w-32 h-32 border border-gold/50 rounded-full animate-[spin_15s_linear_reverse_infinite] shadow-[0_0_20px_rgba(201,168,76,0.2)]"></div>
                </div>
             </div>
             <div className="absolute inset-0 flex items-center justify-center z-30">
               <span className="text-gold font-display text-xl uppercase tracking-[0.3em]">Code & Create</span>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
