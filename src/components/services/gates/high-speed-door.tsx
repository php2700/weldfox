import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Fast Operation:",
    description:
      "High-speed doors open and close rapidly, reducing waiting time and improving workflow efficiency.",
  },
  {
    heading: "Energy Efficiency:",
    description:
      "Quick operation helps maintain internal temperatures, reducing energy loss in climate-controlled areas.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Robust construction and controlled access options provide reliable protection for commercial and industrial spaces.",
  },
  {
    heading: "Low Maintenance:",
    description:
      "Designed for durability and frequent use, high-speed doors require minimal upkeep, saving time and costs.",
  },
  {
    heading: "Improved Traffic Flow:",
    description:
      "Rapid opening and closing reduce congestion at entrances and exits, optimizing workflow and operational efficiency.",
  },
];

const material = [
  {
    name: "PVC or Fabric Panels:",
    description:
      "Lightweight and flexible, allowing rapid movement and energy-efficient operation.",
  },
  {
    name: "Aluminum Frames:",
    description:
      "Corrosion-resistant and sturdy, providing structural support and durability for industrial applications.",
  },
  {
    name: "Stainless Steel Components:",
    description:
      "Used for hinges, tracks, and mechanisms to ensure long-lasting performance and minimal wear.",
  },
];


const customization = [
  {
    name: "Size and Dimensions:",
    description:
      "High-speed doors can be custom-built to fit any opening, accommodating specific width and height requirements.",
  },
  {
    name: "Operation Type:",
    description:
      "Choose manual, automatic, or sensor-based operation to suit your workflow needs.",
  },
  {
    name: "Color and Finish:",
    description:
      "Available in various colors and finishes to match your facility’s aesthetic or safety requirements.",
  },
  {
    name: "Security and Access Controls:",
    description:
      "Optional integration with keypads, card readers, or remote monitoring systems enhances security.",
  },
];


const gates = [
  {
    name: "Rapid Operation:",
    description:
      "High-speed doors minimize downtime and improve efficiency in high-traffic environments.",
  },
  {
    name: "Durable and Reliable:",
    description:
      "Engineered to withstand frequent use while maintaining smooth operation and low maintenance needs.",
  },
  {
    name: "Energy and Climate Control:",
    description:
      "Quick opening and closing reduce energy loss and help maintain internal climate conditions.",
  },
];


const useRolling = [
  {
    heading: "Warehouses:",
    description:
      "Ideal for high-traffic warehouse doors where fast access and climate control are crucial.",
  },
  {
    heading: "Cold Storage Facilities:",
    description:
      "Helps maintain temperature and prevent contamination in refrigeration and freezing areas.",
  },
  {
    heading: "Production Areas:",
    description:
      "Optimizes workflow in factories and manufacturing plants by reducing entry and exit delays.",
  },
];


export const Highspeeddoor = () => {
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
          src="/high-speed-door.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">HIGH SPEED DOORS</div>
        </div>
       
      </div>
       <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;HIGH SPEED DOORS
            </h2>
          </div>
        </div> */}
           <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                        <img
                          src="/high-speed-door.jpg"
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
                           HIGH SPEED DOORS
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
              High Speed Door
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Boost Efficiency and Security with High-Speed Doors – Ideal for Industrial & Commercial Use
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              High-speed doors are the ideal solution for industrial and commercial spaces requiring fast access, enhanced security, and temperature control. Designed to open and close at exceptional speeds, these doors reduce energy loss and minimize downtime during operations. Perfect for warehouses, factories, cleanrooms, and loading docks, high-speed doors improve operational efficiency while offering long-term durability and low maintenance. Whether you aim to optimize workflow or maintain strict environmental controls, high-speed doors are a smart investment for modern businesses.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/high-speed-door.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           What is a High-Speed Door?
          </div>
          <div style={{ lineHeight: "30px" }}>
           A high-speed door is a specialized industrial or commercial door designed for rapid opening and closing, operating significantly faster than traditional doors. They are commonly used in warehouses, cold storage facilities, and production areas, where quick access is essential. High-speed doors help maintain climate control, reduce air contamination, improve traffic flow, and enhance security.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Key Benefits of Installing a High-Speed Door
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
            Materials Used for High-Speed Doors
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
          Customization Options for High-Speed Doors
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
            How to Choose the Right High-Speed Door for Your Facility
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
         Installation & Maintenance of High-Speed Doors
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
           Professional Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Due to their specialized design, high-speed doors should be installed by professionals to ensure proper setup, alignment, and smooth operation. Correct installation also maximizes energy efficiency and security benefits.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
           Minimal Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            High-speed doors are built for durability and require minimal maintenance. Regularly inspect the motor, tracks, and sensors to ensure efficient operation. Many models include self-repairing features, further reducing downtime and maintenance needs.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
           Safety Inspections:
          </div>
          <div className="text-[15px] font-[400] my-2">
           It is essential to perform routine safety inspections to ensure that sensors and safety systems are functioning correctly. Regular maintenance also prolongs the door’s lifespan and keeps it operating in optimal condition.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of High-Speed Doors
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
           High-speed doors are a smart investment for businesses seeking efficiency, security, and energy savings. With their rapid operation, durable construction, and customizable features, these doors enhance workflow, safety, and environmental control in industrial and commercial spaces.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
