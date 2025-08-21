import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";

const arr = [
  {
    heading: "Secure Yet Open:",
    description:
      "Perforated rolling shutters strike the right balance between safety and openness. Their strong build ensures protection, while the perforations allow visibility and airflow.",
  },
  {
    heading: "Customer-Friendly Design:",
    description:
      "Ideal for storefronts, showrooms, and cafes, they let customers see inside even when closed, helping businesses attract attention after hours.",
  },
  {
    heading: "Long-Lasting Performance:",
    description:
      "Crafted from durable materials, these shutters can withstand daily usage and weather challenges, ensuring reliability for years.",
  },
  {
    heading: "Flexible Usage:",
    description:
      "Suitable for retail, commercial, or industrial spaces, they adapt to different environments while maintaining functionality and appeal.",
  },
  {
    heading: "Stylish Finish:",
    description:
      "With multiple design options, colors, and finishes, perforated shutters enhance both security and aesthetics, blending practicality with style.",
  },
];


const useRolling = [
  {
    heading: "Retail Stores:",
    description:
      "Perforated rolling shutters allow customers to preview merchandise even after hours, boosting security while attracting foot traffic.",
  },
  {
    heading: "Cafes and Restaurants:",
    description:
      "They protect seating and storefront areas while keeping visibility and airflow intact, creating an inviting vibe even when closed.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "Ideal for warehouses and workshops, they provide strong protection with ventilation, ensuring safety without complete isolation.",
  },
];


export const PerfortedRollingShutters = () => {
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
          src="/perforated-rolling-shutter.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white">
            {" "}
            PERFORATED ROLLING SHUTTERS
          </div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;  PERFORATED ROLLING SHUTTERS
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-20 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-12 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]text-[#181614]">
              Perforated Rollong Shutter
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
             Perforated Rolling Shutters: Combining Security and Visibility
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
            Perforated rolling shutters combine security with modern design, allowing visibility and ventilation without compromising protection. Their unique perforated structure makes them a preferred choice for commercial spaces, ensuring safety while maintaining an attractive and welcoming appearance. Choosing perforated shutters means balancing functionality, aesthetics, and reliable security.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/perforated-rolling-shutter.jpg"
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-[23px] font-semibold my-4 text-[#181614]">
          What Are Perforated Rolling Shutters?
          </div>
          <div
            className="text-lg text-[14px] my-6"
            style={{ lineHeight: "30px" }}
          >
            Perforated Rolling Shutters are crafted from high-quality metal sheets with evenly spaced perforations, providing an ideal balance between security and visibility. Their robust design prevents unauthorized access while allowing natural airflow and partial visibility into the premises. Widely used in shopping malls, showrooms, and commercial establishments, these shutters combine durability, style, and practicality, making them a modern solution for secure yet welcoming spaces.
            
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
          Applications of Perforated Rolling Shutters
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
        How to Operate Perforated Rolling Shutters:
          </div>
          <div>
          Operating perforated rolling shutters is simple and user-friendly. Hold the handle firmly and pull the shutter downward until it reaches the required position. Once lowered, engage the locking mechanism to ensure security. To open, unlock the shutter and lift it smoothly back into its upper housing. The perforated design ensures easy handling while maintaining visibility and airflow during operation.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Maintenance Tips
          </div>
          <div>
     Perforated rolling shutters require simple maintenance to stay durable and functional. Regularly clean the surface to prevent dirt buildup, check the operating parts for wear, and apply lubricant to ensure smooth operation.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
           Perforated rolling shutters are the perfect balance of security and style, offering strength, visibility, and lasting durability. They not only safeguard your property but also create a welcoming and modern look, making them a smart choice for any commercial space.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
