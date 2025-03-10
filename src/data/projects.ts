import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "ceylon-saga",
    title: "Ceylon Saga",
    description:
      "A tourism platform offering curated tour packages and informative blogs about Sri Lanka, managed by an admin.",
    longDescription:
      "Ceylon saga is a comprehensive tourism platform showcasing a variety of tour packages and blogs about Sri Lanka. The platform allows admin users to add, update, and manage tour details, blogs, and other relevant information. Users can explore different travel options, read about exciting destinations, and find inspiration for their next adventure. The website is designed with a focus on user experience, with a clean, modern interface built using Next.js and Tailwind CSS.",
    image: "/Projects/ceylonsaga.png",
    category: "fullstack",
    techStack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Next.js",
      "Tailwind CSS",
    ],
    demoUrl: "https://ceylonsaga.com",

    featured: true,
    status: "completed",
  },
  {
    id: "lime-house",
    title: "Lime House",
    description:
      "A beautiful villa website showcasing its features, with an easy-to-use interface for bookings and inquiries.",
    longDescription:
      "Lime House is a villa website offering a stunning, user-friendly frontend to explore the villa's amenities and book stays. The website allows users to view detailed information about the villa, including photos, availability, and pricing. It also includes an easy-to-use contact form powered by Nodemailer to handle inquiries and bookings. The sleek design utilizes Next.js and Tailwind CSS for a responsive, modern experience.",
    image: "/Projects/limehouse.png",
    category: "frontend",
    techStack: ["Next.js", "Tailwind CSS", "Nodemailer"],
    demoUrl: "https://limehousesl.com",

    featured: true,
    status: "completed",
  },
  {
    id: "result-view",
    title: "Result View",
    description:
      "A platform for students to view their academic results, including ranks, GPAs, and subject-wise GPAs, now with secure login.",
    longDescription:
      "The Result View website allows students to check their academic performance without requiring credentials. Initially, students could view their ranks, GPAs with new results, and subject-wise GPAs freely. However, the security vulnerability was identified and fixed, and the website was restructured to require login for checking subject-wise GPAs, as requested by students despite the potential legal concerns. The platform aims to provide a secure and easy way for students to track their academic progress.",
    image: "/Projects/results.png",
    category: "frontend",
    techStack: ["React", "Node.js", "Tailwind CSS"],
    demoUrl: "https://results.isurushanaka.me",
    githubUrl: "https://github.com/IsuruSH/Results-View-with-Subject-Gpas.git",
    featured: true,
    status: "completed",
  },
  {
    id: "tringledo",
    title: "Tringledo",
    description:
      "A modern and dynamic landing page for a startup company, showcasing its services and products.",
    longDescription:
      "Tringledo is a sleek and engaging landing page for a startup company. The website features a clean, modern design with interactive animations powered by Framer Motion, making the user experience smooth and visually appealing. It provides essential information about the company’s products and services, along with a contact form powered by Nodemailer for inquiries and communication. The page is built using Next.js and Tailwind CSS, focusing on responsiveness and performance.",
    image: "/Projects/tringledo.png",
    category: "frontend",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Nodemailer"],
    demoUrl: "https://tringledo.com",

    featured: false,
    status: "completed",
  },
  {
    id: "udemy-free-courses",
    title: "Udemy Free Courses",
    description:
      "A platform that displays daily free courses from Udemy, with manual updates by the admin, and plans for automation.",
    longDescription:
      "The Udemy Free Courses platform displays daily free courses from Udemy, with course updates currently managed manually by the admin. The platform, built with React and connected to Supabase, allows users to browse and explore free courses. There are plans to automate the process of updating the course list to improve efficiency and provide real-time updates for users. All the code for the platform is AI-generated, showcasing the power of AI in software development.",
    image: "/Projects/udemycourses.png",
    category: "fullstack",
    techStack: ["React", "Supabase", "Bolt.new"],
    demoUrl: "https://freeudemycourses.isurushanaka.me",

    featured: false,
    status: "ongoing",
  },
];
