import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Improved Safety:",
    description:
      "Dock levers help eliminate the gap between the trailer and the loading dock, reducing the risk of accidents and injuries. By ensuring a stable and secure loading environment, dock levers enhance safety for workers and equipment.",
  },
  {
    heading: "Increased Efficiency:",
    description:
      "By allowing quick adjustments to the dock height, dock levers streamline the loading and unloading process. This efficiency helps reduce downtime, increases productivity, and enhances operational flow in busy operations.",
  },
  {
    heading: "Versatility:",
    description:
      "Dock levers are designed to accommodate various trailer heights and loading requirements. This versatility makes them suitable for a wide range of industries, including retail, logistics, and manufacturing.",
  },
  {
    heading: "Durability:",
    description:
      "Constructed from high-quality materials, dock levers are built to withstand the rigors of daily use. Their robust design ensures long-lasting performance, reducing the need for frequent replacements.",
  },
  {
    heading: "Ease of Use:",
    description:
      "Dock levers are designed for simple operation, allowing workers to make quick adjustments without the need for complex tools or equipment. This user-friendly design enhances overall workflow efficiency.",
  },
];

const material = [
  {
    name: "Steel:",
    description:
      "Steel is the most common material used for dock levers due to its strength and durability. Steel dock levers can withstand heavy loads and harsh working conditions, making them ideal for industrial applications.",
  },
  {
    name: "Aluminum:",
    description: `Aluminum dock levers are lightweight and resistant to corrosion, making them suitable for environments with high humidity or exposure to chemicals. They offer good strength-to-weight ratios and are easy to maneuver.`,
  },
  {
    name: "Composite Materials:",
    description:
      "Some dock levers are made from composite materials, providing a balance between durability and lightweight properties. These materials are often designed to resist wear and tear while maintaining functionality.",
  },
];

const customization = [
  {
    name: "Size and Capacity:",
    description:
      "Dock levers can be customized to fit specific loading dock dimensions and weight requirements, ensuring compatibility with various trailer heights and loads.",
  },
  {
    name: "Color and Finish:",
    description: `Choose from different colors and finishes to match your branding or enhance visibility in the workplace. Customization options can improve safety and aesthetics.`,
  },
  {
    name: "Features:",
    description:
      "Some dock levers come equipped with additional features, such as safety guards, non-slip grips, or integrated sensors, providing added safety, functionality, durability, and enhanced performance.",
  },
];

const gates = [
  {
    name: "Traffic Volume:",
    description:
      "Assess the expected traffic volume at your loading dock to determine the appropriate type (manual, hydraulic, or electric) and size of dock lever needed for your operations.",
  },
  {
    name: "Weight Capacity:",
    description:
      "Evaluate the weight capacity requirements based on the types of vehicles and loads you will be handling to ensure you choose a dock lever that can safely accommodate your needs.",
  },
  {
    name: "Budget:",
    description:
      "Dock levers come in various price ranges. Set a budget that considers both initial costs and maintenance, ensuring you receive a high-quality product that meets your operational needs.",
  },
];

const useRolling = [
  {
    heading: "Manual Dock Levers:",
    description:
      "Manual dock levers are operated by hand, allowing workers to adjust the height of the loading dock as needed. These levers are cost-effective and ideal for operations with lower traffic volumes.",
  },
  {
    heading: "Hydraulic Dock Levers:",
    description:
      "Hydraulic dock levers use hydraulic power to raise and lower the dock platform, providing smoother and more effortless adjustments. These levers are suitable for high-traffic operations where speed and efficiency are essential.",
  },
  {
    heading: "Electric Dock Levers:",
    description:
      "Electric dock levers offer automated operation for quick adjustments at the touch of a button. This type of dock lever is ideal for busy environments where frequent height adjustments are necessary.",
  },
];

export const Docklevers = () => {
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
          src="/dock-levers.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">DOCK LEVERS</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;DOCK LEVERS
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Dock Levers
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Enhance Dock Operations with Reliable Dock Levers
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Dock levers are critical components for any loading dock,
              providing essential support in the efficient and safe operation of
              loading and unloading cargo. Designed to facilitate the seamless
              movement of goods between trucks and loading bays, dock levers
              ensure that the loading process is safe, reliable, and easy to
              manage. Whether you operate a warehouse, distribution center, or
              manufacturing facility, investing in high-quality dock levers can
              enhance your operational efficiency and improve workplace safety.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/dock-levers.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What are Dock Levers?
          </div>
          <div style={{ lineHeight: "30px" }}>
            Dock levers are mechanical devices used to adjust the height and
            position of a loading dock platform to match the trailer bed. They
            typically feature a lever mechanism that allows operators to raise
            or lower the dock level, ensuring a smooth transition for forklifts
            and other material handling equipment. Available in various designs
            and weight capacities, dock levers can accommodate different trailer
            heights and loading requirements, making them an essential tool for
            any loading dock operation.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of Using Dock Levers
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
            Materials Used for Dock Levers
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
            Customization Options for Dock Levers
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
            How to Choose the Right Dock Lever for Your Operations
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
            Installation & Maintenance of Dock Levers
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Professional Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Proper installation is crucial for the safe and effective operation
            of dock levers. It is recommended to have them installed by
            qualified professionals to ensure compliance with safety standards.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Routine Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Regular maintenance is essential for ensuring optimal performance.
            This includes checking for wear and tear, lubricating moving parts,
            and inspecting safety features.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Safety Inspections:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Conduct routine safety inspections to ensure that dock levers are
            functioning correctly and to identify any potential issues before
            they become major problems.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of Dock Levers
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
            Dock levers are a vital component of any loading dock operation,
            providing safety, efficiency, and versatility. By investing in
            high-quality dock levers, you can improve the loading and unloading
            process, enhance workplace safety, and streamline your operations.
            Choose dock levers that meet your specific requirements and elevate
            the functionality of your loading dock.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
