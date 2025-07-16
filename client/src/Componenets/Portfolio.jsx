import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTrail, animated } from '@react-spring/web';

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: "/ecommerce.webp",
    link: "/projects/ecommerce"
  },
  {
    id: 2,
    title: "Social Media Campaign",
    image: "/social-campaign.webp",
    link: "/projects/social-campaign"
  },
  {
    id: 3,
    title: "Corporate Video",
    image: "/corporate-video.webp",
    link: "/projects/corporate-video"
  },
  {
    id: 4,
    title: "Brand Identity",
    image: "/brand-identity.webp",
    link: "/projects/brand-identity"
  },
  {
    id: 5,
    title: "Mobile App",
    image: "/mobile-app.webp",
    link: "/projects/mobile-app"
  },
  {
    id: 6,
    title: "SEO Dashboard",
    image: "/seo-dashboard.webp",
    link: "/projects/seo-dashboard"
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Floating orb component
const FloatingOrb = ({ color, size, position }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} opacity-20`}
      style={{
        width: size,
        height: size,
        left: `${position.x}%`,
        top: `${position.y}%`,
        filter: 'blur(10px)'
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }}
    />
  );
};

const PortfolioSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Background orbs configuration
  const orbs = [
    { color: 'bg-green-500', size: '120px', position: { x: 10, y: 20 } },
    { color: 'bg-teal-500', size: '80px', position: { x: 85, y: 30 } },
    { color: 'bg-green-600', size: '60px', position: { x: 40, y: 70 } },
    { color: 'bg-teal-400', size: '100px', position: { x: 70, y: 60 } },
  ];

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {orbs.map((orb, index) => (
          <FloatingOrb key={index} {...orb} />
        ))}
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6FFFB]/10 to-[#1A3C34]/10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section title */}
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 font-orbitron text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Work
          <motion.span 
            className="block h-1 mt-2 bg-gradient-to-r from-transparent via-[#00A676]/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.h2>

        {/* Portfolio grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioItems.map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              className="relative"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className="relative overflow-hidden rounded-xl border border-[#00A676] bg-white/80 backdrop-blur-md"
                style={{
                  width: '100%',
                  height: '240px',
                  boxShadow: hoveredCard === project.id ? '0 0 20px rgba(0, 166, 118, 0.3)' : 'none'
                }}
                whileHover={{
                  scale: 1.06,
                  rotateX: hoveredCard === project.id ? -8 : 0,
                  rotateY: hoveredCard === project.id ? 8 : 0,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Project image */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white text-xl font-bold mb-4">{project.title}</h3>
                  <motion.a
                    href={project.link}
                    className="px-6 py-2 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-full font-medium relative overflow-hidden"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">View Details</span>
                    <motion.span
                      className="absolute inset-0 bg-white opacity-0"
                      animate={{ 
                        opacity: hoveredCard === project.id ? [0, 0.2, 0] : 0,
                        x: [-100, 100]
                      }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>
                </motion.div>

                {/* Ripple effect */}
                {hoveredCard === project.id && (
                  <>
                    <motion.div
                      className="absolute inset-0 border-2 border-[#00A676] rounded-xl pointer-events-none"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.2, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      className="absolute inset-0 border-2 border-[#00A676] rounded-xl pointer-events-none"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.4, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    />
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;