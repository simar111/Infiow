import { motion } from 'framer-motion';

export const TestimonialCard = ({ testimonial, index }) => {
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
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
           style={{ boxShadow: '0 0 30px rgba(0, 188, 212, 0.2)' }}></div>
      
      {/* Quote icon */}
      <svg className="absolute top-6 right-6 w-8 h-8 text-teal-400 opacity-20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      <div className="flex flex-col h-full">
        {/* Quote text */}
        <p className="text-gray-200 italic mb-6 text-lg font-light leading-relaxed">
          "{testimonial.quote}"
        </p>
        
        <div className="mt-auto flex items-center">
          {/* Client image */}
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-teal-400">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-transparent hover:border-blue-400 transition-all duration-300 pointer-events-none"></div>
          </div>
          
          {/* Client info */}
          <div>
            <h4 className="text-white font-medium">{testimonial.name}</h4>
            <p className="text-teal-300 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
      
      {/* Animated tech elements */}
      <motion.div 
        className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-blue-500 opacity-10 blur-md"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 4 + index,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
    </motion.div>
  );
};