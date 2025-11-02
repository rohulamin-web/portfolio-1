import React from "react";
import { BsTruck } from "react-icons/bs";

interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  details?: string;
}

const educationData: EducationItem[] = [
  {
    year: "2025 - Present",
    degree: "BACHELOR OF COMPUTER SCIENCE OF ENGINEERING",
    institution: "Daffodil International University",
  },
  {
    year: "2022 - 2026",
    degree: "HIGHER SECONDARY SCHOOL CERTIFICATE",
    institution: "Ahmad Education Dhaka",
  },
  {
    year: "2020 - 2022",
    degree: "SECONDARY SCHOOL CERTIFICATE",
    institution: "Dakshin Dhuru High School",
  },
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="
   custom-gradient  max-w-6xl mx-auto py-12"
    >
      <h2 className="text-3xl font-extrabold text-white text-center mb-12">
        Education
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.postimg.cc/ZnsZz8zv/education.webp"
            alt="Education Illustration"
            className="rounded-2xl shadow-lg w-80 sm:w-96 md:w-full max-w-md object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          {educationData.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl py-6 px-3 border border-[#EC4899] shadow-[#EC4899] hover:shadow-[0_0_20px_5px_#6C17AF] transition-all duration-300"
            >
              <p className="text-[#16F2B3] font-semibold text-lg mb-1 text-center">
                {item.year}
              </p>
              <div className="flex gap-3">
                <div className="text-5xl text-white flex items-center">
                  <BsTruck />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-white text-[20px]">
                    {item.institution}
                  </p>
                </div>
              </div>
              {item.details && (
                <p className="mt-2 text-sm text-slate-500">{item.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
