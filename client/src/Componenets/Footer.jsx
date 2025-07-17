import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Infiow
              </span>
              <span className="ml-2 text-xs px-2 py-1 bg-teal-500/10 text-teal-400 rounded-full">
                v3.0
              </span>
            </div>
            <p className="text-gray-400">
              Pioneering the future of digital experiences through innovative technology and creative solutions.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<FaLinkedin />} url="https://linkedin.com/company/infiow" />
              <SocialIcon icon={<FaTwitter />} url="https://twitter.com/infiow" />
              <SocialIcon icon={<FaInstagram />} url="https://instagram.com/infiow" />
              <SocialIcon icon={<FaGithub />} url="https://github.com/infiow" />
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <FooterLink text="Web Development" />
              <FooterLink text="Digital Marketing" />
              <FooterLink text="UI/UX Design" />
              <FooterLink text="Video Production" />
              <FooterLink text="Brand Strategy" />
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink text="About Us" />
              <FooterLink text="Case Studies" />
              <FooterLink text="Blog" />
              <FooterLink text="Careers" />
              <FooterLink text="Contact" />
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-gray-500 text-sm mb-4 md:mb-0"
          >
            &copy; {currentYear} Infiow Technologies. All rights reserved.
          </motion.p>

          <div className="flex space-x-6">
            <FooterLink text="Privacy Policy" small />
            <FooterLink text="Terms of Service" small />
            <FooterLink text="Cookie Policy" small />
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable footer link component
const FooterLink = ({ text, small = false }) => {
  return (
    <motion.li
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.95 }}
      className={small ? "text-gray-500 hover:text-teal-400 text-sm" : "text-gray-400 hover:text-white"}
    >
      <a href="#" className="transition-colors duration-200">
        {text}
      </a>
    </motion.li>
  );
};

// Reusable social icon component
const SocialIcon = ({ icon, url }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
};

export default Footer;