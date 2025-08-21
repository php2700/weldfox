import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Space Efficiency:",
    description:
      "Curve garage gates are ideal for garages where space is limited. Since they do not swing outward or require overhead space for operation, they can be installed in tight or awkward locations.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "These gates are robust, often constructed from durable materials like steel or aluminum. They can be integrated with advanced locking systems, providing security for your vehicle and belongings.",
  },
  {
    heading: "Smooth, Effortless Operation:",
    description:
      "Curve garage gates are engineered for smooth, quiet operation. Many of them are motorized, allowing for easy opening and closing with the push of a button.",
  },
  {
    heading: "Customizable Designs:",
    description:
      "Curve garage gates can be tailored to your style preferences. From sleek modern designs to more traditional looks, they come in a variety of materials, finishes, and colors to complement your property.",
  },
  {
    heading: "Durability & Low Maintenance:",
    description:
      "Built from high-quality materials, curve garage gates are resistant to weather and wear, requiring minimal maintenance over time.",
  },
];

const material = [
  {
    name: "Material:",
    description:
      "The material you choose should balance durability with style. Common materials include steel, aluminum, and wood.",
  },
  {
    name: "Security Features:",
    description: `Look for gates with strong locking mechanisms, and consider integrating smart security systems such as cameras or remote monitoring.`,
  },
  {
    name: "Automation:",
    description:
      "Decide if you prefer a manual gate or the convenience of automatic operation with remote or app-based controls.",
  },
  {
    name: "Aesthetic Options:",
    description:
      "Choose from a range of finishes and styles to ensure the gate complements your home’s exterior.",
  },
];

const customization = [
  {
    name: "Professional Installation:",
    description:
      "Installing a curve garage gate is a specialized process that should be carried out by professionals to ensure smooth operation and longevity.",
  },
  {
    name: "Regular Maintenance:",
    description: `Keep the gate’s track clean and lubricated to prevent debris from interfering with its operation. Regular checks on the motor (if automated) can help avoid any potential issues.`,
  },
  {
    name: "Weather Protection:",
    description: "Choose materials that are resistant to rust and wear, especially if you live in areas with extreme weather conditions.",
  },
];

const gates = [
  {
    name: "Steel Sliding Gates:",
    description:
      "Steel is a popular choice for sliding gates due to its strength and durability. Steel gates offer excellent security and can be powder-coated for added protection against rust and weather damage.",
  },
  {
    name: "Aluminum Sliding Gates:",
    description:
      "Aluminum is lightweight, resistant to corrosion, and requires little maintenance. It’s an ideal option for coastal areas or regions with high humidity, where rust can be an issue. Aluminum gates are also easier to automate due to their lighter weight.",
  },
  {
    name: "Wooden Sliding Gates:",
    description:
      "Wood provides a more traditional, rustic aesthetic for sliding gates. Wooden gates offer natural beauty and can be stained or painted to suit the style of your property. While they require more maintenance than metal gates, wooden sliding gates can be treated to resist weather damage and pests.",
  },
    {
    name: "Composite Materials:",
    description:
      "Composite sliding gates combine the appearance of wood with the durability of synthetic materials. These gates require less maintenance than natural wood and offer better resistance to weather conditions, making them a popular choice for homeowners who want the look of wood without the upkeep.",
  },
];

const useRolling = [
  {
    heading: "Manual Curve Garage Gates:",
    description:
      "These are hand-operated gates that offer the space-saving benefits of a curved design without the need for automated mechanisms. Ideal for smaller garages or properties with limited traffic.",
  },
  {
    heading: "Automatic Curve Garage Gates:",
    description:
      "Equipped with motors and remote control systems, automatic curve garage gates provide convenience and enhanced security. They are perfect for homeowners who prioritize ease of use and want an automated solution.",
  },
  {
    heading: "Track Sliding Gates:",
    description:
      "These gates run on a track installed along the ground. The gate slides along this track using rollers, providing smooth and reliable movement. Track sliding gates are commonly used for residential driveways and commercial entrances where space is limited.",
  },
    {
    heading: "Cantilever Sliding Gates:",
    description:
      "Cantilever gates do not require a ground track. Instead, they are supported by rollers mounted on a post and 'float' above the driveway or entrance. Cantilever gates are ideal for uneven or sloped surfaces where a ground track may not be feasible. They are often used in industrial and commercial settings due to their durability and low maintenance.",
  },
     {
    heading: "Automated Sliding Gates:",
    description:
      "Automated sliding gates offer convenience by allowing you to open and close the gate with a remote control, keypad, or even a smartphone app. Automation is a common feature for both residential and commercial sliding gates, providing added security and ease of access.",
  },
   {
    heading: "Telescopic Sliding Gates:",
    description:
      "Telescopic sliding gates consist of multiple panels that slide one behind the other, allowing the gate to open in a smaller space. This is an excellent option for properties where space is extremely limited, but security is a priority.",
  },
];

export const CurveGarage = () => {
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
          src="/curve-garage-gate.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">CURVE GARAGE GATES</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;CURVE GARAGE GATES
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
             Curve Garage Gate
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Maximize Space & Style with Curve Garage Gates – Smart & Secure Solutions
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
             Curve garage gates are revolutionizing the way homeowners and businesses approach garage door design. With their ability to glide smoothly along a curved track, these gates offer an ideal solution for properties with space limitations or non-standard driveway shapes. If you’re seeking to enhance your property’s security while adding a sleek, modern touch, a curve garage gate is the perfect fit.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/curve-garage-gate.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           What is a Curve Garage Gate?
          </div>
          <div style={{ lineHeight: "30px" }}>
            A curve garage gate is a specialized garage door system designed to slide along a curved path rather than moving in a straight line. This allows for efficient use of space in garages where traditional straight sliding or overhead garage doors may not be feasible due to architectural constraints or limited space.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           Key Benefits of Installing a Curve Garage Gate
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
           Features to Look for in a Curve Garage Gate
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
           Installation and Maintenance Tips for Curve Garage Gates
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
           Materials for Sliding Gates
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
            How to Choose the Right Curve Garage Gate for Your Property
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
          Garage Size & Layout:
          </div>
          <div className="text-[15px] font-[400] my-2">
            The dimensions and shape of your garage and driveway will dictate the size and type of curve garage gate that will work best.
          </div>

           <div className="text-lg font-semibold mt-4 text-[#000]">
          Budget:
          </div>
          <div className="text-[15px] font-[400] my-2">
           Curve garage gates come in a variety of price ranges depending on material, size, and additional features like automation or enhanced security.
          </div>

           <div className="text-lg font-semibold mt-4 text-[#000]">
         Customization:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Work with a supplier that offers custom design options so you can get a gate that perfectly matches your aesthetic and functional needs.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
           Types of Curve Garage Gates
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
            Curve garage gates offer an innovative solution for properties with unique layouts or space restrictions. Their space-saving design, coupled with enhanced security and customization options, makes them a top choice for modern homeowners and businesses alike. By investing in a curve garage gate, you can not only boost your property’s functionality but also its curb appeal.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
