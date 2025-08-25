import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


const arr = [
  {
    heading: "Exceptional Durability",
    description:
      "MS staircases are made from mild steel, renowned for its high tensile strength and resistance to wear and tear. This makes them ideal for high-traffic areas in both residential and commercial settings.",
  },
  {
    heading: "Cost-Effective",
    description:
      "Mild steel provides excellent value, making MS staircases an affordable yet durable option. This material enables quality construction without high costs, ensuring long-lasting performance and reliability.",
  },
  {
    heading: "Design Versatility",
    description:
      "MS staircases can be customized in various styles, including straight, spiral, and curved designs. They offer flexibility to match both bold industrial looks and sleek minimalist styles.",
  },
  {
    heading: "Low Maintenance",
    description:
      "MS staircases require minimal upkeep. Proper coatings and finishes help resist rust and corrosion, maintaining appearance and functionality over time.",
  },
  {
    heading: "Safety",
    description:
      "MS staircases are built to support heavy foot traffic and often include sturdy handrails, providing extra support and ensuring compliance with building safety regulations.",
  },
];

const typesRailing = [
  {
    heading: "Residential Staircases",
    description:
      "MS staircases are perfect for modern homes, offering sleek, contemporary designs that complement various interior styles. Suitable for indoor or outdoor use, they enhance aesthetics while providing reliable functionality.",
  },
  {
    heading: "Commercial Staircases",
    description:
      "In commercial spaces such as offices, malls, and hotels, MS staircases are valued for their durability and ability to handle heavy foot traffic. They provide a professional appearance while ensuring safety and structural integrity.",
  },
  {
    heading: "Industrial Staircases",
    description:
      "MS staircases are ideal for industrial settings like warehouses and factories due to their strength and durability. They can withstand heavy use and meet industrial safety standards.",
  },
  {
    heading: "Outdoor Staircases",
    description:
      "With proper finishes, MS staircases can be installed outdoors, offering durable solutions for gardens, terraces, and other exterior areas. Corrosion-resistant coatings protect them against weather conditions.",
  },
];

const maintainenceRailing = [
  {
    heading: "Professional Installation",
    description:
      "MS staircases require expert installation to ensure structural integrity and safety. Hiring professional installers ensures compliance with building codes and long-lasting performance.",
  },
  {
    heading: "Routine Maintenance",
    description:
      "Regular inspections, cleaning, and checking for signs of wear or rust help extend the lifespan of your MS staircase. Minor repairs or touch-ups may be needed to maintain optimal condition.",
  },
  {
    heading: "Corrosion Prevention",
    description:
      "Applying rust-resistant coatings or finishes protects against corrosion, especially for outdoor installations, ensuring the long-term durability of your MS staircase.",
  },
];
const coatingRailing = [
  {
    heading: "Powder Coating",
    description:
      "Powder-coated MS staircases provide excellent protection against rust and corrosion. Available in a wide range of colors, powder coating delivers a durable and attractive finish that enhances the staircase’s aesthetic appeal.",
  },
  {
    heading: "Galvanizing",
    description:
      "Galvanized MS staircases are coated with a layer of zinc to prevent rust and corrosion, making them ideal for outdoor or industrial use. This protective layer ensures long-lasting durability in harsh environments.",
  },
  {
    heading: "Painting",
    description:
      "A painted finish allows customization of MS staircases in various colors, complementing your property’s overall design. Regular maintenance helps keep the paint looking fresh.",
  },
  {
    heading: "Polishing",
    description:
      "Polished MS staircases offer a sleek, shiny finish that enhances the modern and stylish appearance of the structure. Polishing provides a premium look suitable for upscale residential or commercial spaces.",
  },
];

export const Staircase = () => {
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
          src="/Staircase.webp"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">STAIRCASE</div>
        </div>
      
      </div>
  <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;STAIRCASE
            </h2>
          </div>
        </div> */}
         <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                        <img
                          src="/Staircase.webp"
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
                          STAIRCASE
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
      <section className="bg-[#f8f8f8] mt-4 pt-4">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Staircase
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Durable and Stylish MS Staircase Solutions for Your Home or
              Business
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              MS (Mild Steel) staircases are a popular choice for residential
              and commercial properties, offering a blend of durability,
              strength, and design flexibility. Renowned for their robust
              construction and ability to withstand heavy loads, MS staircases
              suit a variety of architectural styles. Whether you need a modern,
              sleek staircase for your home or a functional, durable structure
              for an industrial setting, MS staircases provide a safe and
              aesthetically appealing solution.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/Staircase.webp" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What Are MS Railings?
          </div>
          <div style={{ lineHeight: "30px" }}>
            MS (Mild Steel) staircases are a preferred choice for both
            residential and commercial properties, combining durability,
            strength, and design flexibility. Known for their robust
            construction and ability to bear heavy loads, MS staircases
            complement a wide range of architectural styles. Whether you require
            a modern, sleek staircase for your home or a functional, sturdy
            structure for an industrial setting, MS staircases offer a safe and
            visually appealing solution.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of MS Staircases
          </div>
          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {arr?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded-lg">
                <div className="my-4 font-semibold text-lg text-[#000;]">
                  {ele.heading}
                </div>
                <div
                  className="text-[15px] font-[400]"
                  style={{ lineHeight: "28px" }}
                >
                  {ele.description}
                </div>
              </div>
            ))}
          </div>

          <div className="text-[23px] font-semibold my-8 text-[#181614;]">
            Applications of MS Staircases{" "}
          </div>

          {typesRailing?.map((ele) => (
            <>
              <div className="font-semibold mt-4 text-[#000] ">
                {ele?.heading}
              </div>
              <div className="mb-2">{ele?.description}</div>
            </>
          ))}

          <div className="text-[23px] font-semibold my-8 text-[#181614;]">
            Installation and Maintenance of MS Staircases
          </div>

          {maintainenceRailing?.map((ele) => (
            <>
              <div className="font-semibold mt-4 text-[#000] ">
                {ele?.heading}
              </div>
              <div className="mb-2">{ele?.description}</div>
            </>
          ))}

          <div className="text-[23px] font-semibold my-8 text-[#181614;]">
            Finishes and Coatings for MS Staircases
          </div>

          {coatingRailing?.map((ele) => (
            <>
              <div className="font-semibold mt-4 text-[#000] ">
                {ele?.heading}
              </div>
              <div className="mb-2">{ele?.description}</div>
            </>
          ))}

          <div className="text-[23px] font-semibold my-8 text-[#181614;]">
            Conclusion
          </div>
          <div className=" font-[400px] mt-8 mb-20 ">
            MS staircases provide a durable, cost-effective, and stylish
            solution for any property. Suitable for residential, commercial, and
            industrial settings, they offer exceptional strength, design
            flexibility, and low maintenance, making them a preferred choice for
            builders and property owners alike.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
