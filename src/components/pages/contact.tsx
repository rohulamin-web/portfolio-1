function Contact() {
  return (
    <div>
      {/* Contact Section */}
      <div
        id="contact"
        className="text-white text-center py-12 px-4 custom-gradient"
      >
        <h2 className="text-5xl mb-3 font-bold text-white">Contact</h2>
        <p className="text-[20px] text-[#bdc3c7] mb-8">
          Contact Information how can i help you
        </p>

        {/* Contact Form */}
        <div className="max-w-[570px] w-full mx-auto bg-[#1E293B] rounded-2xl p-6 ">
          <form className="flex flex-col space-y-4">
            <div className="text-left">
              <label className="block text-[18px] mb-2  font-medium">
                Your Name
              </label>
              <input
                className="w-full border border-[#bdc3c7] py-3 px-4 rounded-2xl text-[18px] bg-transparent text-white focus:outline-none"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="text-left">
              <label className="block text-[18px] mb-2 font-medium">
                Your Email
              </label>
              <input
                className="w-full border border-[#bdc3c7] py-3 px-4 rounded-2xl text-[18px] bg-transparent text-white focus:outline-none "
                type="email"
                placeholder="Your email address"
                required
              />
            </div>

            <div className="text-left">
              <label className="block text-[18px] mb-2 text-white font-medium">
                Subject
              </label>
              <input
                className="w-full border border-[#bdc3c7] py-3 px-4 rounded-2xl text-[18px] bg-transparent text-white focus:outline-none"
                type="text"
                placeholder="Subject of your message"
              />
            </div>

            <div className="text-left">
              <label className="block text-[18px] mb-2 font-medium">
                Message
              </label>
              <textarea
                className="w-full border border-[#bdc3c7] py-3 px-4 rounded-2xl text-[18px] bg-transparent text-white focus:outline-none "
                placeholder="Write your message..."
                rows={5}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black  py-3 px-4 rounded-2xl text-[20px] font-semibold transition duration-300 "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
