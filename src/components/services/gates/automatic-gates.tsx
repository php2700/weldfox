import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Enhanced Security:",
    description:
      "Automatic gates act as a strong deterrent against unauthorized access, providing an additional layer of security for your property.",
  },
  {
    heading: "Convenience:",
    description:
      "Easily control access from the comfort of your vehicle, eliminating the need to exit your car in inclement weather or at night.",
  },
  {
    heading: "Customizable Access:",
    description:
      "Options for remote controls, keypads, and intercom systems allow you to manage entry points effectively and securely.",
  },
  {
    heading: "Durability:",
    description:
      "Made from materials like steel, aluminum, or wood, automatic gates are built to withstand the elements and provide long-lasting performance.",
  },
  {
    heading: "Increased Property Value:",
    description:
      "Installing an automatic gate can enhance your property’s curb appeal and increase its overall value.",
  },
];

const material = [
  {
    name: "Steel:",
    description:
      "A robust material known for its strength and security, ideal for high-traffic areas.",
  },
  {
    name: "Aluminum:",
    description: `Lightweight and resistant to rust, making it suitable for various weather conditions.`,
  },
  {
    name: "Aluminum:",
    description:
      "Offers a natural look that can enhance the aesthetic appeal of your property, though it requires regular maintenance.",
  },
];

const customization = [
  {
    name: "Color Options:",
    description:
      "Choose from a wide range of colors to match your property’s exterior.",
  },
  {
    name: "Design Styles:",
    description: `Select from various designs, including classic, modern, and decorative styles.`,
  },
  {
    name: "Control Systems:",
    description: "Incorporate advanced control systems, such as smartphone access and intercom integration.",
  },
];

const gates = [
  {
    name: "Advanced Technology:",
    description:
      "Many automatic gates feature smart technology, allowing for remote access via smartphones or integration with home automation systems.",
  },
  {
    name: "Aesthetic Variety:",
    description:
      "Available in multiple designs, colors, and materials, automatic gates can be customized to complement your property’s style.",
  },
  {
    name: "Weather Resistance:",
    description:
      "Built to endure various weather conditions, ensuring reliable operation year-round.",
  },
];

const useRolling = [
  {
    heading: "Residential Properties:",
    description:
      "Ideal for homeowners seeking convenience and security for driveways and entrances.",
  },
  {
    heading: "Commercial Spaces:",
    description:
      "Perfect for businesses that require controlled access to parking lots, service areas, and facilities.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "Suitable for warehouses and manufacturing plants where security and restricted access are crucial.",
  },
];

export const Automaticgates = () => {
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
          src="/automatic-gates.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">AUTOMATIC GATES</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;AUTOMATIC GATES
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Automatic Gates
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Experience Convenience and Security with Automatic Gates

            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Automatic gates offer unparalleled convenience and security for both residential and commercial properties. With advanced technology and customizable features, these gates provide a seamless entry experience while enhancing the safety of your property.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/automatic-gates.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           What Are Automatic Gates?
          </div>
          <div style={{ lineHeight: "30px" }}>
           Automatic gates offer unparalleled convenience and security for both residential and commercial properties. With advanced technology and customizable features, these gates provide a seamless entry experience while enhancing the safety of your property.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Key Benefits of Automatic Gates
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
       Materials for Automatic Gates
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
            Customization Options
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
            Why Choose Automatic Gates?
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
          <div className="text-lg font-semibold my-2 text-[#000]">
            Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
           Professional installation is essential to ensure proper function and safety. Regular maintenance, including checking the mechanical components and electrical systems, will help prolong the gate's lifespan and performance.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Applications of Automatic Gates
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
          Investing in automatic gates is a smart choice for enhancing security, convenience, and the overall aesthetic of your property. Explore our range of high-quality automatic gates tailored to meet your specific needs!
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
