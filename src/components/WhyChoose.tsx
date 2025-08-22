import { Award, Users, Star } from "lucide-react";
import useScrollAnimation from "./custom-hook";

const WhyChoose = () => {
        const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/swing-gates.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div ref={ref} className={`relative z-10 flex flex-col lg:flex-row transform transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0 scale-100":"opacity-0 -translate-x-20 scale-95"}   h-full gap-4 px-10 md:px-20 py-10 text-white`}>
        {/* Left Column (Empty or Placeholder) */}
        {/* <div className="w-1/2 hidden lg:block"></div> */}

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-left space-y-6">
          <div className="border-2 flex rounded-lg border-secondary/90 text-secondary/90 px-4 py-2 inline-block font-bold text-[16px]">
            Why Choose METAL4CRAFT AUTOMATION?
          </div>

          <h1 className="text-4xl md:text-[50px] font-[900] leading-tight">
            WHY CHOOSE METAL4CRAFT AUTOMATION
          </h1>

          <p className="text-base md:text-[15px] leading-relaxed  py-4 rounded">
           Choosing METAL4CRAFT AUTOMATION means opting for expertise and experience in the industry, backed by a commitment to quality craftsmanship and customized solutions tailored to meet your unique needs. Our skilled team ensures timely delivery and outstanding customer service, providing support throughout the entire process. With competitive pricing, we offer exceptional value without compromising on quality.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8  gap-y-4 ">
            <div className="text-center hover:bg-secondary/90 p-10 border-4 border-secondary/90 rounded-lg ">
              <div className="text-4xl font-bold my-2">900</div>
              <div>Projects </div>
              <div>Completed</div>
            </div>
            <div className="text-center hover:bg-secondary/90 p-10 border-4 border-secondary/90 rounded-lg">
              <div className="text-4xl font-bold my-2">761</div>
              <div>Satisfied </div>
              <div>Clients</div>
            </div>
            <div className="text-center hover:bg-secondary/90 p-10 border-4 border-secondary/90 rounded-lg">
              <div className="text-4xl font-bold my-2">1029</div>
              <div>Metal </div>
              <div>Works</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
