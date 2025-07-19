import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
 // Update this path

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const navRef = useRef(null);
  const { scrollY } = useScroll();

  // Advanced scroll behavior (hide on scroll down, show on scroll up)
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 100) {
      setIsHidden(false);
      return;
    }

    if (latest > lastScrollY && latest > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setLastScrollY(latest);
  });

  // Navigation links with optional icons
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    // { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  // Magnetic button effect
  const magneticButton = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  // Stagger animation for mobile menu items
  const menuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { 
      x: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  return (
    <motion.header
      ref={navRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        y: isHidden ? -100 : 0,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 1)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)'
      }}
      transition={{ 
        duration: 0.4,
        backgroundColor: { duration: 0.2 },
        backdropFilter: { duration: 0.2 }
      }}
      className={`fixed w-full z-50 ${isScrolled ? 'shadow-lg' : ''}`}
    >
      <nav className="bg-transparent px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo with advanced hover effect */}
          <motion.div
            className="flex items-center"
            whileHover="hover"
            onHoverStart={() => setIsHoveringLogo(true)}
            onHoverEnd={() => setIsHoveringLogo(false)}
          >
            <Link to="/" className="relative">
              <motion.img
                src="./Logo.png"
                alt="Infiow Logo"
                height="40"
                className="h-10"
                animate={{
                  rotate: isHoveringLogo ? [0, 5, -5, 0] : 0,
                  transition: { duration: 0.6 }
                }}
              />
              <motion.span
                className="absolute inset-0 bg-green-600 opacity-0 rounded-full"
                animate={{
                  opacity: isHoveringLogo ? 0.1 : 0,
                  scale: isHoveringLogo ? 1.5 : 1,
                  transition: { duration: 0.3 }
                }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation with advanced effects */}
          <div className="hidden lg:flex items-center space-x-6">
            <ul className="flex flex-row space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => 
                      `relative px-1 py-2 text-black ${isActive ? 'text-green-600' : 'hover:text-green-600'}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <motion.span 
                          className="relative z-10"
                          whileHover={{ y: -2 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                          {link.name}
                        </motion.span>
                        {isActive && (
                          <motion.span
                            className="absolute left-0 bottom-1.5 h-0.5 bg-green-600"
                            layoutId="activeIndicator"
                            initial={false}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            style={{ width: '100%' }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            {/* CTA Button with magnetic effect */}
            <motion.div
              className="ml-4"
              whileHover="hover"
              whileTap="tap"
              variants={magneticButton}
            >
              <Link
                to="/quote"
                className="relative px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full overflow-hidden group"
              >
                <span className="relative z-10">Get a Quote</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </div>

          {/* Modern hamburger menu button */}
          <div className="lg:hidden flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 rounded-full focus:outline-none"
              whileHover={{ backgroundColor: 'rgba(0, 166, 118, 0.1)' }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                  closed: { rotate: 0 },
                  open: { rotate: 180 }
                }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                      variants={{
                        closed: { opacity: 0, pathLength: 0 },
                        open: { opacity: 1, pathLength: 1 }
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <>
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16"
                        variants={{
                          closed: { opacity: 1 },
                          open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.1 }}
                      />
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 12h16"
                        variants={{
                          closed: { opacity: 1 },
                          open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.1 }}
                      />
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 18h16"
                        variants={{
                          closed: { opacity: 1 },
                          open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.1 }}
                      />
                    </>
                  )}
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: { type: 'spring', stiffness: 300, damping: 30 }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: { duration: 0.3, ease: 'easeInOut' }
              }}
              className="lg:hidden overflow-hidden"
            >
              <motion.ul 
                className="flex flex-col space-y-4 py-6 px-4 bg-white bg-opacity-95 backdrop-blur-sm"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                  },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    variants={menuItemVariants}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => 
                        `block py-3 px-4 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-green-600 text-white' 
                            : 'text-black hover:bg-gray-100'
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <motion.span className="flex items-center">
                        {link.name}
                      </motion.span>
                    </NavLink>
                  </motion.li>
                ))}
                <motion.li
                  variants={menuItemVariants}
                  className="mt-4"
                >
                  <Link
                    to="/quote"
                    className="block w-full text-center py-3 px-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;