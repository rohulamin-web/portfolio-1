import React, { useEffect, useState } from "react";
import { BiPhone } from "react-icons/bi";
import { FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";
import { LuArrowDownToLine } from "react-icons/lu";
import { Link } from "react-scroll";

const NAME = "ROHUL AMIN";

const socialItems = [
  {
    icon: <FiGithub size={20} />,
    label: "Github",
    href: "https://github.com/rohulamin-web/Full-Stack-Blog",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/checkpoint/challenge/AgFpTkNJSzqh0AAAAZpE6IuhifddoIlDXf9IffTXsFfnldm02k0l3l4COrdwYF3T1kjBUPd2H2SsTTfP7atTXsXOWClccA?ut=1t3sq6e1Cj7Y01",
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
  const [displayText, setDisplayText] = useState("");
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
        setDisplayText(fullText.slice(0, charIndex));
        setCharIndex((i) => i + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex > fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), pauseAfterTyped);
    } else if (isDeleting && charIndex >= 0) {
      timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, charIndex));
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
    <section className="max-w-7xl mx-auto px-10 py-28 flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="flex-1">
        <p className="text-4xl text-white mb-2">Hello</p>

        <div className="flex gap-2">
          <h2 className="text-4xl text-white sm:text-5xl md:text-6xl font-extrabold leading-tight">
            This is
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#EC4899]">
            <span className="block">
              <span className="inline-block mr-1">{displayText}</span>

              <span
                className="inline-block  h-[34px] align-middle bg-slate-800/90 ml-0 animate-[blink_1s_steps(2,end)_infinite]"
                style={{ verticalAlign: "text-bottom" }}
              />
            </span>
          </h1>
        </div>

        <h2 className="text-5xl text-white">
          {" "}
          I'm Professional{" "}
          <h3 className="inline-block text-5xl text-[#16F2B3]">Full</h3>
        </h2>

        <h2 className=""></h2>
        <h2 className="text-5xl text-[#16F2B3]"> Stack</h2>
        <h2 className="text-5xl text-[#16F2B3]"> Developer</h2>

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
            href="#contact"
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
      </div>

      <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-92 md:h-92 rounded-3xl p-1  from-indigo-100 via-white to-white shadow-xl flex items-center justify-center transform transition hover:scale-[1.03]">
        <div className="w-full h-full rounded-2xl overflow-hidden bg-white/80 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/Zn0hnCBs/IMG-20251013-170910080.jpg"
            alt="Rohul Amin"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
