import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative h-[300px] overflow-hidden rounded-lg border border-gold/10 bg-[#0A0A08]"
    >
      {/* Dark Overlay / Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors duration-500 z-0" />
      
      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
        <span className="text-[10px] tracking-[2px] uppercase text-gold mb-2 font-body">
          {project.tags[0]}
        </span>
        <h3 className="text-textMain font-display text-2xl group-hover:text-gold transition-colors duration-500">
          {project.title}
        </h3>
        
        {/* Hover Reveal Detail */}
        <div className="mt-4 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
          <p className="text-textMuted text-xs leading-relaxed line-clamp-2">
            {project.desc}
          </p>
          <div className="mt-4 flex gap-4">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gold text-[10px] tracking-[2px] uppercase font-body hover:underline"
            >
              View Code →
            </a>
          </div>
        </div>
      </div>

      {/* Gold Border Highlight on Hover */}
      <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/30 transition-all duration-500 rounded-lg pointer-events-none z-30" />
    </motion.div>
  );
};

export default function ProjectCards() {
  const projects = [
    {
      title: "Kai — AI Wellness Assistant",
      desc: "Developed an AI‑powered conversational assistant enabling contextual multilingual conversations using Generative AI APIs.",
      tags: ["AI & Full-Stack"],
      githubLink: "https://github.com/shalini355/AI-agent-Kai"
    },
    {
      title: "Skin Cancer Detection",
      desc: "Built image classification model using HAM10000 dataset for skin lesion prediction using TensorFlow.",
      tags: ["Machine Learning"],
      githubLink: "https://github.com/shalini355/Skin-Cancer-Detector"
    },
    {
      title: "LifeLine Dispatch",
      desc: "A local dispatch simulation built with React, Vite, Express, and Leaflet for real-time ambulance routing.",
      tags: ["Full-Stack Dev"],
      githubLink: "https://github.com/shalini355/LifeLine-Dispatch-Prototype"
    },
    {
      title: "Quiz Buddy Platform",
      desc: "Developed responsive UI supporting multi‑language quizzes and dynamic difficulty levels.",
      tags: ["Web Dev"],
      githubLink: "https://github.com/shalini355/Quiz-Buddy"
    }
  ];

  return (
    <section id="projects" className="w-full bg-background relative py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[40%_60%] gap-20 items-start">
        {/* Left Side: Sticky Text Block */}
        <div className="lg:sticky lg:top-[120px]">
          <span className="label block mb-6 tracking-[4px]">FEATURED PROJECTS ✦</span>
          <h2 className="text-textMain mb-8">Design. Develop. Deploy.</h2>
          <p className="text-textMuted text-lg leading-relaxed mb-10 max-w-sm">
            A selection of projects that demonstrate my ability to bridge the gap between 
            complex AI logic and elegant user experiences.
          </p>
          <a 
            href="https://github.com/shalini355" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gold text-[11px] tracking-[3px] uppercase font-body inline-flex items-center gap-2 group"
          >
            VIEW ALL PROJECTS 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Right Side: 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
