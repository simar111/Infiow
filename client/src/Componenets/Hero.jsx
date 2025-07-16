import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        mass: 0.5
      }
    }
  };

  const flowVariants = {
    hidden: { scale: 1, rotate: 0 },
    visible: {
      scale: [1, 1.08, 1],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    }
  };

  const ctaVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        delay: 0.6
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 30px -5px rgba(0, 166, 118, 0.4)",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15
      }
    },
    tap: {
      scale: 0.98
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section 
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-teal-50 to-white"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <QuantumParticles />
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1/3"
          style={{ y: yBg }}
        >
          <FluidWaves />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white opacity-30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* Headline with subtle shine effect */}
          <motion.h1 
            variants={textVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900"
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 opacity-10 rounded-full filter blur-md" />
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">
                Infiow
              </span>
            </span>
            <motion.span 
              className="block mt-4 text-3xl sm:text-4xl md:text-5xl font-medium text-gray-700"
              variants={textVariants}
            >
              Your Digital Innovation Partner
            </motion.span>
          </motion.h1>
          
          {/* Tagline with elegant divider */}
          <motion.div 
            variants={textVariants}
            className="my-12 relative"
          >
            <div className="absolute left-1/2 top-0 h-px w-32 bg-gradient-to-r from-transparent via-green-400 to-transparent transform -translate-x-1/2 -translate-y-4" />
            <h2 className="text-2xl sm:text-3xl font-light text-gray-600 tracking-wide">
              Where Ideas{' '}
              <motion.span 
                className="relative inline-block text-green-600 font-medium"
                variants={flowVariants}
              >
                <span className="relative z-10">Flow</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 rounded-full opacity-70" />
              </motion.span>{' '}
              into Results
            </h2>
            <div className="absolute left-1/2 bottom-0 h-px w-32 bg-gradient-to-r from-transparent via-teal-400 to-transparent transform -translate-x-1/2 translate-y-4" />
          </motion.div>
          
          {/* Sophisticated CTA Button */}
          <motion.div variants={textVariants} className="relative">
            <motion.button
              variants={ctaVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative px-10 py-4 bg-gradient-to-br from-green-600 to-teal-500 text-white font-medium rounded-lg text-lg sm:text-xl tracking-wide overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Begin Your Journey
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-br from-green-700 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-0 border border-green-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            <div className="absolute -bottom-4 left-1/2 w-4/5 h-4 bg-green-400/20 rounded-full filter blur-md transform -translate-x-1/2 scale-90" />
          </motion.div>
        </motion.div>

        {/* Elegant Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [20, 10, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 1.8
          }}
        >
          <div className="flex flex-col items-center">
            <div className="w-px h-12 bg-gradient-to-t from-green-400 to-transparent" />
            <span className="text-xs text-green-600 mt-2 tracking-widest">EXPLORE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Quantum Particle System
const QuantumParticles = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particleCount = useRef(0);
  const resizeTimeout = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas dimensions
    const setDimensions = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particleCount.current = Math.min(Math.floor(width * height / 15000), 120);
    };
    
    setDimensions();

    // Particle class with quantum-inspired behavior
    class QuantumParticle {
      constructor() {
        this.reset();
        this.size = Math.random() * 2.5 + 0.5;
        this.baseHue = Math.random() * 60 + 150; // Green/teal spectrum
        this.hueVariation = Math.random() * 20;
        this.saturation = 70 + Math.random() * 20;
        this.lightness = 50 + Math.random() * 20;
        this.quantumState = Math.random() * Math.PI * 2;
        this.quantumSpeed = Math.random() * 0.02 + 0.01;
        this.entanglementGroup = Math.floor(Math.random() * 3);
      }
      
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = Math.random() * 1 - 0.5;
        this.vy = Math.random() * 1 - 0.5;
        this.life = 0;
        this.maxLife = Math.random() * 500 + 300;
        this.oscillationPhase = Math.random() * Math.PI * 2;
      }
      
      update(particles, time) {
        // Quantum state evolution
        this.quantumState += this.quantumSpeed;
        
        // Entanglement behavior - particles in same group influence each other
        if (this.entanglementGroup !== undefined) {
          const entangledParticles = particles.filter(p => 
            p !== this && p.entanglementGroup === this.entanglementGroup
          );
          
          if (entangledParticles.length > 0) {
            const avgX = entangledParticles.reduce((sum, p) => sum + p.x, 0) / entangledParticles.length;
            const avgY = entangledParticles.reduce((sum, p) => sum + p.y, 0) / entangledParticles.length;
            
            const dx = avgX - this.x;
            const dy = avgY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 300) {
              const force = 0.0005 * (300 - distance);
              this.vx += dx * force;
              this.vy += dy * force;
            }
          }
        }
        
        // Apply quantum fluctuations
        this.vx += Math.sin(this.quantumState) * 0.02;
        this.vy += Math.cos(this.quantumState * 1.3) * 0.02;
        
        // Apply velocity with damping
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.985;
        this.vy *= 0.985;
        
        // Pulsing effect
        this.sizePulse = Math.sin(time * 0.002 + this.oscillationPhase) * 0.3 + 1;
        
        // Life cycle
        this.life++;
        if (this.life > this.maxLife || 
            this.x < -100 || this.x > width + 100 || 
            this.y < -100 || this.y > height + 100) {
          this.reset();
        }
      }
      
      draw(ctx, time) {
        // Calculate current color with subtle hue variation
        const currentHue = this.baseHue + Math.sin(time * 0.001 + this.quantumState) * this.hueVariation;
        const alpha = 0.2 + Math.sin(this.life * 0.02) * 0.1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * this.sizePulse, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${currentHue}, ${this.saturation}%, ${this.lightness}%, ${alpha})`;
        ctx.fill();
      }
    }
    
    // Initialize particles
    const particles = Array.from({ length: particleCount.current }, () => new QuantumParticle());
    
    // Animation loop
    const animate = (time) => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update(particles, time);
        particle.draw(ctx, time);
      });
      
      // Draw connections between particles
      drawQuantumConnections(ctx, particles, time);
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Draw quantum entanglement connections
    const drawQuantumConnections = (ctx, particles, time) => {
      ctx.lineWidth = 0.6;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          
          // Only connect particles in the same entanglement group
          if (p1.entanglementGroup === p2.entanglementGroup) {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 250) {
              const opacity = 0.3 * (1 - distance / 250);
              const hue = (p1.baseHue + p2.baseHue) / 2;
              
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${opacity})`;
              ctx.stroke();
            }
          }
        }
      }
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Handle resize with debounce
    const handleResize = () => {
      clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(() => {
        setDimensions();
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout.current);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

// Fluid Wave Background Component
const FluidWaves = () => {
  return (
    <svg 
      className="w-full h-full"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fluidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00A676" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#00A676" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#E6FFFB" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,192 C360,96 720,320 1080,192 C1440,64 1440,320 1440,320 L1440,320 L0,320 Z"
        fill="url(#fluidGradient)"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          d: [
            "M0,192 C360,96 720,320 1080,192 C1440,64 1440,320 1440,320 L1440,320 L0,320 Z",
            "M0,192 C360,320 720,64 1080,192 C1440,320 1440,64 1440,64 L1440,320 L0,320 Z",
            "M0,160 C360,280 720,40 1080,160 C1440,280 1440,40 1440,40 L1440,320 L0,320 Z",
            "M0,192 C360,96 720,320 1080,192 C1440,64 1440,320 1440,320 L1440,320 L0,320 Z"
          ]
        }}
        transition={{
          d: { duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
          opacity: { duration: 2 }
        }}
      />
    </svg>
  );
};

export default HeroSection;