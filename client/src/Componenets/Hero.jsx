import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import { Globe, Palette, Rocket, Code } from 'lucide-react';

const ModernHeroWith3DCarousel = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Enhanced parallax effects with smoother transitions
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "10%"], {
    clamp: false
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "8%"], {
    clamp: false
  });
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.03], {
    clamp: false
  });

  // Animation variants with more fluid motions
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        ease: [0.16, 1, 0.3, 1]
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
        damping: 15,
        stiffness: 100,
        mass: 0.5,
        restDelta: 0.001
      }
    }
  };

  const floating = {
    hidden: { y: 0 },
    visible: {
      y: [0, -15, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    }
  };

  // Carousel data with 4 optimized cards
  const carouselCards = [
    {
      id: "web-dev",
      category: "SERVICE: Web Development",
      title: "Modern Web Solutions",
      icon: <Code className="w-5 h-5" />,
      preview: "Cutting-edge websites that drive results",
      content: "We build responsive, high-performance websites using the latest technologies.",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "brand-design",
      category: "SERVICE: Brand Design",
      title: "Strategic Visual Identity",
      icon: <Palette className="w-5 h-5" />,
      preview: "Memorable branding that stands out",
      content: "We create cohesive brand systems that communicate your values.",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "digital-marketing",
      category: "SERVICE: Digital Marketing",
      title: "Data-Driven Campaigns",
      icon: <Rocket className="w-5 h-5" />,
      preview: "Maximize your ROI with precision targeting",
      content: "Our marketing strategies leverage analytics to deliver results.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "video-production",
      category: "SERVICE: Video Production",
      title: "Cinematic Storytelling",
      icon: <Globe className="w-5 h-5" />,
      preview: "Engaging video content that captivates",
      content: "We produce professional videos that boost engagement.",
      imageUrl: "https://images.unsplash.com/photo-1574717024453-3545a7d5bb2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Enhanced 3D Carousel state and logic
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const timeoutRef = useRef(null);
  
  // Reset timeout for auto-rotation
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  // Enhanced auto-rotation with cleanup and direction control
  useEffect(() => {
    if (!isAutoRotating) return;
    
    resetTimeout();
    
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(prev => (prev + direction + carouselCards.length) % carouselCards.length);
    }, 5000);

    return () => resetTimeout();
  }, [activeIndex, isAutoRotating, direction, carouselCards.length]);

  const handleCardClick = (index) => {
    // Determine direction for animation
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsAutoRotating(false);
    
    // Restart auto-rotation after delay
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIsAutoRotating(true);
      setDirection(1); // Reset to forward direction
    }, 10000);
  };

  // Improved carousel card positioning
  const getCardPosition = (index) => {
    const position = (index - activeIndex) % carouselCards.length;
    const absPosition = Math.abs(position);
    const isActive = index === activeIndex;
    
    // Calculate positions with direction awareness
    let xPos = position * 120;
    let rotateY = position * 15;
    
    // If we're at the end and looping, adjust positions
    if (position === carouselCards.length - 1 && direction === 1) {
      xPos = -120;
      rotateY = -15;
    } else if (position === -carouselCards.length + 1 && direction === -1) {
      xPos = 120;
      rotateY = 15;
    }
    
    return {
      x: xPos,
      y: isActive ? 0 : 30,
      scale: isActive ? 1 : 0.85,
      opacity: isActive ? 1 : 0.7 - (absPosition * 0.2),
      rotateY: rotateY,
      zIndex: isActive ? 10 : carouselCards.length - absPosition
    };
  };

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
        
        {/* Subtle Grid Pattern */}
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
              whileHover={{ 
                y: -3,
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(5, 150, 105, 0.2)"
              }}
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

        {/* Enhanced 3D Carousel - Right Side */}
        <motion.div 
          className="lg:w-1/2 relative w-full h-full max-w-2xl mx-auto lg:mx-0"
          style={{ 
            y: yImage,
            scale: scaleImage
          }}
        >
          {/* Carousel Container */}
          <div className="relative w-full h-[500px] perspective-1000">
            {/* Carousel Cards with AnimatePresence for smoother transitions */}
            <AnimatePresence custom={direction}>
              {carouselCards.map((card, index) => {
                const isActive = index === activeIndex;
                const position = getCardPosition(index);
                
                return (
                  <motion.div
                    key={`${card.id}-${activeIndex}`} // Change key to force re-render on activeIndex change
                    className={`absolute w-full h-full rounded-3xl overflow-hidden border-2 border-white shadow-2xl cursor-pointer ${
                      isActive ? 'z-10' : 'z-0'
                    }`}
                    initial={false}
                    animate={position}
                    custom={direction}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 300, 
                      damping: 25,
                      mass: 0.7,
                      restDelta: 0.001
                    }}
                    onClick={() => handleCardClick(index)}
                    whileHover={{ 
                      scale: isActive ? 1.02 : 0.9,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Card Content */}
                    <div className="relative w-full h-full">
                      <img
                        src={card.imageUrl}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        loading={isActive ? "eager" : "lazy"}
                        width={600}
                        height={400}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Card Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-green-300">
                            {card.icon}
                          </div>
                          <span className="text-xs font-medium tracking-wider">
                            {card.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">{card.title}</h3>
                        <p className="text-sm opacity-90">{card.preview}</p>
                      </div>
                      
                      {/* Active Card Indicator */}
                      {isActive && (
                        <motion.div 
                          className="absolute top-4 right-4 w-3 h-3 rounded-full bg-green-400 shadow-lg"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            
            {/* Enhanced Carousel Controls */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {carouselCards.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-green-500' : 'bg-white/50'
                  }`}
                  onClick={() => handleCardClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  whileHover={{ scale: 1.5 }}
                  animate={{
                    width: index === activeIndex ? 24 : 8
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              ))}
            </div>
          </div>
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
                transition={{ 
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
              >
                <div className="text-xl sm:text-2xl font-bold text-green-600">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
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
              height: [16, 24, 16],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
          <motion.span 
            className="text-xs text-green-600 mt-2 tracking-widest font-medium"
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            SCROLL TO EXPLORE
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
};

export default ModernHeroWith3DCarousel;