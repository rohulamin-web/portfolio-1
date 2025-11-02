import React from "react";

interface ExpertArea {
  img: string;
  title: string;
}

const expertAreas: ExpertArea[] = [
  {
    img: "https://i.postimg.cc/Y9t2C9kH/html.png",
    title: "Html",
  },
  {
    img: "https://i.postimg.cc/9QwnBKbT/next.png",
    title: "Next.js",
  },
  {
    img: "https://i.postimg.cc/63PZzjY8/typescript.png",
    title: "TypeScript",
  },
  {
    img: "https://i.postimg.cc/v8P2wbSn/react.png",
    title: "React.js",
  },
  {
    img: "https://i.postimg.cc/k4gPJwN5/javascript.png",
    title: "JavaScript",
  },
  {
    img: "https://i.postimg.cc/YSgTtZmk/mongo-DB.png",
    title: "MongoDB",
  },
  {
    img: "https://i.postimg.cc/02wYXsTW/tailwind.png",
    title: "Tailwind CSS",
  },
  {
    img: "https://i.postimg.cc/zvMkbD9C/reduxpng.png",
    title: "Redux",
  },
  {
    img: "https://i.postimg.cc/k5cFNv0s/sol.jpg",
    title: "SQL",
  },
];

const ExpertArea: React.FC = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto py-10 ">
      <div className="mb-12">
        <h2 className="text-2xl font-extrabold text-white text-center">
          My Expert Areas
        </h2>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
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
