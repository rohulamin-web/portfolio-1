import About from "../pages/About";
import Contact from "../pages/Contact";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import ExpertArea from "../pages/ExpertArea";
import Footer from "../pages/Footer";
import Hero from "../pages/Hero";
import Navbar from "../pages/Navbar";
import Projects from "../pages/Projects";

function FrontLayout() {
  return (
    <div className="bg-[#16132B]">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <ExpertArea />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default FrontLayout;
