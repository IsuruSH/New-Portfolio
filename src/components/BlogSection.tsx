import React from "react";
import { motion } from "framer-motion";
import { blogs } from "../data/blogs";
import { ArrowUpRight, BookOpen, Calendar } from "lucide-react";
import FloatingOrbs from "./FloatingOrbs";

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 relative overflow-hidden">
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
          <h2 className="section-title">Latest Blog Posts</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Sharing insights, experiences, and knowledge about software
            development, architecture, and technology trends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.a
              key={blog.id}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="glass-card h-full overflow-hidden group-hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-secondary-800">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-secondary-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen size={14} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-medium text-secondary-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
                    {blog.description}
                  </p>

                  <div className="flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors">
                    Read More
                    <ArrowUpRight
                      size={16}
                      className="ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-12"
        >
          <a
            href="https://medium.com/@shanakaisuru11"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            View All Posts
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
