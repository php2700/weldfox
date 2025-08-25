import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";
import { motion } from "framer-motion";



const arr = [
  {
    heading: "Energy Efficiency:",
    description:
      "The insulating core helps regulate indoor temperatures, reducing reliance on heating and cooling systems and lowering energy bills.",
  },
  {
    heading: "Superior Insulation:",
    description:
      "These shutters effectively minimize heat transfer, keeping your space comfortable throughout the year.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Constructed from robust aluminum, these shutters provide an added layer of protection against break-ins and vandalism.",
  },
  {
    heading: "Noise Reduction:",
    description:
      "The insulated design helps dampen external noise, creating a quieter indoor environment.",
  },
  {
    heading: "Weather Resistance:",
    description:
      "Built to withstand harsh weather conditions, aluminum puff insulated rolling shutters protect your windows and doors from the elements.",
  },
];

const useRolling = [
  {
    heading: "Residential Use:",
    description:
      "Perfect for homes looking to improve energy efficiency and security while adding aesthetic value.",
  },
  {
    heading: "Commercial Use:",
    description:
      "Ideal for shops, warehouses, and industrial facilities that require reliable protection and insulation",
  },
];

export const AluminiumpuffShutters = () => {
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
          src="/aluminum-puff-insulated-rolling-shutter.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white text-center">
            {" "}
            ALUMINIUM PULL INSULATED ROLLING SHUTTERS
          </div>
        </div>
        
      </div>
<div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp; ALUMINIUM PULL
              INSULATED ROLLING SHUTTERS
            </h2>
          </div>
        </div> */}

 <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/aluminum-puff-insulated-rolling-shutter.jpg"
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
            ALUMINIUM PULL INSULATED ROLLING SHUTTERS
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
              Aluminum Puff Insulated Rolling Shutter
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
              Discover the Benefits of Aluminum Puff Insulated Rolling Shutters
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Aluminum puff insulated rolling shutters provide a modern solution
              for enhancing security while improving energy efficiency and
              reducing noise. Their robust construction and insulating
              properties make them suitable for homes, offices, and commercial
              spaces, offering comfort, protection, and long-term savings.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/aluminum-puff-insulated-rolling-shutter.jpg"
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-[23px] font-semibold my-4 text-[#181614]">
            What Are Aluminum Puff Insulated Rolling Shutters?
          </div>
          <div
            className="text-lg text-[14px] my-6"
            style={{ lineHeight: "30px" }}
          >
            These shutters feature a layered construction with insulating
            material enclosed between aluminum sheets, delivering excellent
            thermal insulation, durability, and protection. Their design ensures
            both energy efficiency and security, making them ideal for
            residential and commercial use.
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
            Applications of Aluminum Puff Insulated Rolling Shutters
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
          <div className=" font-semibold text-[#000] ">Durability:</div>
          <div>
            Aluminum’s natural resistance to rust and corrosion ensures that
            puff insulated rolling shutters remain durable and low-maintenance
            over time
          </div>
          <div className=" font-semibold text-[#000] mt-4">Customization:</div>
          <div>
            With a range of colors, finishes, and sizes, aluminum puff insulated
            rolling shutters can be customized to complement any building design
            while maintaining functionality and aesthetic appeal.
          </div>
          <div className=" font-semibold text-[#000] mt-4 ">Ease of Use:</div>
          <div>
            Designed for smooth operation, whether manual or motorized, making
            them user-friendly for all.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Installation and Maintenance
          </div>
          <div>
            Ensuring proper installation is essential for the shutters to
            function effectively. Routine maintenance, including cleaning and
            checking mechanical parts, helps maintain their performance and
            extends their lifespan.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
            Aluminum puff insulated rolling shutters offer an excellent
            combination of energy efficiency, security, and comfort. Investing
            in them ensures long-term protection and improved living or working
            conditions, making them a valuable addition to any property.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
