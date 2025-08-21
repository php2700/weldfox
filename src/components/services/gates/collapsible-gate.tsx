import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Space-Saving Design:",
    description:
      "Collapsible gates fold or retract when opened, making them ideal for properties with limited space.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Strong construction and secure locking systems provide reliable protection for residential, commercial, and industrial properties.",
  },
  {
    heading: "Durability:",
    description:
      "Made from high-quality materials such as steel or aluminum, collapsible gates are built to withstand frequent use and harsh conditions.",
  },
  {
    heading: "Versatility:",
    description:
      "Suitable for a wide range of applications, including garages, storefronts, and pedestrian entrances.",
  },
  {
    heading: "Ease of Use:",
    description:
      "Smooth folding or retracting mechanism allows for convenient and efficient access.",
  },
];

const material = [
  {
    name: "Steel Collapsible Gates:",
    description:
      "Strong and durable, ideal for commercial or industrial applications requiring high security.",
  },
  {
    name: "Aluminum Collapsible Gates:",
    description:
      "Lightweight, rust-resistant, and easy to maintain, perfect for residential properties.",
  },
  {
    name: "Combination Materials:",
    description:
      "Some gates use a combination of steel frames with aluminum panels for a balance of strength and weight.",
  },
];

const customization = [
  {
    name: "Size:",
    description:
      "Collapsible gates can be custom-built to fit any entrance width or height, ensuring a perfect fit.",
  },
  {
    name: "Finish:",
    description:
      "Choose powder-coated or painted finishes to protect against rust and enhance the gate’s appearance.",
  },
  {
    name: "Security Features:",
    description:
      "Add locks, automated opening mechanisms, or smart security systems for increased safety.",
  },
  {
    name: "Operation:",
    description:
      "Select manual or automated folding options based on convenience and frequency of use.",
  },
];

const gates = [
  {
    name: "Compact and Efficient:",
    description:
      "Collapsible gates fold neatly, saving space while providing full access when open.",
  },
  {
    name: "Reliable Security:",
    description:
      "Strong materials and secure locking systems ensure your property remains protected.",
  },
  {
    name: "Convenient Operation:",
    description:
      "Smooth retracting or folding mechanism, with optional automation, allows effortless entry and exit.",
  },
];

const useRolling = [
  {
    heading: "Residential Properties:",
    description:
      "Perfect for driveways, garages, and pedestrian entrances where space is limited.",
  },
  {
    heading: "Commercial Spaces:",
    description:
      "Ideal for storefronts, warehouses, and offices requiring secure, space-saving entrances.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "Suitable for factories and industrial areas where durable, compact, and secure gates are needed.",
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
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
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
              Collapsible gates, also called retractable gates, provide an
              excellent solution for properties that require security without
              compromising space. These gates fold or retract, allowing for
              efficient use of space while maintaining high levels of security.
              Ideal for residential, commercial, and industrial properties,
              collapsible gates are versatile, durable, and stylish. Whether
              securing a storefront, garage, or residential entrance,
              collapsible gates offer a practical and modern approach to
              property protection.
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
            A collapsible gate is a system that retracts or folds when opened,
            taking up minimal space when not in use. Typically made from durable
            materials like steel or aluminum, these gates are designed for
            maximum security and flexibility. They are ideal for areas with
            limited space or where a traditional swinging or sliding gate may
            not be practical.
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
            Proper installation is essential to ensure the security and smooth
            operation of your collapsible gate. It is recommended to hire
            professionals, especially when installing an automated model.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Minimal Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Collapsible gates are built for durability and require minimal
            maintenance. Regularly check and lubricate the tracks and hinges to
            ensure the gate operates smoothly and efficiently.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Weather Resistance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            If your gate is exposed to the elements, choose weather-resistant
            materials or finishes, such as galvanized steel or aluminum, to
            protect against rust and wear.
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
            Collapsible gates offer a practical, space-efficient, and secure
            solution for properties of all types. With their folding or
            retracting design, durable construction, and customizable features,
            they are ideal for residential, commercial, and industrial
            applications, combining convenience, security, and modern
            aesthetics.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
