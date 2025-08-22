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
    name: "Steel:",
    description: "Steel retractable gates are strong and durable, ideal for high-security areas and commercial properties."
  },
  {
    name: "Aluminum:",
    description: "Aluminum gates are lightweight, rust-resistant, and perfect for residential or medium-traffic areas."
  },
  {
    name: "Composite Materials:",
    description: "Some gates use composites for a balance of durability, lightweight operation, and aesthetic appeal."
  }
];

const customization = [
  {
    name: "Size & Dimensions:",
    description: "Retractable gates can be custom-built to fit various driveway or entrance widths."
  },
  {
    name: "Finishes & Colors:",
    description: "Choose from powder-coated colors or other finishes to match your property's design."
  },
  {
    name: "Automation:",
    description: "Gates can be automated for remote, keypad, or app-based operation for convenience."
  },
  {
    name: "Security Features:",
    description: "Add smart locks, access control, or alarm integration for enhanced security."
  }
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
    description: "Operated by hand, suitable for low-traffic areas or smaller properties.",
  },
  {
    heading: "Automatic Retractable Gates:",
    description: "Motorized gates operated remotely or via sensors, ideal for commercial or high-traffic properties.",
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
        
      </div>
      <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;RETRACKTABLE GATE
            </h2>
          </div>
        </div>

      <section className="bg-[#f8f8f8] mt-4 pt-4">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-10 ">
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
           Retractable gates are security systems that expand and contract to control access efficiently. They are designed for flexibility, allowing property owners to secure entrances without permanently occupying space. Typically made from durable materials like steel or aluminum, retractable gates are suitable for residential driveways, commercial lots, and industrial sites. They provide a balance of security, convenience, and space-saving functionality, making them an effective solution for controlling access while maintaining smooth traffic flow.
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
          Retractable gates are flexible barriers that extend or retract to secure an entrance or area. Made from durable materials like steel or aluminum, they provide a reliable solution for controlling property access. Designed for easy operation, these gates allow quick deployment for security and effortless retraction for access. Suitable for residential driveways, commercial entrances, and industrial facilities, retractable gates combine convenience, durability, and effective security.
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
           Steel retractable gates are highly valued for their robustness and long-lasting performance. They provide excellent security and are well-suited for outdoor use, withstanding harsh weather conditions effectively.
          </div>
            <div className="text-lg font-semibold mt-4 text-[#000]">
           Aluminum:
          </div>
          <div className="text-[15px] font-[400] my-2">
           Aluminum retractable gates are lightweight, corrosion-resistant, and well-suited for both residential and commercial properties. They provide a balance of strength and visual appeal while ensuring easy operation and long-lasting performance.
          </div>
            <div className="text-lg font-semibold mt-4 text-[#000]">
           Composite Materials:
          </div>
          <div className="text-[15px] font-[400] my-2">
          Composite retractable gates combine durability with a lightweight design, offering a cost-effective solution that still provides reliable security and ease of use.
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
          Retractable gates are a practical and stylish solution for controlling access while maintaining convenience. Their durable construction, customization options, and flexible operation make them ideal for residential, commercial, and industrial applications. Investing in quality retractable gates enhances security, ensures smooth operation, and provides peace of mind.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
