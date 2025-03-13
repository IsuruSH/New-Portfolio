import React from "react";
import { motion } from "framer-motion";
import { Github, Heart, Linkedin, Mail, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-50/80 to-white -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <motion.h3
              className="text-xl font-serif font-medium text-secondary-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Portfolio
            </motion.h3>
            <motion.p
              className="text-secondary-600 mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Creating elegant digital experiences with a focus on user-centered
              design and clean, maintainable code. Let's build something
              beautiful together.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href="https://github.com/IsuruSH"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white shadow-soft text-secondary-700 hover:text-primary-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/isuru-shanaka-03a3a721b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white shadow-soft text-secondary-700 hover:text-primary-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:shanakaisuru11@gmail.com"
                className="p-2 rounded-full bg-white shadow-soft text-secondary-700 hover:text-primary-600 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium text-secondary-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-secondary-600 hover:text-primary-600 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-secondary-600 hover:text-primary-600 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-secondary-600 hover:text-primary-600 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-secondary-600 hover:text-primary-600 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-secondary-600 hover:text-primary-600 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-secondary-600 hover:text-primary-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium text-secondary-800 mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="text-secondary-600">Sri Lanka</li>
              <li>
                <a
                  href="mailto:shanakaisuru11@gmail.com"
                  className="text-secondary-600 hover:text-primary-600 transition-colors"
                >
                  shanakaisuru11@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+94768324613"
                  className="text-secondary-600 hover:text-primary-600 transition-colors"
                >
                  +94 768 324 613
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-secondary-200 pt-8 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-secondary-600 text-sm mb-4 sm:mb-0">
            © {currentYear} Isuru Shanaka. All rights reserved.
          </p>
          <p className="text-secondary-600 text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-accent-500" /> using
            React & Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
