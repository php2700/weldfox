import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";

const arr = [
  {
    heading: "Enhanced Security:",
    description:
      "Polycarbonate rolling shutters provide a robust barrier against break-ins and vandalism. Their strong construction deters potential intruders while ensuring that your property remains safe.",
  },
  {
    heading: "Durability:",
    description:
      "Unlike traditional metal shutters, polycarbonate shutters are lightweight, strong, and resistant to impact and weather damage, minimizing the need for frequent repairs or replacements.",
  },
  {
    heading: "Aesthetic Appeal:",
    description:
      "Polycarbonate's transparency allows visibility, ideal for retail stores and displays. They provide security without sacrificing natural light, keeping your property inviting.",
  },
  {
    heading: "Energy Efficiency:",
    description:
      "Polycarbonate rolling shutters can contribute to energy savings by providing insulation. They help regulate indoor temperatures, reducing reliance on heating and cooling systems.",
  },
  {
    heading: "Ease of Operation:",
    description:
      "Available in manual and motorized options, these shutters are designed for easy operation. With the touch of a button, you can secure your space quickly and effortlessly.",
  },
];

const useRolling = [
  {
    heading: "Retail Stores:",
    description: "Protect merchandise while maintaining visibility.",
  },
  {
    heading: "Restaurants:",
    description:
      "Ideal for storefronts and warehouses, ensuring security for valuable inventory.Secure outdoor seating areas without obstructing views",
  },
  {
    heading: "Warehouses",
    description: "Safeguard goods while ensuring easy access.",
  },
  {
    heading: "Residential Properties:",
    description: "Enhance home security without compromising aesthetics.",
  },
];

export const TransparentRollingShutters = () => {
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
          src="/polycarbonate-rolling-shutter.webp"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white">
            {" "}
            POLYCARBONATE ROLLING SHUTTERS
          </div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;POLYCARBONATE ROLLING
              SHUTTERS
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-20 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-12 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]text-[#181614]">
              Transperant/Polycarbonate Rolling Shutter
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
              Manual Rolling Shutters: A Blend Of Security And
              ConveniencePolycarbonate Rolling Shutters: Security and Style
              Combined
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              olycarbonate rolling shutters are an innovative solution for
              businesses and homes seeking enhanced security, durability, and
              aesthetic appeal. Made from high-quality polycarbonate material,
              these shutters offer a transparent design that allows natural
              light to enter while still providing protection against intruders
              and harsh weather conditions.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/polycarbonate-rolling-shutter.webp"
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-[23px] font-semibold my-4 text-[#181614]">
            What Are Polycarbonate Rolling Shutters?
          </div>
          <div
            className="text-lg text-[14px] my-6"
            style={{ lineHeight: "30px" }}
          >
            Powder-coated rolling shutters are constructed from high-quality
            materials and finished with a durable powder coating. This process
            not only enhances their appearance but also provides a protective
            layer that resists chipping, fading, and corrosion.
          </div>

          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {arr?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded">
                <div className="my-4 font-semibold text-lg text-[#000]">
                  {ele.heading}
                </div>
                <div>{ele.description}</div>
              </div>
            ))}
          </div>

          <div className="text-[23px] font-semibold my-8 text-[#181614]">
            Applications of Polycarbonate Rolling Shutters
          </div>
          {useRolling?.map((ele) => (
            <>
              <div className="font-semibold mt-4 text-[#000]">
                {ele?.heading}
              </div>
              <div className="mb-2">{ele?.description}</div>
            </>
          ))}
          <div className="text-[23px] font-semibold text-[#181614] mt-4 mb-8">
            How to Operate
          </div>
          <div className=" font-semibold text-[#000] ">
            Choosing the Right Polycarbonate Rolling Shutter:
          </div>
          <div>
            When selecting polycarbonate rolling shutters, consider the
            following: Measure your openings to ensure a proper fit. Thicker
            polycarbonate provides greater security and durability. Choose from
            various styles to match your property’s aesthetic.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Maintenance Tips
          </div>
          <div>
            Maintaining your polycarbonate rolling shutters is simple: Use a
            mild soap solution and a soft cloth to keep them clear and free from
            debris. Periodically check the motor and operating mechanisms for
            smooth functionality.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
            Polycarbonate rolling shutters are an ideal solution for those
            looking to enhance security while maintaining aesthetic appeal.
            Their unique combination of durability, ease of use, and design
            flexibility makes them suitable for a wide range of applications.
            Invest in polycarbonate rolling shutters today to protect your
            property with style and efficiency.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
