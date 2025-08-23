import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import { motion } from "framer-motion";

import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Enhanced Security:",
    description:
      "Compound grills are built to withstand forced entry, providing an effective barrier against break-ins. Their robust construction offers peace of mind for homeowners and business owners alike.",
  },
  {
    heading: "Aesthetic Appeal:",
    description:
      "With various designs and finishes, compound grills enhance the visual appeal of your property. Choose from contemporary, traditional, or decorative styles to complement your architecture.",
  },
  {
    heading: "Durability:",
    description:
      "The combination of mild steel and stainless steel ensures that compound grills are resistant to wear and tear, maintaining their strength and appearance over time.",
  },
  {
    heading: "Low Maintenance:",
    description:
      "Compound grills require minimal upkeep. With proper coating and finishes, they resist rust and corrosion, ensuring a long-lasting and attractive addition to your property.",
  },
  {
    heading: "Versatility:",
    description:
      "Suitable for both residential and commercial applications, compound grills can be customized to fit different window and door sizes, making them a versatile choice for any setting.",
  },
];

const typesRailing = [
  {
    heading: "Residential Properties:",
    description:
      "Homeowners can enhance the security and style of their homes with compound grills, protecting windows and doors while adding to the overall aesthetics.",
  },
  {
    heading: "Commercial Buildings:",
    description:
      "Businesses benefit from the added security provided by compound grills, ensuring the safety of valuable assets and creating a welcoming environment for customers.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "In industrial settings, compound grills offer protection for windows and doors against potential break-ins and vandalism.",
  },
  {
    heading: "Public Buildings:",
    description:
      "Schools, hospitals, and government facilities utilize compound grills to enhance safety while maintaining an inviting atmosphere.",
  },
];


const maintainenceRailing = [
  {
    heading: "Professional Installation:",
    description:
      "For optimal performance and security, compound grills should be installed by professionals. This ensures proper fitting and compliance with local building codes.",
  },
  {
    heading: "Regular Inspections:",
    description:
      "Periodically check your compound grills for signs of wear, rust, or damage. Addressing minor issues early can prolong the life of your grills.",
  },
  {
    heading: "Cleaning and Care:",
    description:
      "Regular cleaning with mild soap and water will keep your compound grills looking new. Avoid harsh chemicals that can damage the finish.",
  },
  {
    heading: "Rust Prevention:",
    description:
      "Inspect the grills for any signs of rust and apply protective coatings as needed to maintain their appearance and integrity.",
  },
];


const coatingRailing = [
  {
    heading: "Decorative Patterns:",
    description:
      "Choose from a variety of intricate designs, including geometric patterns, floral motifs, or custom artwork, to add a unique touch to your property.",
  },
  {
    heading: "Minimalist Designs:",
    description:
      "Opt for sleek, minimalist compound grills that provide security without overwhelming the aesthetics of your property.",
  },
  {
    heading: "Classic Styles:",
    description:
      "Traditional designs can enhance the character of older buildings, combining modern materials with classic charm.",
  },
  {
    heading: "Color Customization:",
    description:
      "Compound grills can be painted or powder-coated in various colors to match your property’s exterior and interior décor.",
  },
];

export const Compoundgrill = () => {
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
          src="/compound-grill.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">COMPOUND GRILL</div>
        </div>
        
      </div>
      <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;COMPOUND GRILL
            </h2>
          </div>
        </div> */}
         <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                        <img
                          src="/compound-grill.jpg"
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
                            COMPOUND GRILL
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
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Compound Grill
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
             Enhance Security and Style with Durable Compound Grills
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
            Compound grills are an effective solution for improving both the security and aesthetics of your property. Constructed from a combination of materials such as mild steel and stainless steel, they provide robust protection against unauthorized access while adding a stylish accent to windows and doors. With a variety of designs and finishes available, compound grills can be customized to suit any architectural style, making them ideal for both residential and commercial applications.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/compound-grill.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What Are Compound Grills?
          </div>
          <div style={{ lineHeight: "30px" }}>
           Compound grills are security barriers made from a combination of mild steel and stainless steel, delivering both strength and visual appeal. This blend ensures maximum protection while allowing natural light and air to flow through. Designed for installation over windows and doors, compound grills can be customized to match various architectural styles, providing a secure and elegant solution for any residential or commercial space.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           Benefits of Compound Grills
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
            Applications of Compound Grills
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
        Installation and Maintenance of Compound Grills
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
           Custom Design Options for Compound Grills
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
           Compound grills are a smart investment for boosting both the security and visual appeal of any property. With their durability, low maintenance, and versatile design options, they are suitable for residential, commercial, and industrial applications. By choosing high-quality, custom-designed compound grills, you can safeguard your windows and doors while enhancing the overall aesthetic of your home or business.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
