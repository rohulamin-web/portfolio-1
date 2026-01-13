interface Project {
  title: string;
  subTitle?: string;
  imageUrl: string;
  techStack: string[];
  viewCode: string;
  viewLiveApp?: string;
}

const project: Project[] = [
  {
    title: "Madrasha Website",
    subTitle:
      "Madrasa is a digital learning platform dedicated to Islamic education. It provides access to Quran and Islamic studies for students and teachers..",
    imageUrl: "/images/madrasa.png",
    techStack: ["Html", " #React js", "#Tailwind CSS"],
    viewCode: "https://github.com/rohulamin-web/madrasa",
    viewLiveApp: "https://madrasa-topaz.vercel.app/",
  },
  {
    title: "Personal Portfolio.",
    subTitle:
      "A modern personal portfolio website showcasing my skills and projects.",
    imageUrl: "/images/portfolio.png",
    techStack: ["Html", "#Tailwind CSS", " #React js", "Typescript"],
    viewCode: "",
    viewLiveApp: "",
  },
  {
    title: "My Library",
    subTitle:
      "This is a demo project of a library. I will update this website in future..",
    imageUrl: "/images/lib.png",
    techStack: [" #React js", "#Tailwind CSS"],
    viewCode: "https://github.com/rohulamin-web/Library-website",
    viewLiveApp: "https://library-website-coral.vercel.app/",
  },
  {
    title: "My Blog site",
    subTitle:
      "This blog is all about Front-End Development, React, and Tailwind CSS. I share tutorials, project ideas, and tips to help you create beautiful, responsive websites efficiently..",
    imageUrl: "/images/blog.png",
    techStack: [" #React js", "#Tailwind CSS", "Typescript", "#Redux Toolkit"],
    viewCode: "https://github.com/rohulamin-web/Advance-blog-html",
    viewLiveApp: "https://advance-blog-html-fawn.vercel.app/",
  },
  {
    title: "Need Blood",
    subTitle:
      "In this need blood web application user can add blood request and find blood donors.",
    imageUrl: "/images/imag-05.jpg",
    techStack: [
      " #React js",
      "#Node.js",
      "#MongoDB",
      "#Tailwind CSS ,# Express.js",
    ],
    viewCode: "",
    viewLiveApp: "",
  },
  {
    title: "Leon Engineering Works",
    subTitle:
      "This is bussines management website. This website is portfolio webstie of this company.",
    imageUrl: "/images/image-06.jpg",
    techStack: [
      " #React js",
      "#Node.js",
      "#MongoDB",
      "#Tailwind CSS ,# Express.js",
    ],
    viewCode: "https://github.com/rohulamin-web/restaurant-website",
    viewLiveApp: "https://restaurant-website-chi-three.vercel.app/",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0F172A] text-white py-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-14 px-8">
        {/* Title */}
        <div className="text-3xl text-white text-center mb-12">
          <button className="bg- from-[#0A0A70] to-[#1E40AF] border border-blue-200 px-6 py-3 rounded-md shadow-md shadow-blue-700 hover:scale-105 transition-all duration-300">
            PROJECTS
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          {project.map((proj, index) => (
            <div
              key={index}
              className="bg-[#1E293B] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl shadow-black hover:scale-105 duration-300"
            >
              <img
                src={proj.imageUrl}
                alt={proj.title}
                className="w-full h-70 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-2xl font-semibold text-white">
                  {proj.title}
                </h3>
                {proj.subTitle && (
                  <p className="text-slate-400 text-[20px] mt-1 line-clamp-3">
                    {proj.subTitle}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mt-3">
                  {proj.techStack.map((tech, i) => (
                    <span key={i} className="text-[18px] text-teal-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-8 mt-4  ">
                  <a
                    className="bg-cyan-400 px-5 py-2 rounded-2xl"
                    href={proj.viewCode}
                  >
                    View Code
                  </a>
                  <a
                    className="bg-cyan-400 px-5 py-2 rounded-2xl"
                    href={proj.viewLiveApp}
                  >
                    View Live App
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
