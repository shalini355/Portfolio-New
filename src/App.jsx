import { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import CinematicLoader from './components/CinematicLoader';
import Navbar from './components/Navbar';
import ParticleHero from './components/ParticleHero';
import AboutMe from './components/AboutMe';
import ProjectCards from './components/ProjectCards';
import Skills from './components/Skills';
import Education from './components/Education';
import Leadership from './components/Leadership';
import SoftSkills from './components/SoftSkills';
import Achievements from './components/Achievements';
import ContactAurora from './components/ContactAurora';
import ScrollReveal from './components/ScrollReveal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence>
        {loading && <CinematicLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navbar />

          <SmoothScroll>
            <main className="min-h-screen overflow-x-hidden bg-background">
              <ParticleHero />
              
              <ScrollReveal>
                <div id="about">
                  <AboutMe />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div id="projects">
                  <ProjectCards />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div id="skills">
                  <Skills />
                </div>
              </ScrollReveal>
              
              <ScrollReveal>
                <Education />
              </ScrollReveal>
              
              <ScrollReveal>
                <Leadership />
              </ScrollReveal>

              <ScrollReveal>
                <SoftSkills />
              </ScrollReveal>

              <ScrollReveal>
                <Achievements />
              </ScrollReveal>
              
              <ScrollReveal>
                <div id="contact">
                  <ContactAurora />
                </div>
              </ScrollReveal>
              
              <footer className="py-12 text-center border-t border-gold/10 flex flex-col items-center gap-6 bg-[#0A0A08]">
                <div className="flex gap-8 text-textMuted">
                  <a href="mailto:syhalini@gmail.com" className="hover:text-gold transition-colors tracking-[2px] text-[10px] uppercase font-body">Email</a>
                  <a href="https://linkedin.com/in/shalini-yadav-355abc" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors tracking-[2px] text-[10px] uppercase font-body">LinkedIn</a>
                  <a href="https://github.com/shalini355" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors tracking-[2px] text-[10px] uppercase font-body">GitHub</a>
                </div>
                <div className="text-textMuted font-body text-[10px] uppercase tracking-[4px] opacity-60">
                  &copy; 2025 Shalini Yadav &mdash; Digital Experiences
                </div>
              </footer>
            </main>
          </SmoothScroll>
        </>
      )}
    </>
  );
}

export default App;
