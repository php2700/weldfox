import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";
import { motion } from "framer-motion";


const arr = [
  {
    heading: "Fire Protection:",
    description:
      "Engineered to resist high temperatures, these shutters help contain fire, giving occupants more time to evacuate safely and reducing potential damage.",
  },
  {
    heading: "Smoke Control:",
    description:
      "Fire-rated shutters limit the spread of smoke throughout the building, enhancing safety and visibility during emergencies.",
  },
  {
    heading: "Regulatory Compliance:",
    description:
      "Installing these shutters ensures adherence to fire safety codes and standards, which is essential for commercial and industrial properties.",
  },
  {
    heading: "Wide Applicability:",
    description:
      "Ideal for warehouses, restaurants, retail stores, and other high-risk areas requiring fire protection.",
  },
  {
    heading: "Additional Security:",
    description:
      "Beyond fire safety, these shutters provide protection against unauthorized access when closed, offering a dual benefit.",
  },
];

const useRolling = [
  {
    heading: "Commercial Buildings:",
    description:
      "Ideal for offices, malls, and other commercial spaces, providing fire protection while safeguarding valuable assets.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "Designed for warehouses and factories, these shutters ensure fire safety and regulatory compliance for high-risk areas.",
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
      {/* <div className="relative w-full">
        <img
          src="/fire-rated-rolling-shutter.jpg"
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
        
      </div>
      <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp; FIRE RATED Rolling
              Shutters
            </h2>
          </div>
        </div> */}
         <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                <img
                  src="/fire-rated-rolling-shutter.jpg"
                  alt="About Us Banner"
                  className="absolute inset-0 w-full h-full object-cover"
                />
        
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 skew-y-[-3deg] origin-top-left"></div>
        
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="relative max-w-4xl mx-auto text-center px-6"
                >
                  <h1 className="text-4xl md:text-5xl font-extrabold text-secondary/90 leading-tight mb-4">
                    FIRE RATED ROLLING SHUTTERS
                  </h1>
                  <p className="text-white/90 text-md md:text-lg leading-relaxed">
                    At METAL4CRAFT AUTOMATION, we specialize in delivering premium
                    fabrication solutions designed around the specific requirements of
                    our clients. Focused on Entrance Automation, Rolling Shutters, and
                    General Fabrication, our skilled team blends innovation with
                    craftsmanship.
                  </p>
                </motion.div>
              </section>

      <section className="bg-[#f8f8f8] mt-4 pt-10">
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
              Fire-rated rolling shutters are specially designed to offer both
              security and fire protection. Constructed from fire-resistant
              materials, they act as a barrier to slow or prevent the spread of
              flames and smoke, safeguarding people and assets. Ideal for
              commercial and industrial spaces, these shutters combine
              durability, safety, and reliable operation, ensuring peace of mind
              while meeting essential fire safety regulations.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/fire-rated-rolling-shutter.jpg"
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
            Fire-rated rolling shutters are engineered to provide reliable
            protection against fire and smoke, safeguarding both property and
            occupants. Constructed from durable, fire-resistant materials, they
            meet stringent safety standards and are ideal for securing doors,
            windows, and other openings in commercial and industrial buildings.
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
            They can be manually operated for simplicity or integrated with
            motorized systems for quick and effortless control.
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
            Proper installation of fire-rated rolling shutters is essential to
            guarantee their performance and compliance with safety regulations.
            It should be carried out by trained professionals who follow
            manufacturer guidelines. Regular inspections and preventive
            maintenance, including checking the mechanisms and seals, ensure
            that the shutters remain fully functional and provide optimal
            protection in case of a fire.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
            Fire-rated rolling shutters are a smart investment for safeguarding
            your property and occupants against fire hazards. Combining safety,
            durability, and compliance with regulations, they offer an effective
            solution to protect both lives and assets in commercial and
            industrial settings.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
