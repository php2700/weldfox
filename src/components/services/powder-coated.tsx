import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";
import { motion } from "framer-motion";


const arr = [
  {
    heading: "Durability:",
    description:
      "The powder coating creates a tough, weather-resistant surface that ensures longevity, even in harsh environments.",
  },
  {
    heading: "Aesthetic Appeal:",
    description:
      "Available in a variety of colors and finishes, powder-coated shutters can be customized to match any style, enhancing your property’s curb appeal.",
  },
  {
    heading: "Low Maintenance:",
    description:
      "Unlike traditional paint, powder coating doesn’t require frequent repainting. A simple wash is often enough to keep them looking new.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "These rolling shutters provide a solid barrier against unauthorized entry, making them an excellent choice for both homes and businesses.",
  },
  {
    heading: "Energy Efficiency:",
    description:
      "By insulating windows and doors, powder-coated shutters help regulate indoor temperatures, leading to energy savings.",
  },
];

const useRolling = [
  {
    heading: "Residential Use:",
    description:
      "Perfect for homeowners looking to improve security and aesthetics without compromising on style.",
  },
  {
    heading: "Commercial Spaces:",
    description:
      "Ideal for retail stores, warehouses, and industrial facilities that require robust protection and a professional look.",
  },
  {
    heading: "Outdoor Areas:",
    description:
      "Secure patios and balconies, allowing for versatile usage of outdoor spaces.",
  },
];

export const PowderCoatedShutters = () => {
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
          src="/powder-coated-rolling-shutter.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white">
            {" "}
            POWDER COATED ROLLING SHUTTERS
          </div>
        </div>
       
      </div>
       <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp; POWDER COATED ROLLING
              SHUTTERS
            </h2>
          </div>
        </div> */}
         <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/powder-coated-rolling-shutter.jpg"
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
             POWDER COATED ROLLING SHUTTERS
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
              Powder Coated Rolling Shutter
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
              Elevate Your Space with Powder Coated Rolling Shutters
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Powder-coated rolling shutters combine durability and aesthetic
              appeal, making them a reliable and stylish choice for homes,
              offices, and commercial spaces. Their protective finish resists
              chipping, fading, and corrosion, ensuring long-lasting performance
              and minimal maintenance.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/powder-coated-rolling-shutter.jpg"
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-[23px] font-semibold my-4 text-[#181614]">
            What Are Powder Coated Rolling Shutters?
          </div>
          <div
            className="text-lg text-[14px] my-6"
            style={{ lineHeight: "30px" }}
          >
            These shutters are designed to offer both strength and elegance. The
            powder-coated finish protects against environmental damage, ensuring
            long-lasting durability while maintaining a sleek and polished look
            for any property.
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
            Applications of Powder Coated Rolling Shutters
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
          <div className=" font-semibold text-[#000] mt-4">
            Versatile Design:
          </div>
          <div>
            With endless color options and finishes, these shutters can
            seamlessly integrate with any décor.
          </div>
          <div className=" font-semibold text-[#000] mt-4">Eco-Friendly:</div>
          <div>
            The powder coating process is environmentally friendly, producing
            minimal waste and using fewer volatile organic compounds (VOCs)
            compared to traditional paints.
          </div>
          <div className=" font-semibold text-[#000] mt-4">
            Smooth Operation:
          </div>
          <div>
            Designed for ease of use, whether manually operated or motorized,
            providing convenience and accessibility.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Installation and Maintenance
          </div>
          <div>
            Proper installation by professionals is crucial to ensure optimal
            functionality and performance. Regular cleaning and inspection help
            maintain their appearance and efficiency, while the durable
            powder-coated finish provides long-lasting protection against
            chipping, fading, and corrosion.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
            choosing powder-coated rolling shutters is a wise investment for
            enhancing security, improving aesthetics, and boosting energy
            efficiency. Discover our premium range today and protect your
            property with style and durability.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
