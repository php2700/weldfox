import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";

const arr = [
  {
    heading: "Exceptional Durability:",
    description:
      "Galvanized rolling shutters are designed to withstand daily use. The galvanized coating protects against rust and corrosion, ensuring your shutters remain functional and attractive over time.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "These shutters provide a strong barrier against unauthorized access, making them an effective deterrent to theft and vandalism. Their robust construction ensures your property is protected.",
  },
  {
    heading: "Cost-Effective Solution:",
    description:
      "Offering a great balance of affordability and durability, galvanized rolling shutters represent a smart investment for property owners. Their long lifespan reduces the need for frequent replacements.",
  },
  {
    heading: "Versatile Applications:",
    description:
      "Suitable for various settings, galvanized rolling shutters can be used in retail stores, warehouses, garages, and industrial facilities. Their versatility makes them a popular choice across multiple industries.",
  },
  {
    heading: "Customizable Designs:",
    description:
      "Available in various colors and finishes, galvanized rolling shutters can be tailored to match any property. This customization enhances your building's visual appeal while ensuring security.",
  },
];

const useRolling = [
  {
    heading: "Retail Stores:",
    description:
      "Protect windows and doors in homes, providing added security and privacy.Protect merchandise while allowing visibility for customers, helping to attract foot traffic.",
  },
  {
    heading: "Warehouses:",
    description:
      "Secure large openings and loading docks, ensuring safety for stored goods.",
  },
  {
    heading: "Garages:",
    description:
      "Provide easy access and strong protection for vehicles and equipment.",
  },
   {
    heading: "Industrial Facilities:",
    description:
      "Ensure safety and security in environments with valuable machinery and materials.",
  }
];

export const AluminiumShutters = () => {
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
          src="/aluminium-rolling-shutter.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white">
            {" "}
            ALUMINIUM ROLLING SHUTTERS
          </div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;ALUMINIUM ROLLING SHUTTERS
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-20 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-12 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]text-[#181614]">
             Aluminum Rolling Shutter
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
          Galvanized Rolling Shutters: Durable Security for Every Space
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
            Galvanized rolling shutters are a reliable solution for enhancing security in both commercial and residential properties. Constructed from galvanized steel, these shutters provide excellent protection against intruders and harsh weather conditions. Their corrosion-resistant properties make them a long-lasting choice for safeguarding your assets.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/aluminium-rolling-shutter.jpg"
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-[23px] font-semibold my-4 text-[#181614]">
What Are Aluminium Rolling Shutters?
          </div>
          <div
            className="text-lg text-[14px] my-6"
            style={{ lineHeight: "30px" }}
          >
          Powder-coated rolling shutters are constructed from high-quality materials and finished with a durable powder coating. This process not only enhances their appearance but also provides a protective layer that resists chipping, fading, and corrosion.
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
            Applications of Galvanized Rolling Shutters
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
          <div className=" font-semibold text-[#000] ">
          Installation and Maintenance:
          </div>
          <div>
           Operating galvanized rolling shutters is straightforward: Choose between manual operation for simplicity or motorized systems for added convenience. For motorized versions, control the shutters with a remote or wall-mounted switch. Designed for easy upkeep, simply wipe down the surface to maintain appearance.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Installation and Maintenance

          </div>
          <div>
            Operating galvanized rolling shutters is straightforward: Choose between manual operation for simplicity or motorized systems for added convenience. For motorized versions, control the shutters with a remote or wall-mounted switch. Designed for easy upkeep, simply wipe down the surface to maintain appearance.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
            Galvanized rolling shutters offer an ideal combination of security, durability, and cost-effectiveness. Their robust design and corrosion resistance make them suitable for various applications, providing peace of mind for property owners. Invest in galvanized rolling shutters today to enhance the security and functionality of your space.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
