import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useTrail, animated } from '@react-spring/web';

// Expanded portfolio data with descriptions and tech
const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: "/ecommerce.webp",
    link: "/projects/ecommerce",
    description: "A scalable e-commerce solution with real-time inventory and payment integration.",
    tech: ["React", "Node.js", "Stripe", "Tailwind CSS"],
    category: "Web Development"
  },
  {
    id: 2,
    title: "Social Media Campaign",
    image: "/social-campaign.webp",
    link: "/projects/social-campaign",
    description: "A multi-platform campaign boosting engagement by 150% with targeted ads.",
    tech: ["Adobe Premiere", "Google Ads", "Analytics"],
    category: "Digital Marketing"
  },
  {
    id: 3,
    title: "Corporate Video",
    image: "/corporate-video.webp",
    link: "/projects/corporate-video",
    description: "High-quality video production with 4K editing and motion graphics.",
    tech: ["Final Cut Pro", "After Effects"],
    category: "Video Production"
  },
  {
    id: 4,
    title: "Brand Identity",
    image: "/brand-identity.webp",
    link: "/projects/brand-identity",
    description: "Comprehensive branding with logo design and style guides.",
    tech: ["Figma", "Illustrator"],
    category: "Brand Design"
  },
  {
    id: 5,
    title: "Mobile App",
    image: "/mobile-app.webp",
    link: "/projects/mobile-app",
    description: "Cross-platform app with offline capabilities and push notifications.",
    tech: ["Flutter", "Firebase"],
    category: "Mobile Development"
  },
  {
    id: 6,
    title: "SEO Dashboard",
    image: "/seo-dashboard.webp",
    link: "/projects/seo-dashboard",
    description: "Real-time SEO analytics with customizable reports.",
    tech: ["React", "D3.js", "MongoDB"],
    category: "Web Development"
  },
];

// Animation configurations
const trailConfig = { mass: 1, tension: 200, friction: 50 };
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};
const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

// Enhanced Floating Orb with 3D effect
const FloatingOrb = ({ color, size, position, zIndex }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} opacity-20`}
      style={{
        width: size,
        height: size,
        left: `${position.x}%`,
        top: `${position.y}%`,
        zIndex,
        filter: 'blur(15px)',
        boxShadow: '0 0 30px rgba(0, 166, 118, 0.3)'
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: Math.random() * 12 + 12,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }}
    />
  );
};

const PortfolioSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null); // Ref for the section element

  // Background orbs with enhanced configuration
  const orbs = [
    { color: 'bg-green-500', size: '150px', position: { x: 15, y: 15 }, zIndex: 10 },
    { color: 'bg-teal-500', size: '100px', position: { x: 80, y: 25 }, zIndex: 15 },
    { color: 'bg-green-600', size: '80px', position: { x: 35, y: 65 }, zIndex: 12 },
    { color: 'bg-teal-400', size: '120px', position: { x: 70, y: 50 }, zIndex: 14 },
  ];

  // Simulate loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  // Filter portfolio items
  const filteredItems = filteredCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filteredCategory);

  // Trail animation for cards
  const trail = useTrail(filteredItems.length, {
    config: trailConfig,
    from: { opacity: 0, y: 30, scale: 0.95 },
    to: { opacity: 1, y: 0, scale: 1 }
  });

  // Cursor position tracking
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        cursorX.set(e.clientX - rect.left);
        cursorY.set(e.clientY - rect.top);
      }
    };

    if (sectionRef.current) {
      sectionRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [cursorX, cursorY]);

  return (
    <section
      ref={sectionRef} // Attach ref to the section
      className="relative bg-gradient-to-br from-white via-gray-50 to-[#E6FFFB] py-24 overflow-hidden"
    >
      {/* Enhanced background with particles and gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {orbs.map((orb, index) => (
          <FloatingOrb key={index} {...orb} />
        ))}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: 5
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6FFFB]/20 to-[#1A3C34]/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section title with enhanced animation */}
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 font-orbitron text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Our Work
          <motion.span 
            className="block h-1 mt-2 bg-gradient-to-r from-[#00A676]/50 via-green-500/70 to-[#00A676]/50 mx-auto w-1/3"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
        </motion.h2>

        {/* Category filters */}
        <div className="flex justify-center mb-12 space-x-4">
          {["All", "Web Development", "Digital Marketing", "Video Production", "Brand Design", "Mobile Development"].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium ${filteredCategory === cat ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setFilteredCategory(cat)}
              aria-label={`Filter by ${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio grid with trail animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-150px" }}
        >
          {trail.map((props, index) => (
            <animated.div
              key={filteredItems[index].id}
              style={props}
              className="relative"
              onMouseEnter={() => setHoveredCard(filteredItems[index].id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className="relative overflow-hidden rounded-xl border border-[#00A676]/30 bg-white/90 backdrop-blur-md"
                style={{
                  width: '100%',
                  height: '280px',
                  boxShadow: hoveredCard === filteredItems[index].id ? '0 0 25px rgba(0, 166, 118, 0.4)' : '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}
                whileHover={{
                  scale: 1.08,
                  rotateX: hoveredCard === filteredItems[index].id ? -10 : 0,
                  rotateY: hoveredCard === filteredItems[index].id ? 10 : 0,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              >
                {/* Project image with parallax */}
                <motion.div
                  className="relative w-full h-full overflow-hidden"
                  style={{ perspective: '1000px' }}
                >
                  <motion.img
                    src={filteredItems[index].image}
                    alt={filteredItems[index].title}
                    className="w-full h-full object-cover transition-transform duration-300"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    animate={{ opacity: hoveredCard === filteredItems[index].id ? 0.7 : 0.4 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Hover overlay with details */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-end p-6 text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === filteredItems[index].id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-2">{filteredItems[index].title}</h3>
                  <p className="text-sm mb-4 line-clamp-2">{filteredItems[index].description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {filteredItems[index].tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-800/50 rounded-full text-xs">{tech}</span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      href={filteredItems[index].link}
                      className="px-5 py-2 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-full font-medium relative overflow-hidden"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">View Details</span>
                      <motion.span
                        className="absolute inset-0 bg-white opacity-0"
                        animate={{ opacity: hoveredCard === filteredItems[index].id ? [0, 0.3, 0] : 0 }}
                        transition={{ duration: 0.8 }}
                      />
                    </motion.a>
                    <motion.a
                      href={filteredItems[index].link + "/live"}
                      className="px-5 py-2 bg-gray-800 text-white rounded-full font-medium"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Preview
                    </motion.a>
                  </div>
                </motion.div>

                {/* Enhanced ripple effect */}
                {hoveredCard === filteredItems[index].id && (
                  <>
                    <motion.div
                      className="absolute inset-0 border-2 border-[#00A676]/50 rounded-xl pointer-events-none"
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1.3, opacity: 0 }}
                      transition={{ duration: 0.8 }}
                    />
                    <motion.div
                      className="absolute inset-0 border-2 border-[#00A676]/30 rounded-xl pointer-events-none"
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </>
                )}
              </motion.div>
            </animated.div>
          ))}
        </motion.div>

        {/* Loading progress bar */}
        <motion.div
          className="mt-12 w-full bg-gray-200 h-2 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        >
          <motion.div className="h-full bg-gradient-to-r from-green-600 to-teal-500" />
        </motion.div>
      </div>

      {/* Cursor trail effect */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="w-4 h-4 bg-green-500/20 rounded-full"
          animate={{
            scale: hoveredCard ? 2 : 0.5,
            opacity: hoveredCard ? 0.4 : 0.1
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </section>
  );
};

export default PortfolioSection;