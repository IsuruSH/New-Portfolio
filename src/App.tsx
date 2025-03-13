import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import BlogSection from "./components/BlogSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (
        anchor &&
        anchor.hash &&
        anchor.hash.startsWith("#") &&
        anchor.origin + anchor.pathname ===
          window.location.origin + window.location.pathname
      ) {
        e.preventDefault();

        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top:
              targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for navbar
            behavior: "smooth",
          });

          // Update URL without scrolling
          window.history.pushState(null, "", anchor.hash);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />

      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <BlogSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
