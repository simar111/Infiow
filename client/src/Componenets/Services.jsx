import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Code, BarChart2, Film, Image as ImageIcon } from 'react-feather';

const ServicesSection = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeService, setActiveService] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.5]);

  const services = [
    {
      id: 1,
      title: "Website Development",
      description: "We craft blazing-fast, responsive websites with cutting-edge tech stacks that drive conversions and user engagement.",
      icon: <Code size={24} />,
      color: "#2563eb",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      features: ["Next.js/React", "Headless CMS", "Web Performance", "SEO Optimized"]
    },
    {
      id: 2,
      title: "Digital Marketing",
      description: "Data-driven campaigns that maximize ROI through precision targeting, conversion optimization, and performance analytics.",
      icon: <BarChart2 size={24} />,
      color: "#9333ea",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      features: ["PPC Advertising", "Social Media", "Content Strategy", "Analytics"]
    },
    {
      id: 3,
      title: "Video Production",
      description: "Cinematic storytelling with professional editing, motion graphics, and effects that captivate audiences and boost engagement.",
      icon: <Film size={24} />,
      color: "#dc2626",
      image: "./Video.jpg",
      features: ["4K Production", "Motion Graphics", "Color Grading", "Sound Design"]
    },
    {
      id: 4,
      title: "Brand Design",
      description: "Strategic visual identities that communicate your brand essence across all touchpoints with memorable impact.",
      icon: <ImageIcon size={24} />,
      color: "#059669",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      features: ["Logo Design", "Brand Guidelines", "Visual Systems", "Art Direction"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
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

  const cardVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        mass: 0.5
      }
    },
    hover: {
      y: -10,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const featureVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Preload images for better performance
  useEffect(() => {
    services.forEach(service => {
      const img = new Image();
      img.src = service.image;
    });
  }, []);

  return (
    <motion.section 
      ref={ref}
      className="services-section"
      style={{
        position: 'relative',
        padding: '8rem 1rem',
        backgroundColor: '#f8fafc',
        overflow: 'hidden',
        opacity
      }}
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-purple-50/20 to-green-50/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <motion.div 
        className="container mx-auto px-4 max-w-7xl relative z-10"
        style={{ y: yPos }}
      >
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-medium text-blue-600">Our Services</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <span className="block">Tailored Solutions for</span>
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            >
              Your Digital Success
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.3 }}
          >
            Comprehensive digital services designed to elevate your brand and drive measurable results.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                activeService === service.id ? 'md:col-span-2 lg:col-span-2 h-auto' : 'h-96'
              }`}
              style={{
                boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
                willChange: 'transform'
              }}
            >
              {/* Background Image with optimized loading */}
              <motion.div 
                className="absolute inset-0 bg-gray-200"
                animate={{
                  scale: activeService === service.id ? 1.05 : 1,
                  filter: activeService === service.id ? 'brightness(0.7)' : 'brightness(0.6)'
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut"
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={600}
                  height={400}
                />
              </motion.div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 text-white">
                {/* Top Content */}
                <div>
                  <motion.div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: service.color }}
                    animate={{
                      rotate: activeService === service.id ? [0, 5, -5, 0] : 0,
                      scale: activeService === service.id ? [1, 1.1, 1] : 1
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: activeService === service.id ? Infinity : 0,
                      repeatType: "mirror"
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Expanded Content */}
                {activeService === service.id && (
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                    className="mt-6"
                  >
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, index) => (
                        <motion.span
                          key={index}
                          variants={featureVariants}
                          className="px-3 py-1.5 rounded-full text-sm"
                          style={{ 
                            backgroundColor: `${service.color}20`,
                            border: `1px solid ${service.color}50`,
                            backdropFilter: 'blur(5px)'
                          }}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2"
                      style={{ backgroundColor: service.color }}
                    >
                      Get Started
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </motion.div>
                )}

                {/* Collapsed CTA */}
                {activeService !== service.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center"
                  >
                    <div className="px-4 py-2 rounded-full flex items-center gap-1 text-sm"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(5px)'
                      }}
                    >
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ServicesSection;