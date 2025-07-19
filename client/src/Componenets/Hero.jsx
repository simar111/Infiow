import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, useTransform, useScroll } from 'framer-motion';

const ModernHero = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const floating = {
    hidden: { y: 0 },
    visible: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
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
      className="relative w-full min-h-screen overflow-hidden bg-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Gradient Blobs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-green-100 to-teal-100 opacity-40 blur-3xl"
          variants={floating}
          animate={controls}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-teal-50 to-green-50 opacity-30 blur-3xl"
          variants={floating}
          animate={controls}
          transition={{ delay: 0.5 }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-24 pt-24 pb-16 lg:py-0">
        {/* Text Content - Left Side */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
          className="lg:w-1/2 flex flex-col items-start"
          style={{ y: yText }}
        >
          <motion.div variants={item} className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-green-100/80 rounded-full backdrop-blur-sm border border-green-200/50">
              <span className="text-sm font-medium text-green-800">Innovation Partners</span>
            </div>
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            <span className="block">Transform Ideas</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">
              Into Reality
            </span>
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg"
          >
            Where <span className="font-medium text-green-600">Vision</span> Meets Execution
          </motion.p>
          
          <motion.p 
            variants={item}
            className="text-gray-500 mb-10 max-w-lg"
          >
            We craft digital experiences that elevate brands and drive measurable results through strategic design and cutting-edge technology.
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
          >
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3.5 bg-gradient-to-r from-green-600 to-teal-500 text-white font-medium rounded-lg text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-green-200/50 transition-all"
            >
              Get Started
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
            
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                Trusted by 500+ brands
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Content - Right Side */}
        <motion.div 
          className="lg:w-1/2 relative w-full h-full max-w-2xl mx-auto lg:mx-0"
          style={{ 
            y: yImage,
            scale: scaleImage
          }}
        >
          {/* Main Image with Floating Effect */}
          <motion.div
            className="relative w-full aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0],
              rotate: [0, 1, -1, 0]
            }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: {
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              },
              rotate: {
                duration: 12,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              }
            }}
          >
            <img
              src="./Hero2.jpg"
              alt="Creative team working"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            {/* Floating Badge */}
            <motion.div
              className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-800">Innovative Design</span>
            </motion.div>
          </motion.div>

          {/* Secondary Floating Element */}
          <motion.div
            className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hidden sm:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
              rotate: [0, -2, 2, 0]
            }}
            transition={{
              opacity: { delay: 0.5, duration: 0.8 },
              x: { delay: 0.5, duration: 0.8 },
              y: {
                delay: 1,
                duration: 7,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              },
              rotate: {
                delay: 1,
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              }
            }}
          >
            <img
              src="./HeroSecondary.png"
              alt="Abstract design element"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-20 bg-white/90 backdrop-blur-md border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "200+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Team Members" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="text-xl sm:text-2xl font-bold text-green-600">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Only on desktop */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [20, 10, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        <div className="flex flex-col items-center">
          <motion.div
            className="w-px h-16 bg-gradient-to-t from-green-400 to-transparent"
            animate={{
              height: [16, 24, 16]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
          <span className="text-xs text-green-600 mt-2 tracking-widest font-medium">
            SCROLL TO EXPLORE
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default ModernHero;