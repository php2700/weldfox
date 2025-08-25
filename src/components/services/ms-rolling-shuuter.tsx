import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";
import { motion } from "framer-motion";


const arr = [
  {
    heading: "Exceptional Security:",
    description:
      "MS rolling shutters create a strong barrier against unauthorized access. Their durable steel construction ensures maximum protection for your property.",
  },
  {
    heading: "Durability:",
    description:
      "Designed to endure daily use and extreme weather, MS rolling shutters are long-lasting and require minimal maintenance.",
  },
  {
    heading: "Versatile Applications:",
    description:
      "Ideal for shops, warehouses, garages, and industrial facilities, MS rolling shutters suit both commercial and residential environments.",
  },
  {
    heading: "Cost-Effective Solution:",
    description:
      "Offering reliable security at an affordable price, MS rolling shutters protect your property without straining your budget.",
  },
  {
    heading: "Customizable Designs:",
    description:
      "Available in multiple colors, finishes, and sizes, MS rolling shutters can be tailored to match your property’s style while ensuring safety.",
  },
];


const useRolling = [
  {
    heading: "Retail Stores:",
    description:
      "Protect valuable merchandise while maintaining an attractive and secure storefront.",
  },
  {
    heading: "Warehouses:",
    description:
      "Secure goods and inventory effectively, providing reliable protection in storage facilities.",
  },
  {
    heading: "Garages:",
    description:
      "Offer convenient access while safeguarding vehicles, tools, and equipment.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "Enhance safety and security in industrial environments with heavy machinery and valuable assets.",
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
          src="/ms-rolling-shutter.jpg"
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
       
      </div>
       <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;MS ROLLING SHUTTERS
            </h2>
          </div>
        </div>
         */}

          <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/ms-rolling-shutter.jpg"
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
             MS ROLLING SHUTTERS
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
              MS Rolling shutter
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
            MS Rolling Shutters offer robust security and long-lasting durability
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              MS (Mild Steel) rolling shutters provide strong security and lasting durability for both residential and commercial properties. Crafted from premium mild steel, they protect against theft, vandalism, and harsh weather. With customizable designs and sizes, MS rolling shutters are suitable for a wide range of applications while ensuring reliable performance.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/ms-rolling-shutter.jpg"
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
           MS Rolling Shutters (Mild Steel Rolling Shutters) are durable, strong shutters made from mild steel, designed to provide security, protection, and privacy for both residential and commercial properties.
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
Using MS rolling shutters is simple and convenient. Opt for manual operation for a straightforward approach or motorized systems for effortless control via remote or wall switch. Maintenance is easy—just wipe the surface regularly to keep the shutters looking clean and well-kept.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Maintenance Tips
          </div>
          <div>
          To maintain the durability and smooth operation of MS rolling shutters, clean them regularly with a mild detergent to prevent dirt and rust buildup. Periodically check the mechanisms for wear and apply lubricant to moving parts to ensure long-lasting performance.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
            MS rolling shutters provide a strong and reliable security solution for residential and commercial properties. Offering durability, versatility, and customizable designs, they ensure both protection and aesthetic appeal. Choose MS rolling shutters to safeguard your property while enhancing its overall look.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
