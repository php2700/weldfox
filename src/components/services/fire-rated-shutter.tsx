import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";

const arr = [
  {
    heading: "Fire Resistance:",
    description:
      "Designed to withstand high temperatures, these shutters provide critical time for evacuation and minimize fire damage.",
  },
  {
    heading: "Smoke Containment:",
    description:
      "Fire-rated shutters help contain smoke, reducing its spread and improving safety for occupants.",
  },
  {
    heading: "Compliance with Regulations:",
    description:
      "Installing fire-rated shutters ensures compliance with codes and regulations, essential for commercial properties.",
  },
  {
    heading: "Versatility:",
    description:
      "Suitable for a variety of applications, including warehouses, restaurants, and retail spaces.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "In addition to fire protection, these shutters offer security against unauthorized access when closed.",
  },
];

const useRolling = [
  {
    heading: "Commercial Buildings:",
    description:
      "Essential for shopping malls, offices, and factories to protect assets and comply with safety regulations.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "Perfect for warehouses and manufacturing plants that require fire separation in compliance with safety standards.",
  },
];

export const FireRatedShutters = () => {
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
          src="/manual-rolling-shutter.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white">
            {" "}
            FIRE RATED ROLLING SHUTTERS
          </div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp; FIRE RATED Rolling
              Shutters
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-20 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-12 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]text-[#181614]">
              Fire-Rated Rolling Shutter
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
              Enhance Safety with Fire-Rated Rolling Shutters
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Manual rolling shutters are an efficient and cost-effective
              solution for enhancing security and privacy in both residential
              and commercial properties. Designed for easy operation, these
              shutters provide a reliable barrier against intruders and adverse
              weather while allowing you to control access and visibility as
              needed.Fire-rated rolling shutters provide essential protection
              against fire hazards, making them an ideal choice for commercial
              and industrial applications. Learn about their benefits, features,
              and why they are crucial for safeguarding your property.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/manual-rolling-shutter.jpg"
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-[23px] font-semibold my-4 text-[#181614]">
            What Are Fire-Rated Rolling Shutters?
          </div>
          <div
            className="text-lg text-[14px] my-6"
            style={{ lineHeight: "30px" }}
          >
            Fire-rated rolling shutters are specially designed barriers that
            prevent the spread of fire and smoke. Made from durable materials,
            these shutters comply with safety standards and are an effective
            solution for protecting openings in buildings.
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
            Applications of Fire-Rated Rolling Shutters
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
          <div className=" font-semibold text-[#000] mt-4">Durability:</div>
          <div>
            Built to last, these shutters are made from high-quality materials
            that can withstand intense conditions.
          </div>
          <div className=" font-semibold text-[#000] mt-4">
            Customizable Options:
          </div>
          <div>
            Available in various sizes, finishes, and fire ratings to meet
            specific safety requirements and aesthetic preferences.
          </div>
          <div className=" font-semibold text-[#000] mt-4">Easy Operation:</div>
          <div>
            Designed for seamless operation, whether manual or motorized,
            ensuring quick deployment in emergencies.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Installation and Maintenance
          </div>
          <div>
            Professional installation is crucial to ensure that fire-rated
            rolling shutters function correctly and meet safety standards.
            Regular inspections and maintenance will help maintain their
            effectiveness and prolong their lifespan.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
            Investing in fire-rated rolling shutters is a proactive measure to
            protect your property and its occupants from fire hazards. Explore
            our range of fire-rated rolling shutters to find the perfect
            solution for your safety needs.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
