import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Increased Operational Efficiency:",
    description:
      "High-speed doors minimize wait times for employees, vehicles, and equipment entering or leaving a facility. Their fast operation ensures a smooth workflow, particularly in high-traffic areas like loading docks or manufacturing floors."
  },
  {
    heading: "Energy Efficiency:",
    description:
      "By reducing the time the door remains open, high-speed doors help maintain stable indoor temperatures, significantly lowering energy costs for climate-controlled environments such as cold storage rooms, cleanrooms, and warehouses.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "With their fast operating speeds, high-speed doors reduce the risk of unauthorized access. They can be easily and seamlessly integrated with advanced security systems, offering improved protection and enhanced security for your facility.",
  },
  {
    heading: "Improved Safety:",
    description:
      "High-speed doors come equipped with advanced safety features like sensors that prevent the door from closing if objects or people are in the way. This reduces the risk of accidents, improves efficiency, and enhances overall safety in busy work environments.",
  },
  {
    heading: "Durability and Low Maintenance:",
    description:
      "Made from high-quality materials such as reinforced PVC or stainless steel, high-speed doors are designed to withstand frequent use and harsh conditions. Their robust design ensures long-term performance with minimal maintenance.",
  },
];

const material = [
  {
    name: "PVC Fabric:",
    description:
      "Lightweight and flexible, PVC fabric is commonly used in high-speed doors due to its durability and ability to withstand frequent use. It is ideal for interior doors and environments requiring quick, efficient access.",
  },
  {
    name: "Steel and Aluminum:",
    description: `For areas requiring high security or extreme durability, high-speed doors made from steel or aluminum are an excellent choice. They provide strength and protection while still offering the benefits of rapid operation.`,
  },
  {
    name: "Insulated Panels:",
    description:
      "High-speed doors with insulated panels are perfect for climate-controlled environments. These doors maintain internal temperatures while reducing energy loss, making them ideal for cold storage or freezer rooms.",
  },
];

const customization = [
  {
    name: "Size:",
    description:
      "Many automatic overhead garage doors feature insulated panels that maintain temperatures, reducing energy costs and improving efficiency. This insulation enhances comfort year-round.",
  },
  {
    name: "Colors & Finishes:",
    description: `Choose from a wide variety of colors and finishes to match your branding or facility design. Powder-coated options are available for added durability and aesthetic appeal.`,
  },
  {
    name: "Security Features:",
    description: "High-speed doors can be integrated with advanced security systems, including keypads, card readers, or biometric access for restricted areas.",
  },
  {
    name: "Safety Features:",
    description: `Equip your high-speed door with features such as motion sensors, light curtains, or emergency stop functions to ensure the safety of your staff and equipment.`,
  },
  {
    name: "Insulation:",
    description: "Insulated high-speed doors help control temperature and reduce energy costs, making them a great option for cold storage or energy-efficient buildings.",
  },
];

const gates = [
  {
    name: "Usage Frequency:",
    description:
      "High-speed doors are ideal for high-traffic areas. Consider how often the door will be used and choose a model that can handle frequent operation.",
  },
  {
    name: "Environmental Needs:",
    description:
      "If your facility requires temperature control or contamination prevention, opt for insulated or PVC fabric high-speed doors that provide the appropriate sealing.",
  },
  {
    name: "Security Requirements:",
    description:
      "For areas requiring high security, choose a rigid or sectional high-speed door made from durable materials like steel or aluminum.",
  },{
    name: "Security Requirements:",
    description:
      "High-speed doors vary in price based on material, size, and features. Choose one that meets your needs and budget while maximizing efficiency and durability.",
  },
];

const useRolling = [
  {
    heading: "Roll-Up High-Speed Doors:",
    description:
      "Roll-up high-speed doors are commonly used in industrial applications. They operate by rolling vertically into a compact housing, saving space and allowing for quick access.",
  },
  {
    heading: "Sectional High-Speed Doors:",
    description:
      "These doors open by lifting individual panels into the ceiling. They provide durability and insulation, making them suitable for environments where energy efficiency and security are important.",
  },
  {
    heading: "PVC Fabric High-Speed Doors:",
    description:
      "Lightweight and fast, PVC fabric high-speed doors are ideal for areas where frequent access is needed. They are commonly used in food processing, cleanrooms, and temperature-sensitive environments.",
  },
    {
    heading: "Rigid High-Speed Doors:",
    description:
      "Made from durable materials such as aluminum or steel, rigid high-speed doors offer enhanced security and insulation. They are perfect for areas that require both speed and strong protection.",
  },
];

export const Highspeeddoor = () => {
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
          src="/high-speed-door.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">HIGH SPEED DOORS</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;HIGH SPEED DOORS
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              High Speed Door
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Boost Efficiency and Security with High-Speed Doors – Ideal for Industrial & Commercial Use
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              High-speed doors are the go-to solution for industrial and commercial spaces that require quick access, enhanced security, and temperature control. These doors are designed to open and close at exceptional speeds, reducing energy loss and minimizing downtime during operations. Ideal for warehouses, factories, cleanrooms, and loading docks, high-speed doors not only improve operational efficiency but also offer long-term durability and low maintenance. Whether you’re looking to optimize your workflow or maintain strict environmental controls, high-speed doors are a smart investment for modern businesses.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/high-speed-door.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           What is a High-Speed Door?
          </div>
          <div style={{ lineHeight: "30px" }}>
            A high-speed door is a specialized industrial or commercial door designed for rapid opening and closing, typically operating much faster than traditional doors. They are commonly used in environments where fast access is necessary, such as warehouses, cold storage facilities, and production areas. High-speed doors help to maintain climate control, reduce air contamination, improve traffic flow, and enhance security.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Key Benefits of Installing a High-Speed Door
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
            Materials Used for High-Speed Doors
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
          Customization Options for High-Speed Doors
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
            How to Choose the Right High-Speed Door for Your Facility
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
         Installation & Maintenance of High-Speed Doors
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
           Professional Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Due to their specialized nature, high-speed doors should be installed by professionals to ensure correct setup, alignment, and smooth operation. Proper installation also maximizes energy savings and security benefits.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
           Minimal Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            High-speed doors are designed for durability and minimal maintenance. Regular checks of the motor, tracks, and sensors will keep the door operating efficiently. Many models feature self-repairing capabilities, further reducing downtime.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
           Safety Inspections:
          </div>
          <div className="text-[15px] font-[400] my-2">
            It’s essential to conduct routine safety inspections to ensure the sensors and safety systems are functioning correctly. Regular maintenance will also prolong the life of the door and ensure it remains in optimal condition.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of High-Speed Doors
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
