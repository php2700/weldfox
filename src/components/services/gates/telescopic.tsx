import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Space-Saving Design:",
    description:
      "Unlike traditional sliding gates, telescopic gates open by sliding multiple panels, requiring less space along the side of the opening.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Constructed from durable materials like steel or aluminum, telescopic gates provide a strong barrier against access, ensuring the safety of your property.",
  },
  {
    heading: "Versatile Applications:",
    description:
      "Suitable for various environments, from residential driveways to commercial loading docks, telescopic gates can adapt to any setting.",
  },
  {
    heading: "Smooth Operation:",
    description:
      "Equipped with high-quality tracks and rollers, these gates operate smoothly and quietly, providing effortless access.",
  },
  {
    heading: "Customizable Options:",
    description:
      "Available in a variety of styles, colors, and finishes, telescopic gates can be tailored to fit your property’s aesthetic while meeting your functional needs.",
  },
];

const material = [
  {
    name: "Initial Site Assessment:",
    description:
      "Before installation begins, a professional will conduct a thorough assessment of your property, including measuring the entryway, evaluating the ground’s slope, and identifying potential obstacles like walls or landscaping features. Key considerations include the width of the driveway or entrance, available space for the gate to retract, ground surface conditions (e.g., uneven terrain may require additional leveling or foundation work), and access to power supply if you plan to automate the gate.",
  },
  {
    name: "Design and Customization:",
    description: `Once the site is assessed, you’ll work with the installer to choose the gate’s design, material, and features. Common materials for telescopic gates include steel (durable and secure, ideal for high-security needs), aluminum (lightweight, corrosion-resistant, and easy to maintain), and wood or composite (offering a more traditional look with modern strength). You can also select finishes, colors, and additional features such as automation, safety sensors, or access control systems.`,
  },
  {
    name: "Laying the Foundation and Installing the Track:",
    description:
      "A stable foundation is crucial for the smooth operation of a telescopic gate. Installers will lay the ground track along which the gate panels will slide, which may involve digging trenches for the track, pouring concrete to create a stable base, and installing the track mechanism while ensuring it’s level. Proper alignment of the track is critical for the gate to move smoothly without unnecessary wear and tear.",
  },
];

const customization = [
  {
    name: "Residential Properties:",
    description:
      "Ideal for homeowners seeking a stylish and secure solution for driveways and garden entrances.",
  },
  {
    name: "Commercial Use:",
    description: `Perfect for businesses that require controlled access to parking lots, service areas, or loading docks where space is limited.`,
  },
  {
    name: "Industrial Facilities:",
    description:
      "Suitable for warehouses and industrial sites needing secure and efficient entry points.",
  },
];

const gates = [
  {
    name: "Automation Features:",
    description:
      "Many telescopic gates can be automated for remote access, enhancing convenience and control over entry.",
  },
  {
    name: "Durability:",
    description:
      "Built to withstand harsh weather conditions, these gates are designed for longevity and require minimal maintenance.",
  },
  {
    name: "Aesthetic Appeal:",
    description:
      "The sleek design of telescopic gates adds modern elegance to any property, enhancing curb appeal.",
  },
];

const useRolling = [
  {
    heading: "Steel Telescopic Gates:",
    description:
      "Steel is a popular choice for telescopic gates due to its strength and durability. Steel gates provide superior security and can be powder-coated for additional protection against rust and corrosion. They are ideal for both residential and commercial properties that require high-security solutions.",
  },
  {
    heading: "Aluminum Telescopic Gates:",
    description:
      "Aluminum is lightweight yet sturdy, making it a great option for telescopic gates. It’s also naturally resistant to rust, which makes it a good choice for properties in coastal or high-moisture areas. Aluminum gates require little maintenance and are easier to automate due to their lighter weight.",
  },
  {
    heading: "Wooden Telescopic Gates:",
    description:
      "For those looking for a more traditional or rustic look, wooden telescopic gates are an excellent choice. While they require more maintenance compared to metal gates, they offer a warm, natural aesthetic that blends well with residential landscapes.",
  },
  {
    heading: "Composite Materials:",
    description:
      "Composite gates combine the best properties of various materials, offering the appearance of wood with the durability of synthetic materials. They require little maintenance and are weather-resistant, making them a great choice for homeowners who want both style and longevity.",
  },
];

export const Telescopic = () => {
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
          src="/Telescopic-gate.jpeg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">TELESCOPIC GATES</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;TELESCOPIC GATES
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Telescopic Gate
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Maximize Access and Security with Telescopic Gates
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Telescopic gates are an innovative solution for property access
              that combines space efficiency with robust security. Ideal for
              both residential and commercial properties, these gates offer a
              stylish and functional way to control entry while saving space.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/Telescopic-gate.jpeg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What Are Telescopic Gates?
          </div>
          <div style={{ lineHeight: "30px" }}>
            Telescopic gates are designed to slide open in sections, with each
            panel stacking neatly behind the other. This unique design allows
            for wider openings without requiring a large area for gate
            operation, making them perfect for locations with limited space.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Key Benefits of Telescopic Gates
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
            Step-by-Step Telescopic Gate Installation Process
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
            Applications of Telescopic Gates
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
            Why Choose Telescopic Gates?
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
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Initial Site Assessment:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Before installation begins, a professional will conduct a thorough
            assessment of your property, including measuring the entryway,
            evaluating the ground’s slope, and identifying potential obstacles
            like walls or landscaping features. Key considerations include the
            width of the driveway or entrance, available space for the gate to
            retract, ground surface conditions (e.g., uneven terrain may require
            additional leveling or foundation work), and access to power supply
            if you plan to automate the gate.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Design and Customization:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Once the site is assessed, you’ll work with the installer to choose
            the gate’s design, material, and features. Common materials for
            telescopic gates include steel (durable and secure, ideal for
            high-security needs), aluminum (lightweight, corrosion-resistant,
            and easy to maintain), and wood or composite (offering a more
            traditional look with modern strength). You can also select
            finishes, colors, and additional features such as automation, safety
            sensors, or access control systems.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Laying the Foundation and Installing the Track:
          </div>
          <div className="text-[15px] font-[400] my-2">
            A stable foundation is crucial for the smooth operation of a
            telescopic gate. Installers will lay the ground track along which
            the gate panels will slide, which may involve digging trenches for
            the track, pouring concrete to create a stable base, and installing
            the track mechanism while ensuring it’s level. Proper alignment of
            the track is critical for the gate to move smoothly without
            unnecessary wear and tear.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Materials for Telescopic Gates
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
            Investing in a telescopic gate is a smart choice for those looking
            to enhance security, save space, and improve the aesthetic appeal of
            their property. Explore our selection of high-quality telescopic
            gates to find the perfect fit for your needs!
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
