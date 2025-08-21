import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";

const arr = [
  {
    heading: "Effortless Operation:",
    description:
      "Gear operated rolling shutters feature a smooth gear system that allows easy manual operation, requiring minimal effort, perfect for medium and large openings.",
  },
  {
    heading: "Reliable Security:",
    description:
      "Constructed from sturdy and durable materials, these shutters provide strong protection against intruders, keeping your property safe and secure.",
  },
  {
    heading: "Durability:",
    description:
      "With their solid build, gear operated shutters are built to last, handling frequent use and harsh weather while requiring minimal upkeep.",
  },
  {
    heading: "Cost-Effective Solution:",
    description:
      "As they do not rely on motors or electricity, gear operated shutters offer an affordable yet reliable option for secure property protection.",
  },
  {
    heading: "Versatility:",
    description:
      "Ideal for homes, businesses, and industrial spaces, these shutters provide a flexible solution for safeguarding a variety of properties.",
  },
];


const useRolling = [
  {
    heading: "Retail Stores:",
    description: "Keep your products safe while allowing customers to see inside.",
  },
  {
    heading: "Restaurants:",
    description: "Protect outdoor dining areas while maintaining an open, welcoming view.",
  },
  {
    heading: "Warehouses:",
    description:
      "Secure storage areas and loading zones, ensuring protection while allowing easy access to goods.",
  },
  {
    heading: "Residential Properties:",
    description: "Boost home security while preserving the property’s aesthetic appeal.",
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
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
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
              Gear Operated Rolling Shutters: Robust Security with Smooth and Easy Operation
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Gear operated rolling shutters offer a durable and secure solution for homes and businesses. Featuring a smooth gear mechanism, they enable easy manual operation even for medium to large openings. These shutters provide strong protection against intruders and harsh weather, ensuring reliable performance with minimal upkeep.
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
            Gear operated rolling shutters are crafted from sturdy, durable materials and equipped with a smooth gear system for easy manual operation. Designed for effortless handling, they are perfect for medium to large entrances. Offering strong security and long-lasting performance, these shutters require minimal maintenance and are suitable for both residential and commercial properties.
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
            When choosing gear operated rolling shutters, keep these points in mind: accurately measure the opening to select the proper dimensions, ensure the gear system can handle the shutter’s weight and usage frequency, choose durable materials for long-lasting performance, and pick a finish and design that complements your property’s style.
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
            Gear operated rolling shutters provide robust security with effortless manual operation. Built with durable materials and a smooth gear system, they offer reliable, convenient, and long-lasting performance. Ideal for both residential and commercial spaces, these shutters combine strength with functionality. Choose gear operated rolling shutters to protect your property with ease and confidence.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
