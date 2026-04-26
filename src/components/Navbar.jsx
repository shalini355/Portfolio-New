import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id.toUpperCase();
          setActiveSection(id || 'HOME');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['about', 'projects', 'skills', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0A0A08]/92 backdrop-blur-[12px] py-4 border-b border-gold/10' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo - Far Left */}
        <a href="#" className="flex flex-col items-center group">
          <div className="relative">
            <span className="text-3xl font-display text-gold leading-none">S</span>
            <span className="absolute -top-1 -right-3 text-xs text-gold">+</span>
          </div>
          <span className="text-[10px] tracking-[4px] text-gold uppercase mt-1 font-body">Shalini</span>
        </a>

        {/* Nav Links - Centered */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[12px] tracking-[2px] uppercase transition-all relative group ${
                activeSection === link.name ? 'text-gold' : 'text-textMain/80 hover:text-gold'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-300 ${
                activeSection === link.name ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
          ))}
        </div>

        {/* Call to Action - Far Right */}
        <div className="flex items-center gap-6">
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-6 py-3 border border-gold text-gold text-[11px] tracking-[2px] uppercase hover:bg-gold hover:text-background transition-all duration-500"
          >
            LET'S TALK →
          </a>
          
          {/* Hamburger Menu Toggle */}
          <button 
            className="md:hidden text-gold text-2xl focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#0A0A08]/95 backdrop-blur-xl border-b border-gold/10 overflow-hidden"
          >
            <div className="flex flex-col items-center py-10 gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[14px] tracking-[3px] uppercase text-textMain/80 hover:text-gold transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-8 py-3 border border-gold text-gold text-[12px] tracking-[2px] uppercase hover:bg-gold hover:text-background transition-all"
              >
                LET'S TALK →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
