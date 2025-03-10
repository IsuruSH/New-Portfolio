import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "../data/certifications";
import { tutorials } from "../data/tutorials";
import { ExternalLink, X } from "lucide-react";
import FloatingOrbs from "./FloatingOrbs";

const CertificationsSection: React.FC = () => {
  const [selectedCertification, setSelectedCertification] = useState<
    string | null
  >(null);
  const [tutorialCategory, setTutorialCategory] = useState<string>("all");

  const tutorialCategories = [
    "all",
    ...new Set(tutorials.map((t) => t.category)),
  ];

  const filteredTutorials =
    tutorialCategory === "all"
      ? tutorials
      : tutorials.filter((t) => t.category === tutorialCategory);

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "ongoing":
        return "Currently Studying";
      case "completed":
        return "Completed";
      case "planned":
        return "Planned";
      default:
        return status;
    }
  };

  return (
    <section id="certifications" className="py-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-50/80 -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl -z-10"></div>

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
          <h2 className="section-title">Certifications & Learning</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            A collection of my professional certifications and educational
            resources that have shaped my skills and knowledge.
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="mb-20">
          <motion.h3
            className="section-subtitle text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Professional Certifications
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="glass-card overflow-hidden group cursor-pointer"
                onClick={() => setSelectedCertification(cert.id)}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent">
                    <div className="absolute bottom-3 left-3">
                      <div className="text-xs font-medium text-white">
                        {cert.issuer}
                      </div>
                      <div className="text-xs text-white/80">{cert.date}</div>
                    </div>
                  </div>
                  <div className={`status-badge status-${cert.status}`}>
                    {getStatusLabel(cert.status)}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-medium text-secondary-800 mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-secondary-600 mb-4 line-clamp-2">
                    {cert.description}
                  </p>
                  <div className="flex justify-end">
                    <motion.button
                      className="text-primary-600 font-medium text-sm flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details <ExternalLink size={14} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tutorials */}
        <div>
          <motion.h3
            className="section-subtitle text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            YouTube Tutorials Followed
          </motion.h3>

          {/* Tutorial filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-8 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {tutorialCategories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setTutorialCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  tutorialCategory === category
                    ? "bg-accent-500 text-white shadow-md"
                    : "bg-white text-secondary-700 hover:bg-accent-100"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Tutorial carousel */}
          <motion.div
            className="overflow-x-auto pb-6 -mx-4 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex space-x-6 min-w-max">
              {filteredTutorials.map((tutorial, index) => (
                <motion.a
                  key={tutorial.id}
                  href={tutorial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card w-72 overflow-hidden group"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.2 },
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={tutorial.image}
                      alt={tutorial.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent">
                      <div className="absolute bottom-3 left-3">
                        <div className="text-xs font-medium text-white">
                          {tutorial.channel}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-medium text-secondary-800 mb-2">
                      {tutorial.title}
                    </h4>
                    <div className="mb-3">
                      <span className="badge bg-accent-100 text-accent-800">
                        {tutorial.category.charAt(0).toUpperCase() +
                          tutorial.category.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-secondary-600 font-handwriting">
                      {tutorial.notes}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
