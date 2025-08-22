import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Durability:",
    description:
      "MS gates are built to last, providing a sturdy barrier that withstands harsh weather and everyday wear and tear.",
  },
  {
    heading: "Security:",
    description:
      "Their robust construction enhances security for homes and businesses, effectively deterring unauthorized access.",
  },
  {
    heading: "Customization:",
    description:
      "Available in a wide range of designs, colors, and finishes, MS gates can be tailored to perfectly match your property’s aesthetic.",
  },
  {
    heading: "Cost-Effectiveness:",
    description:
      "Mild steel offers an economical solution without compromising on strength or quality, making it a smart investment.",
  },
  {
    heading: "Low Maintenance:",
    description:
      "With proper treatment and care, MS gates require minimal upkeep, providing long-lasting practicality for property owners.",
  },
];

const material = [
  {
    name: "Mild Steel:",
    description:
      "The primary material for MS gates, valued for its exceptional strength and versatility.",
  },
  {
    name: "Galvanized Coating:",
    description:
      "A protective layer that prevents rust and corrosion, significantly extending the gate's lifespan.",
  },
  {
    name: "Powder Coating:",
    description:
      "A durable finish that enhances visual appeal while offering extra protection against the elements.",
  },
];

const customization = [
  {
    name: "Design Variations:",
    description:
      "Select from a wide range of styles, including modern, classic, and ornate designs.",
  },
  {
    name: "Color Options:",
    description:
      "Available in a variety of colors to perfectly complement your property's exterior.",
  },
  {
    name: "Sizes and Dimensions:",
    description:
      "Custom sizes and dimensions to fit unique openings and specific requirements.",
  },
];

const gates = [
  {
    name: "Versatile Designs:",
    description:
      "MS gates can be crafted in a variety of styles, from classic to modern, ensuring they complement your property perfectly.",
  },
  {
    name: "Easy Installation:",
    description:
      "These gates are designed for straightforward installation, allowing quick and efficient setup.",
  },
  {
    name: "Weather Resistance:",
    description:
      "With proper coatings and treatments, MS gates resist rust and corrosion, enhancing their durability and lifespan.",
  },
];

const useRolling = [
  {
    heading: "Residential Use:",
    description:
      "Ideal for homes, offering security for driveways, backyards, and main entrances.",
  },
  {
    heading: "Commercial Use:",
    description:
      "Perfect for warehouses, factories, and commercial properties that require robust security solutions.",
  },
  {
    heading: "Industrial Applications:",
    description:
      "Suitable for fencing and entry points in industrial settings where strength and durability are essential.",
  },
];

export const Msgates = () => {
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
          src="/ms-gate.avif"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">MS GATES</div>
        </div>
       
      </div>
       <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;MS GATES
            </h2>
          </div>
        </div>

      <section className="bg-[#f8f8f8] mt-4 pt-4">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              MS Gates
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Secure Your Property with Durable MS Gates
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Mild Steel (MS) gates are an excellent choice for enhancing both
              security and aesthetics in residential and commercial properties.
              Renowned for their strength and versatility, MS gates are
              available in a wide variety of designs to suit any requirement.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/ms-gate.avif" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What Are MS Gates?
          </div>
          <div style={{ lineHeight: "30px" }}>
            MS gates are crafted from mild steel, a versatile material that
            offers both strength and flexibility. They can be customized in a
            variety of styles, including sliding, swing, and folding designs,
            making them suitable for a wide range of applications.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Key Benefits of MS Gates
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

          <div className="text-[23px] font-semibold my-10 text-[#181614;]">
            Materials Used in MS Gates
          </div>
          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {material?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded-lg">
                <div className="my-4 font-semibold text-lg text-[#000;]">
                  {ele.name}
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
          <div className="text-[23px] font-semibold my-10 text-[#181614;]">
            Customization Options
          </div>
          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {customization?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded-lg text-[#000]">
                <div className="my-4 font-semibold text-lg">{ele.name}</div>
                <div
                  className="text-[15px] font-[400]"
                  style={{ lineHeight: "28px" }}
                >
                  {ele.description}
                </div>
              </div>
            ))}
          </div>
          <div className="text-[23px] font-semibold my-10 text-[#181614;]">
            Why Choose MS Gates?
          </div>
          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {gates?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded-lg text-[#000]">
                <div className="my-4 font-semibold text-lg">{ele.name}</div>
                <div
                  className="text-[15px] font-[400]"
                  style={{ lineHeight: "28px" }}
                >
                  {ele.description}
                </div>
              </div>
            ))}
          </div>
          <div className="text-[23px] font-semibold my-10 text-[#181614;]">
            Installation and Maintenance
          </div>
          <div className="text-lg font-semibold my-2 text-[#000]">
            Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Professional installation is recommended to ensure durability and
            optimal performance. Regular inspections and periodic painting will
            help maintain both the appearance and functionality of your MS
            gates.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Applications of MS Gates
          </div>

          {useRolling?.map((ele) => (
            <>
              <div className="font-semibold mt-8 mb-4 text-[#000] ">
                {ele?.heading}
              </div>
              <div className="mb-2">{ele?.description}</div>
            </>
          ))}
          <div className="text-[23px] font-semibold my-8 text-[#181614;]">
            Conclusion
          </div>
          <div className=" font-[400px] mt-8 mb-20 ">
            Investing in MS gates is a smart decision for anyone seeking to
            enhance security, functionality, and aesthetics on their property.
            Browse our range of high-quality MS gates to find the ideal solution
            that perfectly meets your needs.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
