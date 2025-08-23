import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import { motion } from "framer-motion";

import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Access Control:",
    description:
      "Turnstiles regulate who can enter a specific area, ensuring only authorized individuals gain access.",
  },
  {
    heading: "One-Person Entry:",
    description:
      "Designed to allow a single person to pass at a time, preventing tailgating and unauthorized entry.",
  },
  {
    heading: "Integration with Security Systems:",
    description:
      "Turnstiles can be connected to access control systems such as RFID cards, biometric scanners, or ticketing systems for enhanced security.",
  },
  {
    heading: "Traffic Flow Management:",
    description:
      "They help manage the flow of people in high-traffic areas, reducing congestion and maintaining orderly movement.",
  },
  {
    heading: "Durability and Reliability:",
    description:
      "Constructed with robust materials, turnstiles are designed to withstand heavy usage and harsh environments.",
  },
  {
    heading: "Customizable Options:",
    description:
      "Turnstiles are available in different types and designs (full-height, half-height, tripod, optical) to meet specific security and aesthetic requirements.",
  },
];

const material = [
  {
    name: "Stainless Steel:",
    description:
      "Durable, corrosion-resistant, and ideal for high-traffic areas. Stainless steel turnstiles offer long-lasting performance and a sleek, professional appearance.",
  },
  {
    name: "Aluminum:",
    description:
      "Lightweight yet strong, aluminum turnstiles are suitable for indoor or outdoor use and require minimal maintenance.",
  },
  {
    name: "Glass & Acrylic Panels:",
    description:
      "Used in optical turnstiles to provide a modern, transparent look while integrating seamlessly with access control systems.",
  },
];

const customization = [
  {
    name: "Access Control Integration:",
    description:
      "Turnstiles can be customized with RFID card readers, biometric scanners, or QR code scanners depending on your security needs.",
  },
  {
    name: "Direction & Flow Configuration:",
    description:
      "Configure the turnstile for one-way or two-way operation, or add features like emergency release for safety compliance.",
  },
  {
    name: "Branding & Finishes:",
    description:
      "Customize colors, finishes, and logos to match your corporate branding or architectural style.",
  },
];

const gates = [
  {
    name: "Location Requirements:",
    description:
      "Evaluate where the turnstile will be installed to ensure proper space, accessibility, and compliance with building codes.",
  },
  {
    name: "Traffic Volume:",
    description:
      "Consider the expected number of people passing through the area to select a turnstile type that can handle the load efficiently.",
  },
  {
    name: "Security Level:",
    description:
      "Choose a turnstile type based on the desired security level, whether basic access control or high-security environments.",
  },
  {
    name: "Budget:",
    description:
      "Turnstiles come in various price ranges. Set a budget that balances cost with security, durability, and functionality.",
  },
];

const useRolling = [
  {
    heading: "Full-Height Turnstiles:",
    description:
      "Provide maximum security by restricting unauthorized access entirely. Ideal for high-security areas such as factories or data centers.",
  },
  {
    heading: "Half-Height Turnstiles:",
    description:
      "Offer moderate security while allowing faster passage. Suitable for office buildings, gyms, or metro stations.",
  },
  {
    heading: "Tripod Turnstiles:",
    description:
      "A cost-effective solution for low to medium security needs, commonly used in public venues and transportation hubs.",
  },
  {
    heading: "Optical Turnstiles:",
    description:
      "Use sensors to detect passage and prevent unauthorized entry, offering a sleek and modern design for commercial spaces.",
  },
];

export const Turnstile = () => {
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
          src="/Turnstile.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">TURNSTILES</div>
        </div>
        
      </div>
      <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;TURNSTILES
            </h2>
          </div>
        </div> */}
           <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                <img
                  src="/Turnstile.jpg"
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
                 TURNSTILES
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
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Turnstile
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Turnstiles – Your Solution for Enhanced Security and Access
              Control
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Turnstiles serve as crucial security installations that regulate
              entry across diverse environments such as offices, transit
              stations, and stadiums. They act as a barrier against unauthorized
              access while permitting smooth passage for authorized personnel.
              Using reliable turnstiles helps organizations boost security,
              ensure safety, and efficiently manage the flow of people in busy
              areas.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/Turnstile.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What Are Turnstiles?
          </div>
          <div style={{ lineHeight: "30px" }}>
            Turnstiles are mechanical access control gates designed to manage
            entry into restricted areas. Featuring rotating arms or barriers,
            they permit only one person to pass at a time. Available in multiple
            types—such as full-height, half-height, tripod, and optical
            turnstiles—they can be integrated with access control systems like
            RFID, biometric readers, or ticketing solutions to strengthen
            security.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of Using Turnstiles
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
            Materials Used for Turnstiles
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
            Customization Options for Turnstiles
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
            How to Choose the Right Turnstile for Your Facility
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
            Installation & Maintenance of Turnstiles
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Professional Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Proper installation ensures that turnstiles operate smoothly, align
            correctly with entry paths, and integrate seamlessly with access
            control systems. Professional installers will also ensure compliance
            with safety regulations and building codes.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Routine Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Regular maintenance includes checking mechanical components,
            lubricating moving parts, testing electronic access systems, and
            inspecting sensors. This helps prevent malfunctions, extends the
            lifespan of the turnstile, and ensures reliable security.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Software Updates:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Routine inspections verify that emergency releases, anti-tailgating
            features, and safety sensors are functioning correctly, minimizing
            risks and protecting both users and property.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of Turnstiles
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
            Turnstiles provide a reliable and stylish solution for controlling
            access in various settings. By selecting the right material, type,
            and custom features, you can enhance security, streamline traffic
            flow, and improve the overall efficiency of your premises. Proper
            installation and maintenance will ensure your turnstiles operate
            smoothly for years to come.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
