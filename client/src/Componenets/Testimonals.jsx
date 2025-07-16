import { motion } from 'framer-motion';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechNova",
    quote: "Infiow transformed our digital presence with their innovative website design! The team delivered beyond our expectations with cutting-edge solutions.",
    image: "/client1.jpg" // Replace with your actual image path
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CMO, MarketGrow",
    quote: "Their digital marketing strategies doubled our engagement in weeks! The data-driven approach and creative execution were exceptional.",
    image: "/client2.jpg" // Replace with your actual image path
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Creative Director, Visionary Media",
    quote: "The video editing team brought our vision to life flawlessly. Their technical expertise and artistic touch elevated our brand storytelling.",
    image: "/client3.jpg" // Replace with your actual image path
  },
  {
    id: 4,
    name: "David Kim",
    role: "Brand Manager, Elevate Designs",
    quote: "Graphic design expertise that set us apart from the competition! Infiow's team understands the perfect blend of aesthetics and functionality.",
    image: "/client4.jpg" // Replace with your actual image path
  }
];

// Testimonial card component
const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      className="relative bg-gray-900 bg-opacity-60 backdrop-blur-lg rounded-xl p-6 border border-gray-700 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -5 }}
    >
      {/* Holographic accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500"></div>
      
      <div className="flex flex-col h-full">
        {/* Quote text */}
        <p className="text-gray-200 italic mb-6 text-lg font-light leading-relaxed">
          "{testimonial.quote}"
        </p>
        
        <div className="mt-auto flex items-center">
          {/* Client image - replace with your actual images */}
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-teal-400 bg-gray-700 flex items-center justify-center">
              {testimonial.image ? (
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-white text-2xl font-bold">
                  {testimonial.name.charAt(0)}
                </span>
              )}
            </div>
          </div>
          
          {/* Client info */}
          <div>
            <h4 className="text-white font-medium">{testimonial.name}</h4>
            <p className="text-teal-300 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main testimonials section
const TestimonialsSection = () => {
  return (
    <section className="relative w-full min-h-[800px] py-20 overflow-hidden bg-gray-950">
      {/* Digital background pattern created with CSS */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00BCD410_0%,transparent_70%)]"></div>
      </div>
      
      {/* Animated floating elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-teal-400 opacity-10 blur-xl"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 50],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10 h-full">
        {/* Section title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            What Clients Say
          </span>
          <motion.span 
            className="block h-1 mt-4 mx-auto w-1/4 bg-gradient-to-r from-teal-400 to-blue-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.h2>

        {/* Testimonials grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;