import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6  py-5  from-indigo-50 to-white "
    >
      <div className="custom-gradient backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden px-6 py-20 border-2 border-t-purple-950 border-b-purple-950">
        {/* Title */}
        <div className="text-3xl text-white text-center mb-16">
          <button className="bg- from-[#0A0A70] to-[#1E40AF] border border-blue-200 px-6 py-3 rounded-md shadow-md shadow-blue-700 hover:scale-105 transition-all duration-300">
            ABOUT ME
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-[#16F2B3] leading-tight drop-shadow-sm">
              Who I am?
            </h2>

            <p className="mt-6 text-slate-300 leading-relaxed text-lg sm:text-xl font-light">
              I’m a Front End Web developer passionate Web Developer skilled in
              HTML, CSS, JavaScript, Bootstrap, React, Redux, Node.js, and
              MongoDB. I enjoy creating dynamic, responsive, and user-friendly
              web applications that bring ideas to life. I focus on writing
              clean, efficient, and maintainable code while constantly learning
              new technologies to improve my development skills. My goal is to
              become a professional Full-Stack Developer and contribute to
              meaningful and innovative projects, In shaa Allah
            </p>
          </div>

          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full  from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-lg group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-xl">
                <img
                  src="/images/laptop.png"
                  alt="Your Name"
                  className="w-full h-full object-cover"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
