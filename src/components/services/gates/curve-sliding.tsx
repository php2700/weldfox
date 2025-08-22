import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Space Optimization:",
    description:
      "Curve sliding gates maximize available space, making them ideal for properties with curved driveways or limited entry areas.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Robust construction and motorized operation provide reliable protection for residential and commercial properties.",
  },
  {
    heading: "Smooth Operation:",
    description:
      "Sliding along a curved track ensures effortless movement and convenient access for vehicles and pedestrians.",
  },
  {
    heading: "Modern Aesthetic:",
    description:
      "Sleek, curved designs enhance the visual appeal of any property while maintaining functionality.",
  },
  {
    heading: "Durability:",
    description:
      "Built from high-quality materials, curve sliding gates withstand frequent use and resist wear over time.",
  },
];

const material = [
  {
    name: "Steel:",
    description:
      "Provides superior strength and durability, suitable for both residential and commercial curve sliding gates.",
  },
  {
    name: "Aluminum:",
    description:
      "Lightweight, corrosion-resistant, and low-maintenance, ideal for smooth sliding operation.",
  },
  {
    name: "Stainless Steel:",
    description:
      "Offers long-lasting performance and a sleek appearance, perfect for modern curve sliding gate designs.",
  },
];

const customization = [
  {
    name: "Adaptable Design:",
    description:
      "Curve sliding gates can be installed on uneven terrain and adapt to uniquely shaped driveways, providing solutions where traditional gates may not fit.",
  },
  {
    name: "Smooth and Reliable Operation:",
    description:
      "The curved sliding mechanism ensures effortless movement and consistent performance, even on challenging surfaces.",
  },
  {
    name: "Space-Saving Solution:",
    description:
      "Ideal for properties with limited space, these gates maximize available area while offering robust security and modern aesthetics.",
  },
];

const gates = [
  {
    name: "Professional Installation:",
    description:
      "Professional installation ensures the gate is correctly aligned, operates smoothly on its curved track, and functions safely.",
  },
  {
    name: "Regular Maintenance:",
    description:
      "Regularly lubricate the track, inspect the gate for wear, and service any automated components to maintain optimal performance and extend the gate’s lifespan.",
  },
];

const useRolling = [
  {
    heading: "Manual Curve Sliding Gates:",
    description:
      "A cost-effective option for smaller properties, manually operated curve sliding gates provide space-saving benefits and reliable security without automation.",
  },
  {
    heading: "Automatic Curve Sliding Gates:",
    description:
      "Motorized gates offer the convenience of remote control or sensor-based operation, ideal for commercial properties or homeowners seeking enhanced ease of use and efficiency.",
  },
];

export const CurveSliding = () => {
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
          src="/curve-sliding-gate.png"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">
            CURVE SLIDING GATES
          </div>
        </div>
       
      </div>
       <div className="mt-10 flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;CURVE SLIDING GATES
            </h2>
          </div>
        </div>

      <section className="bg-[#f8f8f8] mt-4 pt-4">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Curve Sliding Gate
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Enhance Security and Aesthetic with Curve Sliding Gates – Durable
              & Stylish Solutions
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              If you’re looking to upgrade your property’s entrance with a gate
              that combines security, functionality, and visual appeal, curve
              sliding gates offer the perfect solution. Unlike traditional
              gates, these gates slide along a curved track, providing a smooth,
              space-saving operation. They are ideal for properties with limited
              space or uniquely shaped driveways and are increasingly popular
              for both residential and commercial properties.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/curve-sliding-gate.png" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What are Curve Sliding Gates?
          </div>
          <div style={{ lineHeight: "30px" }}>
            Curve sliding gates are advanced systems that operate along a
            specially designed curved track. This design is especially useful
            for properties where a straight track is impractical, such as angled
            boundaries or curved driveways. By maximizing available space, these
            gates provide efficient operation and are often motorized for ease
            of use and enhanced security.{" "}
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Advantages of Installing Curve Sliding Gates
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
            Materials for Curve Sliding Gates
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
            Why Choose Curve Sliding Gates Over Traditional Gates?
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
            Choosing the Right Curve Sliding Gate for Your Property
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
            Installation and Maintenance Tips
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Material:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Choose from steel, aluminum, or wood, depending on your preference
            for durability, maintenance, and aesthetic appeal.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Automation:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Decide between manual or automatic operation. Automatic gates are
            perfect for those seeking added convenience and enhanced security.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Customization Options:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Many manufacturers provide customizable options, including colors,
            finishes, and designs, allowing your gate to perfectly complement
            your property’s style.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of Curve Sliding Gates
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
            Curve sliding gates are a smart investment for enhancing your
            property’s security, functionality, and curb appeal. Their
            space-saving design and stylish appearance make them ideal for both
            residential and commercial applications. Choose a curve sliding gate
            today to transform your entrance into a secure, elegant, and
            efficient gateway.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
