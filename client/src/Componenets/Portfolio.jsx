import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useTrail, animated } from '@react-spring/web';

const PortfolioSection = () => {
  // Portfolio data with extended details
  const portfolioItems = [
    {
      id: 1,
      title: "NeoCommerce Platform",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      link: "#",
      description: "Next-gen e-commerce with AR product previews and AI recommendations",
      tech: ["React", "Three.js", "Node.js", "TensorFlow"],
      category: "Web Development",
      year: "2024",
      accentColor: "#00A676"
    },
    {
      id: 2,
      title: "Quantum Analytics",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      link: "#",
      description: "Real-time data visualization with quantum computing insights",
      tech: ["D3.js", "Python", "Qiskit", "WebGL"],
      category: "Data Science",
      year: "2023",
      accentColor: "#3B82F6"
    },
    {
      id: 3,
      title: "Holographic UI",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      link: "#",
      description: "Spatial computing interface for mixed reality environments",
      tech: ["Unity", "WebXR", "Shader Graph"],
      category: "XR Development",
      year: "2024",
      accentColor: "#8B5CF6"
    },
    {
      id: 4,
      title: "NeuroBrand Identity",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      link: "#",
      description: "Dynamic brand system that adapts to user engagement",
      tech: ["Figma", "After Effects", "GSAP"],
      category: "Brand Design",
      year: "2023",
      accentColor: "#EC4899"
    },
    {
      id: 5,
      title: "BioFitness AI",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      link: "#",
      description: "Wearable tech interface with biometric feedback",
      tech: ["SwiftUI", "ARKit", "CoreML"],
      category: "Mobile Development",
      year: "2024",
      accentColor: "#10B981"
    },
    {
      id: 6,
      title: "Cosmic WebGL",
      image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      link: "#",
      description: "Interactive 3D galaxy exploration in the browser",
      tech: ["Three.js", "WebGL", "GLSL"],
      category: "Web Development",
      year: "2023",
      accentColor: "#6366F1"
    },
  ];

  // State and refs
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Filter items by category
  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // Categories for filter
  const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];

  // Trail animation for cards
  const trail = useTrail(filteredItems.length, {
    config: { mass: 1, tension: 500, friction: 40 },
    from: { opacity: 0, y: 50, scale: 0.95 },
    to: { opacity: 1, y: 0, scale: 1 }
  });

  // Cursor position effect
  const handleMouseMove = (e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  // Hover effects
  const handleCardHover = (id) => {
    setHoveredCard(id);
    const card = portfolioItems.find(item => item.id === id);
    if (card) {
      animate(document.documentElement, {
        '--card-accent-color': card.accentColor
      }, { duration: 0.3 });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative bg-gradient-to-br from-white via-gray-50 to-[#f0fdfa] py-28 overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        '--card-accent-color': '#00A676' // Default accent color
      }}
    >
      {/* Section header */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            Cutting-Edge Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">
              Future-Focused Portfolio
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Immersive projects that redefine digital experiences
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(category => (
            <motion.button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-gradient-to-r from-green-600 to-teal-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trail.map((style, index) => {
            const item = filteredItems[index];
            return (
              <animated.div key={item.id} style={style}>
                <motion.div
                  className="relative h-full rounded-3xl overflow-hidden group"
                  onMouseEnter={() => handleCardHover(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover="hover"
                  initial="initial"
                  animate="animate"
                >
                  {/* Card background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden border border-gray-200 shadow-lg z-0" />
                  
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(600px at center, ${item.accentColor}20, transparent 70%)`
                    }}
                    variants={{
                      hover: { opacity: 1 }
                    }}
                  />
                  
                  {/* 3D perspective container */}
                  <motion.div 
                    className="relative h-full transform-style-preserve-3d"
                    variants={{
                      hover: { 
                        rotateY: 5,
                        rotateX: -5,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }
                    }}
                  >
                    {/* Image with depth effect */}
                    <motion.div 
                      className="relative h-80 overflow-hidden"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        variants={{
                          hover: { 
                            scale: 1.05,
                            rotateZ: 0.5,
                            transition: { duration: 0.4 }
                          }
                        }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                        variants={{
                          hover: { opacity: 0.8 }
                        }}
                      />
                    </motion.div>

                    {/* Floating tech badges */}
                    <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-2 z-10">
                      {item.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="text-xs bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 * index + 0.1 * i }}
                          variants={{
                            hover: { 
                              y: -5,
                              backgroundColor: `${item.accentColor}`,
                              color: 'white'
                            }
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none z-10">
                      <motion.div
                        className="pointer-events-auto"
                        variants={{
                          hover: { y: 0 },
                          initial: { y: 20 }
                        }}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-sm text-gray-300 mb-6">{item.description}</p>
                        
                        {/* Animated action buttons */}
                        <motion.div
                          className="flex gap-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          variants={{
                            hover: { 
                              y: 0,
                              transition: { staggerChildren: 0.1 }
                            }
                          }}
                        >
                          <motion.a
                            href={item.link}
                            className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            variants={{
                              hover: { 
                                backgroundColor: item.accentColor,
                                color: 'white'
                              }
                            }}
                          >
                            Explore
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </motion.a>
                          <motion.a
                            href="#"
                            className="px-4 py-2 bg-transparent border border-white text-white rounded-full text-sm font-medium"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "rgba(255,255,255,0.1)"
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Case Study
                          </motion.a>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Holographic effect */}
                  {hoveredCard === item.id && (
                    <>
                      <motion.div 
                        className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-white/10"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ 
                          scale: 1.05, 
                          opacity: 1,
                          borderColor: `${item.accentColor}40`
                        }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.div 
                        className="absolute inset-0 rounded-3xl pointer-events-none border border-white/5"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ 
                          scale: 1.1, 
                          opacity: 0.6,
                          borderColor: `${item.accentColor}20`
                        }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      />
                    </>
                  )}
                </motion.div>
              </animated.div>
            );
          })}
        </div>

        {/* View more button */}
        <div className="text-center mt-16">
          <motion.a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-full font-medium shadow-lg hover:shadow-green-300/50 relative overflow-hidden group"
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">View Full Portfolio</span>
            <svg className="w-5 h-5 ml-3 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <motion.span 
              className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 1.2, ease: "linear" }}
            />
          </motion.a>
        </div>
      </div>

      {/* Animated cursor */}
      <motion.div 
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          background: 'var(--card-accent-color)'
        }}
        animate={{
          scale: hoveredCard ? 3.5 : 1,
          opacity: hoveredCard ? 0.2 : 0.1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </section>
  );
};

export default PortfolioSection;