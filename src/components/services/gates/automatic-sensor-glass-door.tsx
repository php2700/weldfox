import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Hands-Free Convenience:",
    description:
      "Automatic sensor glass doors open and close automatically, providing easy access for all users.",
  },
  {
    heading: "Enhanced Accessibility:",
    description:
      "Ideal for people with mobility challenges, shopping carts, or luggage, ensuring smooth entry and exit.",
  },
  {
    heading: "Energy Efficiency:",
    description:
      "Doors close automatically after use, reducing energy loss and maintaining indoor climate control.",
  },
  {
    heading: "Aesthetic Appeal:",
    description:
      "Glass doors create a modern, transparent look that enhances the entrance of any commercial property.",
  },
  {
    heading: "Durable and Reliable:",
    description:
      "Built with high-quality materials and sensors, these doors offer long-term performance with minimal maintenance.",
  },
];


const material = [
  {
    name: "Tempered Glass:",
    description:
      "Strong and shatter-resistant, ensuring safety and durability in high-traffic areas.",
  },
  {
    name: "Aluminum Frame:",
    description:
      "Lightweight, corrosion-resistant, and provides structural support for the glass panels.",
  },
  {
    name: "Stainless Steel Hardware:",
    description:
      "Durable hinges, sensors, and fittings that enhance longevity and smooth operation.",
  },
];


const customization = [
  {
    name: "Door Size:",
    description:
      "Customizable widths and heights to fit different entrance requirements.",
  },
  {
    name: "Sensor Sensitivity:",
    description:
      "Adjustable motion sensors ensure accurate and responsive door operation.",
  },
  {
    name: "Frame and Finish Options:",
    description:
      "Choose from various colors and finishes for frames to match the building’s aesthetics.",
  },
  {
    name: "Automation and Access Control:",
    description:
      "Integrate with keycards, remote controls, or building management systems for enhanced security.",
  },
];


const gates = [
  {
    name: "Traffic Flow:",
    description:
      "Evaluate the expected traffic flow at your entrance to select the appropriate door type (sliding, swinging, or telescopic) and size for efficient handling of high visitor volumes.",
  },
  {
    name: "Design Preferences:",
    description:
      "Choose a design that aligns with your business branding and aesthetics. Consider glass types, frame finishes, and overall appearance to create a welcoming and professional entrance.",
  },
  {
    name: "Security Requirements:",
    description:
      "Assess your security needs to ensure the door includes advanced locking mechanisms and is compatible with access control systems if required.",
  },
  {
    name: "Budget:",
    description:
      "Automatic sensor glass doors are available at various price points. Set a budget that balances initial installation costs with long-term maintenance while maximizing value.",
  },
];


const useRolling = [
  {
    heading: "Sliding Automatic Glass Doors:",
    description:
      "These doors slide open horizontally, offering a wide entrance ideal for busy retail environments or commercial buildings. They are space-efficient and easy to operate compared to traditional swinging doors.",
  },
  {
    heading: "Swinging Automatic Glass Doors:",
    description:
      "Swinging doors open outward or inward, providing an elegant solution where space permits. Perfect for hotels and upscale retail stores, they combine functionality with a sophisticated appearance.",
  },
  {
    heading: "Telescopic Automatic Glass Doors:",
    description:
      "Telescopic doors feature multiple sliding panels that open compactly, allowing for wider entrances. Ideal for high-traffic areas that demand maximum accessibility and smooth operation.",
  },
];


export const Automaticsensorglass = () => {
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
          src="/automatic-sensor-glass-door.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">
            AUTOMATIC SENSOR GLASS DOORS
          </div>
        </div>
     
      </div>
         <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;AUTOMATIC SENSOR GLASS
              DOORS
            </h2>
          </div>
        </div>

      <section className="bg-[#f8f8f8] mt-4 pt-4">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Automatic Sensor Glass Door
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Enhance Your Business's Accessibility and Style with Automatic
              Sensor Glass Doors
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Automatic sensor glass doors are an ideal solution for businesses seeking to enhance accessibility, improve energy efficiency, and create an inviting atmosphere. Equipped with advanced motion sensors, these doors automatically open and close as customers approach, providing a seamless entry experience. Suitable for retail stores, hotels, offices, and hospitals, automatic sensor glass doors combine modern design, security, and convenience. Elevate your business entrance with sleek, functional automatic sensor glass doors.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/automatic-sensor-glass-door.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What is an Automatic Sensor Glass Door?
          </div>
          <div style={{ lineHeight: "30px" }}>
            An automatic sensor glass door is an entrance system that uses motion sensors to detect approaching individuals. When motion is detected, the door opens automatically, providing hands-free access. Typically constructed of glass, these doors offer visibility, an open feel, and enhance the aesthetic appeal of your building. Ideal for high-traffic areas, automatic sensor glass doors are both functional and stylish, making them a popular choice for businesses seeking a modern, welcoming entrance.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of Installing Automatic Sensor Glass Doors
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
            Materials Used for Automatic Sensor Glass Doors
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
            Customization Options for Automatic Sensor Glass Doors
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
            How to Choose the Right Automatic Sensor Glass Door for Your
            Business
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
            Installation & Maintenance of Automatic Sensor Glass Doors
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Professional Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Automatic sensor glass doors should be installed by qualified professionals to ensure optimal performance and safety. Proper installation guarantees smooth operation, maximizes durability, and ensures compliance with all relevant safety regulations.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Routine Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
          Regular maintenance is essential to keep automatic sensor glass doors operating smoothly and safely.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Safety Inspections:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Conduct routine safety inspections to ensure that all safety
            features, such as automatic reversal and sensor sensitivity, are
            functioning correctly. Regular checks can prevent accidents and
            enhance the lifespan of the doors.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of Automatic Sensor Glass Doors
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
           Automatic sensor glass doors are a modern, functional, and stylish solution for commercial properties. They enhance accessibility, improve energy efficiency, and provide a hands-free, secure entrance. With their durable materials and customizable features, these doors are ideal for high-traffic areas, making them a smart investment for any business.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
