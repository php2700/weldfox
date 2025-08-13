import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";

const arr = [
  {
    heading: "Enhanced Security:",
    description:
      "SS rolling shutters provide a robust barrier against intruders. Their strong stainless steel construction offers significant protection, making them an ideal solution for securing valuable assets and property.",
  },
  {
    heading: "Corrosion Resistance:",
    description:
      "Unlike traditional steel, stainless steel is highly resistant to rust and corrosion. This property ensures your shutters maintain their appearance and functionality even in harsh weather conditions.",
  },
  {
    heading: "Aesthetic Appeal:",
    description:
      "Available in various finishes, SS rolling shutters enhance the visual appeal of any property. Their sleek design adds a modern touch while complementing different architectural styles.",
  },
  {
    heading: "Durability:",
    description:
      "Built to withstand daily wear and tear, SS rolling shutters are designed for long-term use. Their strength and resilience make them a cost-effective investment for property owners.",
  },
  {
    heading: "Versatile Applications:",
    description:
      "These shutters are suitable for various environments, including retail stores, warehouses, industrial facilities, and residential properties. Their versatility makes them a choice across sectors.",
  },
];

const useRolling = [
  {
    heading: "Retail Stores:",
    description:
      "Secure merchandise while maintaining visibility and style, attracting customers even when closed.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "Protect valuable machinery and equipment in warehouses and production areas.",
  },
  {
    heading: "Garages:",
    description:
      "Provide strong security for vehicles while enhancing the overall look of your property.",
  },
    {
    heading: "Restaurants and Cafes:",
    description:
      "Secure outdoor dining areas, allowing for flexibility and safety.",
  },
];

export const SsRollingShutters = () => {
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
          src="/ss-rolling-shutter.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white">
            {" "}
            SS ROLLING SHUTTERS
          </div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;SS ROLLING SHUTTERS
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-20 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-12 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]text-[#181614]">
             SS Rolling Shutter
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
             SS Rolling Shutters: Unmatched Security and Elegance
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              SS (Stainless Steel) rolling shutters are an exceptional choice for those seeking a combination of security, durability, and aesthetic appeal. Constructed from high-quality stainless steel, these shutters offer superior resistance to corrosion and damage, making them ideal for both commercial and residential applications.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/ss-rolling-shutter.jpg"
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-[23px] font-semibold my-4 text-[#181614]">
What Are SS Rolling Rolling Shutters?
          </div>
          <div
            className="text-lg text-[14px] my-6"
            style={{ lineHeight: "30px" }}
          >
           Powder-coated rolling shutters are constructed from high-quality materials and finished with a durable powder coating. This process not only enhances their appearance but also provides a protective layer that resists chipping, fading, and corrosion.
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
           Applications of SS Rolling Shutters
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
           Operating galvanized rolling shutters is straightforward: Choose between manual operation for simplicity or motorized systems for added convenience. For motorized versions, control the shutters with a remote or wall-mounted switch. Designed for easy upkeep, simply wipe down the surface to maintain appearance.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Maintenance Tips
          </div>
          <div>
          To ensure the longevity and optimal performance of your SS rolling shutters, regularly clean the shutters to prevent dirt and grime buildup, inspect mechanisms for wear, and apply lubricant to moving parts as needed.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
         SS rolling shutters offer an unbeatable combination of security, durability, and style. Their corrosion-resistant properties and aesthetic appeal make them a smart investment for any property. Choose SS rolling shutters today to enhance your security while adding a touch of elegance to your space.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
