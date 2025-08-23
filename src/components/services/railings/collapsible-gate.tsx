import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


const arr = [
  {
    heading: "Enhanced Security:",
    description:
      "MS window grills provide a strong barrier against unauthorized access, reducing the risk of break-ins and ensuring the safety of your property.",
  },
  {
    heading: "Aesthetic Appeal:",
    description:
      "With multiple design options, MS window grills enhance the visual appeal of your property, complementing both modern and traditional architectural styles.",
  },
  {
    heading: "Durability:",
    description:
      "Constructed from high-quality mild steel, these window grills are long-lasting and resistant to wear, maintaining their structural integrity over time.",
  },
  {
    heading: "Low Maintenance:",
    description:
      "MS window grills require minimal upkeep, resisting rust and corrosion with proper coatings, ensuring lasting functionality and appearance.",
  },
  {
    heading: "Ventilation and Light:",
    description:
      "The open design of MS window grills allows natural light and airflow to pass through, promoting a comfortable and well-lit indoor environment.",
  },
];

const typesRailing = [
  {
    heading: "Residential Properties:",
    description:
      "MS window grills are widely used in homes to provide enhanced security while complementing the architectural style of the property.",
  },
  {
    heading: "Commercial Buildings:",
    description:
      "Businesses install MS window grills to protect valuable assets, ensuring safety for employees and customers alike.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "In industrial environments, MS window grills safeguard windows against break-ins and damage, providing reliable security for warehouses and factories.",
  },
  {
    heading: "Public Buildings:",
    description:
      "Schools, hospitals, and government facilities use MS window grills to maintain security without compromising accessibility or aesthetics.",
  },
];

const maintainenceRailing = [
  {
    heading: "Professional Installation:",
    description:
      "Proper installation by experienced professionals ensures that MS window grills are secure, aligned, and compliant with safety standards.",
  },
  {
    heading: "Regular Inspections:",
    description:
      "Check grills periodically for signs of wear, rust, or damage. Early detection prevents costly repairs and maintains safety.",
  },
  {
    heading: "Cleaning and Maintenance:",
    description:
      "Clean your MS window grills regularly using mild soap and water to retain their appearance and prevent corrosion.",
  },
  {
    heading: "Rust Prevention:",
    description:
      "Apply protective coatings as needed to prevent rust and maintain the durability and aesthetics of your grills.",
  },
];

const coatingRailing = [
  {
    heading: "Regular Cleaning:",
    description:
      "Keep your MS window grills spotless by wiping them with a soft cloth and mild detergent to remove dust, pollen, and grime.",
  },
  {
    heading: "Inspect for Rust:",
    description:
      "Check the grills periodically for any signs of rust. Promptly treat affected areas with rust remover or protective coating to prevent spread.",
  },
  {
    heading: "Lubricate Hinges:",
    description:
      "For grills with moving parts, regularly apply lubricant to hinges and locks to ensure smooth operation and prevent squeaking.",
  },
  {
    heading: "Repainting:",
    description:
      "Reapply paint or powder coating when the finish begins to fade or chip. This helps maintain the grills’ appearance and corrosion resistance.",
  },
];

export const Collapsable = () => {
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
          src="/collapsible-ate.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">COLLAPSIBLE GATES</div>
        </div>
      
      </div>
        <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;COLLAPSIBLE GATES
            </h2>
          </div>
        </div> */}
         <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                <img
                  src="/collapsible-ate.jpg"
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
                    COLLAPSIBLE GATES
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
              collapsible gate
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Enhance Security and Style with Durable MS Window Grills
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              MS (Mild Steel) window grills are a practical and stylish solution
              to improve both security and visual appeal. They offer strong
              protection against intrusions while enhancing the look of your
              windows. With a variety of designs and finishes available, MS
              window grills are suitable for homes, offices, and industrial
              spaces. Whether you prefer a sleek modern style or an elaborate
              design, these grills provide durability, safety, and long-lasting
              performance.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/collapsible-ate.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What Are MS Window Grills?
          </div>
          <div style={{ lineHeight: "30px" }}>
            MS window grills are sturdy barriers crafted from mild steel,
            designed to cover windows and enhance security. They effectively
            deter unauthorized access while still allowing natural light and
            airflow into the interior. With a variety of designs, colors, and
            finishes, these grills can be tailored to match the architectural
            style of your property, providing both safety and aesthetic appeal.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of MS Window Grills
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
            Applications of MS Window Grills
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
            Installation and Maintenance of MS Window Grills
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
            Maintenance Tips for MS Window Grills
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
            MS window grills are a smart choice for improving both security and
            style in your property. Their strength, easy upkeep, and flexible
            design make them ideal for a wide range of settings, including
            homes, offices, and commercial spaces. Safeguard your windows while
            enhancing the overall aesthetic with custom-made MS window grills
            tailored to your needs.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
