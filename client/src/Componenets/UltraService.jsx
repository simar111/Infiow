import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  FaCode, FaBullhorn, FaVideo, FaPalette, FaArrowRight, 
  FaCheckCircle, FaStar, FaRocket, FaChartLine, FaPlay,
  FaEye, FaHeart, FaShare
} from 'react-icons/fa';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('webdev');
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -100]);
  const parallaxY = useTransform(scrollY, [0, 1000], [0, 50]);

  const services = {
    webdev: {
      title: 'Website Development',
      subtitle: 'Full-Stack Excellence',
      icon: <FaCode className="text-[#00A676]" />,
      content: 'We build responsive, high-performance websites using modern stacks like MERN, Next.js, and Tailwind CSS. Our solutions prioritize speed, scalability, and SEO.',
      benefits: ['Pixel-perfect designs', 'Optimized performance', 'Seamless integrations'],
      features: ['Modern Tech Stack', 'SEO Optimized', 'Mobile First', 'Fast Loading'],
      stats: { projects: '500+', satisfaction: '99%', speed: '<3s' },
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ]
    },
    marketing: {
      title: 'Digital Marketing',
      subtitle: 'Growth Amplification',
      icon: <FaBullhorn className="text-[#00A676]" />,
      content: 'Data-driven campaigns leveraging SEO, PPC, and social media to amplify your brand and drive targeted traffic with measurable results.',
      benefits: ['Increased visibility', 'Precision targeting', 'High ROI'],
      features: ['Multi-Channel Approach', 'Data Analytics', 'Brand Building', 'Lead Generation'],
      stats: { growth: '350%', reach: '2M+', roi: '450%' },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ]
    },
    video: {
      title: 'Video Production',
      subtitle: 'Cinematic Storytelling',
      icon: <FaVideo className="text-[#00A676]" />,
      content: 'Professional-grade videos for corporate, promotional, or social media use, crafted with 4K equipment and advanced editing tools.',
      benefits: ['Cinematic quality', 'Compelling storytelling', 'Engagement boost'],
      features: ['4K Recording', 'Professional Editing', 'Motion Graphics', 'Color Grading'],
      stats: { videos: '1000+', views: '50M+', engagement: '89%' },
      image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ]
    },
    design: {
      title: 'Graphic Design',
      subtitle: 'Visual Innovation',
      icon: <FaPalette className="text-[#00A676]" />,
      content: 'Comprehensive branding and UI/UX design services using Figma and Adobe Creative Suite to create visually stunning identities.',
      benefits: ['Cohesive branding', 'Intuitive interfaces', 'Memorable visuals'],
      features: ['Brand Identity', 'UI/UX Design', 'Print Design', 'Digital Assets'],
      stats: { brands: '300+', designs: '2K+', awards: '25+' },
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ]
    }
  };

  return (
    <>
      {/* Google Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet"
      />

      <section 
        ref={sectionRef} 
        id="services" 
        className="relative min-h-screen overflow-hidden bg-white"
        style={{ fontFamily: 'Open Sans, sans-serif' }}
      >
        {/* Enhanced Background with More Visual Elements */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A676]/20 via-transparent to-[#008F5D]/10" />
          
          {/* Floating Geometric Shapes */}
          {Array.from({ length: 30 }, (_, i) => (
            <motion.div
              key={i}
              className={`absolute ${
                i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rounded-lg rotate-45' : 'rounded-xl'
              } bg-gradient-to-br from-[#00A676]/20 to-[#008F5D]/10`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: Math.random() * 120 + 60,
                height: Math.random() * 120 + 60,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                rotate: [0, Math.random() * 360],
                scale: [1, Math.random() * 0.5 + 0.75, 1],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                delay: Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          
          {/* Enhanced Header with Background Elements */}
          <motion.div 
            className="text-center mb-20 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative Elements Behind Header */}
            <div className="absolute inset-0 -z-10">
              <motion.div 
                className="w-96 h-96 bg-gradient-to-r from-[#00A676]/5 to-[#008F5D]/5 rounded-full blur-3xl mx-auto"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </div>

            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="px-8 py-3 bg-gradient-to-r from-[#00A676]/10 to-[#008F5D]/10 rounded-full text-[#00A676] font-semibold border-2 border-[#00A676]/20 backdrop-blur-sm"
                    style={{ fontSize: '0.875rem', fontFamily: 'Poppins, sans-serif' }}>
                ✨ Premium Digital Solutions & Creative Services
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-black mb-8 text-black relative"
              style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
                fontFamily: 'Poppins, sans-serif',
                lineHeight: '1.1'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-[#00A676] via-[#00C9A7] to-[#008F5D] bg-clip-text text-transparent">
                Digital Excellence
              </span>
              <br />
              <span>That Transforms Vision</span>
              <br />
              <span className="text-2xl font-medium text-gray-600">Into Reality</span>
            </motion.h1>
            
            <motion.p 
              className="text-black/80 max-w-4xl mx-auto leading-relaxed text-lg"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Experience cutting-edge solutions that transform innovative ideas into digital success stories 
              through state-of-the-art technology, exceptional design, and measurable results
            </motion.p>

            {/* Enhanced Statistics with Icons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-8 mt-16"
              style={{ y: parallaxY }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {[
                { number: '500+', label: 'Projects Completed', icon: <FaRocket className="text-[#00A676]" /> },
                { number: '99%', label: 'Client Satisfaction', icon: <FaHeart className="text-[#00A676]" /> },
                { number: '24/7', label: 'Support Available', icon: <FaStar className="text-[#00A676]" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-white via-white to-[#00A676]/5 rounded-3xl shadow-xl border-2 border-[#00A676]/10 backdrop-blur-sm"
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0,166,118,0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-[#00A676] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-black/70 font-medium" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Service Cards with Full Image Integration */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
            {Object.entries(services).map(([key, service], index) => (
              <motion.div
                key={key}
                className={`group relative h-[520px] cursor-pointer transition-all duration-700 rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-100 ${
                  activeTab === key ? 'scale-105 z-20 shadow-2xl ring-4 ring-[#00A676]/30' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.6,
                }}
                onClick={() => setActiveTab(key)}
                onMouseEnter={() => setHoveredCard(key)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ 
                  y: -15,
                  transition: { duration: 0.4 }
                }}
              >
                {/* Main Service Image with Advanced Overlay */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredCard === key ? 'scale-110 brightness-50' : 'scale-100 brightness-40'
                    }`}
                    loading="lazy"
                  />
                  
                  {/* Multi-layer Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00A676]/20 via-transparent to-[#008F5D]/30" />
                  
                  {/* Animated Geometric Overlay */}
                  <motion.div 
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00A676]/30 to-transparent rounded-bl-3xl"
                    animate={{
                      opacity: hoveredCard === key ? 0.8 : 0.4
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Interactive Elements */}
                <div className="absolute top-6 right-6 flex gap-3">
                  <motion.div 
                    className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaEye />
                  </motion.div>
                  <motion.div 
                    className="w-12 h-12 bg-[#00A676]/80 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-lg"
                    animate={{ 
                      rotate: hoveredCard === key ? 15 : 0,
                      scale: hoveredCard === key ? 1.1 : 1 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>

                {/* Content Overlay */}
                <div className="relative h-full flex flex-col justify-end p-8 text-white z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2 drop-shadow-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {service.title}
                      </h3>
                      <p className="text-[#00C9A7] font-semibold text-sm drop-shadow-md" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        {service.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-white/90 text-sm mb-6 leading-relaxed drop-shadow-md" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {service.content.substring(0, 120)}...
                    </p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.benefits.slice(0, 2).map((benefit, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 bg-[#00A676]/80 backdrop-blur-sm rounded-full text-xs font-semibold drop-shadow-md"
                          whileHover={{ scale: 1.05 }}
                          style={{ fontFamily: 'Open Sans, sans-serif' }}
                        >
                          {benefit}
                        </motion.span>
                      ))}
                    </div>

                    {/* Enhanced CTA Button */}
                    <motion.button
                      className="w-full py-3 bg-gradient-to-r from-[#00A676] to-[#008F5D] text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg backdrop-blur-sm border border-white/20"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 15px 35px rgba(0,166,118,0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Explore Service <FaArrowRight />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Significantly Enhanced Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header Section with Gradient and Image */}
              <div className="relative h-48 bg-gradient-to-r from-[#00A676] to-[#008F5D] overflow-hidden">
                <img
                  src={services[activeTab].image}
                  alt={services[activeTab].title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#00A676]/90 to-[#008F5D]/90" />
                
                <div className="relative z-10 p-8 h-full flex items-center justify-between">
                  <div>
                    <motion.h2 
                      className="text-white font-bold mb-2"
                      style={{ fontSize: '2rem', fontFamily: 'Poppins, sans-serif' }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {services[activeTab].title}
                    </motion.h2>
                    <motion.p 
                      className="text-white/90 text-lg"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {services[activeTab].subtitle}
                    </motion.p>
                  </div>
                  
                  <motion.div 
                    className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-4xl text-white shadow-xl"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {services[activeTab].icon}
                  </motion.div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 p-8">
                
                {/* Left Column - Content */}
                <motion.div
                  className="lg:col-span-2"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <motion.p 
                    className="text-black leading-relaxed text-lg mb-8"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    {services[activeTab].content}
                  </motion.p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(services[activeTab].stats).map(([key, value], i) => (
                      <motion.div
                        key={key}
                        className="text-center p-4 bg-gradient-to-br from-[#00A676]/10 to-[#008F5D]/10 rounded-xl border border-[#00A676]/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 10px 25px rgba(0,166,118,0.15)" 
                        }}
                      >
                        <div className="text-2xl font-bold text-[#00A676] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {value}
                        </div>
                        <div className="text-xs text-black/70 font-medium uppercase tracking-wide" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced Features Grid */}
                  <div className="mb-8">
                    <h4 className="text-black font-semibold mb-4 flex items-center gap-2 text-lg"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <FaCheckCircle className="text-[#00A676]" />
                      Key Features & Capabilities
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {services[activeTab].features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#00A676]/5 via-transparent to-[#008F5D]/5 rounded-xl border border-[#00A676]/10 hover:border-[#00A676]/30 transition-all"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          whileHover={{ 
                            x: 5,
                            backgroundColor: "rgba(0,166,118,0.08)"
                          }}
                        >
                          <FaCheckCircle className="text-[#00A676] flex-shrink-0" />
                          <span className="text-black font-medium" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Process Timeline */}
                  <div>
                    <h4 className="text-black font-semibold mb-6 flex items-center gap-2 text-lg"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <FaRocket className="text-[#00A676]" />
                      Our Proven Process
                    </h4>
                    <div className="grid grid-cols-4 gap-4">
                      {['Discovery', 'Strategy', 'Development', 'Launch'].map((step, i) => (
                        <motion.div
                          key={i}
                          className="text-center relative"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                        >
                          {i < 3 && (
                            <div className="absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-[#00A676] to-[#00A676]/20 z-0" />
                          )}
                          <motion.div 
                            className="relative z-10 w-12 h-12 rounded-full bg-[#00A676] text-white flex items-center justify-center text-sm font-bold mx-auto mb-3 shadow-lg"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                            whileHover={{ 
                              scale: 1.1,
                              boxShadow: "0 10px 25px rgba(0,166,118,0.3)"
                            }}
                          >
                            {i + 1}
                          </motion.div>
                          <span className="text-black text-sm font-semibold" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            {step}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Visual Gallery */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {/* Main Preview Image */}
                  <div className="relative h-64 mb-6 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={services[activeTab].image}
                      alt={`${services[activeTab].title} showcase`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Play Button Overlay for Video */}
                    {activeTab === 'video' && (
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl cursor-pointer">
                          <FaPlay className="text-[#00A676] text-xl ml-1" />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Gallery Thumbnails */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {services[activeTab].gallery.map((img, i) => (
                      <motion.div
                        key={i}
                        className="aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                      >
                        <img
                          src={img}
                          alt={`${services[activeTab].title} example ${i + 1}`}
                          className="w-full h-full object-cover hover:brightness-110 transition-all"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <motion.button
                      className="w-full py-4 bg-[#00A676] hover:bg-[#008F5D] text-white rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg transition-colors"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(0,166,118,0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaRocket /> Start Your Project
                    </motion.button>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <motion.button
                        className="py-3 bg-white border-2 border-[#00A676] text-[#00A676] hover:bg-[#00A676] hover:text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaEye /> Portfolio
                      </motion.button>
                      
                      <motion.button
                        className="py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaShare /> Share
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
