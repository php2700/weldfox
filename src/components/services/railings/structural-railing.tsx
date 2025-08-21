import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Customization",
    description:
      "Structural fabrication enables tailor-made solutions to meet specific project requirements. Custom designs ensure each structure fits its intended purpose, aesthetics, and functionality while maintaining durability.",
  },
  {
    heading: "Strength and Durability",
    description:
      "Fabricated structures are engineered for strength, allowing them to support significant loads and withstand harsh environmental conditions. This durability ensures long-lasting performance and lower maintenance costs.",
  },
  {
    heading: "Cost-Effectiveness",
    description:
      "Advanced fabrication techniques and high-quality materials allow projects to be completed efficiently, reducing labor and material costs while enhancing overall quality and performance.",
  },
  {
    heading: "Faster Construction",
    description:
      "Prefabricated components accelerate the construction process. With parts manufactured off-site, on-site assembly is quicker, minimizing downtime and disruptions.",
  },
  {
    heading: "Quality Assurance",
    description:
      "Professional fabrication companies follow strict quality control measures to ensure each component meets industry standards, resulting in safer and more reliable structures.",
  },
];

const typesRailing = [
  {
    heading: "Commercial Buildings",
    description:
      "Structural fabrication is vital for constructing office buildings, shopping malls, and other commercial structures. Custom steel frames provide stability and support for large spans and open floor plans.",
  },
  {
    heading: "Industrial Facilities",
    description:
      "Factories, warehouses, and manufacturing plants require robust structural solutions to accommodate heavy machinery and equipment. Fabricated steel structures withstand the demands of industrial environments.",
  },
  {
    heading: "Bridges and Overpasses",
    description:
      "Structural fabrication is crucial for creating frameworks for bridges and overpasses, ensuring they safely support vehicular and pedestrian traffic.",
  },
  {
    heading: "Residential Projects",
    description:
      "Homebuilders use fabricated components for steel framing, roofing, and other structural elements, enhancing the durability and longevity of residential properties.",
  },
  {
    heading: "Infrastructure",
    description:
      "From towers to supports for power lines and communication systems, structural fabrication plays a key role in building essential infrastructure that supports modern society.",
  },
];

const maintainenceRailing = [
  {
    heading: "Commercial Buildings:",
    description:
      "Structural fabrication is essential for constructing office buildings, shopping malls, and other commercial structures. Custom steel frames provide stability and support for large spans and open floor plans.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "Factories, warehouses, and manufacturing plants require robust structural solutions to accommodate heavy machinery and equipment. Fabricated steel structures can withstand the demands of industrial environments.",
  },
  {
    heading: "Bridges and Overpasses:",
    description:
      "Structural fabrication is critical in creating the frameworks for bridges and overpasses, ensuring they can safely support vehicular and pedestrian traffic.",
  },
  {
    heading: "Residential Projects:",
    description:
      "Homebuilders often utilize fabricated components for steel framing, roofing, and other structural elements, enhancing the durability and longevity of residential properties.",
  },
  {
    heading: "Infrastructure:",
    description:
      "From towers to supports for power lines and communication systems, structural fabrication plays a vital role in building essential infrastructure that supports modern society.",
  },
];
const coatingRailing = [
  {
    heading: "Consultation and Design",
    description:
      "The process starts with consultation to understand project requirements. Designers and engineers collaborate to create detailed plans.",
  },
  {
    heading: "Material Procurement",
    description:
      "After finalizing the design, high-quality materials are sourced to ensure compliance with project specifications.",
  },
  {
    heading: "Fabrication",
    description:
      "Skilled fabricators use advanced machinery to cut, shape, and assemble components according to design specifications.",
  },
  {
    heading: "Quality Control",
    description:
      "Each fabricated piece undergoes rigorous inspection to ensure it meets quality standards and tolerances.",
  },
  {
    heading: "Delivery and Installation",
    description:
      "Completed components are delivered to the project site and assembled by trained professionals for proper installation.",
  },
];

export const Structural = () => {
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
          src="/structural-fabrication.webp"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">
            STRUCTURAL FABRICATION
          </div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;STRUCTURAL FABRICATION
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Structural Fabrication
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Building the Future with Precision and Strength
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Structural fabrication is a vital process in the construction and
              manufacturing industries, involving the transformation of raw
              metal materials into functional structures. This process includes
              cutting, shaping, welding, and assembling components to create
              frameworks for buildings, bridges, and other infrastructure
              projects. With skilled expertise and proper equipment, structural
              fabrication ensures the strength, integrity, and durability of the
              structures that support our communities and industries.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/structural-fabrication.webp" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What is Structural Fabrication?
          </div>
          <div style={{ lineHeight: "30px" }}>
            Structural fabrication involves constructing steel or metal
            structures based on specific designs and engineering requirements.
            It plays a crucial role in ensuring that buildings and
            infrastructure can safely withstand the stresses and loads they
            encounter throughout their lifespan.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of Structural Fabrication
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

          <div className="text-[23px] font-semibold my-8 text-[#181614;]">
            Applications of Structural Fabrication
          </div>

          {typesRailing?.map((ele) => (
            <>
              <div className="font-semibold mt-4 text-[#000] ">
                {ele?.heading}
              </div>
              <div className="mb-2">{ele?.description}</div>
            </>
          ))}

          <div className="text-[23px] font-semibold my-8 text-[#181614;]">
            The Structural Fabrication Process
          </div>

          {coatingRailing?.map((ele) => (
            <>
              <div className="font-semibold mt-4 text-[#000] ">
                {ele?.heading}
              </div>
              <div className="mb-2">{ele?.description}</div>
            </>
          ))}

          <div className="text-[23px] font-semibold my-8 text-[#181614;]">
            Conclusion
          </div>
          <div className=" font-[400px] mt-8 mb-20 ">
            structural fabrication is an essential aspect of modern
            construction, offering the strength and reliability required for
            buildings and infrastructure. Opting for professional fabrication
            services ensures that your project meets the highest standards,
            resulting in durable, safe, and visually appealing structures.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
