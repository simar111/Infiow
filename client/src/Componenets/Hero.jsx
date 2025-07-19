import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { motion, useAnimation, useInView, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import { Globe, Palette, Rocket, Code, ArrowRight, Play, Eye, Users, Award, Clock, Sparkles, Zap } from 'lucide-react';

const GreenThemedModernHero = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Enhanced parallax effects with smoother performance
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const rotateBackground = useTransform(scrollYProgress, [0, 1], [0, 8]);

  // Optimized carousel data with green theme variations
  const carouselCards = useMemo(() => [
    {
      id: "web-dev",
      category: "WEB DEVELOPMENT",
      title: "Modern Web Solutions",
      icon: <Code className="w-6 h-6" />,
      preview: "Lightning-fast, responsive websites built with cutting-edge technology",
      content: "We create high-performance web applications using React, Next.js, and modern frameworks that deliver exceptional user experiences.",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: { projects: "200+", satisfaction: "99%", speed: "<2s" },
      color: "from-[#00A676] to-[#00C9A7]",
      bgGradient: "from-[#00A676]/10 to-[#00C9A7]/10",
      accentColor: "text-[#00A676]",
      darkAccent: "bg-[#008F5D]"
    },
    {
      id: "brand-design",
      category: "BRAND DESIGN",
      title: "Strategic Visual Identity",
      icon: <Palette className="w-6 h-6" />,
      preview: "Memorable brand experiences that resonate with your audience",
      content: "We craft comprehensive brand systems that communicate your values and create lasting emotional connections with customers.",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: { brands: "150+", recognition: "95%", growth: "+40%" },
      color: "from-[#00A676] to-[#008F5D]",
      bgGradient: "from-[#00A676]/15 to-[#008F5D]/10",
      accentColor: "text-[#008F5D]",
      darkAccent: "bg-[#006B4A]"
    },
    {
      id: "digital-marketing",
      category: "DIGITAL MARKETING",
      title: "Data-Driven Growth",
      icon: <Rocket className="w-6 h-6" />,
      preview: "ROI-focused campaigns that scale your business exponentially",
      content: "Our performance marketing strategies leverage advanced analytics and AI to maximize conversions and accelerate growth.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: { roi: "450%", reach: "2M+", conversion: "12%" },
      color: "from-[#00C9A7] to-[#00A676]",
      bgGradient: "from-[#00C9A7]/10 to-[#00A676]/15",
      accentColor: "text-[#00C9A7]",
      darkAccent: "bg-[#00A676]"
    },
    {
      id: "video-production",
      category: "VIDEO PRODUCTION",
      title: "Cinematic Storytelling",
      icon: <Globe className="w-6 h-6" />,
      preview: "Compelling video content that captivates and converts",
      content: "We produce professional-grade videos that tell your story with cinematic quality and drive meaningful engagement.",
      imageUrl: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: { videos: "500+", views: "50M+", engagement: "89%" },
      color: "from-[#008F5D] to-[#00A676]",
      bgGradient: "from-[#008F5D]/10 to-[#00A676]/10",
      accentColor: "text-[#008F5D]",
      darkAccent: "bg-[#006B4A]"
    }
  ], []);

  // Enhanced carousel state management with performance optimization
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef(null);

  // Optimized timeout management with memory cleanup
  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Enhanced animation variants with spring physics
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 150,
        mass: 0.6
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-8, 12, -8],
      rotate: [-1.5, 1.5, -1.5],
      transition: {
        duration: 7,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    }
  };

  // Optimized auto-rotation with visibility API
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (!isAutoRotating || isPaused || !isVisible) return;

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(prev => (prev + 1) % carouselCards.length);
    }, 3500);

    return resetTimeout;
  }, [activeIndex, isAutoRotating, isPaused, isVisible, carouselCards.length, resetTimeout]);

  // Initialize animations
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Enhanced card click handler with haptic feedback
  const handleCardClick = useCallback((index) => {
    if (index === activeIndex) return;
    
    // Haptic feedback for mobile
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsAutoRotating(false);
    
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIsAutoRotating(true);
    }, 8000);
  }, [activeIndex, resetTimeout]);

  // Enhanced keyboard navigation with accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          handleCardClick((activeIndex - 1 + carouselCards.length) % carouselCards.length);
          break;
        case 'ArrowRight':
          e.preventDefault();
          handleCardClick((activeIndex + 1) % carouselCards.length);
          break;
        case ' ':
          e.preventDefault();
          setIsPaused(prev => !prev);
          break;
        case 'Escape':
          setIsPaused(false);
          setIsAutoRotating(true);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, carouselCards.length, handleCardClick]);

  // Optimized 3D positioning with better performance
  const getCardPosition = useCallback((index) => {
    const position = (index - activeIndex + carouselCards.length) % carouselCards.length;
    const isActive = index === activeIndex;
    const isNext = position === 1;
    const isPrev = position === carouselCards.length - 1;
    
    if (isActive) {
      return {
        x: 0, y: 0, scale: 1, opacity: 1, rotateY: 0, zIndex: 30,
        filter: "blur(0px) brightness(1)"
      };
    } else if (isNext) {
      return {
        x: 120, y: 30, scale: 0.85, opacity: 0.7, rotateY: 20, zIndex: 20,
        filter: "blur(0.5px) brightness(0.9)"
      };
    } else if (isPrev) {
      return {
        x: -120, y: 30, scale: 0.85, opacity: 0.7, rotateY: -20, zIndex: 20,
        filter: "blur(0.5px) brightness(0.9)"
      };
    } else {
      return {
        x: position > carouselCards.length / 2 ? -180 : 180,
        y: 50, scale: 0.7, opacity: 0.4, rotateY: position > carouselCards.length / 2 ? -30 : 30,
        zIndex: 10, filter: "blur(1px) brightness(0.8)"
      };
    }
  }, [activeIndex, carouselCards.length]);

  const currentCard = carouselCards[activeIndex];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-teal-50/20"
      role="banner"
      aria-label="Hero section with services carousel"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Enhanced Green-Themed Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Green Gradient Blobs */}
        <motion.div 
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r ${currentCard.bgGradient} blur-3xl`}
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.4, 0.6, 0.4],
            x: [-30, 30, -30],
            y: [-15, 15, -15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ rotate: rotateBackground }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-[#00A676]/20 to-[#008F5D]/15 blur-3xl"
          animate={{ 
            scale: [1.2, 0.9, 1.2], 
            opacity: [0.3, 0.5, 0.3],
            x: [25, -25, 25],
            y: [12, -12, 12]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        <motion.div 
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-[#00C9A7]/15 to-[#00A676]/10 blur-2xl"
          animate={{ 
            scale: [0.8, 1.1, 0.8], 
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Dynamic Green Geometric Shapes */}
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rounded-lg rotate-45' : 'rounded-xl'
            } bg-gradient-to-br from-[#00A676]/15 to-[#008F5D]/10`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
            }}
            animate={{
              x: [0, Math.random() * 80 - 40],
              y: [0, Math.random() * 80 - 40],
              rotate: [0, Math.random() * 360],
              scale: [1, Math.random() * 0.7 + 0.6, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7
            }}
          />
        ))}

        {/* Enhanced Green Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full">
            <defs>
              <pattern id="green-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00A676" strokeWidth="1" />
                <circle cx="0" cy="0" r="1.5" fill="#00A676" />
                <circle cx="25" cy="25" r="0.8" fill="#008F5D" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#green-grid)" />
          </svg>
        </div>

        {/* Floating Green Particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00A676]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 xl:gap-28 pt-20 pb-16 lg:py-0">
        
        {/* Enhanced Green-Themed Text Content */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="lg:w-1/2 flex flex-col items-start max-w-2xl"
          style={{ y: yText }}
        >
          {/* Premium Green Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00A676]/10 to-[#008F5D]/10 backdrop-blur-xl rounded-full border-2 border-[#00A676]/20 shadow-lg hover:shadow-xl transition-all group cursor-pointer">
              <motion.div 
                className="w-3 h-3 rounded-full bg-[#00A676] shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-bold text-[#008F5D] tracking-wide">
                Premium Digital Solutions
              </span>
              <Sparkles className="w-5 h-5 text-[#00A676] group-hover:rotate-12 transition-transform" />
            </div>
          </motion.div>
          
          {/* Enhanced Green Gradient Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.85] mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span className="block text-gray-900">Transform</span>
            <span className="block bg-gradient-to-r from-[#00A676] via-[#00C9A7] to-[#008F5D] bg-clip-text text-transparent relative">
              Ideas Into
              <motion.div 
                className="absolute -top-2 -right-8 w-8 h-8"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-8 h-8 text-[#00A676]" />
              </motion.div>
            </span>
            <span className="block text-gray-900">Reality</span>
          </motion.h1>
          
          {/* Enhanced Subtitle with Green Accents */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-2xl font-light text-gray-800 mb-6 leading-tight">
              Where <span className="font-bold bg-gradient-to-r from-[#00A676] to-[#008F5D] bg-clip-text text-transparent">Vision</span> Meets{" "}
              <span className="font-bold bg-gradient-to-r from-[#008F5D] to-[#00C9A7] bg-clip-text text-transparent">Execution</span>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              We craft extraordinary digital experiences that elevate brands, engage audiences, and drive measurable business growth through innovative design, cutting-edge technology, and strategic thinking.
            </p>
          </motion.div>

          {/* Enhanced Green-Themed CTA Section */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 w-full">
            <motion.button
              whileHover={{ 
                y: -6,
                scale: 1.02,
                boxShadow: "0 25px 50px -10px rgba(0,166,118, 0.5)"
              }}
              whileTap={{ scale: 0.96 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-[#00A676] to-[#008F5D] text-white font-bold rounded-2xl text-lg flex items-center gap-3 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#008F5D] to-[#00C9A7] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" />
            </motion.button>

            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 px-6 py-4 text-gray-800 hover:text-[#008F5D] font-semibold transition-colors"
            >
              <div className="relative w-14 h-14 bg-gradient-to-r from-[#00A676]/10 to-[#008F5D]/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all border border-[#00A676]/20">
                <Play className="w-6 h-6 text-[#00A676] ml-1 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00A676] to-[#008F5D] opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              <div>
                <div className="font-bold">Watch Our Story</div>
                <div className="text-sm text-gray-600">See how we work</div>
              </div>
            </motion.button>
          </motion.div>

          {/* Enhanced Green Social Proof */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-10">
            <div className="flex items-center gap-5">
              <div className="flex -space-x-4">
                {Array.from({ length: 4 }, (_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00A676] to-[#008F5D] border-3 border-white shadow-xl flex items-center justify-center text-white font-bold text-sm relative overflow-hidden"
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {String.fromCharCode(65 + i)}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#008F5D] to-[#00C9A7] opacity-0 hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">Trusted by 500+ brands</div>
                <div className="text-sm text-[#008F5D] font-semibold">Join industry leaders</div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 bg-[#00A676]/5 rounded-full border border-[#00A676]/20">
              <div className="flex text-[#00A676]">
                {Array.from({ length: 5 }, (_, i) => (
                  <motion.svg 
                    key={i} 
                    className="w-5 h-5 fill-current" 
                    viewBox="0 0 20 20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <span className="font-bold text-[#008F5D]">4.9/5</span>
              <span className="text-gray-700 text-sm">(2,400+ reviews)</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Ultra-Enhanced Green 3D Carousel */}
        <motion.div 
          className="lg:w-1/2 relative w-full max-w-3xl mx-auto"
          style={{ y: yImage, scale: scaleImage }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Container with Enhanced Green Glow */}
          <div 
            className="relative w-full h-[620px] perspective-1000"
            role="region" 
            aria-label="Services showcase carousel"
            aria-live="polite"
          >
            {/* Background Glow Effect */}
            <motion.div 
              className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${currentCard.color} opacity-20 blur-3xl scale-110`}
              animate={{ 
                opacity: [0.15, 0.25, 0.15],
                scale: [1.05, 1.15, 1.05] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Enhanced Green Carousel Cards */}
            <AnimatePresence mode="sync">
              {carouselCards.map((card, index) => {
                const isActive = index === activeIndex;
                const position = getCardPosition(index);
                
                return (
                  <motion.div
                    key={card.id}
                    className={`absolute w-full h-full rounded-3xl overflow-hidden shadow-2xl cursor-pointer border-3 transition-all duration-500 ${
                      isActive 
                        ? `border-[#00A676]/50 shadow-[0_0_50px_rgba(0,166,118,0.3)]` 
                        : 'border-gray-200/50'
                    }`}
                    initial={false}
                    animate={position}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 180, 
                      damping: 22,
                      mass: 0.8
                    }}
                    onClick={() => handleCardClick(index)}
                    whileHover={isActive ? { 
                      scale: 1.02,
                      boxShadow: "0 0 60px rgba(0,166,118,0.4)",
                      transition: { duration: 0.3 }
                    } : {
                      scale: 0.88,
                      opacity: 0.9,
                      transition: { duration: 0.2 }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`${card.title} service card`}
                  >
                    {/* Enhanced Card Content with Green Overlays */}
                    <div className="relative w-full h-full group">
                      {/* Image with Advanced Green Overlays */}
                      <div className="absolute inset-0">
                        <img
                          src={card.imageUrl}
                          alt={`${card.title} showcase`}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          loading={isActive ? "eager" : "lazy"}
                          width={800}
                          height={600}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${card.color} mix-blend-overlay opacity-40`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#00A676]/10 to-transparent" />
                      </div>

                      {/* Green Floating Elements */}
                      {isActive && (
                        <>
                          <motion.div 
                            className="absolute top-6 right-6 w-16 h-16 bg-[#00A676]/20 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-[#00A676]/30"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.15, rotate: 10 }}
                            transition={{ delay: 0.2, type: "spring" }}
                          >
                            <Eye className="w-7 h-7" />
                          </motion.div>

                          {/* Green Pulse Ring */}
                          <motion.div 
                            className="absolute top-6 right-6 w-16 h-16 border-2 border-[#00A676] rounded-full"
                            animate={{ 
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 0, 0.5] 
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: "easeInOut" 
                            }}
                          />
                        </>
                      )}

                      {/* Enhanced Card Information with Green Theme */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <motion.div 
                          className="flex items-center gap-4 mb-5"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${card.color} shadow-xl border border-white/20`}>
                            {card.icon}
                          </div>
                          <span className="text-xs font-black tracking-[0.2em] opacity-90 text-[#00C9A7]">
                            {card.category}
                          </span>
                        </motion.div>
                        
                        <motion.h3 
                          className="text-3xl font-black mb-4 leading-tight drop-shadow-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {card.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-sm opacity-90 mb-6 leading-relaxed drop-shadow-md"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {card.preview}
                        </motion.p>

                        {/* Enhanced Stats for Active Card */}
                        {isActive && (
                          <motion.div 
                            className="flex gap-6 mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            {Object.entries(card.stats).map(([key, value], i) => (
                              <motion.div 
                                key={key} 
                                className="text-center"
                                whileHover={{ scale: 1.1 }}
                              >
                                <div className="text-xl font-black text-[#00C9A7] mb-1 drop-shadow-lg">
                                  {value}
                                </div>
                                <div className="text-xs opacity-80 capitalize font-semibold">
                                  {key}
                                </div>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </div>

                      {/* Green Active Indicator */}
                      {isActive && (
                        <motion.div 
                          className="absolute top-6 left-6 w-5 h-5 rounded-full bg-[#00C9A7] shadow-xl border-3 border-white"
                          animate={{ 
                            scale: [1, 1.4, 1],
                            boxShadow: [
                              "0 0 20px rgba(0,201,167,0.5)",
                              "0 0 40px rgba(0,201,167,0.8)",
                              "0 0 20px rgba(0,201,167,0.5)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            
            {/* Enhanced Green Navigation Controls */}
            <div className="absolute -bottom-20 left-0 right-0 flex justify-center items-center gap-8">
              <motion.button
                onClick={() => handleCardClick((activeIndex - 1 + carouselCards.length) % carouselCards.length)}
                className="p-4 rounded-full bg-white/90 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all hover:bg-white border-2 border-[#00A676]/20 group"
                whileHover={{ scale: 1.1, borderColor: "rgba(0,166,118,0.5)" }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 text-[#008F5D] group-hover:text-[#00A676] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              
              <div className="flex gap-4">
                {carouselCards.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`h-4 rounded-full transition-all shadow-lg ${
                      index === activeIndex 
                        ? 'bg-gradient-to-r from-[#00A676] to-[#008F5D] shadow-[#00A676]/40' 
                        : 'bg-gray-300 hover:bg-[#00A676]/30'
                    }`}
                    onClick={() => handleCardClick(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    animate={{
                      width: index === activeIndex ? 40 : 16
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={() => handleCardClick((activeIndex + 1) % carouselCards.length)}
                className="p-4 rounded-full bg-white/90 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all hover:bg-white border-2 border-[#00A676]/20 group"
                whileHover={{ scale: 1.1, borderColor: "rgba(0,166,118,0.5)" }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 text-[#008F5D] group-hover:text-[#00A676] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>

            {/* Enhanced Pause/Play Control */}
            <motion.button
              onClick={() => setIsPaused(prev => !prev)}
              className="absolute -bottom-20 right-8 p-4 rounded-full bg-[#008F5D]/90 text-white backdrop-blur-md shadow-xl hover:bg-[#00A676] transition-all border border-white/20"
              whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(0,166,118,0.3)" }}
              whileTap={{ scale: 0.95 }}
              aria-label={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
            >
              {isPaused ? <Play className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Green Stats Bar */}
      <motion.div 
        className="relative z-20 bg-white/95 backdrop-blur-xl border-t border-[#00A676]/10 shadow-xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
      >
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {[
              { 
                icon: <Clock className="w-6 h-6" />, 
                value: "10+", 
                label: "Years Experience", 
                color: "text-[#00A676]",
                bg: "from-[#00A676]/10 to-[#008F5D]/5"
              },
              { 
                icon: <Rocket className="w-6 h-6" />, 
                value: "500+", 
                label: "Projects Delivered", 
                color: "text-[#008F5D]",
                bg: "from-[#008F5D]/10 to-[#00C9A7]/5"
              },
              { 
                icon: <Users className="w-6 h-6" />, 
                value: "99%", 
                label: "Client Satisfaction", 
                color: "text-[#00C9A7]",
                bg: "from-[#00C9A7]/10 to-[#00A676]/5"
              },
              { 
                icon: <Award className="w-6 h-6" />, 
                value: "50+", 
                label: "Team Members", 
                color: "text-[#00A676]",
                bg: "from-[#00A676]/15 to-[#008F5D]/10"
              }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className={`text-center group cursor-pointer p-6 rounded-2xl bg-gradient-to-br ${stat.bg} border border-[#00A676]/10 hover:border-[#00A676]/30 transition-all`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,166,118,0.1)"
                }}
              >
                <div className={`${stat.color} mb-3 flex justify-center group-hover:scale-125 transition-transform`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-700 font-semibold leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Enhanced Green Scroll Indicator */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div 
          className="flex flex-col items-center cursor-pointer group"
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-12 border-3 border-[#00A676] rounded-full flex justify-center group-hover:border-[#008F5D] transition-colors relative overflow-hidden">
            <motion.div
              className="w-1.5 h-4 bg-[#00A676] rounded-full mt-2 group-hover:bg-[#008F5D] transition-colors"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00A676]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <motion.span 
            className="text-xs text-[#008F5D] mt-4 tracking-[0.3em] font-black group-hover:text-[#00A676] transition-colors"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            EXPLORE MORE
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GreenThemedModernHero;
