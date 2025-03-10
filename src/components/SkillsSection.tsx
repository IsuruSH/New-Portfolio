import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";
import { SkillCategory } from "../types";
import FloatingOrbs from "./FloatingOrbs";

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">(
    "all"
  );

  const categories: { value: SkillCategory | "all"; label: string }[] = [
    { value: "all", label: "All Skills" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "design", label: "Design" },
    { value: "tools", label: "Tools" },
    { value: "languages", label: "Languages" },
    { value: "ai", label: "AI & ML" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 to-white -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent -z-10"></div>

      {/* Floating orbs */}
      <FloatingOrbs />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Skills</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            A comprehensive collection of technologies, tools, and methodologies
            I've mastered throughout my journey as a developer.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.value
                  ? "bg-primary-500 text-white shadow-sm"
                  : "bg-white text-secondary-700 hover:bg-primary-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
          variants={container}
          initial="hidden"
          animate="show"
          key={activeCategory}
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="relative group"
            >
              <motion.div
                className="bg-white rounded-xl p-3 flex flex-col items-center text-center h-full border border-primary-100/50 hover:border-primary-200 transition-colors duration-300"
                whileHover={{
                  y: -5,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  },
                }}
              >
                <div className="w-10 h-10 mb-2 flex items-center justify-center relative">
                  <motion.img
                    src={skill.logo}
                    alt={skill.name}
                    className="max-w-full max-h-full object-contain"
                    whileHover={{
                      rotate: [0, -10, 10, -5, 5, 0],
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                      },
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-primary-500/10 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: Math.random() * 2,
                    }}
                  />
                </div>
                <h3 className="text-xs font-medium text-secondary-800">
                  {skill.name}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
