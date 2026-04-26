import { motion } from 'framer-motion';

const softSkills = [
  { 
    skill: "Communication", 
    level: 90,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )
  },
  { 
    skill: "Team Collaboration", 
    level: 88,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  { 
    skill: "Problem Solving", 
    level: 92,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  { 
    skill: "Leadership", 
    level: 80,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  { 
    skill: "Networking", 
    level: 85,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  { 
    skill: "Time Management", 
    level: 83,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    skill: "Adaptability", 
    level: 87,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  { 
    skill: "Critical Thinking", 
    level: 89,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="soft-skills-section w-full bg-background relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="label block mb-4 tracking-[4px]">BEYOND THE CODE ✦</span>
          <h2 className="text-textMain">Skills that make me human</h2>
        </div>

        <div className="badges-grid">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="skill-badge-wrapper relative"
            >
              {/* Circular Progress Arc */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="rgba(201,168,76,0.1)"
                  strokeWidth="2"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 302" }}
                  whileInView={{ strokeDasharray: `${(skill.level / 100) * 302} 302` }}
                  transition={{ delay: 0.5 + index * 0.08, duration: 1.5, ease: "easeOut" }}
                />
              </svg>

              <div className="skill-badge">
                <div className="skill-icon text-gold/80 mb-2">
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.skill}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .soft-skills-section {
          padding: 100px 80px;
          text-align: center;
        }
        @media (max-width: 768px) {
          .soft-skills-section {
            padding: 80px 24px;
          }
        }
        .badges-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 32px;
          margin-top: 60px;
          max-width: 900px;
          margin-inline: auto;
        }
        .skill-badge-wrapper {
          width: 160px;
          height: 160px;
        }
        .skill-badge {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.15);
          background: rgba(255,255,255,0.02);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          transition: all 0.4s ease;
          cursor: default;
          position: relative;
          z-index: 10;
        }
        .skill-badge:hover {
          border-color: rgba(201,168,76,0.7);
          background: rgba(201,168,76,0.05);
          transform: scale(1.08);
          box-shadow: 0 0 30px rgba(201,168,76,0.15);
        }
        .skill-name {
          font-family: 'Cormorant Garamond', serif;
          color: #F5F0E8;
          font-size: 14px;
          text-align: center;
          line-height: 1.2;
          padding: 0 10px;
        }
        .skill-level {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          color: #C9A84C;
          letter-spacing: 1px;
          margin-top: 2px;
        }
      `}} />
    </section>
  );
}
