import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";
import { motion } from "framer-motion";


const arr = [
  {
    heading: "Convenient Operation:",
    description:
      "Motorized rolling shutters open and close effortlessly at the touch of a button, making them ideal for large or hard-to-reach doors and windows.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Built with strong materials and secure locking mechanisms, motorized shutters provide reliable protection against intruders and vandalism.",
  },
  {
    heading: "Energy Efficiency:",
    description:
      "These shutters help maintain indoor temperatures, reducing heating and cooling costs by keeping interiors cool in summer and warm in winter.",
  },
  {
    heading: "Customizable Options:",
    description:
      "Choose from a range of colors, finishes, and materials to match your property’s style while meeting your functional needs.",
  },
  {
    heading: "Automated Control Systems:",
    description:
      "Many motorized shutters can be integrated with smart home systems, allowing remote operation, scheduling, and automated control from your devices.",
  },
];


const useRolling = [
  {
    heading: "Residential Properties:",
    description: "Enhance home security and convenience with effortless operation and reliable protection.",
  },
  {
    heading: "Commercial Buildings:",
    description: "Secure shops, offices, and showrooms while allowing easy access for staff and customers.",
  },
  {
    heading: "Warehouses & Storage:",
    description: "Protect goods and inventory with strong, automated shutters that are easy to operate.",
  },
  {
    heading: "Garages:",
    description: "Provide safe and convenient access to vehicles with automated rolling shutters.",
  },
  {
    heading: "Outdoor Areas:",
    description: "Secure patios, balconies, or terraces without compromising aesthetics or functionality.",
  },
];


export const MotorizedShutters = () => {
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
      {/* <div
        className={`transition-opacity duration-300 ${
          showSticky ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      > */}
        <Header />
      {/* </div>
      {showSticky && <StickyHeader />} */}
      {/* <div className="relative w-full">
        <img
          src="/motorized-rolling-shutters.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white">
            {" "}
        MOTORIZED ROLLING SHUTTERS
          </div>
        </div>
     
      </div>
         <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;MOTORIZED ROLLING SHUTTERS
            </h2>
          </div>
        </div> */}
         <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                <img
                  src="/motorized-rolling-shutters.jpg"
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
                     MOTORIZED ROLLING SHUTTERS
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
             Motorized Rolling Shutters
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
             Motorized Rolling Shutters: The Ultimate in Convenience and Security
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
             Motorized rolling shutters provide modern security and convenience for both homes and businesses. Featuring advanced motor technology, they allow effortless operation while ensuring reliable protection and improved energy efficiency, making them perfect for today’s fast-paced lifestyles.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/motorized-rolling-shutters.jpg"
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-[23px] font-semibold my-4 text-[#181614]">
      What Are Motorized Rolling Shutters?
          </div>
          <div
            className="text-lg text-[14px] my-6"
            style={{ lineHeight: "30px" }}
          >
           A motorized rolling shutter is a type of rolling shutter (or rolling door) that is operated using an electric motor instead of manually. It provides convenience, security, and efficiency for both residential and commercial properties.
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
           Applications of Motorized Rolling Shutters
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
            How to Operate Motorized Rolling Shutters:
          </div>
          <div>
            Operating motorized rolling shutters is effortless: Use the wall switch, remote control, or smart device to open or close the shutter. The motor smoothly raises or lowers the shutter to the desired position. Many systems also allow you to set automated schedules for daily operation, providing convenience and security without manual effort.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Maintenance Tips
          </div>
          <div>
           o keep your motorized rolling shutters in optimal condition, clean the surface regularly with a soft cloth and mild soap to remove dust and debris. Periodically inspect the motor, tracks, and moving components for wear or damage, and ensure all fasteners are secure. Apply appropriate lubrication to the tracks and mechanical parts as recommended by the manufacturer to maintain smooth and reliable operation.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
            Motorized rolling shutters combine effortless operation, robust security, and modern design. Ideal for both residential and commercial spaces, they provide convenience, energy efficiency, and peace of mind. Invest in motorized rolling shutters today to secure your property with style, ease, and reliability.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
