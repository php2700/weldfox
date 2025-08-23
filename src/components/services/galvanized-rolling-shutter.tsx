import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";
import { motion } from "framer-motion";


const arr = [
  {
    heading: "Robust Construction:",
    description:
      "Made from premium galvanized steel, offering long-lasting performance.",
  },
  {
    heading: "Weather Resistance:",
    description:
      "Protects against rain, humidity, and extreme outdoor conditions.",
  },
  {
    heading: "Low Maintenance:",
    description:
      "Requires minimal upkeep while retaining strength and appearance.",
  },
  {
    heading: "Wide Usability:",
    description:
      "Perfect for commercial shops, warehouses, factories, and garages.",
  },
  {
    heading: "Reliable Protection:",
    description:
      "Provides a sturdy defense against corrosion, rust, and heavy usage.",
  },
];


const useRolling = [
  {
    heading: "Retail Stores:",
    description:
      "Galvanized shutters secure merchandise while resisting rust and ensuring long-lasting protection.",
  },
  {
    heading: "Warehouses:",
    description:
      "Provide durable security for large openings and loading docks with corrosion resistance.",
  },
  {
    heading: "Garages:",
    description:
      "Protect vehicles and equipment with strong, rust-resistant galvanized shutters.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "Withstand heavy usage and harsh environments, ensuring safety for machinery and materials.",
  },
];


export const GalvanizedShutters = () => {
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
          src="/galvanised-rolling-shutter.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white">
            {" "}
            GALVANIZED ROLLING SHUTTERS
          </div>
        </div>
       
      </div>
       <div className="mt-10 flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp; GALVANIZED ROLLING
              SHUTTERS
            </h2>
          </div>
        </div> */}
         <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                <img
                  src="/galvanised-rolling-shutter.jpg"
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
                    GALVANIZED ROLLING SHUTTERS
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
              Galvanised Rolling Shutter
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
              Galvanized Rolling Shutters: Durable Security for Every Space
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
             Galvanized rolling shutters combine durability with functionality, making them ideal for various environments. Their robust steel construction ensures maximum strength, while the galvanized coating protects against rust and wear. Perfect for shops, warehouses, and homes, they deliver dependable security along with long-term performance.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/galvanised-rolling-shutter.jpg"
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-[23px] font-semibold my-4 text-[#181614]">
            What Are Galvanized Rolling Shutters?
          </div>
          <div
            className="text-lg text-[14px] my-6"
            style={{ lineHeight: "30px" }}
          >
          Galvanized rolling shutters offer superior reliability with their sturdy build and zinc coating that shields against damage. Designed to endure tough conditions, they maintain their structural integrity over time. Suitable for commercial, industrial, and residential use, these shutters ensure safety, durability, and low maintenance requirements.
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
            How to Operate Galvanized Rolling Shutters:
          </div>
          <div>
            Choose between manual operation for simplicity or motorized systems for added convenience when operating galvanized rolling shutters.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Maintenance Tips
          </div>
          <div>
            Clean galvanized rolling shutters regularly with a mild detergent and water to prevent dirt, dust, and grime buildup.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
            Galvanized rolling shutters provide a reliable and long-lasting solution for securing your property. With their sturdy build, resistance to rust, and cost-effective nature, they not only enhance safety but also add functional value to any space. Choosing galvanized shutters is a smart investment for property owners seeking durability, protection, and peace of mind.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
