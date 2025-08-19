import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";

const arr = [
  {
    heading: "Effortless Operation:",
    description:
      "Gear operated rolling shutters are designed with a smooth gear mechanism that allows easy manual handling without requiring excessive force, making them ideal for medium and large openings.",
  },
  {
    heading: "Reliable Security:",
    description:
      "Built from strong and durable materials, these shutters provide a solid barrier against unauthorized access, ensuring your property remains safe and protected.",
  },
  {
    heading: "Durability:",
    description:
      "The robust construction of gear operated shutters ensures long-lasting performance, withstanding daily usage and harsh weather conditions with minimal maintenance.",
  },
  {
    heading: "Cost-Effective Solution:",
    description:
      "Without the need for motors or electrical systems, gear operated shutters are an economical option while still delivering dependable security and functionality.",
  },
  {
    heading: "Versatility:",
    description:
      "Suitable for residential, commercial, and industrial spaces, these shutters offer a practical solution for securing a wide range of property types.",
  },
];


const useRolling = [
  {
    heading: "Retail Stores:",
    description: "Protect merchandise while maintaining visibility.",
  },
  {
    heading: "Restaurants:",
    description: "Secure outdoor seating areas without obstructing views.",
  },
  {
    heading: "Warehouses:",
    description:
      "Secure patios and balconies, allowing for versatile usage of outdoor spaces.Safeguard goods while ensuring easy access.",
  },
  {
    heading: "Residential Properties:",
    description: "Enhance home security without compromising aesthetics.",
  },
];

export const RollingShutters = () => {
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
          src="/gear-operated-rolling-shutters.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white">
            {" "}
            Gear Operated Rolling Shutters
          </div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; Service &nbsp; - &nbsp;GEAR OPERATED ROLLING
              SHUTTER
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-20 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-12 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]text-[#181614]">
              Gear Operated Rolling Shutter
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
              Gear Operated Rolling Shutter: Strength and Convenience Combined{" "}
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Gear Operated rolling shutters are a reliable choice for businesses and homes looking for effortless operation, durability, and robust security. Designed with a smooth gear mechanism, these shutters allow easy manual handling without requiring much effort, making them ideal for medium to large openings. They provide excellent protection against intruders and harsh weather, ensuring long-lasting performance with minimal maintenance.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/gear-operated-rolling-shutters.jpg"
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-[23px] font-semibold my-4 text-[#181614]">
            What Are Gear Operated Rolling Shutters?
          </div>
          <div
            className="text-lg text-[14px] my-6"
            style={{ lineHeight: "30px" }}
          >
            Gear Operated rolling shutters are built with strong, durable materials and feature a smooth gear mechanism for effortless manual operation. This design ensures easy handling without excessive effort, making them ideal for medium and large entrances. Along with providing reliable security, these shutters are long-lasting, low-maintenance, and well-suited for both residential and commercial use.
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
            Applications of Gear Operated Rolling Shutters
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
            Choosing the Right Gear Operated Rolling Shutter:
          </div>
          <div>
            When selecting gear operated rolling shutters, consider the following: Measure the opening size to choose the right shutter dimensions. Ensure the gear mechanism is suitable for the shutter’s weight and frequency of use. Opt for high-quality materials for durability and long-lasting performance. Select a finish and design that complements your property’s overall style.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Maintenance Tips
          </div>
          <div>
            Maintaining your gear operated rolling shutters is simple: Regularly clean the shutter surface with a mild soap solution and soft cloth to remove dust and grime. Lubricate the gear mechanism periodically to ensure smooth operation. Inspect the chains, gears, and other moving parts for wear and tear, and tighten any loose components to maintain long-lasting performance.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
            Gear operated rolling shutters are an excellent choice for anyone seeking strong security with ease of manual operation. Their durable construction and smooth gear mechanism make them reliable, convenient, and long-lasting. Suitable for both residential and commercial spaces, these shutters combine strength with practicality. Invest in gear operated rolling shutters today to secure your property with confidence and convenience.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
