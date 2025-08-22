import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";

const arr = [
  {
    heading: "Enhanced Security:",
    description:
      "Manual rolling shutters provide strong protection against unauthorized access. Their durable build ensures that your property remains safe, giving you confidence and peace of mind.",
  },
  {
    heading: "Cost-Effective:",
    description:
      "Manual rolling shutters are an affordable alternative to automated systems, delivering reliable security without a high investment, making them ideal for budget-conscious property owners.",
  },
  {
    heading: "Simple Installation:",
    description:
      "These shutters are easy to install on windows, doors, or other openings. Their practical design allows for quick setup, offering convenience to homeowners and businesses alike.",
  },
  {
    heading: "Customizable Design:",
    description:
      "Manual rolling shutters come in a variety of colors and styles, allowing you to match your property’s aesthetic while maintaining high security and functionality.",
  },
  {
    heading: "Energy Savings:",
    description:
      "By acting as an additional layer of insulation, these shutters help maintain indoor temperatures. This can reduce energy usage and costs during hot summers or cold winters.",
  },
];


const useRolling = [
  {
    heading: "Home Protection:",
    description:
      "Safeguard windows and doors in residential properties, enhancing both security and privacy.",
  },
  {
    heading: "Commercial Use:",
    description:
      "Perfect for shops, offices, and warehouses, providing reliable protection for valuable goods and inventory.",
  },
  {
    heading: "Outdoor Spaces:",
    description:
      "Protect patios, balconies, and other exterior areas, allowing safe and flexible use of outdoor spaces.",
  },
];


export const ManualRollingShutters = () => {
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
          src="/manual-rolling-shutter.webp"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute  inset-0 bg-[#1a2940]  opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-7xl font-[900] text-white">
            {" "}
            MANNUAL ROLLING SHUTTERS
          </div>
        </div>
       
      </div>
       <div className=" flex mt-10 justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;MANNUAL ROLLING
              SHUTTERS
            </h2>
          </div>
        </div>

      <section className="bg-[#f8f8f8] mt-4 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-12 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]text-[#181614]">
              Manual Rolling Shutters
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
             Manual Rolling Shutters: Combining Strength, Security, and Easy Operation for Homes and Businesses
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Manual rolling shutters offer a practical and affordable way to improve security and privacy for homes and businesses. Built for smooth and easy operation, they provide a sturdy barrier against intruders and harsh weather, while giving you control over access and visibility.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/manual-rolling-shutter.webp"
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-[23px] font-semibold my-4 text-[#181614]">
            What Are Manual Rolling Shutters?
          </div>
          <div
            className="text-lg text-[14px] my-6"
            style={{ lineHeight: "30px" }}
          >
            Crafted from premium materials, powder-coated rolling shutters feature a durable finish that enhances their look while offering long-lasting protection against chipping, fading, and corrosion.
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
            Applications of Manual Rolling Shutters
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
            How to Operate Manual Rolling Shutters:
          </div>
          <div>
           Using manual rolling shutters is simple: pull the handle to lower the shutter to your desired position, then lock it securely in place. To open, release the lock and lift the shutter back into its housing effortlessly.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Maintenance Tips
          </div>
          <div>
            Maintain your manual rolling shutters by regularly cleaning them with a soft cloth and mild soap to remove dust and debris. Inspect the mechanisms periodically for signs of wear and replace any damaged parts. Apply appropriate lubricant to tracks and moving components to keep the shutters operating smoothly.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
            Manual rolling shutters offer a cost-effective and reliable way to secure your property. Easy to operate and available in customizable designs, they also provide benefits like energy efficiency. Ideal for multiple applications, these shutters combine protection, style, and convenience.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
