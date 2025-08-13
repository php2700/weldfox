import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Space-Saving Design:",
    description:
      "Tri-folding gates fold into three sections, using less space than traditional swing gates. This makes them perfect for properties with limited room, such as those with narrow driveways or confined entranceways.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Built with robust materials and often integrated with advanced security features, tri-folding gates offer excellent protection for your property. Automated options provide additional security with remote access, cameras, and smart locks.",
  },
  {
    heading: "Quick & Efficient Operation:",
    description:
      "Tri-folding gates are designed for smooth, fast operation, ideal for busy homes or commercial properties. Their efficient mechanism allows quick entry and exit without occupying space.",
  },
  {
    heading: "Modern Aesthetic:",
    description:
      "With a sleek and modern design, tri-folding gates can enhance the appearance of any property. Available in various finishes and materials, these gates can be customized to match the architectural style of your property.",
  },
  {
    heading: "Durable & Low Maintenance:",
    description:
      "Made from high-quality materials like steel or aluminum, tri-folding gates are built to last. They are weather-resistant and require minimal maintenance, making them a long-term solution.",
  },
];

const material = [
  {
    name: "Steel Tri-Folding Gates:",
    description:
      "Known for their strength and durability, steel tri-folding gates offer maximum security and can withstand harsh weather conditions. They are ideal for high-security applications, including commercial and industrial settings.",
  },
  {
    name: "Aluminum Tri-Folding Gates:",
    description: `Lightweight yet durable, aluminum tri-folding gates are rust-resistant and require less maintenance. They are perfect for residential properties with a modern, sleek appearance and minimal upkeep.`,
  },
  {
    name: "Wooden Tri-Folding Gates:",
    description:
      "For properties with a more traditional or rustic aesthetic, wooden tri-folding gates offer natural beauty. While they require more maintenance than metal gates, they provide a warm, timeless look.",
  },
];

const customization = [
  {
    name: "Size:",
    description:
      "Tri-folding gates can be custom-designed to fit any entrance size, whether for a small residential driveway or a large commercial entrance.",
  },
  {
    name: "Finishes & Colors:",
    description: `Choose from a variety of finishes and colors to match your property’s style, including powder-coated finishes for metal gates or stains for wooden gates.`,
  },
  {
    name: "Automation & Security:",
    description: "Enhance your gate with smart automation features such as remote control access, smartphone integration, or CCTV for improved security and convenience.",
  },
  {
    name: "Design:",
    description: "Tri-folding gates can be designed with decorative elements or clean lines to suit your property’s aesthetic, whether modern or traditional.",
  },
];

const gates = [
  {
    name: "Space & Layout:",
    description:
      "Ensure that the gate will fit the dimensions and layout of your driveway or entrance.",
  },
  {
    name: "Security Needs:",
    description:
      "For properties requiring heightened security, choose a tri-folding gate made from steel and consider adding automation for remote access.",
  },
  {
    name: "Aesthetic Preferences:",
    description:
      "Choose a design that complements your property’s architectural style, whether it’s modern, traditional, or industrial.",
  },
   {
    name: "Budget:",
    description:
      "Tri-folding gates come in various price ranges depending on materials, size, and features. Select a gate that meets both your functional needs and budget.",
  },
];

const useRolling = [
  {
    heading: "Manual Tri-Folding Gates:",
    description:
      "These gates are manually operated and are ideal for smaller residential properties. While they require more physical effort, they still offer the space-saving benefits of the tri-folding design.",
  },
  {
    heading: "Automatic Tri-Folding Gates:",
    description:
      "Automated tri-folding gates are controlled via remote or smart systems. They are perfect for commercial properties or homes seeking the convenience of hands-free operation, combined with the enhanced security of an automatic system.",
  },
];

export const Trifolding = () => {
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
          src="/Tri-Folding-gate.png"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">TRI FOLDING GATES</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;TRI FOLDING GATES
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
             Tri-Folding Gate
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
            Maximize Space and Security with Tri-Folding Gates – Sleek & Efficient Entry Solutions
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
             Tri-folding gates are an innovative solution for properties requiring secure, space-saving entrances. These gates fold into three sections, providing a compact and efficient design ideal for properties with limited space. Whether for residential driveways or commercial applications, tri-folding gates offer a modern and functional approach to property security. With their quick operation and sleek appearance, tri-folding gates combine both form and function, making them a popular choice for a wide range of entryways.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/Tri-Folding-gate.png" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           What is a Tri-Folding Gate?
          </div>
          <div style={{ lineHeight: "30px" }}>
            A tri-folding gate, also known as a folding or multi-panel gate, is designed to open by folding three panels together. Unlike traditional swing or sliding gates, tri-folding gates fold inward to minimize the space required for operation. This makes them ideal for areas where space is limited, such as narrow driveways or compact entrances, while also providing a highly secure entry system.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of Installing a Tri-Folding Gate
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
           Materials for Tri-Folding Gates
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
            Customization Options for Tri-Folding Gates
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
            How to Choose the Right Tri-Folding Gate for Your Property
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
        Installation & Maintenance of Tri-Folding Gates
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
           Professional Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
          Due to the complexity of the folding mechanism, it’s important to have your tri-folding gate installed by professionals to ensure proper alignment and smooth operation.
          </div>
             <div className="text-lg font-semibold mt-4 text-[#000]">
           Regular Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
          Keep the gate’s hinges and tracks clean and lubricated to maintain smooth operation. Automated gates may also require periodic servicing to check the motor and electronic components.
          </div>
             <div className="text-lg font-semibold mt-4 text-[#000]">
           Weather Protection:
          </div>
          <div className="text-[15px] font-[400] my-2">
          To prolong the life of your gate, opt for weather-resistant materials and finishes, particularly in areas with extreme weather conditions.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of Tri-Folding Gates
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
           Tri-folding gates offer a modern, efficient, and secure solution for properties with limited space or unique entrance designs. Their space-saving folding mechanism, combined with customizable security and style options, makes them an excellent choice for both residential and commercial properties. By choosing a tri-folding gate, you can enhance the functionality, security, and appearance of your property.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
