import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";
import { motion } from "framer-motion";


const arr = [
  {
    heading: "Robust Security:",
    description:
      "Polycarbonate rolling shutters act as a strong barrier against intrusions and vandalism. Their sturdy construction ensures your property stays protected at all times.",
  },
  {
    heading: "Long-Lasting Durability:",
    description:
      "Lightweight yet tough, polycarbonate shutters resist impacts and weather damage better than traditional metal shutters, reducing maintenance and replacements.",
  },
  {
    heading: "Visual Appeal:",
    description:
      "The transparency of polycarbonate allows for clear visibility, making them ideal for shops and display areas. They provide safety without blocking natural light.",
  },
  {
    heading: "Energy Saving:",
    description:
      "These shutters help maintain indoor temperatures by offering insulation, reducing the need for excessive heating or cooling and improving energy efficiency.",
  },
  {
    heading: "Simple Operation:",
    description:
      "Available in both manual and motorized versions, polycarbonate rolling shutters are easy to operate, letting you secure your property quickly and effortlessly.",
  },
];

const useRolling = [
  {
    heading: "Retail Stores:",
    description:
      "Protect merchandise while allowing visibility, attracting customers even when closed.",
  },
  {
    heading: "Restaurants and Cafes:",
    description:
      "Secure outdoor seating areas while maintaining an open and inviting atmosphere.",
  },
  {
    heading: "Warehouses:",
    description:
      "Safeguard goods while allowing light and visibility for easier management.",
  },
  {
    heading: "Residential Properties:",
    description:
      "Enhance home security while letting natural light in and preserving aesthetics.",
  },
];

export const TransparentRollingShutters = () => {
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
          src="/polycarbonate-rolling-shutter.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white">
            {" "}
            POLYCARBONATE ROLLING SHUTTERS
          </div>
        </div>
      
      </div>
        <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;POLYCARBONATE ROLLING
              SHUTTERS
            </h2>
          </div>
        </div> */}
         <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/polycarbonate-rolling-shutter.jpg"
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
                        POLYCARBONATE ROLLING SHUTTERS

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
              Transperant/Polycarbonate Rolling Shutter
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
              Manual Rolling Shutters: A Blend Of Security And
              ConveniencePolycarbonate Rolling Shutters: Security and Style
              Combined
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Polycarbonate rolling shutters offer a perfect combination of
              strength, transparency, and durability. Their impact-resistant and
              lightweight design ensures security while allowing natural light
              to pass through, making them ideal for commercial and residential
              spaces. Invest in polycarbonate rolling shutters today to protect
              your property without compromising on visibility or style.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/polycarbonate-rolling-shutter.jpg"
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-[23px] font-semibold my-4 text-[#181614]">
            What Are Polycarbonate Rolling Shutters?
          </div>
          <div
            className="text-lg text-[14px] my-6"
            style={{ lineHeight: "30px" }}
          >
            Polycarbonate Rolling Shutters are modern shutters made from
            high-quality polycarbonate sheets, known for their strength,
            transparency, and lightweight properties. They provide a secure
            barrier against intruders while allowing natural light to pass
            through, making them ideal for commercial spaces like showrooms,
            storefronts, and offices.
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
            Applications of Polycarbonate Rolling Shutters
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
            Choosing the Right Polycarbonate Rolling Shutter:
          </div>
          <div>
            Operating polycarbonate rolling shutters is simple and convenient.
            For manual versions, pull the shutter smoothly down or lift it up
            using the handle, ensuring the locking mechanism engages securely.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Maintenance Tips
          </div>
          <div>
            To ensure the longevity and smooth operation of polycarbonate
            rolling shutters, clean the surface regularly with a mild detergent
            and soft cloth to remove dust and dirt. Inspect the moving parts,
            such as gears, chains, or motors, for signs of wear, and lubricate
            them as needed. Regular upkeep keeps the shutters functional,
            preserves their transparency, and maintains their aesthetic appeal.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
            Polycarbonate rolling shutters provide a perfect balance of
            security, durability, and visual appeal. Their strength, ease of
            operation, and versatile design make them suitable for both
            commercial and residential spaces. Choosing polycarbonate shutters
            ensures your property is protected while maintaining a modern,
            stylish look.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
