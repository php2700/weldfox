import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Space Efficiency:",
    description:
      "Sliding gates do not require additional space to swing open, making them perfect for driveways or areas with limited room.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Built with durable materials, sliding gates provide a solid barrier against unauthorized access, increasing safety for your property.",
  },
  {
    heading: "Versatile Designs:",
    description:
      "Available in various materials such as aluminum, steel, and wood, sliding gates can be customized to match your property's aesthetic.",
  },
  {
    heading: "Smooth Operation:",
    description:
      "Equipped with advanced mechanisms, sliding gates open and close smoothly, ensuring ease of use.",
  },
  {
    heading: "Weather Resistance:",
    description:
      "High-quality materials and coatings protect against rust and corrosion, ensuring durability in various weather conditions.",
  },
];

const material = [
  {
    name: "Steel:",
    description:
      "Steel sliding gates are highly durable and offer robust security, making them suitable for commercial and industrial applications.",
  },
  {
    name: "Aluminum:",
    description: `Lightweight and rust-resistant, aluminum sliding gates provide a stylish and durable option for residential properties.`,
  },
  {
    name: "Wood:",
    description:
      "Wooden sliding gates add a classic look and can be customized for aesthetic appeal, though they may require more maintenance.",
  },
];

const customization = [
  {
    name: "Finishes:",
    description:
      "Choose from various finishes, including powder-coated, painted, or stained options to enhance your gate's appearance.",
  },
  {
    name: "Colors:",
    description: `Select from a wide palette of colors to match your property's design and personal preferences.`,
  },
  {
    name: "Automation Features:",
    description:
      "Add automation features such as remote access, intercom systems, or sensors for added convenience and security.",
  },
];

const gates = [
  {
    name: "Automated Options:",
    description:
      "Many sliding gates can be equipped with automation features, allowing for remote access and enhanced convenience.",
  },
  {
    name: "Customization:",
    description:
      "Options for finishes, colors, and additional features like intercom systems allow you to create a gate that fits your style and needs.",
  },
  {
    name: "Low Maintenance:",
    description:
      "With fewer moving parts compared to swing gates, sliding gates often require less maintenance while providing reliable performance.",
  },
];

const useRolling = [
  {
    heading: "Single Sliding Gates:",
    description:
      "A single sliding gate consists of one panel that slides open to one side, ideal for residential and smaller commercial spaces.",
  },
  {
    heading: "Bi-parting Sliding Gates:",
    description:
      "These gates consist of two panels that slide open in opposite directions, providing a wider opening for larger vehicles.",
  },
  {
    heading: "Telescopic Sliding Gates:",
    description:
      "These gates feature multiple panels that slide together, allowing for maximum opening width in limited space.",
  },
  {
    heading: "Stacking Sliding Gates:",
    description:
      "Stacking gates fold back into a compact area when opened, offering a space-efficient solution for high-traffic locations.",
  },
];

export const Slidegates = () => {
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
          src="/sliding-gate-automation.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">SLIDING GATES</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;SLIDING GATES
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
              Maximize Space and Security with Sliding Gates
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Sliding gates are an innovative and efficient solution for
              property access, ideal for both residential and commercial
              applications. Designed to save space while providing robust
              security, these gates combine practicality with style.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/sliding-gate-automation.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What Are Sliding Gates?
          </div>
          <div style={{ lineHeight: "30px" }}>
            Sliding gates operate by moving along a track, sliding open
            horizontally instead of swinging outward or inward. This design
            makes them an excellent choice for properties with limited space for
            gate operation.{" "}
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Key Benefits of Sliding Gates
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
            Materials Used for Sliding Gates
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
            Customization Options for Sliding Gates
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
            Why Choose Sliding Gates?
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
            Professional installation is recommended to ensure the gate operates
            smoothly and meets safety standards. Regular maintenance, including
            checking tracks and lubrication, will help prolong the gate’s
            lifespan.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of Sliding Gates
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
            Investing in sliding gates is a smart choice for enhancing security,
            maximizing space, and improving the aesthetic appeal of your
            property. Explore our selection of high-quality sliding gates to
            find the perfect solution for your needs!
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
