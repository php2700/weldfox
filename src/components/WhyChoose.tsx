import { Award, Users, Star } from "lucide-react";

const WhyChoose = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/swing-gates.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row  h-full gap-4 px-10 md:px-20 py-10 text-white">
        {/* Left Column (Empty or Placeholder) */}
        <div className="w-1/2 hidden lg:block"></div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-left space-y-6">
          <div className="border-2 flex border-[#fcc729] text-[#fcc729] px-4 py-2 inline-block font-bold text-[16px]">
            Why Choose METAL4CRAFT AUTOMATION?
          </div>

          <h1 className="text-4xl md:text-[50px] font-[900] leading-tight">
            WHY CHOOSE METAL4CRAFT AUTOMATION
          </h1>

          <p className="text-base md:text-[15px] leading-relaxed  py-4 rounded">
            Choosing METAL4CRAFT AUTOMATION means opting for expertise and experience
            in the industry, backed by a commitment to quality craftsmanship and
            customized solutions tailored to meet your unique needs. Our skilled
            team ensures timely delivery and outstanding customer service,
            providing support throughout the entire process. With competitive
            pricing, we offer exceptional value without compromising on quality.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8  gap-y-4 ">
            <div className="text-center hover:bg-[#fcc729] p-10 border-4 border-[#fcc729] ">
              <div className="text-4xl font-bold my-2">800</div>
              <div>Projects </div>
              <div>Completed</div>
            </div>
            <div className="text-center hover:bg-[#fcc729] p-10 border-4 border-[#fcc729]">
              <div className="text-4xl font-bold my-2">681</div>
              <div>Satisfied </div>
              <div>Clients</div>
            </div>
            <div className="text-center hover:bg-[#fcc729] p-10 border-4 border-[#fcc729]">
              <div className="text-4xl font-bold my-2">909</div>
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
