import React from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  subTitle?: string;
  imageUrl: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "Barrios - E-Commerce",
    subTitle:
      "An e-commerce platform offering a seamless shopping experience with advanced search, secure payments, and user reviews..",
    imageUrl: "https://i.postimg.cc/V6cjDjwP/image-01.avif",
    techStack: [
      " #React js",
      "#Node.js",
      "#MongoDB",
      "#Tailwind CSS ,# Express.js",
    ],
  },
  {
    title: "Bistro Boss is Restaurant management website.",
    subTitle:
      "A modern Restaurant menu management website. User can login here",
    imageUrl: "https://i.postimg.cc/rp540KrP/image-02.avif",
    techStack: [
      " #React js",
      "#Node.js",
      "#MongoDB",
      "#Tailwind CSS ,# Express.js",
    ],
  },
  {
    title: "Link Shortener",
    subTitle:
      "A link shortener project that able to make shorter long link secure client portal, and responsive design..",
    imageUrl: "https://i.postimg.cc/xT7N6KGF/image-03.webp",
    techStack: [
      " #React js",
      "#Node.js",
      "#MongoDB",
      "#Tailwind CSS ,# Express.js",
    ],
  },
  {
    title: "Allied Analysis Consultation",
    subTitle:
      "A modern consulting website featuring stunning animations, secure client portal, and responsive design..",
    imageUrl: "https://i.postimg.cc/vTTDzB4Q/image-04.png",
    techStack: [
      " #React js",
      "#Node.js",
      "#MongoDB",
      "#Tailwind CSS ,# Express.js",
    ],
  },
  {
    title: "Need Blood",
    subTitle:
      "In this need blood web application user can add blood request and find blood donors.",
    imageUrl: "https://i.postimg.cc/vTwb1Z5h/imag-05.jpg",
    techStack: [
      " #React js",
      "#Node.js",
      "#MongoDB",
      "#Tailwind CSS ,# Express.js",
    ],
  },
  {
    title: "Leon Engineering Works",
    subTitle:
      "This is bussines management website. This website is portfolio webstie of this company.",
    imageUrl: "https://i.postimg.cc/qBw567c0/image-06.jpg",
    techStack: [
      " #React js",
      "#Node.js",
      "#MongoDB",
      "#Tailwind CSS ,# Express.js",
    ],
  },
  {
    title: "Knowledge Base AI Bot",
    subTitle:
      "A knowledge Base Chat Bot which is able to response based on context..",
    imageUrl: "https://i.postimg.cc/rsZjnKgx/image-07.jpg",
    techStack: [
      " #React js",
      "#Node.js",
      "#MongoDB",
      "#Tailwind CSS ,# Express.js",
    ],
  },
  {
    title: "Food Ordering App",
    subTitle: "Simple UI for browsing menus and ordering food.",
    imageUrl: "https://i.postimg.cc/JhRXXR5L/image-08.avif",
    techStack: [
      " #React js",
      "#Node.js",
      "#MongoDB",
      "#Tailwind CSS ,# Express.js",
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0F172A] text-white py-10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl font-extrabold text-white"> Projects</h2>
        <p className="text-slate-400 mt-3 text-[18px] font-medium">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="min-w-[380px] bg-[#1E293B] rounded-2xl overflow-hidden shadow-lg hover:shadow-teal-500/20 transition-all duration-500"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-70 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                {project.subTitle && (
                  <p className="text-slate-400 text-[20px] mt-1 line-clamp-3">
                    {project.subTitle}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-[18px] text-teal-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
