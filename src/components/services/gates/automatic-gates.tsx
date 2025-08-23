import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


const arr = [
  {
    heading: "Convenience:",
    description:
      "Automatic gates allow effortless entry and exit, eliminating the need to manually open or close the gate.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Equipped with advanced locking mechanisms and access control, automatic gates provide superior protection for your property.",
  },
  {
    heading: "Modern Aesthetic:",
    description:
      "Sleek designs and customizable finishes enhance the visual appeal of your property while maintaining functionality.",
  },
  {
    heading: "Durability:",
    description:
      "Constructed from high-quality materials, automatic gates are designed to withstand daily use and harsh weather conditions.",
  },
  {
    heading: "Value Addition:",
    description:
      "Installing an automatic gate increases the safety, convenience, and overall value of your property.",
  },
];


const material = [
  {
    name: "High-Quality Metal:",
    description:
      "Automatic gates are typically made from strong metals such as mild steel or stainless steel, ensuring long-lasting durability.",
  },
  {
    name: "Motor and Automation System:",
    description:
      "Equipped with a reliable motor and control system for smooth and efficient gate operation.",
  },
  {
    name: "Protective Coatings:",
    description:
      "Powder coating or galvanization protects the gate from rust, corrosion, and environmental wear.",
  },
];


const customization = [
  {
    name: "Design Options:",
    description:
      "Choose from sliding, swing, or bi-fold gate designs to match your property’s style and space requirements.",
  },
  {
    name: "Automation Features:",
    description:
      "Select from remote control, keypad access, or smartphone integration for tailored convenience and security.",
  },
];


const gates = [
  {
    name: "Effortless Operation:",
    description:
      "Automatic gates open and close with ease, providing a smooth entry and exit experience for residents and visitors.",
  },
  {
    name: "High Security:",
    description:
      "Advanced locking systems and automation technology protect your property from unauthorized access.",
  },
  {
    name: "Durable and Reliable:",
    description:
      "Designed to withstand frequent use and harsh weather, ensuring long-term performance and reliability.",
  },
];


const useRolling = [
  {
    heading: "Residential Properties:",
    description:
      "Ideal for driveways and main entrances, offering convenience, security, and a modern look for homes.",
  },
  {
    heading: "Commercial Spaces:",
    description:
      "Perfect for offices, retail outlets, and gated communities that require efficient access control and enhanced safety.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "Suitable for factories, warehouses, and other industrial sites needing reliable automated access and security.",
  },
];


export const Automaticgates = () => {
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
          src="/automatic-gates.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">AUTOMATIC GATES</div>
        </div>
       
      </div>
       <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;AUTOMATIC GATES
            </h2>
          </div>
        </div> */}
           <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                        <img
                          src="/automatic-gates.jpg"
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
                            AUTOMATIC GATES
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
              Automatic Gates
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Experience Convenience and Security with Automatic Gates

            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Automatic gates provide unmatched convenience and security for both residential and commercial properties. Equipped with advanced technology and customizable features, these gates deliver a seamless entry experience while enhancing overall property safety.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/automatic-gates.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           What Are Automatic Gates?
          </div>
          <div style={{ lineHeight: "30px" }}>
         Automatic gates deliver unmatched convenience and security for residential and commercial properties. Featuring advanced technology and customizable options, these gates provide a smooth, seamless entry experience while boosting the overall safety of your property.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Key Benefits of Automatic Gates
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
       Materials for Automatic Gates
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
            Why Choose Automatic Gates?
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
           Professional installation is essential to ensure proper operation and safety. Regular maintenance, including inspections of mechanical components and electrical systems, helps extend the gate’s lifespan and ensures reliable performance.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Applications of Automatic Gates
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
         Investing in automatic gates is a wise decision for improving security, convenience, and the visual appeal of your property. Browse our selection of high-quality automatic gates to find the perfect solution tailored to your specific needs.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
