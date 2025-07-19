import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Enhanced testimonial data with ratings
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechNova",
    quote: "Infiow transformed our digital presence with their innovative website design! The team delivered beyond our expectations with cutting-edge solutions.",
    image: "/client1.jpg",
    rating: 5,
    date: "May 2024",
    project: "Corporate Website Redesign"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CMO, MarketGrow",
    quote: "Their digital marketing strategies doubled our engagement in weeks! The data-driven approach and creative execution were exceptional.",
    image: "/client2.jpg",
    rating: 5,
    date: "April 2024",
    project: "Digital Marketing Campaign"
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Creative Director, Visionary Media",
    quote: "The video editing team brought our vision to life flawlessly. Their technical expertise and artistic touch elevated our brand storytelling.",
    image: "/client3.jpg",
    rating: 4,
    date: "March 2024",
    project: "Brand Documentary"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Brand Manager, Elevate Designs",
    quote: "Graphic design expertise that set us apart from the competition! Infiow's team understands the perfect blend of aesthetics and functionality.",
    image: "/client4.jpg",
    rating: 5,
    date: "February 2024",
    project: "Brand Identity Package"
  }
];

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// Interactive testimonial card with 3D tilt effect
const TestimonialCard = ({ testimonial, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setRotate({ x: rotateX, y: rotateY });
    controls.start({ 
      scale: 1.03,
      transition: { duration: 0.3 }
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    controls.start({ 
      scale: 1,
      transition: { duration: 0.3 }
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-2xl overflow-hidden h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
      animate={{
        rotateX: isHovered ? rotate.x : 0,
        rotateY: isHovered ? rotate.y : 0,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
    >
      <motion.div
        className="h-full bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 flex flex-col"
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
      >
        {/* Glow effect */}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}
        
        {/* Meta info */}
        <div className="flex justify-between items-start mb-6">
          <StarRating rating={testimonial.rating} />
          <span className="text-xs text-gray-400">{testimonial.date}</span>
        </div>
        
        {/* Quote */}
        <div className="relative mb-8 flex-1">
          <svg 
            className="absolute -top-6 -left-2 text-teal-400/20 w-16 h-16" 
            viewBox="0 0 24 24"
          >
            <path 
              fill="currentColor" 
              d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
            />
          </svg>
          <p className="text-gray-200 text-lg leading-relaxed pl-8 relative z-10">
            {testimonial.quote}
          </p>
        </div>
        
        {/* Client info */}
        <div className="flex items-center mt-auto pt-6 border-t border-gray-700/50">
          <div className="relative mr-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-teal-400/50 bg-gray-700 flex items-center justify-center">
              {testimonial.image ? (
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-white text-xl font-bold">
                  {testimonial.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 bg-teal-500 rounded-full p-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium">{testimonial.name}</h4>
            <p className="text-teal-300 text-sm">{testimonial.role}</p>
            <p className="text-gray-400 text-xs mt-1">{testimonial.project}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main testimonials section with horizontal scroll
const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.offsetWidth || 0;
      scrollRef.current.scrollTo({
        left: activeIndex * (cardWidth + 32),
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  return (
    <section className="relative w-full py-24 bg-gray-950 overflow-hidden">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]"></div>
      </div>
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-teal-400 opacity-10"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 50],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Trusted by Innovators
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Join hundreds of satisfied clients who've transformed their digital presence with our solutions.
            </p>
          </div>
          
          <div className="flex mt-8 md:mt-0">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${index === activeIndex ? 'bg-teal-400 w-6' : 'bg-gray-700'}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Horizontal scrolling testimonials */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
              style={{ scrollSnapAlign: 'start' }}
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700/50 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">4.9</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">250+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">98%</div>
            <div className="text-gray-400">Repeat Business</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;