import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Campus Ambassador",
    company: "Unstop",
    type: "Internship",
    duration: "Aug 2025 – Feb 2026",
    mode: "Remote",
    skills: ["Networking", "Soft Skills", "Communication"]
  },
  {
    role: "Indigo Squad Member",
    company: "Mood Indigo, IIT Bombay",
    type: "Volunteer",
    duration: "Aug 2024 – Dec 2024",
    mode: "On-site",
    skills: ["Soft Skills", "Teamwork"]
  },
  {
    role: "Campus Ambassador",
    company: "Rendezvous IITD",
    type: "Internship",
    duration: "Sep 2024 – Oct 2024",
    mode: "Remote",
    skills: ["Soft Skills"]
  }
];

function ExperienceItem({ item, index }) {
  const dotRef = useRef(null);
  const [isDotActive, setIsDotActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsDotActive(entry.isIntersecting);
      });
    }, { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" });

    if (dotRef.current) observer.observe(dotRef.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div className="flex flex-col md:flex-row relative w-full mb-12 last:mb-0">
      {/* Active Dot */}
      <div 
        ref={dotRef}
        className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full top-8 transform -translate-x-[7px] md:-translate-x-1/2 transition-all duration-700 z-10 ${
          isDotActive 
            ? 'bg-[#C9A84C] shadow-[0_0_15px_#C9A84C,0_0_40px_rgba(201,168,76,0.8)] scale-125' 
            : 'bg-[rgba(201,168,76,0.3)] shadow-[0_0_5px_rgba(201,168,76,0.1)] scale-100'
        }`}
      />
      
      {/* Content */}
      <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16 text-left'}`}>
        <motion.div 
          initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="card group"
        >
          <span className="label block mb-2 text-[10px] tracking-[2px]">{item.duration}</span>
          <h3 className="text-xl text-textMain font-display group-hover:text-gold transition-colors">{item.role}</h3>
          <h4 className="text-gold/80 font-body text-sm mb-4 uppercase tracking-[2px]">{item.company}</h4>
          
          <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'justify-start'}`}>
            {item.skills.map(skill => (
              <span key={skill} className="text-[9px] font-body text-textMuted/60 uppercase tracking-[1px] border border-gold/10 px-2 py-1 rounded-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Leadership() {
  const sectionRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const fill = fillRef.current;
      if (!section || !fill) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      const scrolled = Math.max(0, windowHeight - sectionTop);
      const percent = Math.min(100, (scrolled / sectionHeight) * 100);
      
      fill.style.height = `${percent}%`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="leadership" ref={sectionRef} className="w-full bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <span className="label block mb-4 tracking-[4px]">CAREER PATH ✦</span>
          <h2 className="text-textMain">Professional Experience</h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Base Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-[rgba(201,168,76,0.15)] transform md:-translate-x-1/2 overflow-hidden">
            <div 
              ref={fillRef}
              className="absolute top-0 left-0 w-full bg-[#C9A84C] shadow-[0_0_8px_#C9A84C,0_0_20px_rgba(201,168,76,0.5)]"
              style={{ height: '0%', transition: 'height 0.1s linear' }}
            />
          </div>
          
          <div className="relative">
            {experiences.map((item, index) => (
              <ExperienceItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
