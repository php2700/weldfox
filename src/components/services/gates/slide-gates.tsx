import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Space Efficiency:",
    description:
      "Sliding gates move horizontally along a track, making them perfect for properties with limited driveway space.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Sturdy construction and secure locking mechanisms provide reliable protection for residential and commercial properties.",
  },
  {
    heading: "Smooth Operation:",
    description:
      "Designed for effortless opening and closing, sliding gates ensure convenient and reliable access.",
  },
  {
    heading: "Durability:",
    description:
      "Made from high-quality materials, sliding gates withstand frequent use and harsh environmental conditions.",
  },
  {
    heading: "Modern Aesthetic:",
    description:
      "Sleek designs and customizable finishes enhance the visual appeal of any property.",
  },
];

const material = [
  {
    name: "Steel:",
    description:
      "Provides superior strength and durability, suitable for both residential and commercial sliding gates.",
  },
  {
    name: "Aluminum:",
    description:
      "Lightweight yet strong, resistant to rust, and requires minimal maintenance.",
  },
  {
    name: "Stainless Steel:",
    description:
      "Offers corrosion resistance and long-lasting performance, ideal for modern sliding gate designs.",
  },
];

const customization = [
  {
    name: "Design Options:",
    description:
      "Choose from a variety of styles, finishes, and patterns to complement your property’s architecture.",
  },
  {
    name: "Automation Options:",
    description:
      "Sliding gates can be equipped with automated openers, remote control, or smart access systems for added convenience.",
  },
];

const gates = [
  {
    name: "Space-Saving Design:",
    description:
      "Sliding gates are perfect for properties with limited space, allowing smooth horizontal operation without swinging.",
  },
  {
    name: "Reliable Security:",
    description:
      "Robust construction and secure locking mechanisms ensure strong protection for your property.",
  },
  {
    name: "Ease of Operation:",
    description:
      "Available in manual or automated options, providing convenience and effortless access.",
  },
];

const useRolling = [
  {
    heading: "Residential Properties:",
    description:
      "Ideal for homes with limited driveway space, offering both security and aesthetic appeal.",
  },
  {
    heading: "Commercial Spaces:",
    description:
      "Perfect for offices, retail outlets, and gated communities requiring efficient and secure access control.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "Suitable for warehouses and factories needing reliable, durable, and space-efficient entry solutions.",
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
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
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
              Sliding gates offer an innovative and space-efficient solution for
              property access. Suitable for both residential and commercial
              properties, these gates provide robust security while combining
              practicality with stylish design.
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
            Sliding gates operate by moving horizontally along a track, rather
            than swinging inward or outward. This design makes them an ideal
            solution for properties with limited space, providing efficient
            operation without compromising security or style.
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
            smoothly and adheres to safety standards. Regular maintenance,
            including inspecting tracks and applying lubrication, helps extend
            the gate’s lifespan and maintain optimal performance.
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
            convenience, and aesthetics, especially in properties with limited
            space. Explore our range of high-quality sliding gates to find the
            perfect solution tailored to your needs.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
