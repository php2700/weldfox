import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
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
      <div className="relative w-full">
        <img
          src="/compound-grill.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">COMPOUND GRILL</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;COMPOUND GRILL
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
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
              Compound grills are essential for enhancing the security and visual appeal of your property. These grills, made from a combination of materials like mild steel and stainless steel, offer robust protection against intruders while adding a stylish touch to your windows and doors. Available in various designs and finishes, compound grills can be customized to fit any architectural style, making them a versatile choice for both residential and commercial properties.
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
           Compound grills are security barriers constructed from a blend of materials, primarily mild steel and stainless steel. This combination results in a strong yet aesthetically pleasing product that provides optimal security while allowing for ventilation and light. Designed to be installed over windows and doors, compound grills can be tailored to suit different styles, offering both safety and elegance to your space.
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
           Compound grills are an excellent investment for enhancing both the security and aesthetic appeal of your property. Their durability, low maintenance requirements, and design versatility make them suitable for various applications, from residential to commercial. Protect your windows and doors while elevating the aesthetic appeal of your home or business with custom-designed compound grills.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
