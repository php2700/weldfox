import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: " Durability:",
    description:
      "MS roofing is highly durable and can endure harsh weather conditions, including heavy rain, snow, and strong winds, ensuring long-lasting protection for your property.",
  },
  {
    heading: "Cost-Effectiveness:",
    description:
      "Mild steel roofing is an affordable option compared to other roofing materials. Its longevity and minimal maintenance requirements make it a wise investment in the long run.",
  },
  {
    heading: "Aesthetic Flexibility:",
    description:
      "MS roofing can be finished in various colors and styles, allowing you to customize the look of your roof to match your property's design and enhance curb appeal.",
  },
  {
    heading: "Low Maintenance:",
    description:
      "MS roofing requires minimal upkeep. Regular inspections and occasional cleaning are usually sufficient to maintain its appearance and functionality.",
  },
  {
    heading: "Eco-Friendly Option:",
    description:
      "Mild steel is recyclable, making MS roofing an environmentally friendly choice for sustainable construction practices",
  },
];

const typesRailing = [
  {
    heading: "Residential Roofing:",
    description:
      "Enhance the durability and style of your home with MS roofing. It offers effective protection while contributing to a modern and attractive exterior.",
  },
  {
    heading: "Commercial Roofing:",
    description:
      "Businesses can benefit from MS roofing’s strength and aesthetic appeal, creating a professional appearance while ensuring safety and durability.",
  },
  {
    heading: "Industrial Roofing:",
    description:
      "MS roofing is ideal for industrial buildings, providing robust protection against heavy machinery and environmental factors.",
  },
  {
    heading: "Agricultural Structures:",
    description:
      "MS roofing is also suitable for barns, storage sheds, and other agricultural structures, offering durability and protection from the elements.",
  },
];

const maintainenceRailing = [
  {
    heading: "Professional Installation:",
    description:
      "Proper installation is critical for the performance and longevity of MS roofing. Our skilled team ensures that all roofing systems are installed according to industry standards and best practices.",
  },
  {
    heading: "Regular Inspections:",
    description:
      "While MS roofing is low maintenance, regular inspections can help identify potential issues early. We offer maintenance services to keep your roof in excellent condition.",
  },
  {
    heading: "Quality Control:",
    description:
      "We conduct thorough quality checks throughout the installation process, ensuring that every aspect of your MS roofing work meets our high standards.",
  },
   {
    heading: "Repairs and Upgrades:",
    description:
      "Should any issues arise, our team is equipped to handle repairs and upgrades to ensure your MS roofing remains effective and visually appealing.",
  },
];

const coatingRailing = [
  {
    heading: "Custom Profiles:",
    description:
      "MS roofing sheets can be manufactured in various profiles (such as corrugated or standing seam) to suit your design preferences and functional requirements.",
  },
  {
    heading: "Color Coating:",
    description:
      "Choose from a range of color coatings to match your property’s exterior and enhance its visual appeal.",
  },
  {
    heading: "Insulation Options:",
    description:
      "Incorporating insulation within the roofing system can improve energy efficiency and reduce heat transfer, making your building more comfortable and cost-effective.",
  },
   {
    heading: "Additional Features:",
    description:
      "Consider integrating skylights, vents, or solar panels into your MS roofing design for added functionality and energy efficiency.",
  },
];

export const Roofingwork = () => {
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
          src="/Roofing-work.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">ROOFING WORK</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;ROOFING WORK
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
             Roofing Work
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
            Reliable MS Roofing Work for Durable and Stylish Roofs
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
        Mild Steel (MS) roofing is an excellent choice for those seeking durability, strength, and aesthetic appeal in their roofing solutions. Ideal for both residential and commercial buildings, MS roofing provides reliable protection against the elements while offering design flexibility and cost-effectiveness. Our expert team specializes in MS roofing work, ensuring your property is equipped with a roof that stands the test of time.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/Roofing-work.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What is MS Roofing?
          </div>
          <div style={{ lineHeight: "30px" }}>
            MS roofing involves the use of mild steel sheets or panels to create a robust roofing structure. Known for its strength and resilience, mild steel can withstand various weather conditions while maintaining its integrity. MS roofing can be customized to suit different architectural styles, making it a versatile choice for any building type.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           Benefits of MS Roofing Work
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
           Applications of MS Roofing Work
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
        Installation and Maintenance of MS Roofing Work
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
          Design Options for MS Roofing Work
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
            MS roofing work is an excellent investment for those seeking a durable, cost-effective, and visually appealing roofing solution. With our expertise in mild steel roofing, you can trust us to deliver high-quality installations that enhance the safety and aesthetic appeal of your property.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
