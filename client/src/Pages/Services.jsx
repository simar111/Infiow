import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaCode, FaBullhorn, FaVideo, FaPalette, FaExternalLinkAlt, FaRocket, FaStar ,FaArrowRight,FaCheckCircle} from 'react-icons/fa';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('webdev');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacityBackground = useTransform(scrollYProgress, [0, 0.5], [0.15, 0.5]);

  const colors = {
    primary: '#FFFFFF',
    accent: '#00A676',
    accentDark: '#008F5D',
    text: '#000000',
    textLight: '#FFFFFF',
    secondary: '#E6F7F2',
    accentLight: '#33B589',
  };

  const services = {
    webdev: {
      title: 'Website Development',
      icon: <FaCode className="text-[#00A676]" />,
      content:
        'We build responsive, high-performance websites using modern stacks like MERN, Next.js, and Tailwind CSS. Our solutions prioritize speed, scalability, and SEO.',
      benefits: ['Pixel-perfect designs', 'Optimized performance', 'Seamless integrations'],
      accent: 'from-[#00A676] to-[#008F5D]',
    },
    marketing: {
      title: 'Digital Marketing',
      icon: <FaBullhorn className="text-[#00A676]" />,
      content:
        'Data-driven campaigns leveraging SEO, PPC, and social media to amplify your brand and drive targeted traffic with measurable results.',
      benefits: ['Increased visibility', 'Precision targeting', 'High ROI'],
      accent: 'from-[#00A676] to-[#008F5D]',
    },
    video: {
      title: 'Video Production',
      icon: <FaVideo className="text-[#00A676]" />,
      content:
        'Professional-grade videos for corporate, promotional, or social media use, crafted with 4K equipment and advanced editing tools.',
      benefits: ['Cinematic quality', 'Compelling storytelling', 'Engagement boost'],
      accent: 'from-[#00A676] to-[#008F5D]',
    },
    design: {
      title: 'Graphic Design',
      icon: <FaPalette className="text-[#00A676]" />,
      content:
        'Comprehensive branding and UI/UX design services using Figma and Adobe Creative Suite to create visually stunning identities.',
      benefits: ['Cohesive branding', 'Intuitive interfaces', 'Memorable visuals'],
      accent: 'from-[#00A676] to-[#008F5D]',
    },
  };

  const caseStudies = [
    { title: 'E-commerce Redesign', category: 'webdev', result: '+320% conversions', image: 'https://via.placeholder.com/300x200?text=E-commerce' },
    { title: 'Viral Ad Campaign', category: 'marketing', result: '400% engagement surge', image: 'https://via.placeholder.com/300x200?text=Marketing' },
    { title: 'Brand Launch Video', category: 'video', result: '2M+ views', image: 'https://via.placeholder.com/300x200?text=Video' },
    { title: 'Logo & Identity', category: 'design', result: 'Award-winning design', image: 'https://via.placeholder.com/300x200?text=Design' },
  ];

  const processSteps = [
    { title: 'Discovery', description: 'We analyze your goals and audience to create a tailored strategy.', icon: <FaRocket /> },
    { title: 'Design', description: 'Crafting visually stunning and user-centric designs.', icon: <FaPalette /> },
    { title: 'Development', description: 'Building robust, scalable solutions with cutting-edge tech.', icon: <FaCode /> },
    { title: 'Launch & Optimize', description: 'Deploying and refining for maximum impact.', icon: <FaStar /> },
  ];

  const testimonials = [
    { name: 'Jane Doe', role: 'CEO, TechCorp', quote: 'Their team transformed our digital presence with a stunning website and targeted marketing.', rating: 5 },
    { name: 'John Smith', role: 'Founder, StartUp', quote: 'The video they produced went viral, exceeding all our expectations!', rating: 5 },
    { name: 'Emily Brown', role: 'Marketing Director', quote: 'Their design work gave our brand a fresh, modern look that resonates.', rating: 4 },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#000000] min-h-screen overflow-hidden font-sans" ref={containerRef}>
      {/* Dynamic Background with Glassmorphism */}
      <motion.div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{ y: yBackground, opacity: opacityBackground }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-[#00A676]/20 to-[#008F5D]/20 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 300 + 150}px`,
              height: `${Math.random() * 300 + 150}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 80],
              y: [0, (Math.random() - 0.5) * 50],
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <main className="relative z-10">
        {/* Hero Section with Micro-Interactions */}
       <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-gradient-to-b from-[#E6F7F2] to-[#FFFFFF]">
  {/* Background elements */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Floating abstract shapes */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-[#00A676]"
        style={{
          width: `${Math.random() * 300 + 100}px`,
          height: `${Math.random() * 300 + 100}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: 0.05
        }}
        animate={{
          x: [0, (Math.random() - 0.5) * 200],
          y: [0, (Math.random() - 0.5) * 100],
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{
          duration: Math.random() * 20 + 10,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
    ))}

    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    </div>
  </div>

  {/* Floating particle animation */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-[#00A676]"
        style={{
          width: `${Math.random() * 6 + 2}px`,
          height: `${Math.random() * 6 + 2}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: 0.3
        }}
        animate={{
          x: [0, (Math.random() - 0.5) * 100],
          y: [0, (Math.random() - 0.5) * 50],
          opacity: [0.1, 0.4, 0.1]
        }}
        transition={{
          duration: Math.random() * 15 + 10,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
    ))}
  </div>

  {/* Main content */}
  <div className="container mx-auto max-w-7xl relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="text-center"
    >
      {/* Animated tagline */}
      <motion.div
        className="inline-block px-6 py-2 mb-6 bg-[#00A676]/10 rounded-full backdrop-blur-sm border border-[#00A676]/20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.span
          className="text-[#00A676] font-medium"
          animate={{
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          Digital Transformation Experts
        </motion.span>
      </motion.div>

      {/* Main headline with advanced animation */}
      <motion.h1
        className="text-5xl md:text-8xl font-extrabold mb-8 tracking-tight leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A676] to-[#008F5D]">
            Innovate.
          </span>
          <motion.span
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#00A676] to-[#008F5D]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          />
        </span>
        <br />
        <span className="relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008F5D] to-[#00684A]">
            Create.
          </span>
          <motion.span
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#008F5D] to-[#00684A]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          />
        </span>
        <br />
        <span className="relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00684A] to-[#004D36]">
            Succeed.
          </span>
          <motion.span
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#00684A] to-[#004D36]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
          />
        </span>
      </motion.h1>

      {/* Animated description */}
      <motion.p
        className="text-xl md:text-3xl text-[#000000]/80 mb-12 max-w-4xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Transform your digital presence with our <span className="font-semibold text-[#00A676]">cutting-edge solutions</span> in web development, digital marketing, video production, and graphic design.
      </motion.p>

      {/* CTA buttons with advanced effects */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.a
          href="#services"
          className="relative px-12 py-5 bg-gradient-to-r from-[#00A676] to-[#008F5D] text-white rounded-full font-bold text-lg shadow-2xl overflow-hidden group"
          whileHover={{
            scale: 1.05,
            boxShadow: '0 20px 40px rgba(0, 166, 118, 0.5)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-[#008F5D] to-[#00684A] opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10 flex items-center justify-center gap-2">
            Discover Our Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </span>
        </motion.a>

        <motion.a
          href="#contact"
          className="relative px-12 py-5 bg-transparent text-[#00A676] rounded-full font-bold text-lg border-2 border-[#00A676] overflow-hidden group"
          whileHover={{
            backgroundColor: '#00A676',
            color: '#FFFFFF',
            boxShadow: '0 10px 30px rgba(0, 166, 118, 0.3)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className="absolute inset-0 bg-[#00A676] opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10 flex items-center justify-center gap-2">
            Get a Free Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </span>
        </motion.a>
      </motion.div>

      {/* Floating mockup showcase */}
      <motion.div
        className="relative mt-24 mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          {/* Main mockup image */}
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Digital showcase"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Floating elements */}
          <motion.div
            className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden"
            animate={{
              y: [0, -15, 0],
              rotateZ: [0, 5, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
              alt="Mobile app"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute -top-6 -right-6 w-40 h-40 rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden"
            animate={{
              y: [0, 15, 0],
              rotateZ: [0, -5, 5, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Dashboard"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute -z-10 top-1/2 left-1/2 w-1/2 h-1/2 bg-[#00A676] rounded-full filter blur-[100px] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </motion.div>
    </motion.div>
  </div>
</section>

        {/* Services Section with Glassmorphism Cards */}
       <section id="services" className="py-28 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
  {/* Floating background elements */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-[#00A676]/10"
        style={{
          width: Math.random() * 400 + 100,
          height: Math.random() * 400 + 100,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, Math.random() * 100 - 50],
          x: [0, Math.random() * 100 - 50],
          rotate: [0, 360],
        }}
        transition={{
          duration: Math.random() * 30 + 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />
    ))}
  </div>

  <div className="container mx-auto max-w-7xl relative z-10">
    <motion.div
      className="text-center mb-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-5xl md:text-7xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A676] via-[#00C9A7] to-[#008F5D] animate-gradient-x">
          Digital Excellence
        </span>
      </motion.h2>
      <motion.p
        className="text-xl text-gray-600 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Cutting-edge solutions that drive growth and innovation
      </motion.p>
    </motion.div>

    {/* Modern service cards grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Object.entries(services).map(([key, service], index) => (
        <motion.div
          key={key}
          className={`relative group overflow-hidden rounded-2xl shadow-2xl h-[400px] cursor-pointer ${
            activeTab === key ? 'ring-4 ring-[#00A676]' : ''
          }`}
          onClick={() => setActiveTab(key)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ y: -10 }}
        >
          {/* Animated gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-80 group-hover:opacity-100 transition-all duration-500`} />
          
          {/* Floating service image */}
          <motion.div
            className="absolute top-8 right-8 w-24 h-24 rounded-xl bg-white/20 backdrop-blur-md p-4 shadow-lg"
            animate={{
              y: [0, 15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="text-4xl text-white flex items-center justify-center">
              {service.icon}
            </div>
          </motion.div>

          {/* Sample service image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={
                key === 'webdev' ? 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80' :
                key === 'marketing' ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' :
                key === 'video' ? 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' :
                'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
              }
              alt={service.title}
              className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-all duration-500"
            />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-8 text-white">
            <motion.h3
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="mb-6 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {service.content}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {service.benefits.map((benefit, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm"
                >
                  {benefit}
                </span>
              ))}
            </motion.div>
            <motion.button
              className="self-start px-6 py-3 bg-white text-[#00A676] rounded-lg font-medium flex items-center gap-2 mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more <FaArrowRight />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Expanded service details */}
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        className="mt-16 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div className="grid lg:grid-cols-2 gap-12 p-12">
          <div>
            <motion.h3
              className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#00A676] to-[#008F5D] text-transparent bg-clip-text"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {services[activeTab].title} Solutions
            </motion.h3>
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                {services[activeTab].content}
              </p>
              
              <div className="bg-gradient-to-r from-[#00A676]/10 to-transparent p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">Our Approach</h4>
                <ul className="space-y-3">
                  {[
                    'Data-driven decision making',
                    'Cutting-edge technology',
                    'User-centric design',
                    'Measurable results'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheckCircle className="text-[#00A676] mt-1 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="relative h-96 lg:h-auto">
            {/* Interactive 3D service visualization */}
            <motion.div
              className="relative h-full w-full rounded-2xl overflow-hidden"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={
                  activeTab === 'webdev' ? 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80' :
                  activeTab === 'marketing' ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80' :
                  activeTab === 'video' ? 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80' :
                  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80'
                }
                alt={services[activeTab].title}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00A676]/70 via-transparent to-transparent" />
              
              {/* Floating stats */}
              <motion.div
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="text-3xl font-bold text-[#00A676]">95%</div>
                <div className="text-sm">Client Satisfaction</div>
              </motion.div>
              
              <motion.div
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                <div className="text-3xl font-bold text-[#00A676]">200+</div>
                <div className="text-sm">Projects Completed</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</section>

        {/* Case Studies Section */}
        <section className="py-28 px-4 bg-[#E6F7F2]">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold mb-20 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A676] to-[#008F5D]">
                Success Stories
              </span>
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudies.map((project, i) => (
                <motion.div
                  key={i}
                  className="bg-[#FFFFFF]/80 backdrop-blur-md rounded-xl border border-[#00A676]/20 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, type: 'spring', stiffness: 80 }}
                  viewport={{ once: true, margin: '-50px' }}
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  <div className="h-48 relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#00A676]/20 to-[#008F5D]/20"
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="text-5xl text-[#FFFFFF]/80">{services[project.category].icon}</div>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#000000] mb-2">{project.title}</h3>
                    <p className="text-[#000000]/80 text-sm mb-4">{project.result}</p>
                    <motion.a
                      href="#"
                      className="text-[#00A676] text-sm font-medium flex items-center group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      View Case Study
                      <motion.span
                        className="ml-2 group-hover:rotate-45 transition-transform"
                        initial={{ rotate: 0 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.span>
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section with Timeline */}
        <section className="py-28 px-4 bg-[#FFFFFF]">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold mb-20 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A676] to-[#008F5D]">
                Our Process
              </span>
            </motion.h2>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#00A676]/20" />
              <div className="space-y-12">
                {processSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    className={`relative flex items-center ${i % 2 === 0 ? 'justify-start' : 'justify-end'} w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                  >
                    <div className="bg-[#FFFFFF]/80 backdrop-blur-md rounded-xl p-6 border border-[#00A676]/20 shadow-lg hover:shadow-xl transition-all w-full max-w-md">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          className="text-3xl text-[#00A676]"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.4 }}
                        >
                          {step.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-[#000000]">{step.title}</h3>
                          <p className="text-[#000000]/80 text-sm mt-2">{step.description}</p>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className="absolute w-4 h-4 bg-[#00A676] rounded-full left-1/2 -translate-x-1/2"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-28 px-4 bg-gradient-to-b from-[#E6F7F2] to-[#FFFFFF]">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold mb-20 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A676] to-[#008F5D]">
                What Our Clients Say
              </span>
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  className="bg-[#FFFFFF]/80 backdrop-blur-md rounded-xl border border-[#00A676]/20 shadow-lg hover:shadow-2xl transition-all p-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, type: 'spring', stiffness: 80 }}
                  viewport={{ once: true, margin: '-50px' }}
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, star) => (
                      <FaStar
                        key={star}
                        className={`text-xl ${star < testimonial.rating ? 'text-[#00A676]' : 'text-[#00A676]/20'}`}
                      />
                    ))}
                  </div>
                  <p className="text-[#000000]/80 text-sm mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00A676] to-[#008F5D] flex items-center justify-center text-[#FFFFFF] font-bold text-lg">
                      {testimonial.name[0]}
                    </div>
                    <div className="ml-4">
                      <p className="text-[#000000] font-semibold">{testimonial.name}</p>
                      <p className="text-[#000000]/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-br from-[#00A676]/10 to-[#008F5D]/10">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/3 left-1/5 w-80 h-80 rounded-full bg-[#00A676] opacity-10 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full bg-[#008F5D] opacity-10 blur-3xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: 2,
              }}
            />
          </div>

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold mb-6 text-[#000000]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to Elevate Your Digital Presence?
            </motion.h2>
            <motion.p
              className="text-xl text-[#000000]/80 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Let's collaborate to create something extraordinary for your business.
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-block px-10 py-5 bg-gradient-to-r from-[#00A676] to-[#008F5D] text-[#FFFFFF] rounded-full font-medium text-lg shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
              whileHover={{
                scale: 1.06,
                boxShadow: '0 20px 40px rgba(0, 166, 118, 0.5)',
              }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="absolute inset-0 bg-[#008F5D] opacity-0 group-hover:opacity-20"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Get Your Free Consultation</span>
            </motion.a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;