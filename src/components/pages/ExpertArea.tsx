import React from "react";

interface ExpertArea {
  img: string;
  title: string;
}

const expertAreas: ExpertArea[] = [
  {
    img: "images/html.png",
    title: "Html",
  },
  {
    img: "images/next.png",
    title: "Next.js",
  },
  {
    img: "images/typescript.png",
    title: "TypeScript",
  },
  {
    img: "images/react.png",
    title: "React.js",
  },
  {
    img: "images/javascript.png",
    title: "JavaScript",
  },
  {
    img: "images/mongoDB.png",
    title: "MongoDB",
  },
  {
    img: "images/tailwind.png",
    title: "Tailwind CSS",
  },
  {
    img: "images/reduxpng.png",
    title: "Redux",
  },
];

const ExpertArea: React.FC = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto py-10 ">
      <div className="mb-12">
        {/* Title */}
        <div className="text-3xl text-white text-center mb-16">
          <button className="bg- from-[#0A0A70] to-[#1E40AF] border border-blue-200 px-6 py-3 rounded-md shadow-md shadow-blue-700 hover:scale-105 transition-all duration-300">
            MY EXPERT AREAS
          </button>
        </div>
        My Expert Areas
        <div className="text-gray-400 text-center text-[16px] font-bold mt-2">
          <p className="">
            Express Yourself Freely And Creatively, Using Customizable Templates
            Or Crafting YOur
          </p>
          <p>
            Own Designs From Scaratch, With Access To A Vast And Immersive
            Library
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-5 md:mx-0">
        {expertAreas.map((area, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-[#1F1939] shadow-md rounded-2xl p-6 shadow-[#6C17AF] hover:shadow-[0_0_20px_5px_#6C17AF] transition-all duration-300"
          >
            <img
              src={area.img}
              className="w-14 h-14 object-contain mb-3 border-8 border-gray-300 rounded-4xl"
            />
            <h3 className="text-lg font-semibold text-white">{area.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertArea;
