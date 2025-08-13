import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Convenience and Ease of Use:",
    description:
      "With the touch of a button, you can easily open and close your garage door without having to exit your vehicle. This feature is especially valuable during inclement weather or when your hands are full.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Automatic overhead garage doors come with advanced security features, such as rolling code technology, which changes the access code each time you use the remote. This prevents unauthorized access and ensures your garage is secure.",
  },
  {
    heading: "Space-Saving Design:",
    description:
      "Unlike traditional garage doors that swing open, overhead garage doors lift vertically, maximizing space inside and outside your garage. This design is particularly beneficial for homes with limited driveway space.",
  },
  {
    heading: "Energy Efficiency:",
    description:
      "Many automatic overhead garage doors feature insulated panels that help maintain consistent indoor temperatures, reducing energy costs and improving your home's overall energy efficiency.",
  },
  {
    heading: "Aesthetic Appeal:",
    description:
      "Automatic overhead garage doors come in various materials, styles, and colors, complementing your home’s architecture and enhancing curb appeal with modern functionality.",
  },
];

const material = [
  {
    name: "Steel:",
    description:
      "Steel is a popular choice for automatic overhead garage doors due to its strength, durability, and low maintenance requirements. Steel doors can be insulated for added energy efficiency and come in various styles and finishes.",
  },
  {
    name: "Aluminum:",
    description: `Aluminum doors are lightweight and resistant to rust, making them suitable for coastal areas or environments with high humidity. They are available in various designs and can be customized to match your home’s aesthetics.`,
  },
  {
    name: "Wood:",
    description:
      "Wooden overhead garage doors provide a classic, elegant look that enhances curb appeal. While they require more maintenance than metal doors, they can be beautifully stained or painted to match your home.",
  },
  {
    name: "Fiberglass::",
    description:
      "Fiberglass doors are lightweight, energy-efficient, and resistant to dents and rust. They are a great option for homeowners seeking a low-maintenance solution with a range of design options.",
  },
];

const customization = [
  {
    name: "Styles and Designs:",
    description:
      "Choose from traditional, modern, or carriage-house styles to match your home's architecture. Customize panel designs, window placements, and hardware to create the perfect look.",
  },
  {
    name: "Colors and Finishes:",
    description: `Automatic overhead garage doors come in various colors and finishes, allowing you to select an option that complements your home's exterior. From classic whites and grays to bold colors, the choice is yours.`,
  },
  {
    name: "Insulation Levels:",
    description:
      "For improved energy efficiency, select an insulated door with varying R-values based on your climate and garage usage. Insulated doors help regulate temperature and reduce energy costs.",
  },
  {
    name: "Smart Features:",
    description:
      "Many modern automatic overhead garage doors offer smart technology integration, allowing you to control and monitor your door remotely through a smartphone app, providing added convenience and security.",
  },
];

const gates = [
  {
    name: "Garage Size:",
    description:
      "Measure your garage opening accurately to ensure the door fits perfectly. Consider height and width to determine the best door style.",
  },
  {
    name: "Material Preference:",
    description:
      "Choose a material based on your desired durability, maintenance level, and aesthetic preferences. Each material offers different benefits and appearances.",
  },
  {
    name: "Insulation Needs:",
    description:
      "If your garage is attached to your home or used as a workspace, an insulated door will help regulate temperature and reduce energy costs.",
  },
  {
    name: "Budget:",
    description:
      "Automatic overhead garage doors come in various price ranges. Set a budget that includes installation and maintenance costs while considering long-term value and benefits.",
  },
];

const useRolling = [
  {
    heading: "Sectional Garage Doors:",
    description:
      "Sectional doors consist of multiple panels that slide upward and curve around the ceiling. They are versatile and can be insulated for energy efficiency, making them a popular choice among homeowners.",
  },
  {
    heading: "Roll-Up Garage Doors:",
    description:
      "Roll-up doors are constructed from a single sheet of material that rolls up into a compact coil above the opening. They are ideal for commercial applications but can also be used in residential settings for a sleek, modern look.",
  },
  {
    heading: "Tilt-Up Garage Doors:",
    description:
      "Tilt-up doors operate as a single panel that tilts out and up to open. While less common than sectional doors, they offer a straightforward, traditional design that some homeowners prefer.",
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
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;AUTOMATIC OVERHEAD
              GARAGE GATES
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
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
              Automatic overhead garage doors are a popular choice for
              homeowners looking to combine convenience, security, and aesthetic
              appeal. Designed to open vertically, these doors save space and
              provide easy access to your garage with just the push of a button.
              Whether you're upgrading your existing door or installing a new
              one, automatic overhead garage doors offer various styles and
              features tailored to your specific needs. Experience the ultimate
              in functionality and elegance with an automatic overhead garage
              door for your home..
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
            An automatic overhead garage door operates by lifting vertically,
            typically rolling up into a compartment above the garage opening.
            These doors are equipped with an electric motor that allows for easy
            operation via a remote control, wall switch, or smartphone app.
            Available in various materials, styles, and sizes, automatic
            overhead garage doors provide secure, efficient access to your
            garage while enhancing your home's curb appeal.
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
            To ensure optimal performance and safety, it's recommended to have
            your automatic overhead garage door installed by professionals. They
            will ensure proper alignment, functionality, and compliance with
            local building codes.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Routine Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Regular maintenance is essential for keeping your automatic overhead
            garage door in good working condition. This includes lubricating
            moving parts, checking for wear and tear, and testing safety
            features.
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
            Automatic overhead garage doors provide an unparalleled combination
            of convenience, security, and aesthetic appeal for any homeowner.
            With various materials, styles, and advanced features, these doors
            can enhance your home’s functionality while boosting curb appeal.
            Invest in an automatic overhead garage door today and experience the
            benefits of modern, efficient garage access.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
