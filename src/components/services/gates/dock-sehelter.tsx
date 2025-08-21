import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Weather Protection:",
    description:
      "Dock shelters provide essential protection from adverse weather conditions, including rain, snow, and extreme temperatures. This protection ensures that your products remain dry, safe, secure, and undamaged during loading and unloading operations.",
  },
  {
    heading: "Improved Energy Efficiency:",
    description:
      "By creating a seal around the trailer, dock shelters help maintain the temperature of your products and reduce energy loss in temperature-sensitive environments. This is particularly beneficial for warehouses that store perishable goods.",
  },
  {
    heading: "Enhanced Safety:",
    description:
      "Dock shelters improve safety for employees by minimizing exposure to harsh weather conditions and reducing the risk of slips, trips, and falls during loading operations. A safer working environment contributes to higher productivity and morale.",
  },
  {
    heading: "Increased Productivity:",
    description:
      "With better protection and a more comfortable working environment, dock shelters enable faster and more efficient loading and unloading operations. This results in reduced downtime and increased throughput.",
  },
  {
    heading: "Versatility:",
    description:
      "Dock shelters are adaptable to various types of vehicles and loading dock configurations, making them suitable for different industries and applications, including logistics, manufacturing, and retail.",
  },
];

const material = [
  {
    name: "Heavy-Duty Fabric:",
    description:
      "Durable, weather-resistant fabrics form the main body of dock shelters, providing a flexible yet strong barrier against wind, rain, and snow.",
  },
  {
    name: "Steel Frame:",
    description:
      "Robust steel frames ensure structural integrity and longevity, supporting the shelter fabric and withstanding repeated docking impacts.",
  },
  {
    name: "Insulation Panels:",
    description:
      "Optional insulated panels help maintain temperature control inside loading areas, reducing energy loss for temperature-sensitive goods.",
  },
];

const customization = [
  {
    name: "Size & Fit:",
    description:
      "Dock shelters can be custom-sized to fit specific trailer and dock dimensions, ensuring a proper seal and efficient loading process.",
  },
  {
    name: "Type of Shelter:",
    description:
      "Choose from inflatable, rigid, or curtain-style dock shelters depending on your operational needs and space constraints.",
  },
  {
    name: "Material & Finish:",
    description:
      "Select from a variety of fabrics, steel coatings, and colors to suit your aesthetic and functional requirements.",
  },
  {
    name: "Automation Features:",
    description:
      "Some dock shelters can integrate with automated docking systems to improve efficiency and minimize manual adjustments.",
  },
];

const gates = [
  {
    name: "Loading Dock Dimensions:",
    description:
      "Measure your loading dock to determine the appropriate size and configuration for the shelter, ensuring compatibility with various trailer heights and widths.",
  },
  {
    name: "Environmental Conditions:",
    description:
      "Assess the weather in your area to select a dock shelter that provides protection against rain, snow, and extreme temperatures.",
  },
  {
    name: "Budget:",
    description:
      "Dock shelters come in a range of price points. Establish a budget that considers both initial costs and long-term maintenance to ensure you receive a high-quality product.",
  },
];

const useRolling = [
  {
    heading: "Inflatable Dock Shelters:",
    description:
      "These shelters use inflatable seals that conform to the shape of the trailer, providing a tight seal and excellent weather protection.",
  },
  {
    heading: "Rigid Dock Shelters:",
    description:
      "Constructed with firm frames and panels, rigid shelters offer durability and stability, ideal for high-traffic docks.",
  },
  {
    heading: "Curtain-Style Dock Shelters:",
    description:
      "Flexible curtain shelters provide an economical solution, protecting against drafts and weather while allowing for slight trailer misalignments.",
  },
];

export const Dockshelter = () => {
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
          src="/dock-shelters.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">DOCK SHELTERS</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;DOCK SHELTERS
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Dock Shelters
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
           Maximize Efficiency and Protection with Premium Dock Shelters
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
          Dock shelters are critical components for any loading dock, providing protection and support during the loading and unloading of goods. They create a weather-tight seal around the trailer, ensuring that products and personnel are shielded from the elements. Available in various designs and materials, dock shelters enhance operational efficiency, contribute to workplace safety, and help achieve energy savings. Investing in high-quality dock shelters can optimize your loading dock operations.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/dock-shelters.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What are Dock Shelters?
          </div>
          <div style={{ lineHeight: "30px" }}>
     Dock shelters are flexible, weather-resistant structures installed at loading docks to create an effective seal between the dock and the trailer. Typically made from durable materials like heavy-duty fabrics, they are designed to withstand a variety of environmental conditions. By forming a barrier against rain, wind, snow, and dust, dock shelters improve loading and unloading conditions while protecting both cargo and employees.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of Using Dock Shelters
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
            Materials Used for Dock Shelters
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
            Customization Options for Dock Shelters
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
           How to Choose the Right Dock Shelter for Your Operations
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
           Installation & Maintenance of Dock Shelters
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Size and Configuration:
          </div>
          <div className="text-[15px] font-[400] my-2">
           Dock shelters can be customized to fit various loading dock dimensions and trailer heights, ensuring a perfect fit for your specific operational needs.
          </div>
           <div className="text-lg font-semibold mt-4 text-[#000]">
            Colors and Branding:
          </div>
          <div className="text-[15px] font-[400] my-2">
           Choose from different colors and branding options to enhance visibility and align with your company’s branding, creating a professional appearance.  
          </div>
           <div className="text-lg font-semibold mt-4 text-[#000]">
            Accessories:
          </div>
          <div className="text-[15px] font-[400] my-2">
           Dock shelters can include optional enhancements like LED illumination, safety markings, and ventilation systems, which boost both operational efficiency and workplace safety.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of Dock Shelters
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
         Dock shelters are vital for ensuring efficient and safe loading and unloading operations. By investing in high-quality dock shelters, you can protect your products, enhance energy efficiency, and create a safer working environment for your employees. Choose the right dock shelter solutions to optimize your loading dock operations and improve overall productivity.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
