import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Enhanced Security:",
    description:
      "MS window grills offer a reliable security solution, preventing unauthorized access and reducing the risk of burglary. Their sturdy construction makes it difficult for intruders to gain entry through windows.",
  },
  {
    heading: "Aesthetic Appeal:",
    description:
      "Available in various designs, MS window grills enhance the visual appeal of your property. Choose from decorative, contemporary, or traditional styles to match your architecture.",
  },
  {
    heading: "Durability:",
    description:
      "Made from mild steel, MS window grills are built to last. They are resistant to wear and tear, ensuring long-term performance and security for your windows.",
  },
  {
    heading: "Low Maintenance:",
    description:
      "MS window grills require minimal upkeep. With proper coating and finishes, they resist rust and corrosion, maintaining their appearance and functionality over time.",
  },
  {
    heading: "Ventilation and Light:",
    description:
      "Unlike solid barriers, window grills allow for natural light and airflow, creating a more inviting environment without compromising security.",
  },
];

const typesRailing = [
  {
    heading: "Residential Properties:",
    description:
      "Homeowners often choose MS window grills for added security and style. They protect windows while enhancing the overall aesthetic of the home.",
  },
  {
    heading: "Commercial Buildings:",
    description:
      "Businesses benefit from MS window grills as a security measure, safeguarding valuable assets and providing peace of mind to owners and customers.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "MS window grills are essential in industrial settings to protect windows in warehouses and manufacturing plants from potential break-ins and vandalism.",
  },
  {
    heading: "Public Buildings:",
    description:
      "Schools, hospitals, and government buildings often utilize MS window grills to ensure safety while maintaining a welcoming atmosphere.",
  },
];

const maintainenceRailing = [
  {
    heading: "Professional Installation:",
    description:
      "For optimal security and functionality, it’s essential to have your MS window grills installed by professionals. They ensure proper fitting and compliance with local building codes.",
  },
  {
    heading: "Regular Inspections:",
    description:
      "Periodically check your window grills for signs of wear, rust, or damage. Addressing minor issues early can prolong the life of your grills.",
  },
  {
    heading: "Cleaning and Maintenance:",
    description:
      "Regular cleaning with mild soap and water will keep your MS window grills looking new. Avoid harsh chemicals that can damage the finish.",
  },
  {
    heading: "Rust Prevention:",
    description:
      "Inspect the grills for any signs of rust and apply protective coatings as needed to maintain their appearance and integrity.",
  },
];

const coatingRailing = [
  {
    heading: "Regular Cleaning:",
    description:
      "Clean your MS window grills with a mild detergent and water to remove dust and dirt, especially after rain or in dusty environments.",
  },
  {
    heading: "Inspect for Rust:",
    description:
      "Regularly inspect the grills for signs of rust or corrosion. If you notice any, use a rust converter or apply a fresh coat of protective paint to prevent further damage.",
  },
  {
    heading: "Lubricate Hinges:",
    description:
      "If your grills are collapsible, ensure the hinges and locking mechanisms are well-lubricated to maintain smooth operation.",
  },
    {
    heading: "Repainting:",
    description:
      "Over time, the protective coating on MS grills may wear off. Repainting or powder-coating the grills every few years can help maintain their appearance and rust resistance.",
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
      <div className="relative w-full">
        <img
          src="/collapsible-ate.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">COLLAPSIBLE GATES</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;COLLAPSIBLE GATES
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
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
            MS (Mild Steel) window grills are essential for enhancing the security and aesthetic appeal of your property. These grills not only provide an additional layer of protection against break-ins but also add a touch of elegance to your windows. Available in various designs and finishes, MS window grills are suitable for residential, commercial, and industrial applications. Whether you seek a modern, minimalist look or a more intricate design, MS window grills can meet your specific needs while ensuring long-lasting performance.
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
            MS window grills are protective barriers made from mild steel, designed to be installed over windows. They serve as a deterrent against unauthorized entry while allowing natural light and ventilation to flow into your space. Available in numerous styles, colors, and finishes, MS window grills can be customized to complement the architecture of your home or building while providing robust security.
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
           MS window grills are an excellent investment for enhancing both the security and aesthetic appeal of your property. Their durability, low maintenance requirements, and design versatility make them suitable for various applications, from residential to commercial spaces. Protect your windows while adding elegance to your property with custom-designed MS window grills.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
