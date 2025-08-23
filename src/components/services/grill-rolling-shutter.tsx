import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";
import { motion } from "framer-motion";


const arr = [
  {
    heading: "Strong Security:",
    description:
      "Grill rolling shutters provide a solid barrier that deters theft and keeps your property safe.",
  },
  {
    heading: "Airflow & Visibility:",
    description:
      "The open design allows fresh air and visibility while still offering strong protection.",
  },
  {
    heading: "Long-Lasting Durability:",
    description:
      "Built with quality materials, these shutters resist damage and deliver years of reliable use.",
  },
  {
    heading: "Wide Applications:",
    description:
      "Ideal for shops, cafes, garages, and warehouses, offering both security and practicality.",
  },
  {
    heading: "Stylish Options:",
    description:
      "Available in different colors and finishes to match your property’s look.",
  },
];

const useRolling = [
  {
    heading: "Retail Shops:",
    description:
      "Ideal for storefronts, grill shutters secure merchandise while showcasing products to passersby.",
  },
  {
    heading: "Food Outlets & Cafes:",
    description:
      "Protect serving counters or outdoor spaces while keeping the area visible and welcoming.",
  },
  {
    heading: "Garages & Parking Areas:",
    description:
      "Offer strong security for vehicles and equipment with added ventilation.",
  },
  {
    heading: "Warehouses & Industrial Units:",
    description:
      "Maintain airflow and visibility while ensuring safety and security for stored goods.",
  },
];

export const GrillShutters = () => {
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
          src="/grill-rolling-shutter.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white">
            {" "}
            GRILL ROLLING SHUTTERS
          </div>
        </div>
     
      </div>
         <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;GRILL ROLLING SHUTTERS
            </h2>
          </div>
        </div> */}
         <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/grill-rolling-shutter.jpg"
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
            GRILL ROLLING SHUTTERS
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
              Static Title
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
              Grill Rolling Shutters: The Perfect Blend of Security and Style
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Grill rolling shutters combine strength and style, offering
              reliable security while allowing natural airflow and visibility.
              Ideal for shops, garages, and outdoor spaces, they protect your
              property without blocking openness and aesthetics.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/grill-rolling-shutter.jpg"
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-[23px] font-semibold my-4 text-[#181614]">
            What Are Grill Rolling Shutters?
          </div>
          <div
            className="text-lg text-[14px] my-6"
            style={{ lineHeight: "30px" }}
          >
            Grill rolling shutters are built with strong metal grills that
            ensure maximum security while maintaining airflow and visibility.
            Perfect for showrooms, retail outlets, and garages, they provide
            reliable protection without blocking light or openness, blending
            safety with style.{" "}
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
            Applications of Grill Rolling Shutters
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
            How to Operate Grill Rolling Shutters:
          </div>
          <div>
            Grill rolling shutters are easy to use, available in manual or
            motorized options. Motorized shutters can be operated with a switch
            or remote, while the simple design makes cleaning and maintenance
            hassle-free.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Maintenance Tips
          </div>
          <div>
            To keep your grill rolling shutters in top condition, clean them
            with mild soap and water to avoid dust and grime buildup. Inspect
            the shutters frequently for damage or wear and fix issues right
            away. Lubricate hinges, tracks, and other moving parts regularly to
            maintain smooth and long-lasting performance.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
            Grill rolling shutters are an ideal blend of strength,
            functionality, and modern appeal. With their sturdy structure, they
            protect against break-ins while maintaining openness and airflow.
            Suitable for both commercial and residential spaces, they add value
            to your property by combining reliable security with an attractive
            appearance.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
