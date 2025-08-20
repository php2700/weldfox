import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Enhanced Security:",
    description:
      "Automatic barriers provide a robust security solution for properties, preventing unauthorized vehicles from entering restricted areas. Their visible presence acts as a deterrent to potential intruders, enhancing overall safety, control, and peace of mind.",
  },
  {
    heading: "Improved Traffic Management:",
    description:
      "By controlling the flow of vehicles, automatic barriers help manage congestion in busy areas. This is particularly beneficial in parking lots, event venues, and commercial properties, ensuring a smoother traffic flow.",
  },
  {
    heading: "Convenience and Accessibility:",
    description:
      "With various operating mechanisms, including remote controls and automatic systems, automatic barriers offer convenient access for authorized vehicles. This reduces wait times and enhances the overall experience for users.",
  },
  {
    heading: "Durability and Low Maintenance:",
    description:
      "Constructed from high-quality materials, automatic barriers are designed to withstand harsh weather conditions and heavy usage. They require minimal maintenance, making them a cost-effective solution for property owners.",
  },
  {
    heading: "Integration with Access Control Systems:",
    description:
      "Automatic barriers can easily integrate with existing access control systems, allowing for seamless operation. This provides an added layer of security and allows for tracking and monitoring of vehicle access.",
  },
];

const material = [
  {
    name: "Steel:",
    description:
      "Steel barriers are known for their strength and durability, making them ideal for high-security applications. They can withstand impact and provide long-lasting performance.",
  },
  {
    name: "Aluminium:",
    description: `Lightweight yet sturdy, aluminum barriers are resistant to corrosion and rust, making them suitable for various environments. They are a popular choice for commercial and residential properties.`,
  },
  {
    name: "Composite Materials:",
    description:
      "Some automatic barriers are made from composite materials, offering a balance between durability and weight. These materials can be designed to resist environmental wear while maintaining aesthetic appeal.",
  },
];

const customization = [
  {
    name: "Sizes and Configurations:",
    description:
      "Automatic barriers can be customized in size and configuration to fit your property. Whether you require a tall barrier for security or a compact design for limited spaces, options are available.",
  },
  {
    name: "Operating Mechanisms:",
    description: `Choose from various operating mechanisms, including remote controls, keypad entry, or integrated access control systems, to ensure the barrier meets your operational needs.`,
  },
  {
    name: "Finishes and Colors:",
    description:
      "Automatic barriers can be customized with different finishes and colors to match your property’s aesthetic. This enhances visual appeal while maintaining functionality.",
  },
  {
    name: "Safety Features:",
    description:
      "Many automatic barriers come equipped with safety features such as sensors to prevent accidents, ensuring safe operation for vehicles and pedestrians.",
  },
];

const gates = [
  {
    name: "Traffic Volume:",
    description:
      "Assess the traffic volume at your property to determine the appropriate barrier (swing, sliding, or boom) that can efficiently manage vehicle access.",
  },
  {
    name: "Security Needs:",
    description:
      "Evaluate your security requirements to choose a barrier that meets your specific needs. Consider durability, height, and locking mechanisms for added protection.",
  },
  {
    name: "Installation Space:",
    description:
      "Measure the space to ensure the chosen barrier fits without obstructing access or visibility. Some barriers may require additional clearance for operation.",
  },
  {
    name: "Budget:",
    description:
      "Automatic barriers come in various price ranges. Set a budget that includes both installation and long-term maintenance costs while ensuring you receive a high-quality product.",
  },
];

const useRolling = [
  {
    heading: "Swing Barriers:",
    description:
      "Swing barriers operate on a pivot system, swinging open or closed to allow vehicle access. They are suitable for wider entrances and can be customized to various heights.",
  },
  {
    heading: "Sliding Barriers:",
    description:
      "Sliding barriers move horizontally to open and close, making them ideal for tighter spaces. They are often used in parking garages and commercial properties where space is limited.",
  },
  {
    heading: "Boom Barriers:",
    description:
      "Boom barriers consist of a long arm that raises and lowers to control access. They are commonly used in toll booths, parking lots, and security checkpoints, providing efficient and effective vehicle management.",
  },
];

export const Automaticbarrier = () => {
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
          src="/automatic-barriers.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">AUTOMATIC BARRIES</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;AUTOMATIC BARRIES
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Automatic Barriers
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Enhance Security and Access Control with Automatic Barriers
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Automatic barriers are essential for enhancing security and
              controlling access at various locations, including parking lots,
              toll booths, commercial buildings, and residential areas. These
              systems provide a reliable method for managing vehicle entry and
              exit while ensuring safety and convenience. With advanced
              technology, automatic barriers can be operated remotely or through
              automated systems, making them an excellent investment for any
              property owner. Discover how automatic barriers can improve your
              security and access control while offering ease of use and peace
              of mind.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/automatic-barriers.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What Are Automatic Barriers?
          </div>
          <div style={{ lineHeight: "30px" }}>
            Automatic barriers are mechanical gates that raise and lower to
            control vehicle access to specific areas. These barriers can be
            operated through various methods, including remote controls, key
            cards, or integrated access control systems. Automatic barriers are
            typically made from durable materials, ensuring longevity and
            reliable performance in high-traffic environments. Designed for both
            safety and security, these barriers prevent unauthorized entry while
            allowing authorized vehicles easy access.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of Installing Automatic Barriers
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
            Materials Used for Automatic Barriers
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
            Customization Options for Automatic Barriers
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
            How to Choose the Right Automatic Barrier for Your Property
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
            Installation & Maintenance of Automatic Barriers
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Professional Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
            It is crucial to have automatic barriers installed by experienced
            professionals to ensure optimal performance and compliance with
            safety standards. Proper installation guarantees smooth operation
            and longevity.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Routine Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Regular maintenance is essential for keeping automatic barriers in
            optimal condition. This includes inspecting moving parts, checking
            electronic components, and ensuring proper alignment.
          </div>{" "}
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Safety Inspections:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Conduct routine safety inspections to ensure that all safety
            features, such as sensors and emergency stops, are functioning
            correctly. Regular checks can help prevent accidents and enhance the
            lifespan of the barrier.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of Automatic Barriers
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
            Automatic barriers provide an effective solution for enhancing
            security and managing access at your property. By investing in these
            advanced systems, you can create a safer environment for both your
            customers and employees while improving traffic flow. Choose
            automatic barriers to secure your entrance and elevate the overall
            experience of your property.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
