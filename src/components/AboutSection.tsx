import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, BookOpen, Coffee, Code, Heart, Map } from "lucide-react";
import FloatingOrbs from "./FloatingOrbs";

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <Code size={20} />, value: "1+", label: "Years Experience" },
    { icon: <BookOpen size={20} />, value: "5+", label: "Projects Completed" },
    { icon: <Coffee size={20} />, value: "1,000+", label: "Cups of Coffee" },
    { icon: <Heart size={20} />, value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-50/80 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary-100/50 rounded-full blur-3xl -z-10"></div>

      {/* Floating orbs */}
      <FloatingOrbs />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-soft glow-border">
              <img
                src="/my-photo.webp"
                alt="Isuru Shanaka"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/50 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-100 rounded-full -z-10"></div>

            {/* Location badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-full py-2 px-4 shadow-md flex items-center gap-2">
              <Map size={16} className="text-primary-500" />
              <span className="text-secondary-800 text-sm font-medium">
                Sri Lanka
              </span>
            </div>

            {/* Award badge */}
            <div className="absolute top-6 right-6 bg-accent-500 text-white rounded-full p-3 shadow-md">
              <Award size={24} />
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl font-serif font-medium text-secondary-800 mb-4">
              Hello, I'm <span className="text-primary-600">Isuru Shanaka</span>
            </h3>

            <div className="space-y-4 text-secondary-600 mb-8">
              <p>
                I am a highly motivated developer with a strong passion for
                building scalable, high-performance applications. With expertise
                in both front-end and back-end development, I specialize in
                crafting seamless user experiences and architecting efficient,
                robust solutions. My goal is to merge creativity with technology
                to bring innovative ideas to life.
              </p>
              <p>
                My skill set includes full-stack development using technologies
                like React, Next.js, Node.js, and Tailwind CSS. On the backend,
                I design scalable microservices and APIs that ensure high
                availability and performance. I also have hands-on experience
                with cloud solutions and DevOps, leveraging platforms like AWS,
                Docker, and CI/CD pipelines to deploy and manage applications
                efficiently.
              </p>
              <p>
                Beyond development, I am deeply interested in automation, web
                scraping, and optimizing workflows to enhance productivity.
                Whether it's a dynamic web application, a cloud-based solution,
                or a data-driven automation tool, I am always eager to tackle
                new challenges and deliver impactful results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-4 text-center shadow-soft"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex justify-center mb-2 text-primary-500">
                    {stat.icon}
                  </div>
                  <div className="font-serif font-medium text-xl text-secondary-800">
                    {stat.value}
                  </div>
                  <div className="text-xs text-secondary-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="btn-primary inline-flex"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
