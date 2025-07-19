import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef ,useState} from 'react';
import { FaLinkedin, FaTwitter, FaArrowRight,FaChevronLeft,FaChevronRight } from 'react-icons/fa';

const AboutUsPage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

const handleNavigation = (direction) => {
  if (direction === 'prev') {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  } else {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  }
};

const getPosition = (index, currentIndex) => {
  const diff = index - currentIndex;
  const length = teamMembers.length;

  if (diff === 0) return 'center';
  if (diff === -1 || (currentIndex === 0 && index === length - 1)) return 'left';
  if (diff === 1 || (currentIndex === length - 1 && index === 0)) return 'right';
  return 'hidden';
};

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Team data
  const teamMembers = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech innovation and digital strategy.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Creative Director",
      bio: "Design expert passionate about blending aesthetics with functionality.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Tech Lead",
      bio: "Full-stack developer specializing in cutting-edge web technologies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "Marketing Director",
      bio: "Data-driven strategist with a knack for viral campaigns.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  // Timeline data
  const milestones = [
    { year: "2020", event: "Company Founded", detail: "Started with a small team of visionaries" },
    { year: "2021", event: "First Major Client", detail: "Landed Fortune 500 tech company" },
    { year: "2022", event: "Award Winning", detail: "Recognized as Top Digital Agency" },
    { year: "2023", event: "Global Expansion", detail: "Opened offices in 3 countries" },
    { year: "2024", event: "AI Integration", detail: "Implemented AI across all services" }
  ];

  // Stats data
  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "12+", label: "Awards Won" },
    { value: "8+", label: "Years Experience" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        mass: 0.5
      }
    }
  };

  const cardHover = {
    hover: {
      y: -15,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const floatAnimation = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* Hero Section */}
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-gradient-to-b from-white to-gray-50">
  {/* Dynamic Particle Background */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floating gradient orbs */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gradient-to-br from-teal-100/40 to-blue-100/40"
        style={{
          width: `${Math.random() * 600 + 300}px`,
          height: `${Math.random() * 600 + 300}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          filter: 'blur(80px)'
        }}
        animate={{
          x: [0, (Math.random() - 0.5) * 200],
          y: [0, (Math.random() - 0.5) * 100],
          opacity: [0.03, 0.1, 0.03]
        }}
        transition={{
          duration: Math.random() * 25 + 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    ))}
    
    {/* Micro particles */}
    {[...Array(60)].map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute rounded-full bg-teal-400/10"
        style={{
          width: `${Math.random() * 6 + 2}px`,
          height: `${Math.random() * 6 + 2}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
        animate={{
          x: [0, (Math.random() - 0.5) * 100],
          y: [0, (Math.random() - 0.5) * 50],
          opacity: [0.1, 0.4, 0.1]
        }}
        transition={{
          duration: Math.random() * 15 + 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    ))}
  </div>

  {/* Floating abstract shapes */}
  <motion.div 
    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal-100/30 blur-[100px]"
    animate={{
      y: [0, -40, 0],
      opacity: [0.2, 0.3, 0.2]
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
  <motion.div 
    className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-100/30 blur-[100px]"
    animate={{
      y: [0, 40, 0],
      opacity: [0.2, 0.3, 0.2]
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 3
    }}
  />

  {/* Main content */}
  <div className="max-w-7xl mx-auto relative z-10 px-4">
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      className="text-center"
    >
      {/* Animated badge */}
      <motion.div 
        className="inline-flex items-center px-6 py-2.5 bg-white/80 backdrop-blur-sm rounded-full mb-8 border border-gray-200 shadow-sm"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.span
          className="flex items-center text-sm font-medium text-teal-600"
          animate={{
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-4 h-4 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Trusted by 500+ Brands Worldwide
        </motion.span>
      </motion.div>
      
      {/* Headline with advanced animation */}
      <motion.h1 
        className="text-5xl md:text-8xl font-bold mb-8 leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="relative inline-block overflow-hidden">
          <motion.span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            Crafting Digital
          </motion.span>
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-600 to-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          />
        </span>
        <span className="relative inline-block overflow-hidden">
          <motion.span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            Masterpieces Since
          </motion.span>
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          />
        </span>
        <span className="relative inline-block overflow-hidden">
          <motion.span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            2020
          </motion.span>
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-600"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          />
        </span>
      </motion.h1>
      
      {/* Description with fade-in */}
      <motion.p 
        className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        We're a passionate collective of designers, developers, and strategists dedicated to pushing the boundaries of digital innovation.
      </motion.p>
      
      {/* CTA buttons with advanced effects */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.a
          href="#story"
          className="relative px-10 py-4 bg-gradient-to-r from-teal-600 to-blue-500 text-white rounded-full font-bold shadow-2xl overflow-hidden group"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(13, 148, 136, 0.4)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-teal-700 to-blue-600 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10 flex items-center justify-center gap-2">
            Our Story
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </motion.a>

        <motion.a
          href="#team"
          className="relative px-10 py-4 bg-white/80 backdrop-blur-sm text-teal-600 rounded-full font-bold border-2 border-teal-100 shadow-sm overflow-hidden group"
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            scale: 1.05
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className="absolute inset-0 bg-teal-600/5 group-hover:bg-teal-600/10"
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10 flex items-center justify-center gap-2">
            Meet The Team
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </span>
        </motion.a>
      </motion.div>
    </motion.div>

    {/* Floating stats showcase */}
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8 }}
    >
      {[
        { value: "500+", label: "Projects Completed" },
        { value: "95%", label: "Client Retention" },
        { value: "4.9", label: "Average Rating" },
        { value: "50+", label: "Team Members" }
      ].map((stat, index) => (
        <motion.div
          key={stat.label}
          className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm"
          whileHover={{ 
            y: -10,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.05)"
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.p 
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 + index * 0.1 }}
          >
            {stat.value}
          </motion.p>
          <p className="text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>

  {/* Floating decorative elements */}
  <motion.div 
    className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-teal-100/80 blur-xl"
    animate={{
      y: [0, -30, 0],
      rotate: [0, 10, 0]
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
  <motion.div 
    className="absolute top-1/4 right-20 w-40 h-40 rounded-full bg-blue-100/80 blur-xl"
    animate={{
      y: [0, 30, 0],
      rotate: [0, -10, 0]
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2
    }}
  />
</section>

      {/* About Section */}
      <section id="about" ref={ref} className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div 
              className="text-center mb-24"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                variants={itemVariants}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500">
                  Our Philosophy
                </span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                We don't just build digital products - we craft experiences that transform businesses.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Mission",
                  content: "To push the boundaries of digital innovation while delivering measurable business impact.",
                  bg: "bg-teal-50",
                  border: "border-teal-100"
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: "Vision",
                  content: "To be the catalyst for digital transformation in every industry we touch.",
                  bg: "bg-blue-50",
                  border: "border-blue-100"
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Values",
                  content: (
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3"></span>
                        <span>Radical innovation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3"></span>
                        <span>Relentless execution</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3"></span>
                        <span>Authentic collaboration</span>
                      </li>
                    </ul>
                  ),
                  bg: "bg-purple-50",
                  border: "border-purple-100"
                }
              ].map((card, index) => (
                <motion.div 
                  key={index}
                  className={`rounded-2xl p-8 ${card.bg} border ${card.border} shadow-sm`}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover="hover"
                  variants={{ ...itemVariants, ...cardHover }}
                >
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${card.title === 'Mission' ? 'text-teal-600' : card.title === 'Vision' ? 'text-blue-500' : 'text-purple-500'}`}>{card.title}</h3>
                  <div className="text-gray-600">
                    {card.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
  <section className="py-32 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto">
    {/* Section header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-20"
    >
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A676] to-[#008F5D]">
          The Minds Behind The Magic
        </span>
      </motion.h2>
      <motion.p
        className="text-xl text-gray-600 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Our team of visionaries, creators, and problem-solvers
      </motion.p>
    </motion.div>

    {/* 3D Carousel Container */}
    <div className="relative w-full flex justify-center">
      {/* Carousel Viewport */}
      <div className="relative w-full max-w-4xl h-[600px] md:h-[700px] perspective-1000 overflow-visible">
        {/* Navigation arrows */}
        <button 
          className="absolute left-0 md:-left-12 top-1/2 z-20 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-[#00A676] hover:text-white transition-all"
          onClick={() => handleNavigation('prev')}
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        <button 
          className="absolute right-0 md:-right-12 top-1/2 z-20 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-[#00A676] hover:text-white transition-all"
          onClick={() => handleNavigation('next')}
        >
          <FaChevronRight className="w-5 h-5" />
        </button>

        {/* Team members carousel */}
        <div className="relative w-full h-full">
          {teamMembers.map((member, index) => {
            const position = getPosition(index, currentIndex);
            const zIndex = position === 'center' ? 10 : position === 'left' || position === 'right' ? 5 : 1;
            
            return (
              <motion.div
                key={member.id}
                className={`absolute w-full max-w-[300px] h-[500px] left-1/2 -translate-x-1/2`}
                style={{
                  zIndex,
                }}
                animate={{
                  x: position === 'center' ? '-50%' : position === 'left' ? '-120%' : '20%',
                  scale: position === 'center' ? 1 : 0.8,
                  opacity: position === 'hidden' ? 0 : position === 'center' ? 1 : 0.7,
                  rotateY: position === 'center' ? 0 : position === 'left' ? -15 : 15
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={() => position !== 'center' && setCurrentIndex(index)}
              >
                <div className={`h-full bg-white rounded-3xl overflow-hidden border-2 ${position === 'center' ? 'border-[#00A676]' : 'border-gray-200'} shadow-xl transition-all duration-300`}>
                  {/* Team member image with gradient overlay */}
                  <div className="relative h-1/2 bg-gray-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent z-10"></div>
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden bg-gray-200 flex items-center justify-center shadow-2xl">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Team member info */}
                  <div className="p-6 text-center h-1/2 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-[#00A676] font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-6 flex-grow">{member.bio}</p>
                    <div className="flex justify-center space-x-4">
                      <a href={member.social.linkedin} className="text-gray-500 hover:text-[#00A676] transition-colors">
                        <FaLinkedin size={20} />
                      </a>
                      <a href={member.social.twitter} className="text-gray-500 hover:text-blue-500 transition-colors">
                        <FaTwitter size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-[#00A676] w-6' : 'bg-gray-300'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Timeline Section */}
      <section className="py-32 px-6 bg-white relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500">
                Our Evolution
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key moments that shaped our journey
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-teal-100 via-blue-200 to-purple-100 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {/* Year marker */}
                  <div className={`absolute top-0 ${index % 2 === 0 ? 'left-1/2 -ml-28' : 'right-1/2 -mr-28'} w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg`}>
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className={`relative ${index % 2 === 0 ? 'mr-auto pr-8 text-right' : 'ml-auto pl-8 text-left'} max-w-md`}>
                    <motion.div 
                      className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                      whileHover={{ y: -5 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.detail}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent mb-3">
                    {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 px-6 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-100/50 to-blue-100/50"></div>
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-teal-100 to-blue-100 blur-2xl"
              style={{
                width: `${Math.random() * 300 + 200}px`,
                height: `${Math.random() * 300 + 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500">
              Ready to Begin Your Digital Transformation?
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's collaborate to create something extraordinary. Our team is ready to bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-teal-600 to-blue-500 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-teal-300/50 transition-all group"
              whileHover={{ 
                y: -5,
                scale: 1.05,
                background: "linear-gradient(to right, #0d9488, #0ea5e9)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
              <FaArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;