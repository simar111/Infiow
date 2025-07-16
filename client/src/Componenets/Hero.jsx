import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Particles from './Particles'; // Custom particles component (see below)

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.6
      }
    }
  };

  const flowVariants = {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #E6FFFB 0%, #FFFFFF 100%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <Particles />
        <WaveAnimation />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-5 z-1"></div>

      {/* Main content */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 sm:px-8 lg:px-12"
      >
        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900"
        >
          Welcome to <span className="text-green-600">Infiow</span>
        </motion.h1>
        
        {/* Tagline with animated "Flow" */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800">
            Where Ideas <motion.span 
              className="inline-block text-green-600"
              variants={flowVariants}
            >Flow</motion.span> into Results
          </h2>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 166, 118, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full text-lg sm:text-xl transition-all duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-green-600 rounded-full mt-2"
              animate={{
                y: [0, 4, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Wave Animation Component
const WaveAnimation = () => {
  return (
    <svg 
      className="absolute bottom-0 left-0 w-full"
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00A676" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#E6FFFB" stopOpacity="0.1" />
        </linearGradient>
        <path 
          id="wave" 
          d="M0,160 C150,200 350,80 500,160 C650,240 850,120 1000,160 C1150,200 1300,120 1440,160 L1440,320 L0,320 Z"
          fill="url(#waveGradient)"
        />
      </defs>
      <motion.path
        d="M0,160 C150,200 350,80 500,160 C650,240 850,120 1000,160 C1150,200 1300,120 1440,160 L1440,320 L0,320 Z"
        fill="url(#waveGradient)"
        initial={{ opacity: 0.3 }}
        animate={{
          d: [
            "M0,160 C150,200 350,80 500,160 C650,240 850,120 1000,160 C1150,200 1300,120 1440,160 L1440,320 L0,320 Z",
            "M0,160 C150,140 350,220 500,160 C650,100 850,220 1000,160 C1150,100 1300,220 1440,160 L1440,320 L0,320 Z"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    </svg>
  );
};

export default HeroSection;