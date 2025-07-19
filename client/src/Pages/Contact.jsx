import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaTwitter, FaCheck, FaChevronDown } from 'react-icons/fa';

const ContactPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Enhanced color palette with theme consistency
  const colors = {
    primary: '#00A676', // Teal base
    primaryLight: '#4DD0A0', // Lighter teal accent
    primaryDark: '#008F5D', // Deeper teal for depth
    accent: '#FF6F61', // Coral accent for contrast
    white: '#FFFFFF',
    black: '#000000',
    lightGray: '#F5F5F5',
    darkGray: '#333333',
    gradientStart: '#00A676',
    gradientEnd: '#008F5D'
  };

  const faqs = [
    {
      question: "What is your typical response time?",
      answer: "We respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line."
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Absolutely! We specialize in tailored solutions that fit your unique business needs. Let's discuss your requirements."
    },
    {
      question: "What are your working hours?",
      answer: "Our team is available Monday to Friday, 9AM to 6PM in your local timezone. After-hours support is available for premium clients."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const testimonials = [
    {
      text: "Infiow transformed our digital strategy with innovative solutions. Highly recommend!",
      author: "Jane Doe, CEO of TechTrend"
    },
    {
      text: "Exceptional support and creative expertise—our project exceeded expectations.",
      author: "John Smith, Marketing Director"
    }
  ];

  const supportChannels = [
    { icon: FaPhone, label: "Call Us", value: "+1-234-567-890", href: "tel:+1234567890" },
    { icon: FaEnvelope, label: "Email Us", value: "info@infiow.com", href: "mailto:info@infiow.com" },
    { icon: FaMapMarkerAlt, label: "Visit Us", value: "123 Creative Lane, Tech City" }
  ];

  const updates = [
    { title: "New AI Integration", date: "July 15, 2025", desc: "Enhanced our platform with cutting-edge AI tools." },
    { title: "Client Portal Launched", date: "July 10, 2025", desc: "Access your projects 24/7 with our new portal." }
  ];

  // Particle animation for hero
  const particles = Array(20).fill().map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
    <section className="relative min-h-screen overflow-hidden bg-white">
  {/* Floating abstract shapes */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Green accent shapes */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-[#00A676]/10"
        style={{
          width: `${Math.random() * 300 + 100}px`,
          height: `${Math.random() * 300 + 100}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          filter: 'blur(60px)'
        }}
        animate={{
          x: [0, (Math.random() - 0.5) * 200],
          y: [0, (Math.random() - 0.5) * 100],
          opacity: [0.05, 0.15, 0.05]
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

  {/* Main content */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 py-20 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full"
    >
      {/* Animated badge */}
      <motion.div 
        className="inline-flex items-center px-5 py-2 bg-[#00A676]/10 rounded-full mb-8 border border-[#00A676]/20"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <span className="flex items-center text-sm font-medium text-[#008F5D] font-poppins">
          <motion.span
            className="inline-block w-2 h-2 mr-2 rounded-full bg-[#00A676]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
          Let's Collaborate
        </span>
      </motion.div>
      
      {/* Headline with green accent */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-poppins"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <span className="text-black">Connect With Our </span>
        <span className="text-[#00A676]">Creative Team</span>
      </motion.h1>
      
      {/* Description */}
      <motion.p
        className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed font-open-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Ready to bring your ideas to life? Our team of experts is here to turn your vision into reality with innovative digital solutions.
      </motion.p>
      
      {/* CTA buttons */}
      <motion.div 
        className="flex flex-col sm:flex-row justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.a
          href="#contact-form"
          className="relative px-8 py-4 bg-[#00A676] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all font-poppins"
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "#008F5D",
            boxShadow: '0 10px 25px rgba(0, 166, 118, 0.3)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.a>
        
        <motion.a
          href="#"
          className="relative px-8 py-4 bg-white text-[#00A676] font-bold rounded-lg border-2 border-[#00A676] hover:bg-[#00A676]/10 transition-all font-poppins"
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 25px rgba(0, 166, 118, 0.1)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule Call
        </motion.a>
      </motion.div>
    </motion.div>

    {/* Contact cards */}
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      {[
        {
          icon: (
            <svg className="w-10 h-10" fill="none" stroke="#00A676" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
          title: "Email Us",
          description: "Get a response within 24 hours",
          content: "contact@infiow.com",
          link: "mailto:contact@infiow.com"
        },
        {
          icon: (
            <svg className="w-10 h-10" fill="none" stroke="#00A676" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          ),
          title: "Call Us",
          description: "Mon-Fri, 9am-6pm EST",
          content: "+1 (123) 456-7890",
          link: "tel:+11234567890"
        },
        {
          icon: (
            <svg className="w-10 h-10" fill="none" stroke="#00A676" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
          title: "Visit Us",
          description: "Schedule an in-person meeting",
          content: "123 Digital Lane, Tech City",
          link: "#"
        }
      ].map((item, index) => (
        <motion.div 
          key={index}
          className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-4">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 font-poppins">{item.title}</h3>
          <p className="text-gray-500 mb-4 font-open-sans">{item.description}</p>
          {item.link ? (
            <a href={item.link} className="text-[#00A676] hover:text-[#008F5D] transition-colors font-medium font-open-sans">
              {item.content}
            </a>
          ) : (
            <p className="text-[#00A676] font-medium font-open-sans">{item.content}</p>
          )}
        </motion.div>
      ))}
    </motion.div>

    {/* Animated scroll indicator */}
    <motion.div
      className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      animate={{ y: [0, 15, 0], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <svg className="w-8 h-8 text-[#00A676]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </motion.div>
  </div>
</section>
      {/* Main Content */}
      <main className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information & FAQ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-150px" }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
              <h2 className="text-3xl font-bold mb-10 relative pb-5" style={{ color: colors.primary }}>
                Connect With Us
                <div className="absolute bottom-0 left-0 w-20 h-1 rounded-full bg-gradient-to-r from-primary to-primaryDark"></div>
              </h2>
              <div className="space-y-10">
                {supportChannels.map((channel, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 * i, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mr-6 bg-gradient-to-br from-lightGray to-white drop-shadow-md">
                      <channel.icon className="text-2xl" style={{ color: colors.primary }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{channel.label}</h3>
                      <motion.a
                        href={channel.href}
                        className="text-lg text-darkGray hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05, color: colors.accent }}
                      >
                        {channel.value}
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
                  <div className="flex space-x-6">
                    {[
                      { icon: <FaLinkedin />, color: '#0077B5' },
                      { icon: <FaInstagram />, color: '#E1306C' },
                      { icon: <FaTwitter />, color: '#1DA1F2' }
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                        style={{ backgroundColor: colors.lightGray, color: social.color }}
                        whileHover={{ y: -5, scale: 1.15, backgroundColor: colors.primary, color: colors.white }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-8" style={{ color: colors.primary }}>FAQs</h3>
                <div className="space-y-6">
                  {faqs.map((faq, i) => (
                    <motion.div
                      key={i}
                      className="bg-white rounded-xl overflow-hidden border border-gray-200"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <motion.button
                        className="w-full px-8 py-5 text-left flex justify-between items-center hover:bg-lightGray transition-colors"
                        onClick={() => toggleAccordion(i)}
                        whileHover={{ backgroundColor: colors.lightGray }}
                      >
                        <span className="text-lg font-medium text-darkGray">{faq.question}</span>
                        <motion.div
                          animate={{ rotate: activeAccordion === i ? 180 : 0 }}
                          transition={{ duration: 0.4 }}
                          style={{ color: colors.primary }}
                        >
                          <FaChevronDown />
                        </motion.div>
                      </motion.button>
                      <AnimatePresence>
                        {activeAccordion === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="px-8 py-4 text-gray-700 bg-gray-50"
                          >
                            {faq.answer}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-150px" }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
              <h3 className="text-3xl font-bold mb-10" style={{ color: colors.primary }}>Reach Out to Us</h3>
              <AnimatePresence>
                {formSubmitted ? (
                  <motion.div
                    className="bg-green-100 border border-green-300 rounded-xl p-8 mb-8 flex flex-col items-center justify-center text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    style={{ color: colors.primaryDark }}
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-6">
                      <FaCheck className="text-4xl text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Success!</h4>
                    <p className="text-lg text-gray-700">Your message has been sent. Expect a response within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <label htmlFor="name" className="block text-base font-medium text-darkGray mb-3">Full Name</label>
                        <motion.div whileHover={{ scale: 1.03 }} whileFocus={{ scale: 1.03 }}>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full px-6 py-4 rounded-xl border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primaryLight outline-none transition-all`}
                            placeholder="Enter your name"
                          />
                        </motion.div>
                        {formErrors.name && (
                          <motion.p className="text-red-500 text-sm mt-2" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                            {formErrors.name}
                          </motion.p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-base font-medium text-darkGray mb-3">Email Address</label>
                        <motion.div whileHover={{ scale: 1.03 }} whileFocus={{ scale: 1.03 }}>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-6 py-4 rounded-xl border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primaryLight outline-none transition-all`}
                            placeholder="your.email@example.com"
                          />
                        </motion.div>
                        {formErrors.email && (
                          <motion.p className="text-red-500 text-sm mt-2" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                            {formErrors.email}
                          </motion.p>
                        )}
                      </div>
                    </div>
                    <div className="mb-8">
                      <label htmlFor="subject" className="block text-base font-medium text-darkGray mb-3">Subject</label>
                      <motion.div whileHover={{ scale: 1.03 }} whileFocus={{ scale: 1.03 }}>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={`w-full px-6 py-4 rounded-xl border ${formErrors.subject ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primaryLight outline-none transition-all`}
                          placeholder="What’s on your mind?"
                        />
                      </motion.div>
                      {formErrors.subject && (
                        <motion.p className="text-red-500 text-sm mt-2" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                          {formErrors.subject}
                        </motion.p>
                      )}
                    </div>
                    <div className="mb-10">
                      <label htmlFor="message" className="block text-base font-medium text-darkGray mb-3">Your Message</label>
                      <motion.div whileHover={{ scale: 1.03 }} whileFocus={{ scale: 1.03 }}>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className={`w-full px-6 py-4 rounded-xl border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primaryLight outline-none transition-all`}
                          placeholder="Share your ideas or requirements..."
                        ></textarea>
                      </motion.div>
                      {formErrors.message && (
                        <motion.p className="text-red-500 text-sm mt-2" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                          {formErrors.message}
                        </motion.p>
                      )}
                    </div>
                    <motion.button
                      type="submit"
                      className="w-full px-8 py-5 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
                      whileHover={{ y: -4, scale: 1.05, boxShadow: `0 0 20px ${colors.primaryLight}40` }}
                      whileTap={{ scale: 0.98 }}
                      style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryDark})` }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">Send Message <FaCheck /></span>
                      <motion.span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-30 transition-opacity" />
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
              <motion.div className="mt-10 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="text-lg text-darkGray mb-4">Need immediate assistance?</p>
                <motion.a
                  href="#"
                  className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-primaryDark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ y: -4, scale: 1.05, boxShadow: `0 0 20px ${colors.primaryLight}40` }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule a Call
                </motion.a>
              </motion.div>
            </div>
            <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: colors.primary }}>Locate Us</h3>
                <motion.div
                  className="w-full h-72 md:h-96 rounded-xl overflow-hidden relative border border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primaryDark/10 z-10"></div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291661!2d-73.98784492452545!3d40.7484409713896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuNiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="relative z-0"
                  ></iframe>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl"
                      animate={{ scale: [1, 1.3, 1], boxShadow: [`0 0 0 0 ${colors.accent}40`, `0 0 0 30px ${colors.accent}00`] }}
                      transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop' }}
                      style={{ backgroundColor: colors.primary }}
                    >
                      <FaMapMarkerAlt className="text-2xl" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: colors.primary }}>Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i, duration: 0.9 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">" {testimonial.text} "</p>
                <p className="font-semibold text-xl" style={{ color: colors.primaryDark }}>{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Support Channels Section */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: colors.primary }}>Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {supportChannels.map((channel, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i, duration: 0.9 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-lightGray to-white drop-shadow-md">
                  <channel.icon className="text-3xl" style={{ color: colors.primary }} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{channel.label}</h3>
                <motion.a
                  href={channel.href}
                  className="text-lg text-darkGray hover:text-accent transition-colors block"
                  whileHover={{ scale: 1.05 }}
                >
                  {channel.value}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: colors.primary }}>What’s New</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {updates.map((update, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i, duration: 0.9 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.primary }}>{update.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{update.date}</p>
                <p className="text-gray-700 text-base">{update.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;