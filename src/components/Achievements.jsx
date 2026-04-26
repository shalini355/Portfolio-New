import React, { useEffect, useRef, useState } from 'react';

const achievements = [
  { id: 1, title: "AWS Certifications", issuer: "Amazon Web Services (AWS)", date: "Aug 2025" },
  { id: 2, title: "J.P. Morgan - Investment Banking Job Simulation", issuer: "Forage", date: "Jul 2025" },
  { id: 3, title: "Deloitte Australia - Cyber Job Simulation", issuer: "Forage", date: "Jun 2025" },
  { id: 4, title: "Prompt Design in Vertex AI Skill Badge", issuer: "Google", date: "Apr 2025" },
  { id: 5, title: "Responsive Web Design", issuer: "freeCodeCamp", date: "Dec 2024" },
  { id: 6, title: "Certificate of Participation in Unstop's Got Latent", issuer: "Unstop", date: "Dec 2024" },
  { id: 7, title: "Certificate of Participation in TATA Crucible Campus Quiz 2024", issuer: "Unstop", date: "Sep 2024" },
  { id: 8, title: "Career Essentials in Generative AI", issuer: "Microsoft & LinkedIn", date: "Aug 2024" },
  { id: 9, title: "Certified React (Basic)", issuer: "HackerRank", date: "2024" }
];

function TimelineItem({ item, index }) {
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

  // Alternate left and right for desktop
  const isLeft = index % 2 === 0;

  return (
    <div className="flex flex-col md:flex-row relative w-full mb-12 last:mb-0">
      {/* Glowing Active Dot */}
      <div 
        ref={dotRef}
        className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full top-6 transform -translate-x-[7px] md:-translate-x-1/2 transition-all duration-700 z-10 ${
          isDotActive 
            ? 'bg-[#C9A84C] shadow-[0_0_15px_#C9A84C,0_0_40px_rgba(201,168,76,0.8)] scale-125' 
            : 'bg-[rgba(201,168,76,0.3)] shadow-[0_0_5px_rgba(201,168,76,0.1)] scale-100'
        }`}
      />
      
      {/* Content */}
      <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 text-left'}`}>
        <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-gold/30 transition-colors duration-500 group">
          <span className="text-gold text-xs font-display tracking-widest mb-2 block">{item.date}</span>
          <h3 className="text-xl text-textMain font-medium mb-1">{item.title}</h3>
          <h4 className="text-textMuted/70 text-sm">{item.issuer}</h4>
        </div>
      </div>
    </div>
  );
}

export default function Achievements() {
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
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="py-20 md:py-32 w-full relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display text-gold mb-16 uppercase tracking-widest text-center">
          Licenses & Certifications
        </h2>
        
        <div className="max-w-4xl mx-auto relative pt-4 pb-4">
          {/* Base Line with Glow Overlay */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-[rgba(201,168,76,0.15)] transform md:-translate-x-1/2 overflow-hidden">
            <div 
              ref={fillRef}
              className="absolute top-0 left-0 w-full"
              style={{ 
                height: '0%', 
                background: '#C9A84C',
                boxShadow: '0 0 8px #C9A84C, 0 0 20px rgba(201,168,76,0.5)',
                transition: 'height 0.1s linear'
              }}
            />
          </div>
          
          <div className="relative">
            {achievements.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
