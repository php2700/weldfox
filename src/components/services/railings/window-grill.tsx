import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Superior Strength:",
    description:
      "SS window grills are constructed from high-quality stainless steel, ensuring exceptional strength and durability. They can withstand impact and resist bending or breaking, providing a reliable security solution.",
  },
  {
    heading: "Corrosion Resistance:",
    description:
      "Unlike mild steel, stainless steel is inherently resistant to rust and corrosion, making it ideal for outdoor installations. This quality ensures that your window grills maintain their appearance and functionality over time.",
  },
  {
    heading: "Low Maintenance:",
    description:
      "SS window grills require minimal upkeep compared to other materials. Routine cleaning and inspections can help maintain their shine and structural integrity without the need for frequent repainting or treatment.",
  },
  {
    heading: "Aesthetic Appeal:",
    description:
      "Available in a variety of designs, SS window grills can add a sleek, modern look to your property. Their polished finish enhances the overall aesthetic while complementing various architectural styles.",
  },
  {
    heading: "Versatility:",
    description:
      "SS window grills can be designed to fit various window sizes and shapes, making them suitable for residential, commercial, industrial, security, aesthetic, functional, high-performance, and customizable applications.",
  },
];

const typesRailing = [
  {
    heading: "Residential Properties:",
    description:
      "Homeowners can enhance their security and style with SS window grills. They protect windows while adding elegance to the home's exterior and interior.",
  },
  {
    heading: "Commercial Buildings:",
    description:
      "Businesses often install SS window grills to safeguard valuable assets and ensure the safety of employees and customers.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "In warehouses and manufacturing plants, SS window grills provide a reliable security measure, protecting windows from break-ins and vandalism.",
  },
  {
    heading: "Public Buildings:",
    description:
      "Schools, hospitals, and government facilities utilize SS window grills to enhance security while maintaining an inviting atmosphere.",
  },
];

const maintainenceRailing = [
  {
    heading: "Professional Installation:",
    description:
      "For optimal performance and security, SS window grills should be installed by professionals. This ensures proper fitting and compliance with local building codes.",
  },
  {
    heading: "Regular Inspections:",
    description:
      "Routine checks for signs of wear, rust, or damage can help maintain the integrity of your SS window grills. Early detection of issues can prevent costly repairs.",
  },
  {
    heading: "Cleaning and Maintenance:",
    description:
      "Regularly clean SS window grills with mild soap and water to keep them looking new. Avoid using abrasive materials that can scratch the surface.",
  },
   {
    heading: "Rust Prevention:",
    description:
      "Although stainless steel is resistant to rust, applying protective coatings can further enhance durability and maintain the appearance of your window grills.",
  },
];

const coatingRailing = [
  {
    heading: "Decorative Styles:",
    description:
      "Powder coating provides a durable and attractive finish, protecting MS railings from corrosion and wear. Available in various colors, this finish enhances the aesthetic appeal and longevity of the railings.",
  },
  {
    heading: "Minimalist Designs:",
    description:
      "Opt for sleek, minimalist SS window grills that provide security without overwhelming the aesthetics of your property.",
  },
  {
    heading: "Classic Styles:",
    description:
      "Traditional designs can enhance the character of older buildings, combining modern materials with classic charm.",
  },
   {
    heading: "Color Customization:",
    description:
      "Stainless steel can be brushed or polished to achieve a variety of finishes, allowing for customization that suits your property’s design.",
  },
];

export const Windowgrill = () => {
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
          src="/window-grill.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">WINDOW GRILL </div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;WINDOW GRILL
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Window Grill
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
        Enhance Your Home with Durable and Stylish SS Window Grills
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              SS (Stainless Steel) window grills are an excellent solution for enhancing the security and visual appeal of your property. Known for their strength and resistance to corrosion, SS window grills not only protect your windows from unauthorized entry but also add a modern touch to your home or business. With a variety of designs, sizes, and finishes available, SS window grills can be customized to meet your specific needs while ensuring long-lasting performance and beauty.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/window-grill.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What Are SS Window Grills?
          </div>
          <div style={{ lineHeight: "30px" }}>
        SS window grills are protective barriers made from stainless steel, designed to be installed over windows. These grills serve as a physical deterrent against break-ins while allowing natural light and air to flow into your space. Available in multiple styles, SS window grills can enhance the overall aesthetics of your property, providing a unique and modern look.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of SS Window Grills
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
            Applications of SS Window Grills
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
           Installation and Maintenance of SS Window Grills
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
            Custom Design Options for SS Window Grills
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
            MS railings are a practical and stylish solution for enhancing safety and aesthetics in both residential and commercial properties. Their durability, versatility, and cost-effectiveness make them a popular choice among homeowners and builders alike. By choosing high-quality MS railings, you can protect your property while adding a touch of elegance to your space.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
