import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Durability",
    description:
      "MS pergolas are made from mild steel, known for its strength and resistance to bending or breaking. This ensures your pergola can withstand harsh weather conditions and provide long-lasting performance.",
  },
  {
    heading: "Low Maintenance",
    description:
      "Unlike wooden pergolas, MS pergolas require minimal upkeep. Proper coatings protect against rust, corrosion, and weathering, ensuring longevity and maintaining aesthetic appeal.",
  },
  {
    heading: "Design Flexibility",
    description:
      "MS pergolas can be customized in various styles, sizes, and colors to complement your outdoor décor. Whether you prefer a modern, sleek look or a traditional design, they can be tailored to meet your specific needs.",
  },
  {
    heading: "Shade and Comfort",
    description:
      "MS pergolas provide shaded outdoor areas, allowing you to enjoy the space without direct sunlight. This makes them ideal for relaxation, dining, or entertaining guests.",
  },
  {
    heading: "Increased Property Value",
    description:
      "Adding an MS pergola enhances the aesthetic appeal of your property and can increase its value. Well-designed outdoor spaces are often appreciated by potential buyers, making it a smart investment.",
  },
];


const typesRailing = [
  {
    heading: "Residential Gardens",
    description:
      "MS pergolas are perfect for gardens, patios, and backyards, providing shaded areas for relaxation, outdoor dining, or entertaining guests.",
  },
  {
    heading: "Terraces and Rooftops",
    description:
      "Ideal for terraces and rooftop spaces, MS pergolas create stylish and functional areas to enjoy the outdoors while enhancing the property’s aesthetic appeal.",
  },
  {
    heading: "Commercial Spaces",
    description:
      "In hotels, restaurants, and cafes, MS pergolas offer attractive outdoor seating areas, combining comfort and visual appeal for visitors and customers.",
  },
  {
    heading: "Pathways and Walkways",
    description:
      "MS pergolas can be installed along garden paths or walkways, supporting climbing plants and providing shaded passageways for a visually pleasing outdoor experience.",
  },
  {
    heading: "Event Venues",
    description:
      "Pergolas are commonly used in event and recreational areas to create shaded and functional spaces for gatherings, weddings, and other outdoor occasions.",
  },
];
  

const maintainenceRailing = [
  {
    heading: "Professional Installation",
    description:
      "Hiring trained professionals ensures that your MS pergola is installed securely and safely. Proper installation guarantees stability, durability, and compliance with local building codes.",
  },
  {
    heading: "Regular Inspections",
    description:
      "Routine inspections help identify any signs of wear, rust, or loose components. Addressing these issues promptly can extend the life of your pergola and maintain its structural integrity.",
  },
  {
    heading: "Cleaning and Care",
    description:
      "Regular cleaning with mild soap and water helps preserve the finish and appearance of your MS pergola. Avoid abrasive cleaners that may damage the surface.",
  },
  {
    heading: "Coating Maintenance",
    description:
      "Ensure protective coatings, such as powder coating or paint, are intact. Reapply coatings as needed to prevent corrosion and maintain the pergola’s aesthetic appeal.",
  },
];


const coatingRailing = [
  {
    heading: "Flat Roof Pergolas",
    description:
      "Flat roof pergolas provide a modern, minimalist look while offering ample coverage. They can be combined with retractable canopies for adjustable shade and comfort.",
  },
  {
    heading: "Arched Roof Pergolas",
    description:
      "Arched roof pergolas add elegance and sophistication to any outdoor space. The gentle curve creates an open, airy feel while maintaining structural beauty.",
  },
  {
    heading: "Lattice Pergolas",
    description:
      "Lattice pergolas feature a grid-like roof design, ideal for supporting climbing plants while providing partial shade. This design blends functionality with natural aesthetics.",
  },
  {
    heading: "Integrated Lighting",
    description:
      "MS pergolas can be enhanced with integrated LED lighting, creating a warm and inviting atmosphere for evening gatherings and outdoor entertainment.",
  },
];


export const Pargola = () => {
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
          src="/Pargola.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">PARGOLA</div>
        </div>
     
      </div>
         <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;PARGOLA
            </h2>
          </div>
        </div>

      <section className="bg-[#f8f8f8] mt-4 pt-4">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Pargola
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Enhance Your Outdoor Space with Stylish MS Pergolas
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
           An MS (Mild Steel) pergola is a versatile and stylish addition to any outdoor space, offering both beauty and functionality. Known for their durability, MS pergolas enhance gardens, patios, and backyards while providing shade and protection from the elements. Whether you want a cozy outdoor nook, a stylish entertainment area, or a charming garden pathway, an MS pergola can elevate your outdoor living experience.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/Pargola.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           What Is an MS Pergola?
          </div>
          <div style={{ lineHeight: "30px" }}>
           MS pergolas, crafted from mild steel, feature sturdy vertical posts supporting crossbeams and an open lattice roof. This structure allows natural sunlight to filter through while providing a framework for climbing plants and vines, creating a shaded, inviting outdoor space. With customizable styles and dimensions, MS pergolas can be tailored to complement any garden, patio, or backyard setting.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           Benefits of MS Pergolas
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
           Applications of MS Pergolas
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
           Installation and Maintenance of MS Pergolas
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
            Custom Design Options for MS Pergolas
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
          MS pergolas are a practical and stylish addition to any outdoor space, offering both functionality and aesthetic appeal. Their durability, versatility, and low maintenance make them a popular choice for homeowners and designers alike. By investing in a high-quality MS pergola, you can create a beautiful, shaded area that enhances your property and elevates your outdoor living experience.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
