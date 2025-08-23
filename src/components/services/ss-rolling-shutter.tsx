import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";
import { motion } from "framer-motion";


const arr = [
  {
    heading: "Superior Security:",
    description:
      "SS rolling shutters offer excellent protection against unauthorized access. Their sturdy stainless steel construction ensures the safety of your property and valuable assets.",
  },
  {
    heading: "Rust & Corrosion Resistant:",
    description:
      "Made from high-quality stainless steel, these shutters resist rust and corrosion, maintaining durability and appearance even under extreme weather conditions.",
  },
  {
    heading: "Modern Aesthetics:",
    description:
      "With sleek finishes and stylish designs, SS rolling shutters enhance the look of any property while complementing various architectural styles.",
  },
  {
    heading: "Long-Lasting Durability:",
    description:
      "Engineered for resilience, SS rolling shutters withstand daily usage and harsh conditions, providing a reliable and cost-effective security solution.",
  },
  {
    heading: "Wide Range of Uses:",
    description:
      "Ideal for homes, commercial shops, warehouses, and industrial setups, these versatile shutters deliver both security and aesthetic value across different applications.",
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
      {/* <div className="relative w-full">
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
        
      </div>
      <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;SS ROLLING SHUTTERS
            </h2>
          </div>
        </div> */}
         <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/ss-rolling-shutter.jpg"
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
              SS ROLLING SHUTTERS
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
              SS Rolling Shutter
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
              SS Rolling Shutters: Unmatched Security and Elegance
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Stainless Steel (SS) rolling shutters provide the perfect blend of
              strength, longevity, and style. Manufactured with premium
              stainless steel, they deliver high resistance to rust, corrosion,
              and wear, making them an ideal choice for safeguarding both
              residential and commercial spaces without compromising on
              aesthetics.
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
            An SS Rolling Shutter means Stainless Steel Rolling Shutter. It’s a
            type of rolling shutter made from stainless steel (SS) material,
            known for its strength, durability, and resistance to
            rust/corrosion.
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
            Operating stainless steel rolling shutters is simple and
            user-friendly. They are available with both manual operation,
            suitable for smaller openings, and motorized options for enhanced
            convenience. Motorized shutters can be operated with a remote
            control or a wall-mounted switch, offering smooth and effortless
            functionality. With their robust stainless steel build, these
            shutters require minimal maintenance—a quick wipe-down keeps them
            shining, while regular checks of the moving parts ensure lasting
            performance.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Maintenance Tips
          </div>
          <div>
            To ensure the durability and smooth performance of your galvanized
            rolling shutters, clean the surface regularly to prevent dust and
            debris accumulation, check the operating mechanisms for signs of
            wear, and lubricate moving parts periodically. Proper maintenance
            helps retain their protective coating and extends their lifespan.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
            SS rolling shutters are the perfect blend of strength and style,
            offering lasting protection against harsh weather and unauthorized
            access. Their corrosion-resistant properties make them ideal for
            long-term use, while the sleek finish enhances the overall
            appearance of any property. Investing in SS rolling shutters means
            choosing security, durability, and elegance—all in one solution.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
