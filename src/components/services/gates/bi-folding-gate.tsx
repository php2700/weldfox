import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Space-Saving Design:",
    description:
      "Bi-folding gates are ideal for properties where space is at a premium. They require less space to operate, as the panels fold inwards, unlike swing gates which need more clearance to open fully.",
  },
  {
    heading: "Fast Opening & Closing:",
    description:
      "These gates can open and close faster than traditional gates, which is beneficial for busy driveways or commercial properties where quick access is essential.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Bi-folding gates are sturdy and can be fitted with high-security locks, making them an excellent choice for securing your property. Many include automation for enhanced control and monitoring.",
  },
  {
    heading: "Modern Aesthetic:",
    description:
      "With their sleek, minimalist design, bi-folding gates add modern elegance to any property. Available in various materials and finishes, they can be customized to complement any style.",
  },
  {
    heading: "Versatility:",
    description:
      "These gates are suitable for residential, commercial, and industrial applications, from small driveways to large entrances. They can be customized to fit any size or opening.",
  },
];

const material = [
  {
    name: "Steel Bi-Folding Gates:",
    description:
      "Known for their strength and durability, steel bi-folding gates are ideal for properties requiring high security, such as commercial or industrial premises.",
  },
  {
    name: "Aluminum Bi-Folding Gates:",
    description: `Aluminum is lightweight, rust-resistant, and ideal for residential properties that require a sleek, modern look with minimal maintenance.`,
  },
  {
    name: "Wooden Bi-Folding Gates:",
    description:
      "For a more traditional or rustic appearance, wooden bi-folding gates offer a natural aesthetic. While beautiful, they may require more maintenance compared to metal gates.",
  },
];

const customization = [
  {
    name: "Size:",
    description:
      "Bi-folding gates can be custom-built to fit any driveway or entrance size.",
  },
  {
    name: "Finish:",
    description: `Choose from a variety of finishes, including powder-coated colors for metal gates or stained finishes for wooden gates, to match your property's style.`,
  },
  {
    name: "Security Features:",
    description: "Consider adding smart security features such as CCTV, intercom systems, or automatic locking mechanisms for increased control and safety.",
  },
    {
    name: "Automation:",
    description: "Automate your bi-folding gate with electric motors and control it via remote, keypad, or even a smartphone app for added convenience.",
  },
];

const gates = [
  {
    name: "Property Size & Layout:",
    description:
      "The available space, entrance width, and overall layout of your driveway or entrance will determine the size and type of bi-folding gate you need.",
  },
  {
    name: "Security Needs:",
    description:
      "If security is a top priority, opt for a strong material like steel and consider automated locking systems or integrated security features.",
  },
  {
    name: "Design Preferences:",
    description:
      "Select a style and material that complements the architectural style of your property, whether it’s modern, traditional, or industrial.",
  },
  {
    name: "Budget:",
    description:
      "Bi-folding gates come in a range of prices, so choose a solution that fits your budget while still meeting your functional and aesthetic needs.",
  },
];

const useRolling = [
  {
    heading: "Manual Bi-Folding Gates:",
    description:
      "Simple and cost-effective, manual bi-folding gates are operated by hand and are a good option for residential properties that don’t require frequent access.",
  },
  {
    heading: "Automatic Bi-Folding Gates:",
    description:
      "Automated bi-folding gates offer the ultimate in convenience and security. Controlled by a remote, keypad, or smartphone, these gates provide quick and easy access without leaving your vehicle.",
  },
  {
    heading: "Industrial Applications:",
    description:
      "Suitable for fencing and entry points in industrial settings where strength and durability are paramount.",
  },
];

export const Bifolding = () => {
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
          src="/Bi-Folding-gate.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">BI FOLDING GATES</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;BI FOLDING GATES
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
             Bi-Folding Gate
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
            Enhance Your Property with Bi-Folding Gates – Space-Saving, Secure & Stylish Solutions
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Bi-folding gates, also known as folding gates or concertina gates, are the perfect blend of functionality, security, and style. These gates fold in on themselves to open, offering an efficient solution for properties with limited space or unique entrance designs. Whether for residential driveways or commercial properties, bi-folding gates provide a contemporary solution that maximizes both space and convenience.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/Bi-Folding-gate.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
        What is a Bi-Folding Gate?
          </div>
          <div style={{ lineHeight: "30px" }}>
           A bi-folding gate is a type of gate that opens by folding sections together. Unlike traditional swing or sliding gates, bi-folding gates are hinged in the middle and fold back onto themselves, creating a compact, space-saving solution. They are commonly used for driveways, pedestrian entrances, and commercial properties where space and security are top priorities.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           Key Benefits of Installing a Bi-Folding Gate
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
           Materials for Bi-Folding Gates
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
      Customization Options for Bi-Folding Gates
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
            How to Choose the Right Bi-Folding Gate for Your Property
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
           Installation & Maintenance of Bi-Folding Gates
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
           Professional Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
           Due to the complexity of the folding mechanism and the potential for automation, it’s important to have your bi-folding gate professionally installed to ensure proper function and longevity.
          </div>
             <div className="text-lg font-semibold mt-4 text-[#000]">
           Regular Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
          While bi-folding gates are built for durability, they still require periodic maintenance to ensure smooth operation. This includes lubricating the hinges, cleaning the tracks, and checking the automation system if applicable.
          </div>
             <div className="text-lg font-semibold mt-4 text-[#000]">
           Weather Resistance:
          </div>
          <div className="text-[15px] font-[400] my-2">
          Opt for weather-resistant finishes and materials, especially in areas prone to harsh weather conditions, to protect your gate from rust and wear.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
           Types of Bi-Folding Gates
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
         Bi-folding gates offer a smart, stylish, and practical solution for property entrances. Whether you’re looking to enhance security, save space, or add a modern touch to your driveway, these gates are a versatile choice. Their space-saving design, quick operation, and customization options make them an ideal investment for both residential and commercial properties.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
