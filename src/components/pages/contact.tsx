import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="custom-gradient py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          {/* Title */}
          <div className="text-3xl text-white  mb-8">
            <button className="bg- from-[#0A0A70] to-[#1E40AF] border border-blue-200 px-6 py-3 rounded-md shadow-md shadow-blue-700 hover:scale-105 transition-all duration-300">
              CONTACT ME
            </button>
          </div>
          <p className="text-white">
            Have a project in mind or just want to say hello? Fill out the form
            or connect with me directly. I’ll get back to you as soon as
            possible.
          </p>

          {/* Contact Info */}
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-white">
              <Mail className="text-white" size={20} /> rohulamin5462@gmail.com
            </p>
            <p className="flex items-center gap-3 text-white">
              <Phone className="text-white" size={20} /> +880 1791305462
            </p>
            <p className="flex items-center gap-3 text-white">
              <MapPin className="text-white" size={20} /> Dhaka, Bangladesh
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 pt-4">
            <a
              href="https://github.com/rohulamin-web"
              target="_blank"
              className="text-[#16F2B3] hover:text-white"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-[#16F2B3] hover:text-white"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-[#16F2B3] hover:text-white"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-[#16F2B3] hover:text-white"
            >
              <Facebook size={24} />
            </a>

            <a href="#" className="text-[#16F2B3] hover:text-white">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block text-white font-medium">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full text-white mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 "
              />
            </div>
            <div>
              <label className="block text-white font-medium">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full text-white mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 "
              />
            </div>
            <div>
              <label className="block text-white font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full text-white mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 "
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
