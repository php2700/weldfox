import useScrollAnimation from "./custom-hook";

export const Process = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="bg-secondary/90 py-16 px-4 ">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto text-center transform transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 -translate-x-20 scale-95"
        }`}
      >
        {/* Section Tag */}
        <p className="inline-block border-4 border-white text-white font-semibold px-4 py-1 mb-4 bg-transparent">
          Our Process
        </p>

        {/* Title */}
        <h2 className="text-[50px] font-extrabold text-white mb-12">
          HOW OUR PROCESS WORKS
        </h2>

        {/* Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src="/process-1.jpg"
              alt="Customer Requirement"
              className="w-24 mx-auto mb-4"
            />
            <p className="font-semibold text-sm">CUSTOMER REQUIREMENT</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src="/process-2.jpg"
              alt="Analysis"
              className="w-24 mx-auto mb-4"
            />
            <p className="font-semibold text-sm">ANALYSIS & SUGGESTIONS</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src="/process-3.webp"
              alt="Designs"
              className="w-24 mx-auto mb-4"
            />
            <p className="font-semibold text-sm">DESIGNS AND DRAWINGS</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src="/process-4.png"
              alt="Manufacturing"
              className="w-24 mx-auto mb-4"
            />
            <p className="font-semibold text-sm">MANUFACTURING MASTERY</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src="/process-5.avif"
              alt="Installation"
              className="w-24 mx-auto mb-4"
            />
            <p className="font-semibold text-sm">INSTALLATION ERECTION</p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src="/process-6.webp"
              alt="Completion"
              className="w-24 mx-auto mb-4"
            />
            <p className="font-semibold text-sm">SUCCESSFUL COMPLETION</p>
          </div>
        </div>
      </div>
    </section>
  );
};
