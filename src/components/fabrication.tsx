export const Fabrication = () => {
  return (
    <div
      className="bg-cover bg-center opacity-80 color-black-500 h-screen"
      style={{ backgroundImage: "url('/automatic-barriers.webp')" }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:justify-between h-full gap-12 text-white px-10 max-w-6xl mx-auto">
        <div className="text-left">
          <h1 className="text-[70px] font-[900]">
            PROVIDING PREMIUM FABRICATION WORKS...
          </h1>
          <div className="mt-6">
            <button className="bg-yellow-400 text-black rounded-full w-20 h-20 flex items-center justify-center">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-yellow-600 px-10 py-10 text-left w-full lg:w-auto lg:text-center">
          <img
            src="https://abs.twimg.com/favicons/twitter.ico"
            alt="Twitter"
            className="w-10 h-10 lg:mx-auto mb-4 "
          />
          <p className="text-3xl font-[800]">WE'RE </p>
          <p className="text-3xl font-[800]"> RUNNING</p>
          <p className="text-3xl font-[800]"> BUSINESS</p>
          <p className="text-3xl font-[800]"> SINCE 2014</p>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex space-x-4">
        <a
          href="https://wa.me/your-whatsapp-number"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-10 h-10"
          />
        </a>
        <a
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="path-to-email-icon" alt="Email" className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
};
