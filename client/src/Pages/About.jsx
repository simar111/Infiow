import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

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
      image: "/team/alex.webp"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Creative Director",
      bio: "Design expert passionate about blending aesthetics with functionality.",
      image: "/team/sarah.webp"
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Tech Lead",
      bio: "Full-stack developer specializing in cutting-edge web technologies.",
      image: "/team/michael.webp"
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "Marketing Director",
      bio: "Data-driven strategist with a knack for viral campaigns.",
      image: "/team/priya.webp"
    }
  ];

  // Timeline data
  const milestones = [
    { year: "2020", event: "Infiow Founded", detail: "Started with a small team of 5 visionaries" },
    { year: "2021", event: "First Major Client", detail: "Landed Fortune 500 tech company" },
    { year: "2022", event: "Award Winning", detail: "Recognized as Top Digital Agency" },
    { year: "2023", event: "Global Expansion", detail: "Opened offices in 3 countries" },
    { year: "2024", event: "AI Integration", detail: "Implemented AI across all services" }
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1E293B_0%,#0F172A_100%)] opacity-80"></div>
        <div className="absolute inset-0 bg-[url('')] opacity-10"></div>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-teal-400 to-blue-500 opacity-5 blur-xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 50],
              opacity: [0.03, 0.1, 0.03]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">∞</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Infiow
            </span>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Work', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white font-medium relative"
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          <button className="md:hidden text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                  Digital Horizon
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10">
                Shaping the future of creativity and technology
              </p>
              <motion.a
                href="#about"
                className="inline-block px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-medium"
                whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(0, 188, 212, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Story
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.h2 
                className="text-4xl font-bold mb-16 text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                  Who We Are
                </span>
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-12">
                <motion.div 
                  className="bg-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-800"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-2xl font-bold text-teal-400 mb-4">Our Mission</h3>
                  <p className="text-gray-300">
                    To empower businesses with innovative tech and creative solutions that drive measurable success in the digital landscape.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-800"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { delay: 0.1 } }
                  }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Vision</h3>
                  <p className="text-gray-300">
                    To lead the digital transformation, shaping the future where technology and creativity converge to create extraordinary experiences.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-800"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
                  }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Our Values</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Innovation Beyond Boundaries</li>
                    <li>• Collaborative Excellence</li>
                    <li>• Client-Centric Solutions</li>
                    <li>• Ethical Digital Practices</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-gray-950">
          <div className="container mx-auto max-w-6xl">
            <motion.h2 
              className="text-4xl font-bold mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Meet Our Team
              </span>
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="bg-gray-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-64 bg-gray-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border-4 border-teal-400/30 overflow-hidden bg-gray-700 flex items-center justify-center">
                        {member.image ? (
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-white text-4xl font-bold">
                            {member.name.charAt(0)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-teal-400 mb-3">{member.role}</p>
                    <p className="text-gray-400">{member.bio}</p>
                    <div className="flex space-x-3 mt-4">
                      <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                        <FaLinkedin size={18} />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
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
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.h2 
              className="text-4xl font-bold mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Our Journey
              </span>
            </motion.h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-teal-400 via-blue-500 to-purple-500 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    className="relative"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {/* Circle marker */}
                    <div className={`absolute top-0 ${index % 2 === 0 ? 'left-1/2 -ml-12' : 'right-1/2 -mr-12'} w-6 h-6 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 border-4 border-gray-900 z-10`}></div>
                    
                    {/* Content */}
                    <div className={`relative ${index % 2 === 0 ? 'mr-auto pr-8 text-right' : 'ml-auto pl-8 text-left'} max-w-md`}>
                      <div className="bg-gray-900/50 backdrop-blur-md p-6 rounded-xl border border-gray-800">
                        <h3 className="text-2xl font-bold text-white mb-1">{milestone.event}</h3>
                        <p className="text-teal-400 font-medium mb-3">{milestone.year}</p>
                        <p className="text-gray-400">{milestone.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-teal-400 mb-2">
                  <span className="counter" data-target="150">0</span>+
                </div>
                <p className="text-gray-400">Projects Completed</p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-blue-400 mb-2">
                  <span className="counter" data-target="50">0</span>+
                </div>
                <p className="text-gray-400">Happy Clients</p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-purple-400 mb-2">
                  <span className="counter" data-target="12">0</span>+
                </div>
                <p className="text-gray-400">Awards Won</p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-white mb-2">
                  <span className="counter" data-target="8">0</span>+
                </div>
                <p className="text-gray-400">Years Experience</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Digital Presence?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
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
                className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-medium text-lg"
                whileHover={{ 
                  y: -3, 
                  boxShadow: "0 10px 25px rgba(0, 188, 212, 0.3)",
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">∞</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                  Infiow
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Pioneering the future of digital experiences through innovative technology and creative solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                {['Web Development', 'Digital Marketing', 'UI/UX Design', 'Video Production', 'Brand Strategy'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">{service}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {['About Us', 'Our Team', 'Case Studies', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <address className="text-gray-400 not-italic">
                <p className="mb-2">123 Digital Avenue</p>
                <p className="mb-2">Tech City, TC 10001</p>
                <p className="mb-4">hello@infiow.com</p>
                <p>+1 (555) 123-4567</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Infiow Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;