import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";

const arr = [
  {
    heading: "Exceptional Security:",
    description:
      "MS rolling shutters provide a formidable barrier against intruders. Their strong steel construction makes them highly resistant to impact, ensuring that your property remains secure at all times.",
  },
  {
    heading: "Durability:",
    description:
      "Built to withstand harsh weather conditions and daily wear, MS rolling shutters are specifically designed for longevity. Their robust materials ensure minimal maintenance and performance.",
  },
  {
    heading: "Versatile Applications:",
    description:
      "These shutters are suitable for various settings, including retail shops, warehouses, garages, and industrial facilities. Their versatility makes them a choice for commercial and residential use.",
  },
  {
    heading: "Cost-Effective Solution:",
    description:
      "MS rolling shutters offer a budget-friendly security option without compromising quality. They provide an effective way to safeguard your property while keeping costs manageable.",
  },
  {
    heading: "Customizable Designs:",
    description:
      "Available in various colors, finishes, and sizes, MS rolling shutters can be tailored to fit the aesthetic of any property. This customization enhances your building's look while providing essential security.",
  },
];

const useRolling = [
  {
    heading: "Retail Stores:",
    description:
      "Protect valuable merchandise while maintaining an appealing storefront.",
  },
  {
    heading: "Warehouses:",
    description:
      "Ideal for storefronts and warehouses, ensuring security for valuable inventory.Warehouses:",
  },
  {
    heading: "Garages:",
    description:
      "Provide easy access and protection for vehicles and equipment.",
  },
    {
    heading: "Industrial Facilities:",
    description:
      "Ensure safety and security in environments with heavy machinery and valuable assets.",
  },
];

export const MsRollingShutters = () => {
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
          src="/manual-rolling-shutter.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white">
            {" "}
            MS ROLLING SHUTTERS
          </div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;MS ROLLING SHUTTERS
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-20 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-12 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]text-[#181614]">
              MS Rolling shutter
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
             MS Rolling Shutters: Superior Security and Durability
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              MS (Mild Steel) rolling shutters are a popular choice for businesses and residential properties seeking robust security solutions. Made from high-quality mild steel, these shutters offer excellent protection against theft and vandalism while ensuring durability and functionality. With a range of customizable options, MS rolling shutters are ideal for various applications.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/manual-rolling-shutter.jpg"
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-[23px] font-semibold my-4 text-[#181614]">
            What Are MS Rolling Rolling Shutters?
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
            Applications of MS Rolling Shutters
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
           How to Operate MS Rolling Shutters:
          </div>
          <div>
Operating MS rolling shutters is straightforward: Choose between manual operation for simplicity or motorized systems for added convenience. For motorized versions, easily control the shutters with a remote or wall-mounted switch. Designed for easy upkeep, simply wipe the surface clean to maintain appearance.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Maintenance Tips
          </div>
          <div>
            To ensure the longevity and optimal performance of your MS rolling shutters, regularly clean the shutters with a mild detergent to prevent rust and dirt buildup, inspect mechanisms for wear, and apply lubricant to moving parts as needed.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
            MS rolling shutters are an ideal choice for those seeking a durable and secure solution for their property. With their exceptional strength, versatility, and customizable options, these shutters offer peace of mind without sacrificing aesthetics. Invest in MS rolling shutters today to enhance the security and appearance of your property.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
