import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeService, setActiveService] = useState(null);

  // Add fonts to document head
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Open+Sans:wght@400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const services = [
    {
      id: 1,
      title: "Website Development",
      description: "We craft blazing-fast, responsive websites with cutting-edge tech stacks that drive conversions and user engagement.",
      icon: "💻",
      image: "./web.avif",
      features: ["Next.js/React", "Headless CMS", "Web Performance", "SEO Optimized"]
    },
    {
      id: 2,
      title: "Digital Marketing",
      description: "Data-driven campaigns that maximize ROI through precision targeting, conversion optimization, and performance analytics.",
      icon: "📈",
      image: "./Digital.jpg",
      features: ["PPC Advertising", "Social Media", "Content Strategy", "Analytics"]
    },
    {
      id: 3,
      title: "Video Production",
      description: "Cinematic storytelling with professional editing, motion graphics, and effects that captivate audiences and boost engagement.",
      icon: "🎥",
      image: "./Video.jpg",
      features: ["4K Production", "Motion Graphics", "Color Grading", "Sound Design"]
    },
    {
      id: 4,
      title: "Brand Design",
      description: "Strategic visual identities that communicate your brand essence across all touchpoints with memorable impact.",
      icon: "🎨",
      image: "./Brand.jpg",
      features: ["Logo Design", "Brand Guidelines", "Visual Systems", "Art Direction"]
    }
  ];

  // Glass morphism effect styles
  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(0, 166, 118, 0.15)'
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
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
        stiffness: 100
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
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const featureVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300
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
      className="services-section"
      style={{
        position: 'relative',
        padding: '6rem 1rem',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden'
      }}
    >
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0
      }}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,166,118,0.1) 0%, rgba(0,166,118,0) 70%)',
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 1rem',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          style={{
            textAlign: 'center',
            marginBottom: '5rem'
          }}
        >
          <motion.h2 
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#000000',
              marginBottom: '1.5rem',
              lineHeight: 1.2
            }}
          >
            <motion.span 
              style={{ display: 'inline-block' }}
              animate={{
                color: ['#000000', '#00A676', '#000000'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Our Expertise
            </motion.span>
          </motion.h2>
          <motion.p 
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '1.25rem',
              color: '#000000',
              maxWidth: '800px',
              margin: '0 auto',
              opacity: 0.8
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.3 }}
          >
            Delivering cutting-edge solutions that drive measurable results and exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            position: 'relative'
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              style={{
                position: 'relative',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                cursor: 'pointer',
                height: activeService === service.id ? 'auto' : '400px',
                transition: 'height 0.5s cubic-bezier(0.65, 0, 0.35, 1)'
              }}
            >
              {/* Background Image with Parallax Effect */}
              <motion.div 
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: -1
                }}
                animate={{
                  scale: activeService === service.id ? 1.1 : 1
                }}
                transition={{
                  duration: 0.5
                }}
              />
              
              {/* Overlay */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))',
                zIndex: -1
              }} />

              {/* Content */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                padding: '2rem',
                color: '#FFFFFF'
              }}>
                {/* Top Content */}
                <div>
                  <motion.div 
                    style={{
                      fontSize: '2.5rem',
                      marginBottom: '1rem'
                    }}
                    animate={{
                      rotate: activeService === service.id ? [0, 10, -10, 0] : 0,
                      scale: activeService === service.id ? [1, 1.2, 1] : 1
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: activeService === service.id ? Infinity : 0,
                      repeatType: "mirror"
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: '1rem',
                    opacity: 0.9,
                    marginBottom: '1.5rem'
                  }}>
                    {service.description}
                  </p>
                </div>

                {/* Features (Expanded View) */}
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
                    style={{
                      marginTop: '2rem'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '2rem'
                    }}>
                      {service.features.map((feature, index) => (
                        <motion.span
                          key={index}
                          variants={featureVariants}
                          style={{
                            padding: '0.5rem 1rem',
                            background: 'rgba(255, 255, 255, 0.15)',
                            borderRadius: '2rem',
                            fontSize: '0.875rem',
                            backdropFilter: 'blur(5px)'
                          }}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: '#00A676',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '0.5rem',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        width: '100%',
                        justifyContent: 'center'
                      }}
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
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <div style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '2rem',
                      fontSize: '0.875rem',
                      backdropFilter: 'blur(5px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
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
      </div>
    </section>
  );
};

export default ServicesSection;