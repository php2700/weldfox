export const Fabrication = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/business.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-white">
        <h1 className="text-5xl md:text-6xl lg:text-[70px] font-[900] leading-tight mb-10">
          PROVIDING PREMIUM FABRICATION WORKS...
        </h1>

        {/* Floating Badge */}
        <div className="inline-block bg-secondary/90 px-10 py-6 rounded-2xl shadow-lg">
          <img
            src="https://abs.twimg.com/favicons/twitter.ico"
            className="w-12 h-12 mx-auto mb-2"
          />
          <p className="text-xl font-bold">WE'RE RUNNING BUSINESS</p>
          <p className="text-xl font-bold">SINCE 2014</p>
        </div>
      </div>
    </div>
  );
};
