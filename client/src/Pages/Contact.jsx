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
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-[#00A676] via-[#00A676] to-[#007D5D]">
  <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080?text=Digital+Horizon')] bg-cover bg-center opacity-25"></div>
  <div className="absolute inset-0 bg-gradient-to-br from-rgba(0,166,118,0.1) to-transparent opacity-90"></div>
  {Array(30).fill().map((_, i) => {
    const speed = Math.random() * 1.5 + 0.5;
    return (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white/70"
        style={{ left: `${Math.random() * 100}vw`, top: `${Math.random() * 100}vh`, width: Math.random() * 4 + 1, height: Math.random() * 4 + 1 }}
        animate={{
          scale: [1, 1.3 + (Math.random() * 4 + 1) / 5, 1],
          opacity: [0.4, 0.8, 0.4],
          x: [0, Math.random() * 60 - 30, 0],
          y: [0, Math.random() * 60 - 30, 0]
        }}
        transition={{
          duration: Math.max(2 / speed, 0.1), // Ensure minimum duration of 0.1s
          repeat: Infinity,
          delay: Math.random() * 3
        }}
      />
    );
  })}
  <div className="relative z-10 h-full flex items-center justify-center text-center px-6 py-16">
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.h1
        className="text-7xl md:text-8xl font-extrabold mb-8 leading-tight"
        style={{
          background: 'linear-gradient(45deg, #76C893, #4DD0A0)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          textShadow: '0 0 15px rgba(118, 200, 147, 0.8), 0 0 30px rgba(0, 166, 118, 0.5)'
        }}
        animate={{
          scale: [1, 1.08, 1],
          textShadow: [
            '0 0 15px rgba(118, 200, 147, 0.8)',
            '0 0 30px rgba(118, 200, 147, 0.8)',
            '0 0 15px rgba(118, 200, 147, 0.8)'
          ]
        }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
      >
        Ignite Your Digital Revolution
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-10 max-w-5xl mx-auto text-white/90 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1.5 }}
      >
        Join forces with Infiow to redefine your digital presence with groundbreaking innovations and bespoke strategies tailored to your vision.
      </motion.p>
      <motion.div className="space-x-6">
        <motion.a
          href="#contact-form"
          className="inline-block px-12 py-5 bg-[#76C893] text-white font-bold rounded-lg shadow-xl hover:bg-[#007D5D] transition-all duration-400"
          whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(118, 200, 147, 0.6)' }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Journey
        </motion.a>
        <motion.a
          href="#"
          className="inline-block px-12 py-5 bg-white/80 text-[#00A676] font-bold rounded-lg shadow-xl hover:bg-[#4DD0A0] transition-all duration-400"
          whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(77, 208, 160, 0.6)' }}
          whileTap={{ scale: 0.95 }}
        >
          Discover More
        </motion.a>
      </motion.div>
    </motion.div>
    <motion.div
      className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      animate={{ y: [0, 20, 0], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    >
      <FaChevronDown className="text-5xl text-white drop-shadow-lg" />
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