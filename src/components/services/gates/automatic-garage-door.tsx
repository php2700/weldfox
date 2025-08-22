import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Convenience:",
    description:
      "Operate your garage door effortlessly with a remote, wall switch, or smartphone app.",
  },
  {
    heading: "Space-Saving Design:",
    description:
      "Vertical opening ensures the door doesn’t take up driveway or garage floor space.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Sturdy construction and automated locking mechanisms help protect your home.",
  },
  {
    heading: "Aesthetic Appeal:",
    description:
      "Available in a variety of styles, colors, and finishes to complement your home's exterior.",
  },
  {
    heading: "Durable and Low Maintenance:",
    description:
      "Designed for long-term use with minimal maintenance, ensuring reliability over time.",
  },
];


const material = [
  {
    name: "Steel Doors:",
    description:
      "Strong and durable, providing excellent security and resistance to wear and tear.",
  },
  {
    name: "Aluminum Doors:",
    description:
      "Lightweight and corrosion-resistant, ideal for homes in humid or coastal areas.",
  },
  {
    name: "Wood or Composite Doors:",
    description:
      "Offer a classic or rustic appearance while maintaining durability with proper treatment.",
  },
];


const customization = [
  {
    name: "Size and Dimensions:",
    description:
      "Doors can be custom-built to fit any garage opening, regardless of width or height.",
  },
  {
    name: "Operation Type:",
    description:
      "Choose fully automatic, partially automatic, or manual backup options depending on your needs.",
  },
  {
    name: "Style and Finish:",
    description:
      "Select from various panel designs, finishes, and colors to match your home’s aesthetic.",
  },
  {
    name: "Security Features:",
    description:
      "Enhance your door with smart locks, sensors, and monitoring systems for added protection.",
  },
];


const gates = [
  {
    name: "Efficient Operation:",
    description:
      "Automatic lifting saves time and effort, offering convenient access for vehicles and pedestrians.",
  },
  {
    name: "Long-Term Durability:",
    description:
      "Built with high-quality materials and robust mechanisms, ensuring years of reliable performance.",
  },
  {
    name: "Enhanced Home Security:",
    description:
      "Integrated locking systems and durable construction provide superior protection for your garage.",
  },
];
;
const useRolling = [
  {
    heading: "Residential Garages:",
    description:
      "Ideal for single or multiple car garages, providing convenience, security, and aesthetic appeal.",
  },
  {
    heading: "Small Commercial Properties:",
    description:
      "Suitable for shops, workshops, and offices where vertical space is preferred over horizontal.",
  },
  {
    heading: "Storage Units:",
    description:
      "Efficient for storage facilities requiring fast, secure, and space-saving access points.",
  },
];

export const Automaticgarage = () => {
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
          src="/automatic-overhead-garage-door.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">
            AUTOMATIC OVERHEAD GARAGE GATES
          </div>
        </div>
      
      </div>
        <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;AUTOMATIC OVERHEAD
              GARAGE GATES
            </h2>
          </div>
        </div>

      <section className="bg-[#f8f8f8] mt-4 pt-4">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Automatic Overhead Garage Door
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Enhance Your Home's Convenience and Security with Automatic
              Overhead Garage Doors
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
             When choosing an automatic overhead garage door, consider factors like insulation, material, and smart technology integration. These options not only enhance energy efficiency and durability but also add a modern touch to your home while improving day-to-day convenience.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/automatic-overhead-garage-door.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What is an Automatic Overhead Garage Door?
          </div>
          <div style={{ lineHeight: "30px" }}>
       Modern automatic overhead garage doors can also be customized with advanced features such as motion sensors, battery backup systems, and smart home connectivity. These additions not only boost security and convenience but also ensure your garage door remains functional even during power outages.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of Installing an Automatic Overhead Garage Door
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
            Materials for Automatic Overhead Garage Doors
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
            Customization Options for Automatic Overhead Garage Doors
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
            How to Choose the Right Automatic Overhead Garage Door for Your Home
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
            Installation & Maintenance of Automatic Overhead Garage Doors
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Professional Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
           To ensure optimal performance and safety, automatic overhead garage doors should be installed by professionals. Expert installers will guarantee proper alignment, smooth functionality, and compliance with local building codes.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Routine Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Regular maintenance is essential to keep your automatic overhead garage door operating smoothly. This includes lubricating moving parts, inspecting for wear and tear, and testing safety features to ensure reliable performance.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Safety Inspections:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Conduct routine safety inspections to ensure the door's automatic
            reverse feature works correctly. This is crucial for preventing
            accidents and keeping your family safe.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of Automatic Overhead Garage Doors
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
           Automatic overhead garage doors are a practical and stylish solution for homeowners seeking convenience, security, and durability. With their vertical operation, customizable features, and low maintenance requirements, these doors enhance both functionality and curb appeal for residential and small commercial properties.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
