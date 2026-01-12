import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#172136] text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 px-6 md:px-12">
        {/* Column 1 - Name & Social */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Ruhul Amin</h2>
          <p className="text-slate-400 mb-4">Contact with us</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-[#1E293B] p-3 rounded-full hover:bg-blue-950 transition"
            >
              <FaInstagram className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="bg-[#1E293B] p-3 rounded-full hover:bg-blue-950 transition"
            >
              <FaTwitter className="text-white text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohul-amin-911b63395/"
              className="bg-[#1E293B] p-3 rounded-full hover:bg-blue-950 transition"
            >
              <FaLinkedin className="text-white text-xl" />
            </a>
            <a
              href="https://wa.me/8801791305462"
              className="bg-[#1E293B] p-3 rounded-full hover:bg-blue-950 transition"
            >
              <FaWhatsapp className="text-white text-xl" />
            </a>
          </div>
        </div>

        {/* Column 2 - About */}
        <div>
          <h3 className="font-semibold text-lg mb-3">ABOUT</h3>
          <ul className="space-y-2 text-slate-400">
            <li>Company</li>
            <li>Company</li>
            <li>Company</li>
          </ul>
        </div>

        {/* Column 3 - Blog */}
        <div>
          <h3 className="font-semibold text-lg mb-3">BLOG</h3>
          <ul className="space-y-2 text-slate-400">
            <li>Company</li>
            <li>Company</li>
            <li>Company</li>
          </ul>
        </div>

        {/* Column 4 - Products */}
        <div>
          <h3 className="font-semibold text-lg mb-3">PRODUCTS</h3>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="#"></a>Company
            </li>
            <li>
              <a href="#"></a>Company
            </li>
            <li>
              <a href="#"></a>Company
            </li>
          </ul>
        </div>

        {/* Column 5 - Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">CONTACT INFORMATION</h3>
          <p className="text-slate-400">+8801791305462</p>
          <a href="#" className="text-slate-400">
            rohulamin5462@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
