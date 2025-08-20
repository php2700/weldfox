export const Fabrication = () => {
  return (
    <div
      className="bg-cover bg-center opacity-80 color-black-900 min-h-screen flex items-center "
      style={{ backgroundImage: "url('/business.jpg')" }}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between h-full gap-12 text-white px-10 max-w-6xl mx-auto">
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl lg:text-[70px] font-[900] leading-tight">
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
        <div className="bg-yellow-600 px-10 py-10 text-left  lg:w-auto lg:text-center">
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
    </div>
  );
};
