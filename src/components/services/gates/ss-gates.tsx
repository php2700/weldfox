import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Durability:",
    description:
      "Stainless steel is resistant to rust and corrosion, ensuring that your gate will withstand the elements and last for years without significant wear.",
  },
  {
    heading: "Security:",
    description:
      "With their robust construction, SS gates provide a strong barrier against unauthorized access, making them an excellent choice for securing properties.",
  },
  {
    heading: "Aesthetic Appeal:",
    description:
      "Available in sleek, modern designs, stainless steel gates can enhance the visual appeal of any property, blending functionality with style.",
  },
  {
    heading: "Low Maintenance:",
    description:
      "SS gates require minimal maintenance compared to other materials, as they do not need regular painting or treatment.",
  },
  {
    heading: "Eco-Friendly:",
    description:
      "Stainless steel is a recyclable material, making SS gates an environmentally friendly option for conscientious homeowners and businesses.",
  },
];

const material = [
  {
    name: "High-Quality Stainless Steel:",
    description:
      "The primary material used for SS gates, known for its strength and resistance to corrosion.",
  },
  {
    name: "Powder-Coated Finishes:",
    description: `A durable finish option that enhances the gate's aesthetic appeal while providing extra protection against the elements.`,
  },
  {
    name: "Reinforced Hardware:",
    description:
      "Heavy-duty hinges, locks, and fittings that ensure the longevity and security of the gate.",
  },
];

const customization = [
  {
    name: "Installation:",
    description:
      "Professional installation is recommended to ensure that your SS gate functions effectively and meets safety standards.",
  },
  {
    name: "Maintenance:",
    description: `Regular cleaning with mild soap and water will keep the gate looking its best.`,
  },
];

const gates = [
  {
    name: "Versatile Designs:",
    description:
      "SS gates can be customized in various styles, finishes, and sizes, ensuring they fit your property’s aesthetic perfectly.",
  },
  {
    name: "Weather Resistance:",
    description:
      "Designed to withstand harsh weather conditions without deterioration, ensuring long-lasting performance.",
  },
  {
    name: "Easy Operation:",
    description:
      "Available in manual and automatic options, SS gates provide convenience and ease of use.",
  },
];

const useRolling = [
  {
    heading: "Residential Properties:",
    description:
      "Ideal for securing driveways, gardens, and entrances while adding an elegant touch.",
  },
  {
    heading: "Commercial Spaces:",
    description:
      "Perfect for retail stores, office buildings, and warehouses that require strong security solutions with a professional appearance.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "Suitable for fencing and access points in industrial environments, where durability and strength are crucial.",
  },
];

export const Ssgates = () => {
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
          src="/SS-gates.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">SS GATES</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;SS GATES
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              SS Gates
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Enhance Security and Style with Stainless Steel Gates
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Stainless Steel (SS) gates are the perfect combination of
              strength, elegance, and versatility. Ideal for both residential
              and commercial applications, these gates not only provide security
              but also add a touch of modern sophistication to any property.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/SS-gates.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What Are SS Gates?
          </div>
          <div style={{ lineHeight: "30px" }}>
            SS gates are constructed from high-quality stainless steel, a
            material known for its corrosion resistance and durability. These
            gates can be designed in various styles, including swing, sliding,
            and bi-fold options, to suit diverse needs and preferences.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Key Benefits of SS Gates
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
            Materials Used in SS Gates
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
            Installation and Maintenance{" "}
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
            Why Choose SS Gates?
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
            H2
          </div>
          <div className="text-lg font-semibold my-2 text-[#000]">
            Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Professional installation is recommended to ensure that your SS gate
            functions effectively and meets safety standards. Regular cleaning
            with mild soap and water will keep the gate looking its best.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Applications of SS Gates
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
            Investing in stainless steel gates is a smart decision for anyone
            looking to enhance security, aesthetics, and longevity in their
            property. Explore our range of high-quality SS gates to find the
            perfect solution tailored to your needs!
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
