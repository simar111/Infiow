import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effects for layered images
  const yBgPrimary = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yBgSecondary = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yBgTertiary = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 80,
        mass: 0.6
      }
    }
  };

  const flowVariants = {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3.5,
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
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <FloatingAbstractShapes />
        
        {/* Primary Floating Image Card (Smaller) */}
        <motion.div 
          className="absolute right-4 sm:right-8 top-1/4 w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 h-96 sm:h-[28rem] md:h-[30rem] overflow-hidden"
          style={{ 
            y: yBgPrimary,
            scale: scaleImage
          }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div 
            className="relative w-full h-full bg-white/90 border-2 border-green-100/60 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm"
            whileHover={{ 
              scale: 1.04, 
              boxShadow: "0 25px 50px rgba(0, 166, 118, 0.25)"
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 1, 0]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-white/60 via-white/30 to-transparent z-10" />
            <img 
              src="./Hero2.jpg"
              alt="Creative team working"
              className="w-full h-full object-cover object-center"
              loading="eager"
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 40vw"
            />
            <div className="absolute bottom-3 left-3 bg-green-600/40 text-green-800 text-xs sm:text-sm px-2.5 py-1 rounded-full font-medium">
              Innovative Design
            </div>
          </motion.div>
        </motion.div>

        {/* Secondary Floating Image Card (Repositioned) */}
        <motion.div 
          className="absolute right-8 sm:right-16 top-1/6 w-20 sm:w-36 md:w-44 lg:w-52 h-20 sm:h-36 md:h-44 lg:h-52 hidden sm:block"
          style={{ y: yBgSecondary }}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div 
            className="relative w-full h-full bg-white/85 border border-teal-100/60 rounded-xl shadow-xl overflow-hidden backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(0, 128, 128, 0.2)"
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, -1.5, 0]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <img 
              src="./HeroSecondary.png"
              alt="Abstract design element"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Tertiary Floating Image Card (Repositioned) */}
        <motion.div 
          className="absolute right-12 sm:right-24 top-3/5 w-16 sm:w-24 md:w-28 lg:w-32 h-16 sm:h-24 md:h-28 lg:h-32 hidden md:block"
          style={{ y: yBgTertiary }}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.5 }}
        >
          <motion.div 
            className="relative w-full h-full bg-white/80 border border-green-100/40 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm"
            whileHover={{ 
              scale: 1.06,
              boxShadow: "0 10px 20px rgba(0, 166, 118, 0.15)"
            }}
            animate={{
              y: [0, -8, 0],
              rotate: [0, 1.5, 0]
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <img 
              src="./HeroTertiary.png"
              alt="Decorative element"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-2xl w-full"
          style={{ y: yText }}
        >
          {/* Premium Badge */}
          <motion.div 
            variants={textVariants}
            className="mb-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full">
              <span className="text-sm font-medium text-green-800">Innovation Partners</span>
            </div>
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            variants={textVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight"
          >
            <span className="block">Transform Ideas</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500 filter drop-shadow-sm">
              Into Reality
            </span>
          </motion.h1>
          
          {/* Tagline */}
          <motion.div 
            variants={textVariants}
            className="mb-10 max-w-lg"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
              Where <motion.span 
                className="relative inline-block text-green-600 font-medium"
                variants={flowVariants}
              >
                <span className="relative z-10">Vision</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400/70 rounded-full" />
              </motion.span> Meets Execution
            </h2>
            <p className="mt-4 text-gray-500 text-sm sm:text-base">
              We craft digital experiences that elevate brands and drive measurable results through strategic design and cutting-edge technology.
            </p>
          </motion.div>
          
          {/* Enhanced CTA Section */}
          <motion.div 
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <motion.button
              whileHover={{ 
                y: -3,
                boxShadow: "0 10px 25px -5px rgba(0, 166, 118, 0.3)"
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350 }}
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-green-600 to-teal-500 text-white font-medium rounded-lg text-base sm:text-lg flex items-center gap-2"
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
      </div>

      {/* Floating Elements */}
      <FloatingDots />
      
      {/* Scroll Indicator */}
      <ScrollIndicator />
      
      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 z-20">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-600">10+</div>
              <div className="text-xs sm:text-sm text-gray-500">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-600">200+</div>
              <div className="text-xs sm:text-sm text-gray-500">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-600">98%</div>
              <div className="text-xs sm:text-sm text-gray-500">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-600">50+</div>
              <div className="text-xs sm:text-sm text-gray-500">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Background Components
const FloatingAbstractShapes = () => {
  return (
    <>
      <motion.div
        className="absolute left-4 sm:left-8 top-1/5 w-36 sm:w-48 h-36 sm:h-48 rounded-full bg-green-100/60 filter blur-2xl"
        animate={{
          y: [0, 25, 0],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute left-1/4 bottom-1/5 w-56 sm:w-72 h-56 sm:h-72 rounded-xl bg-teal-100/40 filter blur-3xl rotate-6"
        animate={{
          y: [0, -40, 0],
          rotate: [6, 9, 6]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute right-1/5 top-1/4 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-green-200/30 filter blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -25, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    </>
  );
};

const FloatingDots = () => {
  return (
    <>
      <motion.div
        className="absolute left-1/3 top-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-400/90"
        animate={{
          y: [0, -50, 0],
          x: [0, 25, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-teal-400/90"
        animate={{
          y: [0, 35, 0],
          x: [0, -20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    </>
  );
};

const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-30"
      initial={{ opacity: 0, y: 25 }}
      animate={{ 
        opacity: [0, 1, 0],
        y: [25, 15, 0]
      }}
      transition={{
        duration: 2.8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: 1.2
      }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-px h-16 sm:h-20 bg-gradient-to-t from-green-400 to-transparent"
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
        <motion.span
          className="text-xs sm:text-sm text-green-600 mt-2 tracking-widest font-medium"
          animate={{
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          EXPLORE MORE
        </motion.span>
      </div>
    </motion.div>
  );
};

export default HeroSection;