import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Website Development",
      description: "We craft blazing-fast, responsive websites with cutting-edge tech stacks that drive conversions and user engagement.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      image: "./web.avif",
      color: "from-blue-500/10 to-blue-600/5"
    },
    {
      id: 2,
      title: "Digital Marketing",
      description: "Data-driven campaigns that maximize ROI through precision targeting, conversion optimization, and performance analytics.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      image: "./Digital.jpg",
      color: "from-purple-500/10 to-purple-600/5"
    },
    {
      id: 3,
      title: "Video Production",
      description: "Cinematic storytelling with professional editing, motion graphics, and effects that captivate audiences and boost engagement.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      image: "./Video.jpg",
      color: "from-red-500/10 to-red-600/5"
    },
    {
      id: 4,
      title: "Brand Design",
      description: "Strategic visual identities that communicate your brand essence across all touchpoints with memorable impact.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      image: "./Brand.jpg",
      color: "from-green-500/10 to-green-600/5"
    }
  ];

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

  const iconHover = {
    scale: [1, 1.15, 1],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "mirror"
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden" ref={ref}>
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-green-500/10"
            style={{
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 60],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={item}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering cutting-edge solutions that drive measurable results and exceptional user experiences.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Main card */}
              <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm group-hover:shadow-lg transition-all duration-500">
                {/* Image with parallax effect */}
                <motion.div 
                  className="relative h-56 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                </motion.div>

                {/* Card content */}
                <div className="p-6">
                  {/* Icon with floating animation */}
                  <motion.div
                    animate={hoveredCard === service.id ? iconHover : {}}
                    className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-200/50 flex items-center justify-center mb-5 mx-auto"
                  >
                    <div className="w-7 h-7 text-green-600">
                      {service.icon}
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-center text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-center mb-6">{service.description}</p>

                  {/* Animated CTA button */}
                  <motion.div 
                    className="text-center"
                    whileHover={{ y: -2 }}
                  >
                    <button className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center mx-auto gap-2">
                      <span>Explore Service</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;