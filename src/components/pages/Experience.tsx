import { motion } from "framer-motion";
import React from "react";
import { FaChalkboardUser } from "react-icons/fa6";
const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6  py-5  from-indigo-50 to-white "
    >
      <div className="custom-gradient backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden px-10  py-16 border-2 border-t-purple-950 border-b-purple-950">
        {/* Title */}
        <div className="text-3xl text-white text-center mb-16">
          <button className="bg- from-[#0A0A70] to-[#1E40AF] border border-blue-200 px-6 py-3 rounded-md shadow-md shadow-blue-700 hover:scale-105 transition-all duration-300">
            EXPERIENCE
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 ">
          <div className="w-full md:w-2/3 flex justify-center">
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

          <div className="sm:w-[400px] sm:mx-auto md:w-[500px]">
            {/* section one */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="p-5"
            >
              <div className="border border-blue-200 shadow-sm shadow-blue-300 p-7 rounded-sm">
                <div className="text-center text-[#09fcd3] relative -top-5">
                  <h4>(September 2025 - Present)</h4>
                </div>
                <div className="flex justify-between items-center gap-3 md:gap-0">
                  <div>
                    <FaChalkboardUser className="text-4xl text-blue-400" />
                  </div>
                  <div className="text-white animate__animated animate__heartBeat">
                    <p>FRONT-END</p>
                    <p>DEVELOPER &</p>
                    <p>Learner</p>
                    <p className="mt-2">Ahmad's IT Institute</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* section two */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="p-5"
            >
              <div className="border border-blue-200 shadow-sm shadow-blue-300 p-7 rounded-sm">
                <div className="text-center text-[#09fcd3] relative -top-5">
                  <h4>(Part-time Imam (Jun 2022 – Octuber 2024))</h4>
                </div>
                <div className="flex justify-between items-center gap-3 md:mx-0">
                  <div>
                    <FaChalkboardUser className="text-4xl text-blue-400" />
                  </div>
                  <div className="text-white animate__animated animate__heartBeat">
                    <p>SELF EMPLOYED</p>
                    <p>Led daily prayers and provided </p>
                    <p>religious guidance to the community.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
