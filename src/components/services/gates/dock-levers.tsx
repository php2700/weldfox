import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


const arr = [
  {
    heading: "Height Adjustment:",
    description:
      "Dock levers allow operators to raise or lower the dock platform to match the trailer bed, ensuring safe and efficient loading and unloading.",
  },
  {
    heading: "Smooth Transition for Equipment:",
    description:
      "By leveling the dock with the trailer, dock levers provide a smooth transition for forklifts, pallet jacks, and other material handling equipment.",
  },
  {
    heading: "Versatility in Trailer Heights:",
    description:
      "Designed to accommodate trailers of various heights, dock levers can handle a range of loading requirements and vehicle types.",
  },
  {
    heading: "Enhanced Safety:",
    description:
      "Proper use of dock levers minimizes the risk of accidents during loading and unloading by stabilizing the platform and preventing misalignment.",
  },
  {
    heading: "Operational Efficiency:",
    description:
      "Dock levers streamline the loading process, reducing downtime and making warehouse and distribution operations more efficient.",
  },
];


const material = [
  {
    name: "Steel:",
    description:
      "High-strength steel construction ensures durability and the ability to handle heavy loads, ideal for industrial applications.",
  },
  {
    name: "Aluminum:",
    description:
      "Lightweight yet sturdy, aluminum dock levers are corrosion-resistant and easy to maneuver, suitable for lighter-duty docks.",
  },
  {
    name: "Composite Materials:",
    description:
      "Some dock levers use reinforced composite materials to balance weight and strength, providing durability with easier handling.",
  },
];


const customization = [
  {
    name: "Size & Weight Capacity:",
    description:
      "Dock levers can be customized to accommodate different trailer heights and weight requirements.",
  },
  {
    name: "Finish:",
    description:
      "Choose from powder-coated, galvanized, or painted finishes to protect against rust and wear in harsh environments.",
  },
  {
    name: "Lever Mechanism Type:",
    description:
      "Select manual or hydraulic lever mechanisms depending on the level of automation and ease of use required.",
  },
];
const gates = [
  {
    name: "Traffic Volume:",
    description:
      "Assess the expected traffic volume at your loading dock to determine the appropriate type (manual, hydraulic, or electric) and size of dock lever needed for your operations.",
  },
  {
    name: "Weight Capacity:",
    description:
      "Evaluate the weight capacity requirements based on the types of vehicles and loads you will be handling to ensure you choose a dock lever that can safely accommodate your needs.",
  },
  {
    name: "Budget:",
    description:
      "Dock levers come in various price ranges. Set a budget that considers both initial costs and maintenance, ensuring you receive a high-quality product that meets your operational needs.",
  },
];

const useRolling = [
  {
    heading: "Manual Dock Levers:",
    description:
      "Cost-effective and reliable, manual dock levers are operated by hand and suitable for lighter loads or low-frequency operations.",
  },
  {
    heading: "Hydraulic Dock Levers:",
    description:
      "Hydraulic levers provide smooth and effortless height adjustment for heavier loads, increasing efficiency and reducing physical strain on operators.",
  },
  {
    heading: "Electric Dock Levers:",
    description:
      "Automated electric dock levers offer maximum convenience and precision, ideal for high-volume or industrial loading environments.",
  },
];


export const Docklevers = () => {
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
          src="/dock-levers.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">DOCK LEVERS</div>
        </div>
        
      </div>
      <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;DOCK LEVERS
            </h2>
          </div>
        </div> */}
           <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                <img
                  src="/dock-levers.jpg"
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
                    DOCK LEVERS
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

      <section className="bg-[#f8f8f8] mt-4 pt-4">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Dock Levers
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Enhance Dock Operations with Reliable Dock Levers
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Dock levers are essential components for loading docks, enabling safe and efficient movement of goods between trucks and loading bays. They help streamline operations, improve workplace safety, and ensure reliable handling of cargo in warehouses, distribution centers, and manufacturing facilities.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/dock-levers.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What are Dock Levers?
          </div>
          <div style={{ lineHeight: "30px" }}>
           Dock levers are mechanical devices that adjust the height and position of a loading dock platform to align with a trailer bed. Using a lever mechanism, operators can raise or lower the dock level, ensuring smooth transitions for forklifts and other material handling equipment. Available in various designs and weight capacities, dock levers accommodate different trailer heights and loading needs, making them indispensable for efficient loading dock operations.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of Using Dock Levers
          </div>
          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {arr?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded-lg">
                <div className="my-4 font-semibold text-lg text-[#000;]">
                  {ele.heading}
                </div>
                <div
                  className="text-[15px] font-[400]"
                  style={{ lineHeight: "28px" }}
                >
                  {ele.description}
                </div>
              </div>
            ))}
          </div>

          <div className="text-[23px] font-semibold my-10 text-[#181614;]">
            Materials Used for Dock Levers
          </div>
          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {material?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded-lg">
                <div className="my-4 font-semibold text-lg text-[#000;]">
                  {ele.name}
                </div>
                <div
                  className="text-[15px] font-[400]"
                  style={{ lineHeight: "28px" }}
                >
                  {ele.description}
                </div>
              </div>
            ))}
          </div>
          <div className="text-[23px] font-semibold my-10 text-[#181614;]">
            Customization Options for Dock Levers
          </div>
          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {customization?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded-lg text-[#000]">
                <div className="my-4 font-semibold text-lg">{ele.name}</div>
                <div
                  className="text-[15px] font-[400]"
                  style={{ lineHeight: "28px" }}
                >
                  {ele.description}
                </div>
              </div>
            ))}
          </div>
          <div className="text-[23px] font-semibold my-10 text-[#181614;]">
            How to Choose the Right Dock Lever for Your Operations
          </div>
          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {gates?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded-lg text-[#000]">
                <div className="my-4 font-semibold text-lg">{ele.name}</div>
                <div
                  className="text-[15px] font-[400]"
                  style={{ lineHeight: "28px" }}
                >
                  {ele.description}
                </div>
              </div>
            ))}
          </div>
          <div className="text-[23px] font-semibold my-10 text-[#181614;]">
            Installation & Maintenance of Dock Levers
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Professional Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Proper installation is crucial for the safe and effective operation of dock levers.
          It is recommended to have them installed by qualified professionals to ensure
          compliance with safety standards.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Routine Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Proper installation is crucial for the safe and effective operation of dock levers.
          It is recommended to have them installed by qualified professionals to ensure
          compliance with safety standards.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Safety Inspections:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Conduct routine safety inspections to ensure that dock levers are functioning correctly and to identify any potential issues before they become major problems.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of Dock Levers
          </div>

          {useRolling?.map((ele) => (
            <>
              <div className="font-semibold mt-8 mb-4 text-[#000] ">
                {ele?.heading}
              </div>
              <div className="mb-2">{ele?.description}</div>
            </>
          ))}
          <div className="text-[23px] font-semibold my-8 text-[#181614;]">
            Conclusion
          </div>
          <div className=" font-[400px] mt-8 mb-20 ">
          Dock levers are a vital component of any loading dock operation, providing safety, efficiency, and versatility. By investing in high-quality dock levers, you can improve the loading and unloading process, enhance workplace safety, and streamline your operations. Choose dock levers that meet your specific requirements and elevate the functionality of your loading dock.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
