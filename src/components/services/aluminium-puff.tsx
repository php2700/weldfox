import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";

const arr = [
  {
    heading: "Energy Efficiency:",
    description:
      "The insulating core helps regulate indoor temperatures, reducing reliance on heating and cooling systems and leading to lower energy bills.",
  },
  {
    heading: "Superior Insulation:",
    description:
      "These shutters effectively minimize heat transfer, keeping your space comfortable year-round.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Constructed from robust aluminum, these shutters provide an added layer of security against break-ins and vandalism.",
  },
  {
    heading: "Noise Reduction:",
    description:
      "The insulated design helps dampen outside noise, creating a quieter indoor environment.",
  },
  {
    heading: "Weather Resistance:",
    description:
      "Built to withstand harsh weather conditions, aluminum puff insulated rolling shutters protect your windows and doors from the elements.",
  },
];

const useRolling = [
  {
    heading: "Residential Use:",
    description:
      "Perfect for homes looking to improve energy efficiency and security while adding aesthetic value.",
  },
  {
    heading: "Commercial Use:",
    description:
      "Ideal for shops, warehouses, and industrial facilities that require reliable protection and insulation",
  },
];

export const AluminiumpuffShutters = () => {
  const [showSticky, setShowSticky] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const goingDown = currentScroll > lastScrollY.current;

        if (currentScroll <= 0 || (!goingDown && currentScroll < 100)) {
          setShowSticky(false);
        } else if (goingDown && currentScroll > 100) {
          setShowSticky(true);
        }

        lastScrollY.current = currentScroll;
        ticking.current = false;
      });

      ticking.current = true;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen relative bg-background">
      <div
        className={`transition-opacity duration-300 ${
          showSticky ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Header />
      </div>
      {showSticky && <StickyHeader />}
      <div className="relative w-full">
        <img
          src="/aluminum-puff-insulated-rolling-shutter.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white text-center">
            {" "}
            ALUMINIUM PULL INSULATED ROLLING SHUTTERS
          </div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp; ALUMINIUM PULL
              INSULATED ROLLING SHUTTERS
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-20 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-12 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]text-[#181614]">
              Aluminum Puff Insulated Rolling Shutter
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
              Discover the Benefits of Aluminum Puff Insulated Rolling Shutters
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Aluminum puff insulated rolling shutters are an innovative
              solution for energy efficiency, security, and noise reduction.
              Ideal for both residential and commercial properties, these
              shutters combine durability with advanced insulation technology.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/aluminum-puff-insulated-rolling-shutter.jpg"
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-[23px] font-semibold my-4 text-[#181614]">
            What Are Aluminum Puff Insulated Rolling Shutters?
          </div>
          <div
            className="text-lg text-[14px] my-6"
            style={{ lineHeight: "30px" }}
          >
            Aluminum puff insulated rolling shutters are made with a core of
            insulating material sandwiched between aluminum layers. This design
            enhances thermal performance while providing strength and security,
            making them suitable for various applications.
          </div>

          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {arr?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded">
                <div className="my-4 font-semibold text-lg text-[#000]">
                  {ele.heading}
                </div>
                <div>{ele.description}</div>
              </div>
            ))}
          </div>

          <div className="text-[23px] font-semibold my-8 text-[#181614]">
            Applications of Aluminum Puff Insulated Rolling Shutters
          </div>
          {useRolling?.map((ele) => (
            <>
              <div className="font-semibold mt-4 text-[#000]">
                {ele?.heading}
              </div>
              <div className="mb-2">{ele?.description}</div>
            </>
          ))}
          <div className="text-[23px] font-semibold text-[#181614] mt-4 mb-8">
            How to Operate
          </div>
          <div className=" font-semibold text-[#000] ">Durability:</div>
          <div>
            Aluminum is resistant to rust and corrosion, ensuring a long
            lifespan with minimal maintenance.
          </div>
          <div className=" font-semibold text-[#000] ">Customization:</div>
          <div>
            Available in various colors and sizes, these shutters can be
            tailored to fit any architectural style
          </div>
          <div className=" font-semibold text-[#000] ">Ease of Use:</div>
          <div>
            Designed for smooth operation, whether manual or motorized, making
            them user-friendly for all.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Installation and Maintenance
          </div>
          <div>
            Proper installation is crucial for optimal performance. Regular
            maintenance, such as cleaning and inspection of the mechanical
            components, will ensure longevity and functionality.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
            Investing in aluminum puff insulated rolling shutters is a smart
            choice for enhancing energy efficiency, security, and comfort in
            your property. Explore our selection to find the perfect solution
            tailored to your needs.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
