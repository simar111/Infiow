import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaLinkedin, FaTwitter, FaArrowRight } from 'react-icons/fa';

const AboutUsPage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

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
      <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-teal-100 to-blue-100 blur-3xl"
              style={{
                width: `${Math.random() * 400 + 200}px`,
                height: `${Math.random() * 400 + 200}px`,
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

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              className="inline-flex items-center px-5 py-2 bg-teal-100 rounded-full mb-8 border border-teal-200"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-sm font-medium text-teal-800">Innovation Since 2020</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500">
                Redefining Digital Excellence
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We architect transformative digital experiences that propel brands into the future.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#about"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-500 text-white rounded-full font-medium shadow-xl hover:shadow-teal-300/50 transition-all group"
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  background: "linear-gradient(to right, #0d9488, #0ea5e9)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Story
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div 
          className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-teal-100/80 blur-xl"
          animate="float"
          variants={floatAnimation}
        />
        <motion.div 
          className="absolute top-1/4 right-20 w-40 h-40 rounded-full bg-blue-100/80 blur-xl"
          animate="float"
          variants={floatAnimation}
          transition={{ delay: 2 }}
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
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500">
                The Minds Behind The Magic
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of visionaries, creators, and problem-solvers
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-teal-300 transition-all shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover="hover"
                variants={cardHover}
              >
                <div className="relative h-80 bg-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent z-10"></div>
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-40 h-40 rounded-full border-2 border-white overflow-hidden bg-gray-200 flex items-center justify-center shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-teal-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.social.linkedin} className="text-gray-500 hover:text-teal-600 transition-colors">
                      <FaLinkedin size={18} />
                    </a>
                    <a href={member.social.twitter} className="text-gray-500 hover:text-blue-500 transition-colors">
                      <FaTwitter size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
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