import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-extrabold text-2xl text-[#16F2B3] tracking-tight">
          ROHUL AMIN
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-[17px] font-semibold text-white">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-[#16F2B3] cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-[#16F2B3] cursor-pointer"
          >
            About
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-[#16F2B3] cursor-pointer"
          >
            Education
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-[#16F2B3] cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-[#16F2B3] cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-[#16F2B3] cursor-pointer"
          >
            Project
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white focus:outline-none transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-[#16132B]/95 backdrop-blur-md border-t border-slate-700 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-[16px] font-medium text-white">
          {[
            "hero",
            "about",
            "education",
            "skills",
            "experience",
            "projects",
          ].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-teal-400 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
