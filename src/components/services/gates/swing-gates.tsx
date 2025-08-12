import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Enhanced Security:",
    description:
      "Swing gates provide a strong physical barrier, deterring unauthorized access and enhancing your property's security.",
  },
  {
    heading: "Aesthetic Appeal:",
    description:
      "Available in various designs and materials, swing gates can enhance the visual appeal of your property.",
  },
  {
    heading: "Durability:",
    description:
      "Constructed from robust materials, swing gates are designed to withstand weather conditions and wear over time.",
  },
  {
    heading: "Ease of Use:",
    description:
      "Swing gates are straightforward to operate, offering convenience for everyday use.",
  },
  {
    heading: "Space Efficiency:",
    description:
      "They require minimal space for installation compared to sliding gates, making them suitable for a variety of locations.",
  },
];

const material = [
  {
    name: "Wood:",
    description:
      "Offers a classic look but requires regular maintenance to protect against the elements.",
  },
  {
    name: "Steel:",
    description: `Highly durable and provides excellent security; can be powder-coated for a stylish finish.`,
  },
  {
    name: "Aluminum:",
    description:
      "Lightweight and rust-resistant, making it an ideal choice for low-maintenance needs.",
  },
];

const customization = [
  {
    name: "Residential Properties:",
    description:
      "Perfect for driveways, gardens, and backyards, adding an element of sophistication while providing security.",
  },
  {
    name: "Commercial Spaces:",
    description: `Ideal for businesses needing controlled access to parking lots and service areas.`,
  },
  {
    name: "Industrial Facilities:",
    description:
      "Suitable for securing industrial premises, providing a strong physical barrier.",
  },
];

const gates = [
  {
    name: "Space Efficiency:",
    description:
      "Swing gates require minimal space for installation compared to sliding gates, making them suitable for various locations.",
  },
  {
    name: "Customizable Features:",
    description:
      "Options for decorative elements, finishes, and colors allow for personalization to match your property’s style.",
  },
  {
    name: "Low Maintenance:",
    description:
      "With simple mechanisms, swing gates are easy to maintain, requiring occasional checks and lubrications.",
  },
];

const useRolling = [
  {
    heading: "Single Swing Gates:",
    description:
      "Ideal for narrower openings, these gates operate on a single hinge.",
  },
  {
    heading: "Double Swing Gates:",
    description:
      "Suitable for wider entrances, providing an elegant and grand opening.",
  },
  {
    heading: "Custom Swing Gates:",
    description:
      "Tailored designs to meet specific aesthetic and functional needs.",
  },
];

export const Swinggates = () => {
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
          src="/manual-rolling-shutter.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">SWING GATES</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;SWING GATES
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Swing Gates
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Secure and Stylish: The Benefits of Swing Gates
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Swing gates offer a classic and elegant solution for property
              access. Ideal for both residential and commercial applications,
              these gates combine functionality with aesthetic appeal, enhancing
              your property's security and curb appeal.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/manual-rolling-shutter.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What Are Swing Gates?
          </div>
          <div style={{ lineHeight: "30px" }}>
            Swing gates are a type of gate that opens inward or outward on
            hinges. Available in various materials such as wood, steel, and
            aluminum, they come in a range of designs to suit different styles
            and preferences.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Key Benefits of Swing Gates
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
            Materials Used in Swing Gates
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
            Applications of Swing Gates
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
            Why Choose Swing Gates?
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
            Professional installation is crucial for ensuring proper function
            and longevity. Regular maintenance, including checking the hinges
            and gate alignment, will help keep your swing gate in top condition.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of Swing Gates
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
            Investing in swing gates is a smart decision for enhancing security,
            aesthetics, and functionality at your property. Explore our
            collection of high-quality swing gates to find the perfect fit for
            your needs!
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
