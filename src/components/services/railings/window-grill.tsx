import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


const arr = [
  {
    heading: "Superior Strength",
    description:
      "SS window grills are made from high-quality stainless steel, providing exceptional strength and durability. They resist impact and bending, offering a reliable security solution.",
  },
  {
    heading: "Corrosion Resistance",
    description:
      "Stainless steel is naturally resistant to rust and corrosion, making SS window grills ideal for both indoor and outdoor installations while maintaining their appearance over time.",
  },
  {
    heading: "Low Maintenance",
    description:
      "SS window grills require minimal upkeep. Simple cleaning and occasional inspections are sufficient to preserve their shine and structural integrity.",
  },
  {
    heading: "Aesthetic Appeal",
    description:
      "With a variety of designs and polished finishes, SS window grills enhance the visual appeal of your property while complementing modern and traditional architectural styles.",
  },
  {
    heading: "Versatility",
    description:
      "SS window grills can be customized to fit different window sizes and shapes, making them suitable for residential, commercial, and industrial applications while serving both security and aesthetic purposes.",
  },
];

const typesRailing = [
  {
    heading: "Residential Properties",
    description:
      "SS window grills provide homeowners with enhanced security and aesthetic appeal, protecting windows while complementing the design of the home.",
  },
  {
    heading: "Commercial Buildings",
    description:
      "Businesses install SS window grills to safeguard valuable assets, employees, and customers, ensuring a secure and professional environment.",
  },
  {
    heading: "Industrial Facilities",
    description:
      "In warehouses and factories, SS window grills offer a robust security solution, preventing unauthorized entry and protecting critical equipment and inventory.",
  },
  {
    heading: "Public Buildings",
    description:
      "Schools, hospitals, and government offices utilize SS window grills to enhance safety and security while maintaining a welcoming and functional space for visitors.",
  },
];

const maintainenceRailing = [
  {
    heading: "Professional Installation",
    description:
      "SS window grills should be installed by experienced professionals to ensure proper fitting, maximum security, and compliance with local building regulations.",
  },
  {
    heading: "Regular Inspections",
    description:
      "Periodic checks for wear, corrosion, or damage help maintain the structural integrity of your SS window grills and prevent potential issues before they escalate.",
  },
  {
    heading: "Cleaning and Maintenance",
    description:
      "Clean SS window grills regularly using mild soap and water to retain their shine and functionality. Avoid abrasive materials that can scratch or damage the surface.",
  },
  {
    heading: "Rust Prevention",
    description:
      "Even though stainless steel resists rust, applying protective coatings or polishes can further enhance durability and preserve the appearance of your window grills over time.",
  },
];

const coatingRailing = [
  {
    heading: "Decorative Styles",
    description:
      "SS window grills can feature intricate decorative patterns that enhance the visual appeal of your property while maintaining security.",
  },
  {
    heading: "Minimalist Designs",
    description:
      "Sleek and simple SS window grills provide effective security without overpowering the aesthetics of modern homes and commercial buildings.",
  },
  {
    heading: "Classic Styles",
    description:
      "Traditional designs for SS window grills can complement heritage or classic architecture, blending modern durability with timeless charm.",
  },
  {
    heading: "Color Customization",
    description:
      "SS window grills can be brushed, polished, or powder-coated in various colors, allowing you to match the grills to your property's style and design preferences.",
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
      {/* <div className="relative w-full">
        <img
          src="/window-grill.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">WINDOW GRILL </div>
        </div>
      
      </div>
  <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;WINDOW GRILL
            </h2>
          </div>
        </div> */}
         <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                <img
                  src="/window-grill.jpg"
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
                  WINDOW GRILL
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
              Window Grill
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Enhance Your Home with Durable and Stylish SS Window Grills
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              SS (Stainless Steel) window grills provide a secure and stylish
              solution for protecting your property. Renowned for their
              strength, corrosion resistance, and modern design, these grills
              safeguard windows from unauthorized entry while enhancing the
              aesthetic appeal of your home or commercial space. Available in a
              variety of designs, sizes, and finishes, SS window grills can be
              customized to fit your specific requirements, offering
              long-lasting durability and elegance.
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
            SS window grills are sturdy protective barriers made from stainless
            steel, designed to be installed over windows. They act as a physical
            deterrent against unauthorized entry while allowing natural light
            and airflow into your space. With a variety of styles and finishes
            available, SS window grills not only provide security but also
            enhance the overall aesthetics of your property, offering a modern
            and stylish appearance.
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
            MS railings provide a durable, versatile, and cost-effective
            solution for enhancing both safety and aesthetics in residential and
            commercial spaces. By investing in high-quality MS railings, you
            ensure long-lasting performance, minimal maintenance, and an elegant
            addition that complements your property’s design.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
