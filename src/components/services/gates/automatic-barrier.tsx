import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


const arr = [
  {
    heading: "Professional Installation:",
    description:
      "Automatic barriers should be installed by qualified professionals to ensure proper alignment, smooth operation, and correct integration with access control systems.",
  },
  {
    heading: "Regular Maintenance:",
    description:
      "Perform routine checks on mechanical components, lubricate moving parts, and inspect sensors to keep the barrier functioning efficiently and safely.",
  },
  {
    heading: "Safety Inspections:",
    description:
      "Regularly inspect safety features, such as sensors and emergency stop mechanisms, to prevent accidents and ensure reliable operation in high-traffic areas.",
  },
];


const material =[
  {
    name: "Steel:",
    description:
      "Robust and impact-resistant, steel barriers provide maximum security and are ideal for areas with heavy vehicle traffic or high-security requirements.",
  },
  {
    name: "Aluminium:",
    description:
      "Corrosion-resistant and lightweight, aluminum barriers are easy to operate and maintain, making them suitable for commercial and residential applications.",
  },
  {
    name: "Composite Materials:",
    description:
      "Durable yet lightweight, composite barriers combine strength and flexibility. They are designed to withstand environmental wear while offering a sleek appearance.",
  },
];

const customization = [
  {
    name: "Length and Height:",
    description:
      "Barriers can be customized to fit different entrance sizes, ensuring proper coverage for vehicle access points of any width.",
  },
  {
    name: "Operation Type:",
    description:
      "Choose between manual, semi-automatic, or fully automatic operation depending on your convenience and traffic requirements.",
  },
  {
    name: "Control Options:",
    description:
      "Automatic barriers can be integrated with remote controls, key cards, access control systems, or smartphone apps for flexible operation.",
  },
  {
    name: "Safety Features:",
    description:
      "Add features such as safety sensors, warning lights, or emergency stop mechanisms to enhance user safety and prevent accidents.",
  },
];


const gates = [
  {
    name: "Traffic Volume:",
    description:
      "Consider the number of vehicles that will pass through daily to select a barrier that can handle high-frequency operation without wear.",
  },
  {
    name: "Security Level:",
    description:
      "Determine the required level of security to choose a barrier with appropriate strength, locking mechanisms, and integration with access control systems.",
  },
  {
    name: "Space Availability:",
    description:
      "Evaluate the available space for barrier installation to decide between swing, rising arm, or retractable designs that suit your entrance layout.",
  },
  {
    name: "Budget Considerations:",
    description:
      "Automatic barriers come in various price ranges. Choose a solution that balances cost, functionality, and durability for long-term value.",
  },
];

const useRolling = [
  {
    heading: "Manual Barriers:",
    description:
      "Operated by hand, these barriers are a cost-effective solution for low-traffic areas or temporary installations.",
  },
  {
    heading: "Automatic Barriers:",
    description:
      "Motorized barriers provide quick, effortless operation for high-traffic areas, controlled via remote, access card, or integrated systems.",
  },
  {
    heading: "Industrial Applications:",
    description:
      "Designed for warehouses, factories, and commercial properties where durability and frequent operation are essential.",
  },
];


export const Automaticbarrier = () => {
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
      {/* <div
        className={`transition-opacity duration-300 ${
          showSticky ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      > */}
        <Header />
      {/* </div>
      {showSticky && <StickyHeader />} */}
      {/* <div className="relative w-full">
        <img
          src="/automatic-barriers.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">AUTOMATIC BARRIES</div>
        </div>
       
      </div>
       <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;AUTOMATIC BARRIES
            </h2>
          </div>
        </div> */}
            <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                <img
                  src="/automatic-barriers.jpg"
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
                    AUTOMATIC BARRIES
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
              Automatic Barriers
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Enhance Security and Access Control with Automatic Barriers
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
Automatic barriers are effective solutions for enhancing security and controlling vehicle access in locations such as parking lots, toll booths, commercial buildings, and residential areas. They provide reliable management of entry and exit, ensuring safety and convenience. Equipped with advanced technology, these barriers can be operated remotely or via automated systems, offering property owners improved security, efficient access control, and peace of mind.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/automatic-barriers.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What Are Automatic Barriers?
          </div>
          <div style={{ lineHeight: "30px" }}>
           Automatic barriers are mechanical gates designed to control vehicle access by raising and lowering. They can be operated via remote controls, key cards, or integrated access control systems. Constructed from durable materials, these barriers ensure long-lasting performance in high-traffic areas, providing both safety and security by preventing unauthorized entry while allowing authorized vehicles seamless access.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of Installing Automatic Barriers
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
            Materials Used for Automatic Barriers
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
            Customization Options for Automatic Barriers
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
            How to Choose the Right Automatic Barrier for Your Property
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
            Installation & Maintenance of Automatic Barriers
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Professional Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
          Proper installation of automatic barriers by experienced professionals is essential to ensure smooth operation, safety compliance, and long-term durability.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Routine Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Regular maintenance is vital to keep automatic barriers functioning efficiently. Key tasks include inspecting moving parts, checking electronic components, and ensuring the barrier remains properly aligned.
          </div>{" "}
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Safety Inspections:
          </div>
          <div className="text-[15px] font-[400] my-2">
           Routine safety inspections are important to ensure all features—such as sensors and emergency stops—are working correctly. Regular checks help prevent accidents and extend the barrier’s lifespan.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of Automatic Barriers
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
            Automatic barriers provide an effective solution for enhancing
            security and managing access at your property. By investing in these
            advanced systems, you can create a safer environment for both your
            customers and employees while improving traffic flow. Choose
            automatic barriers to secure your entrance and elevate the overall
            experience of your property.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
