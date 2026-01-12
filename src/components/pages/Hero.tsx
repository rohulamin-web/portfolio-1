import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { BiPhone } from "react-icons/bi";
import { FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";
import { LuArrowDownToLine } from "react-icons/lu";
import { Link } from "react-scroll";
import Typed from "typed.js";

const NAME = "ROHUL AMIN";

const socialItems = [
  {
    icon: <FiGithub size={20} />,
    label: "Github",
    href: "https://github.com/rohulamin-web",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rohul-amin-911b63395/",
  },
  {
    icon: <FiMail size={20} />,
    label: "Mail",
    href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
  },
  { icon: <FiFileText size={20} />, label: "Resume", href: "/resume.pdf" },
];

const typingSpeed = 100;
const deletingSpeed = 50;
const pauseAfterTyped = 1200;
const pauseAfterDeleted = 400;

const Hero: React.FC = () => {
  const typedElement = useRef<HTMLSpanElement>(null);

  // Typed.js effect
  useEffect(() => {
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: [
          "Front-End Developer",
          "JavaScript Learner",
          "React Enthusiast",
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);

  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const [iconsVisible, setIconsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIconsVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const fullText = NAME;

    if (!isDeleting && charIndex <= fullText.length) {
      timer = setTimeout(() => {
        setCharIndex((i) => i + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex > fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), pauseAfterTyped);
    } else if (isDeleting && charIndex >= 0) {
      timer = setTimeout(() => {
        setCharIndex((i) => i - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex < 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCharIndex(0);
      }, pauseAfterDeleted);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting]);

  return (
    <section
      id="hero"
      className="max-w-7xl mx-auto px-10 py-28 flex flex-col-reverse md:flex-row items-center gap-12"
    >
      <div className=" flex-1 justify-center ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className=" text-center lg:text-left z-10 "
        >
          <h2 className="text-4xl sm:text-5xl text-white font-semibold mb-3">
            Hello,
          </h2>
          <h2 className="text-4xl sm:text-5xl text-white font-semibold mb-3">
            I am <span className="text-[#EC4899]">Rohul Amin</span>
          </h2>
          <h3 className="text-3xl sm:text-4xl text-white mb-2">Professional</h3>

          {/* Typed.js Effect */}
          <h3 className="text-3xl sm:text-4xl font-semibold text-[#EC4899] mb-6">
            <span ref={typedElement}></span>
          </h3>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed pr-20 pl-5">
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning, I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I’m ready to make a meaningful contribution and
            achieve great things.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-50}
              className="inline-flex items-center px-5 py-3 rounded-4xl text-white border border-fuchsia-500 font-medium shadow hover:opacity-95 transition cursor-pointer"
            >
              Contact Me
              <BiPhone className="text-[20px] ml-2" />
            </Link>

            <a
              href="https://drive.google.com/file/d/1nKG8PnAMSQxGBN8I8NqaSU2HEpgqGfyP/view"
              className="inline-flex items-center px-5 py-3 rounded-4xl text-white bg-blue-600 hover:bg-slate-50 hover:text-black transition"
            >
              View Resume
              <LuArrowDownToLine className="text-[20px] ml-2" />
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            {socialItems.map((s, idx) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#EC4899] ring-slate-200 shadow-sm transform transition-all`}
                style={{
                  transitionProperty: "opacity, transform",
                  transitionDuration: "400ms",
                  transitionDelay: iconsVisible ? `${idx * 120}ms` : "0ms",
                  opacity: iconsVisible ? 1 : 0,
                  transform: iconsVisible
                    ? "translateY(0) scale(1)"
                    : "translateY(8px) scale(0.98)",
                }}
              >
                <span className="text-slate-700">{s.icon}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-56 h-56 sm:w-64 sm:h-64 md:w-92 md:h-92 rounded-3xl p-1  from-indigo-100 via-white to-white shadow-xl flex items-center justify-center transform transition hover:scale-[1.03]"
      >
        <div className="w-full h-full  rounded-2xl overflow-hidden bg-white/80 flex items-center justify-center">
          <img
            src="/images/rohulamin-01.png"
            alt="Rohul Amin"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
