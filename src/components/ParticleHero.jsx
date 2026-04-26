import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useScramble } from '../utils/textScrambler';
import MagneticButton from './MagneticButton';
import profileImg from '../assets/profile.jpg';

export default function ParticleHero() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const scrambledTagline = useScramble('Full-Stack Developer & AI Enthusiast', isInView);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let particlesArray;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      init();
    });

    const mouse = { x: undefined, y: undefined, radius: 150 };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    class Particle {
      constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.density = (Math.random() * 30) + 1;
      }

      draw() {
        ctx.fillStyle = 'rgba(201, 168, 76, 1)'; // Solid gold color for glowing dots
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        // Add a slight glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(201, 168, 76, 0.8)';
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;

        if (mouse.x !== undefined && mouse.y !== undefined) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            const maxDistance = mouse.radius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = (forceDirectionX * force * this.density);
            let directionY = (forceDirectionY * force * this.density);

            this.x -= directionX;
            this.y -= directionY;
          }
        }

        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      // Removed w < 768 check so particles appear on all devices
      const numberOfParticles = Math.min((w * h) / 6000, 200);
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2.5) + 1; // Slightly larger for better visibility
        let x = (Math.random() * ((w - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((h - size * 2) - (size * 2)) + size * 2);
        let dx = (Math.random() - 0.5) * 1;
        let dy = (Math.random() - 0.5) * 1;
        particlesArray.push(new Particle(x, y, dx, dy, size));
      }
    }

    let animationFrameId;
    function animate() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 w-full h-full" />

      <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 w-full">
        <div>
          <span className="text-gold font-display text-2xl italic block mb-4">Hi, my name is</span>
          <h1 className="text-6xl md:text-8xl font-display font-medium text-textMain mb-6">Shalini Yadav.</h1>
          <h2 className="text-2xl md:text-4xl font-body font-medium text-textMuted mb-6 h-12 uppercase tracking-wide">{scrambledTagline}</h2>
          <p className="text-lg text-textMuted max-w-lg mb-12 leading-relaxed font-body">
            Computer Science undergraduate (2023–2027) specializing in Full‑Stack Development and AI‑powered applications. Passionate about creating intelligent, user‑centric systems by integrating Generative AI into production‑ready applications.
          </p>
          <div className="flex gap-6 mt-4 relative z-20 pointer-events-auto">
            <a href="https://linkedin.com/in/shalini-yadav-355abc" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center text-textMain hover:bg-gold hover:text-background hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(201,168,76,0.15)] hover:shadow-[0_0_25px_rgba(201,168,76,0.4)]">
              <i className="fa-brands fa-linkedin-in text-xl"></i>
            </a>
            <a href="https://github.com/shalini355" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center text-textMain hover:bg-gold hover:text-background hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(201,168,76,0.15)] hover:shadow-[0_0_25px_rgba(201,168,76,0.4)]">
              <i className="fa-brands fa-github text-xl"></i>
            </a>
          </div>
        </div>

        {/* Right side: Profile Photo */}
        <div className="hidden md:flex justify-center items-center relative">
          <motion.div
            animate={{
              borderRadius: [
                "30% 70% 70% 30% / 30% 30% 70% 70%",
                "50% 50% 33% 67% / 55% 27% 73% 45%",
                "30% 70% 70% 30% / 30% 30% 70% 70%"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-[28rem] h-[28rem] bg-gradient-to-tr from-gold to-transparent opacity-20 blur-3xl absolute z-0"
          />
          <div className="photo-wrapper z-10">
            <img
              src={profileImg}
              alt="Shalini Yadav"
              className="profile-circle"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
