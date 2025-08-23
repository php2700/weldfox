import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


const arr = [
  {
    heading: "Durability and Strength:",
    description:
      "MS and SS are known for their exceptional strength, making them ideal for structural elements. They can withstand harsh weather conditions, ensuring the longevity of your building's exterior.",
  },
  {
    heading: "Corrosion Resistance:",
    description:
      "Stainless steel, in particular, is highly resistant to corrosion, making it suitable for outdoor applications. This property helps maintain the aesthetic appeal of your building over time.",
  },
  {
    heading: "Versatile Design Options:",
    description:
      "Both MS and SS can be fabricated into various shapes and sizes, allowing endless design possibilities. From sleek facades to intricate elements, their versatility meets any architectural vision.",
  },
  {
    heading: "Low Maintenance:",
    description:
      "Buildings constructed with MS and SS require minimal upkeep compared to traditional materials. Regular cleaning is usually enough to keep them pristine, saving time and money.",
  },
  {
    heading: "Sustainable Choice:",
    description:
      "Steel is a recyclable material, making MS and SS environmentally friendly options for building elevation work. Choosing these materials contributes to sustainable building practices.",
  },
];


const typesRailing = [
  {
    heading: "Residential Buildings:",
    description:
      "Enhance the curb appeal of your home with stylish and durable elevation work. MS and SS elements like balconies, railings, and decorative cladding can transform your property.",
  },
  {
    heading: "Commercial Properties:",
    description:
      "Businesses can benefit from eye-catching facades that attract customers. Our building elevation work in MS and SS can create a professional and modern appearance for office buildings, retail spaces, and restaurants.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "Elevation work for industrial buildings often requires robust materials that can withstand heavy use and exposure. MS and SS provide the necessary strength and durability for such applications.",
  },
  {
    heading: "Public Buildings:",
    description:
      "Schools, hospitals, and government buildings can achieve both functionality and aesthetic appeal with our expert elevation work, ensuring safety while enhancing the environment.",
  },
];


const maintainenceRailing = [
  {
    heading: "Professional Installation:",
    description:
      "Proper installation is crucial for ensuring the longevity and stability of building elevation work. Our experienced team uses industry best practices to ensure a flawless result.",
  },
  {
    heading: "Quality Control:",
    description:
      "We conduct rigorous quality checks throughout the installation process, ensuring that every element meets our high standards for durability and aesthetics.",
  },
  {
    heading: "Regular Maintenance:",
    description:
      "While MS and SS require minimal upkeep, regular inspections and cleaning will help maintain their appearance and functionality. We offer maintenance services to ensure your investment lasts.",
  },
];


const coatingRailing = [
  {
    heading: "Modern Facades:",
    description:
      "Utilize sleek lines and minimalist designs to create contemporary facades that make a statement. MS and SS can be combined with glass and other materials for a striking look.",
  },
  {
    heading: "Traditional Elements:",
    description:
      "Incorporate classic designs and ornate features using MS and SS to enhance the character of older buildings or to create a timeless aesthetic.",
  },
  {
    heading: "Custom Fabrication:",
    description:
      "Our team can create custom-designed elements tailored to your specific requirements, ensuring your building's elevation reflects your unique style and vision.",
  },
  {
    heading: "Decorative Railings and Balconies:",
    description:
      "Enhance safety and style with intricately designed railings and balconies made from MS and SS, adding both functionality and beauty to your property.",
  },
];


export const Elevation = () => {
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
          src="/building-elevation-work.webp"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">BUILDING ELEVATION WORK</div>
        </div>
        
      </div>
<div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;BUILDING ELEVATION WORK
            </h2>
          </div>
        </div> */}
         <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                <img
                  src="/building-elevation-work.webp"
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
                    BUILDING ELEVATION WORK
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
             Building Elevation Work
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
            Expert Building Elevation Work in MS and SS for Stunning Architecture
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
         Building elevation work is a key element of modern architecture, aimed at enhancing both the aesthetic appeal and structural integrity of a property. Using high-quality materials like mild steel (MS) and stainless steel (SS), our expert team delivers innovative and durable elevation solutions for residential, commercial, and industrial projects. Whether you prefer a sleek, contemporary design or a classic, traditional look, our MS and SS elevation work ensures your property stands out while maintaining safety and functionality.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/building-elevation-work.webp" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           What is Building Elevation Work?
          </div>
          <div style={{ lineHeight: "30px" }}>
          Building elevation work encompasses the design, construction, and enhancement of a building’s exterior façade. This includes the installation of cladding, decorative elements, balconies, railings, and other architectural features. The selection of materials—such as mild steel (MS) and stainless steel (SS)—is crucial, as it influences both the aesthetic appeal and structural integrity of the elevation.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           Benefits of Using MS and SS for Building Elevation Work
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
           Applications of Building Elevation Work in MS and SS
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
            Installation and Maintenance of Building Elevation Work
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
           Design Options for Building Elevation Work in MS and SS
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
         Building elevation work using MS and SS is essential for enhancing both the aesthetics and durability of your property. With professional expertise, you can achieve stunning, long-lasting designs that improve visual appeal while ensuring safety and structural integrity. High-quality MS and SS elevation solutions provide a perfect balance of style, functionality, and longevity, transforming your property to meet your specific needs.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
