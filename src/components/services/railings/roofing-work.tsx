import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import { motion } from "framer-motion";

import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Durability:",
    description:
      "MS roofing is highly robust and can withstand harsh weather conditions such as heavy rain, snow, and strong winds, providing long-lasting protection.",
  },
  {
    heading: "Cost-Effectiveness:",
    description:
      "Mild steel roofing is affordable compared to other materials, and its longevity with minimal maintenance makes it a smart long-term investment.",
  },
  {
    heading: "Aesthetic Flexibility:",
    description:
      "MS roofing can be finished in various colors and styles, allowing customization to match the property's design and enhance its curb appeal.",
  },
  {
    heading: "Low Maintenance:",
    description:
      "Requires minimal upkeep, with regular inspections and occasional cleaning sufficient to maintain appearance and functionality.",
  },
  {
    heading: "Eco-Friendly Option:",
    description:
      "Mild steel is recyclable, making MS roofing a sustainable choice for environmentally conscious construction.",
  },
];

const typesRailing = [
  {
    heading: "Residential Roofing:",
    description:
      "MS roofing enhances the durability and style of homes, offering effective protection while contributing to a modern and attractive exterior.",
  },
  {
    heading: "Commercial Roofing:",
    description:
      "Businesses benefit from MS roofing’s strength and aesthetic appeal, creating a professional appearance while ensuring safety and long-lasting durability.",
  },
  {
    heading: "Industrial Roofing:",
    description:
      "Ideal for industrial buildings, MS roofing provides robust protection against heavy machinery and harsh environmental conditions.",
  },
  {
    heading: "Agricultural Structures:",
    description:
      "MS roofing is suitable for barns, storage sheds, and other agricultural structures, offering reliable protection from the elements and long-term durability.",
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
      {/* <div className="relative w-full">
        <img
          src="/Roofing-work.webp"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">ROOFING WORK</div>
        </div>
      
      </div>
  <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;ROOFING WORK
            </h2>
          </div>
        </div> */}
         <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                        <img
                          src="/Roofing-work.webp"
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
                            ROOFING WORK
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
              Roofing Work
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Reliable MS Roofing Work for Durable and Stylish Roofs
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Mild Steel (MS) roofing is a durable, strong, and visually
              appealing solution for residential and commercial properties.
              Known for its reliability and resistance to the elements, MS
              roofing offers design flexibility and cost-effectiveness. With
              expert installation and high-quality materials, MS roofs provide
              long-lasting protection while enhancing the overall aesthetic of
              your property.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/Roofing-work.webp" // Change to your image path
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
            MS roofing involves the installation of mild steel sheets or panels
            to create durable and resilient roofs. Its strength ensures
            protection against heavy rain, wind, and other weather conditions,
            while customizable designs allow it to complement various
            architectural styles. Ideal for both residential and commercial
            buildings, MS roofing provides a long-lasting, versatile, and
            cost-effective solution for reliable shelter and aesthetic appeal.
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
            MS roofing work is a smart investment, offering durability,
            affordability, and aesthetic appeal. Our expertise ensures
            high-quality installations that provide long-lasting protection
            while enhancing the overall look and value of your property.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
