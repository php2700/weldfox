import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Space Efficiency:",
    description:
      "Collapsible gates are designed to take up minimal space when not in use. Their retractable design allows them to fold neatly out of the way, making them ideal for areas with limited room, such as narrow corridors or small entryways.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "These gates provide a strong physical barrier against unauthorized access. Made from tough materials like steel, they are highly secure and can be locked when needed, making them suitable for homes, businesses, and industrial sites.",
  },
  {
    heading: "Flexibility:",
    description:
      "Collapsible gates can be used in a wide variety of settings, from residential doorways and windows to commercial storefronts and industrial sites. They are ideal for both temporary and permanent security needs.",
  },
  {
    heading: "Durable Construction:",
    description:
      "Built to withstand heavy use and harsh weather conditions, collapsible gates are a long-term investment. Their durable construction ensures they can provide reliable security for years to come with minimal maintenance.",
  },
  {
    heading: "Aesthetic Appeal:",
    description:
      "Available in various styles and finishes, collapsible gates can be customized to suit your property. From modern designs to traditional styles, these gates complement both residential and commercial spaces.",
  },
];

const material = [
  {
    name: "Manual Collapsible Gates:",
    description:
      "These gates are operated by hand, making them a cost-effective option for smaller properties or areas with less frequent access needs. Manual collapsible gates are easy to use and require no additional power source.",
  },
  {
    name: "Automatic Collapsible Gates:",
    description: `For properties that require frequent access, automatic collapsible gates can be operated with a remote control or integrated into a security system, ideal for commercial and industrial applications.`,
  },
];

const customization = [
  {
    name: "Size:",
    description:
      "Collapsible gates can be customized to fit any entryway, whether for a small residential window or a large industrial garage.",
  },
  {
    name: "Finish:",
    description: `your property’s aesthetic. Powder-coated finishes offer colors, providing added protection against corrosion.`,
  },
  {
    name: "Security Features:",
    description:
      "Enhance your collapsible gate with added security options such as reinforced locks, smart locking mechanisms, or integration with alarm systems.",
  },
  {
    name: "Automation:",
    description:
      "Opt for motorized, automated collapsible gates for larger properties or commercial settings where convenience and quick access are a priority.",
  },
];

const gates = [
  {
    name: "Space Availability:",
    description:
      "Ensure that the gate you choose fits the dimensions of your entryway and can retract fully without obstruction.",
  },
  {
    name: "Security Needs:",
    description:
      "Choose a gate made from strong materials like steel if security is your concern, and consider adding advanced locking mechanisms or smart features.",
  },
  {
    name: "Usage Frequency:",
    description:
      "If the gate will be used frequently, an automatic or motorized gate may provide greater convenience.",
  },
  {
    name: "Aesthetic Preferences:",
    description:
      "Select a finish or design that complements your property’s style, whether you need a sleek, modern look or a more traditional aesthetic.",
  },
  {
    name: "Budget:",
    description:
      "Collapsible gates come in various price ranges depending on the material, size, and features. Choose a gate that meets both your security needs and budget.",
  },
];

const useRolling = [
  {
    heading: "Residential Properties:",
    description:
      "Collapsible gates can be used for securing front doors, patios, or windows in homes. They provide a strong deterrent against intruders while maintaining a sleek, unobtrusive look.",
  },
  {
    heading: "Commercial Properties:",
    description:
      "In retail environments, collapsible gates are commonly used to secure storefronts and display windows. They provide security after business hours while allowing visibility into the store.",
  },
  {
    heading: "Industrial Properties:",
    description:
      "For warehouses, factories, and storage facilities, collapsible gates offer a robust security solution. They can be used to secure entry points, loading docks, and sensitive areas.",
  },
  {
    heading: "Parking Garages & Driveways:",
    description:
      "Collapsible gates are also ideal for parking garages or driveways that need secure, space-saving access solutions.",
  },
];

export const Collapsible = () => {
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
          src="/collapsible-gate.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">COLLAPSING GATES</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;COLLAPSING GATES
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Collapsible Gate
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Secure & Space-Saving Solutions with Collapsible Gates – Perfect
              for Home & Commercial Use
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Collapsible gates, also known as retractable gates, are an
              excellent solution for properties that require security without
              sacrificing space. These gates operate by folding or retracting,
              allowing for efficient use of space while maintaining high levels
              of security. Ideal for residential, commercial, and industrial
              properties, collapsible gates are versatile, durable, and stylish.
              Whether you need to secure a storefront, garage, or residential
              entryway, collapsible gates offer a practical and modern approach
              to property protection.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/collapsible-gate.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What is a Collapsible Gate?
          </div>
          <div style={{ lineHeight: "30px" }}>
            A collapsible gate is a gate system that retracts or folds when
            opened, allowing it to take up minimal space when not in use. These
            gates are typically made from durable materials such as steel or
            aluminum and are designed for maximum security and flexibility. They
            are ideal for areas where space is limited or where a traditional
            swinging or sliding gate may not be practical.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of Installing a Collapsible Gate
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
            Materials for Collapsible Gates
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
            Customization Options for Collapsible Gates
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
            How to Choose the Right Collapsible Gate for Your Property
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
            Installation & Maintenance of Collapsible Gates
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Professional Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Proper installation is key to ensuring the security and smooth
            operation of your collapsible gate. It’s recommended to hire
            professionals to install the gate, especially if you choose an
            automated model.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Minimal Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Collapsible gates are designed for durability and require little
            maintenance. Regular checks to ensure that the tracks and hinges are
            clean and lubricated will keep the gate functioning smoothly.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Weather Resistance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            If your gate is exposed to outdoor conditions, opt for a
            weather-resistant finish or material such as galvanized steel or
            aluminum to protect against rust and wear.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of Collapsible Gates
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
            Investing in MS gates is a smart choice for anyone looking to
            enhance security, functionality, and aesthetics for their property.
            Explore our selection of high-quality MS gates to find the perfect
            solution for your needs!
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
