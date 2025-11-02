import React from "react";
const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6  py-5  from-indigo-50 to-white "
    >
      <div className="custom-gradient backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden px-10  py-16 border-2 border-t-purple-950 border-b-purple-950">
        <span className="text-2xl text-white font-semibold tracking-wider mb-5 block text-center">
          My Work Experience
        </span>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-2/3 flex justify-center">
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

          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-[#EC4899] leading-tight drop-shadow-sm">
              Full Stack Web Developer
            </h2>
            <p className="text-white">
              Enit It
              <span className="text-[#16F2B3] ml-2.5">
                (Jun, 2024 - Present)
              </span>
            </p>

            <div className=" text-white mt-3 ">
              <p className=" before:content-['•'] before:text-2xl before:text-white before:mr-1 before:inline-block before:align-middle mb-2">
                Developing and maintaining web applications using React.js and
                other related technologies.
              </p>

              <p className="relative before:content-['•'] before:text-2xl before:text-white before:mr-1 before:inline-block before:align-middle mb-2">
                Collaborating with cross-functional teams including designers,
                product managers, and other developers to create high-quality
                products.
              </p>

              <p className="relative before:content-['•'] before:text-2xl before:text-white before:mr-1 before:inline-block before:align-middle mb-2">
                Implementing responsive design and ensuring cross-browser
                compatibility.
              </p>

              <p className="relative before:content-['•'] before:text-2xl before:text-white before:mr-1 before:inline-block before:align-middle">
                Participating in code reviews and providing constructive
                feedback to other developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
