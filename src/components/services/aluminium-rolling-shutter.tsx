import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";

const arr = [
  {
    heading: "Exceptional Durability:",
    description:
      "Aluminium rolling shutters are lightweight yet strong, offering excellent resistance to corrosion and environmental damage. Their durable construction ensures long-lasting performance with minimal maintenance.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "These shutters provide a reliable barrier against unauthorized access, safeguarding your property from theft and vandalism. Aluminium construction ensures strength without adding excessive weight.",
  },
  {
    heading: "Cost-Effective Solution:",
    description:
      "Aluminium rolling shutters offer an economical security solution due to their long lifespan and low maintenance requirements, making them a smart investment for property owners.",
  },
  {
    heading: "Versatile Applications:",
    description:
      "Ideal for homes, commercial spaces, and industrial facilities, aluminium rolling shutters are suitable for windows, doors, garages, and storefronts, providing protection across multiple applications.",
  },
  {
    heading: "Customizable Designs:",
    description:
      "Available in a variety of colors, finishes, and slat designs, aluminium rolling shutters can be tailored to suit your property’s aesthetic while maintaining functionality and security.",
  },
];

const useRolling = [
  {
    heading: "Retail Stores:",
    description:
      "Aluminium rolling shutters protect windows and doors while allowing visibility for customers, helping to attract foot traffic and ensuring security.",
  },
  {
    heading: "Warehouses:",
    description:
      "Provide strong protection for goods and equipment, securing large openings and loading areas with lightweight yet durable aluminium construction.",
  },
  {
    heading: "Garages:",
    description:
      "Offer easy access and reliable security for vehicles, combining strength with corrosion resistance for long-lasting performance.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "Ensure safety and security in environments with valuable machinery and materials, while aluminium’s lightweight design makes operation easy and efficient.",
  },
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
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
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
          Aluminum Rolling Shutters: Durable Security for Every Space
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
          Aluminium rolling shutters are a lightweight yet durable solution for securing commercial and residential spaces. Built from high-quality aluminium, these shutters provide reliable protection against unauthorized access while being resistant to rust and weather-related damage. Their sleek design, smooth operation, and low-maintenance nature make them an excellent choice for enhancing both security and aesthetics in modern properties.
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
          Aluminium Rolling Shutters are security shutters made from high-quality aluminium sheets or slats. They provide a lightweight, durable, and corrosion-resistant solution for protecting residential, commercial, and industrial properties.
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
            Applications of Aluminium Rolling Shutters
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
           Operating aluminium rolling shutters is simple and convenient. You can choose between manual operation for basic functionality or motorized systems for effortless control. Motorized shutters can be operated using a remote or wall-mounted switch, making them ideal for larger openings. Designed for easy maintenance, simply wipe the surface clean to keep the shutters looking new and ensure smooth performance.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Installation and Maintenance

          </div>
          <div>
            To ensure the longevity and smooth operation of aluminium rolling shutters, clean the surface regularly with a mild detergent to remove dust and grime. Periodically inspect the moving parts, such as tracks, rollers, and locks, for wear or damage. Apply a suitable lubricant to the mechanisms as needed to maintain effortless operation and prevent corrosion.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
           Aluminium rolling shutters provide an excellent balance of security, durability, and lightweight convenience. Their corrosion-resistant properties and sleek design make them ideal for a wide range of residential and commercial applications. Invest in aluminium rolling shutters today to safeguard your property while adding a modern and stylish touch.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
