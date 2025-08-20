import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Enhanced Security:",
    description:
      "Retractable gates serve as a formidable barrier against unauthorized access, effectively protecting your property and assets. Their robust design acts as a strong deterrent for intruders, and they can be seamlessly integrated with advanced access control systems to bolster security measures.",
  },
  {
    heading: "Space Efficiency:",
    description:
      "Unlike traditional swinging gates that require significant clearance, retractable gates slide open and closed, conserving valuable space. This space-saving design is particularly advantageous in confined areas where a conventional gate would be impractical.",
  },
  {
    heading: "Versatile Applications:",
    description:
      "Retractable gates are suitable for a variety of environments, including residential properties, commercial establishments, parking lots, and industrial facilities. Their adaptability makes them an ideal solution for diverse security requirements.",
  },
  {
    heading: "Ease of Use:",
    description:
      "Designed for quick and user-friendly operation, retractable gates facilitate smooth entry and exit. Many models offer both manual and automatic operation, providing convenience and enhancing user experience.",
  },
  {
    heading: "Customizable Designs:",
    description:
      "Available in a wide array of styles, colors, and finishes, retractable gates can be tailored to align with your property's aesthetic. This level of customization ensures that your gate not only provides essential security but also complements the overall design of your building.",
  },
];

const material = [
  {
    name: " Steel:",
    description:
      "Steel is a popular choice for retractable gates due to its strength and durability. Steel gates offer maximum security and can withstand harsh weather conditions, making them suitable for outdoor applications.",
  },
  {
    name: "Aluminum:",
    description: `Aluminum retractable gates are lightweight and resistant to corrosion, making them ideal for residential and commercial properties. They offer a good balance of strength and aesthetic appeal.`,
  },
  {
    name: "Composite Materials:",
    description:
      "Some retractable gates are constructed from composite materials that provide a combination of strength and lightweight design. These gates are often more affordable while still offering adequate security.",
  },
];

const customization = [
  {
    name: "Finish Options:",
    description:
      "Choose from various finishes, such as powder coating or anodizing, to enhance the gate's appearance and resistance to corrosion.",
  },
  {
    name: "Color Choices:",
    description: `Select from a wide range of colors to match the gate with your property’s exterior design.`,
  },
  {
    name: "Access Control Integration:",
    description: "Customize your gate to work with existing security systems, including keypads, intercoms, and remote controls for convenient access.",
  },
];

const gates = [
  {
    name: "Security Requirements:",
    description:
      "Assess your property’s security needs to determine the appropriate type of gate (manual or automatic) that will provide the desired level of protection.",
  },
  {
    name: "Traffic Volume:",
    description:
      "Evaluate the expected traffic volume to choose a gate that can efficiently handle the flow of people or vehicles.",
  },
  {
    name: "Budget:",
    description:
      "Retractable gates come in a range of price points. Establish a budget that considers both initial costs and long-term maintenance to ensure a high-quality product.",
  },
];

const useRolling = [
  {
    heading: "Manual Retractable Gates:",
    description:
      "Manual retractable gates require users to open and close them by hand. These gates are often more affordable and suitable for areas with lower security needs.",
  },
  {
    heading: "Automatic Retractable Gates:",
    description:
      "Automatic retractable gates are operated using remote controls, keypads, or access control systems, providing added convenience and security. These gates are ideal for high-traffic areas or locations requiring frequent access.",
  },
  {
    heading: "Industrial Applications:Portable Retractable Gates:",
    description:
      "Portable retractable gates are designed for temporary or flexible use. They are lightweight and easy to set up, making them ideal for events, construction sites, or areas needing temporary security solutions.",
  },
];

export const Retracktable = () => {
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
          src="/retracktable.webp"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">RETRACKTABLE GATE</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;RETRACKTABLE GATE
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
             Static Title
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Retractable Gates – The Ultimate Solution for Flexible Security
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
             Retractable gates are innovative security solutions designed to provide both protection and accessibility for residential and commercial properties. Offering a unique combination of security and convenience, these gates can be easily opened or closed as needed, making them ideal for various applications, including driveways, parking lots, warehouses, and storefronts. By investing in high-quality retractable gates, you can enhance your property's security while maintaining easy access for authorized personnel.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/retracktable.webp" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           What Are Retractable Gates?
          </div>
          <div style={{ lineHeight: "30px" }}>
           Retractable gates are flexible barriers that can be extended or retracted to secure an entrance or area. Typically made of durable materials such as steel or aluminum, these gates offer a reliable solution for controlling access to your property. They are designed to be easily operated, allowing for quick deployment when security is required and effortless retraction when access is needed. Retractable gates are suitable for various environments, including residential driveways, commercial entrances, and industrial facilities.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of Using Retractable Gates
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
         Materials Used for Retractable Gates
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
            Customization Options for Retractable Gates
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
         How to Choose the Right Retractable Gate for Your Needs
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
            Installation & Maintenance of Retractable Gates
          </div>
          <div className="text-lg font-semibold mt-4-2 text-[#000]">
           Steel:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Steel is a popular choice for retractable gates due to its strength and durability. Steel gates offer maximum security and can withstand harsh weather conditions, making them suitable for outdoor applications.
          </div>
            <div className="text-lg font-semibold mt-4 text-[#000]">
           Aluminum:
          </div>
          <div className="text-[15px] font-[400] my-2">
           Aluminum retractable gates are lightweight and resistant to corrosion, making them ideal for residential and commercial properties. They offer a good balance of strength and aesthetic appeal.
          </div>
            <div className="text-lg font-semibold mt-4 text-[#000]">
           Composite Materials:
          </div>
          <div className="text-[15px] font-[400] my-2">
           Some retractable gates are constructed from composite materials that provide a combination of strength and lightweight design. These gates are often more affordable while still offering adequate security.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
           Types of Retractable Gates
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
           Retractable gates are an excellent investment for enhancing security and accessibility at your property. Their space-saving design, ease of use, and versatility make them suitable for various applications. By choosing high-quality retractable gates, you can effectively protect your assets while ensuring convenient access for authorized personnel.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
