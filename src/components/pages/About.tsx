import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6  py-5  from-indigo-50 to-white "
    >
      <div className="custom-gradient backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden px-6 py-20 border-2 border-t-purple-950 border-b-purple-950">
        <span className="text-2xl text-white font-semibold tracking-wider mb-5 block text-center">
          About Me
        </span>
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-[#16F2B3] leading-tight drop-shadow-sm">
              Who I am?
            </h2>

            <p className="mt-6 text-slate-300 leading-relaxed text-lg sm:text-xl font-light">
              I am Ruhul Amin, a passionate Full Stack Web Developer and a
              Computer Science student at Daffodil International University. I
              thrive on solving complex problems and enjoy crafting seamless,
              dynamic web experiences. Driven by curiosity and innovation, I'm
              constantly exploring new technologies to enhance my skills and
              create impactful digital solutions.
            </p>
          </div>

          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full  from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-lg group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-xl">
                <img
                  src="https://i.postimg.cc/6qBVsnfj/Pngtree-a-laptop-settings-isometric-vector-14871445-szfchr.png"
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
