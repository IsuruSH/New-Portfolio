import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectCategory, Project } from "../types";
import { ExternalLink, Github, X } from "lucide-react";
import FloatingOrbs from "./FloatingOrbs";

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | "all"
  >("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { value: ProjectCategory | "all"; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "ai", label: "AI & ML" },
    { value: "creative", label: "Creative" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "ongoing":
        return "In Progress";
      case "completed":
        return "Completed";
      case "planned":
        return "Coming Soon";
      default:
        return status;
    }
  };

  return (
    <section id="projects" className="py-10 relative overflow-hidden">
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
          <h2 className="section-title">My Projects</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            A collection of my work showcasing my skills and experience in
            creating elegant, functional, and user-centered digital experiences.
          </p>
        </motion.div>

        {/* Filter buttons */}
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
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.value
                  ? "bg-primary-500 text-white shadow-md"
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

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="glass-card overflow-hidden group cursor-pointer glow-border"
                onClick={() => openProject(project)}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`status-badge status-${project.status}`}>
                    {getStatusLabel(project.status)}
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium text-secondary-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap mb-4">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span key={index} className="badge">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="badge">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-end">
                    <motion.button
                      className="text-primary-600 font-medium text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openProject(project);
                      }}
                    >
                      View Details →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-secondary-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeProject}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25 }}
                className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={closeProject}
                    className="absolute top-4 right-4 bg-white/80 p-2 rounded-full text-secondary-800 hover:text-primary-600 transition-colors"
                  >
                    <X size={20} />
                  </button>
                  <div
                    className={`status-badge status-${selectedProject.status}`}
                  >
                    {getStatusLabel(selectedProject.status)}
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl sm:text-3xl font-serif font-medium text-secondary-800">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <p className="text-secondary-600 mb-6">
                    {selectedProject.longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-secondary-800 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap">
                      {selectedProject.techStack.map((tech, index) => (
                        <span key={index} className="badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline flex items-center gap-2"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
