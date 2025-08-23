import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import { motion } from "framer-motion";

import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Space Efficiency:",
    description:
      "Curve garage gates glide along a curved path, making them ideal for properties with limited space or irregular driveway shapes.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Built with durable materials and advanced locking options, these gates provide strong protection against unauthorized access.",
  },
  {
    heading: "Smooth Operation:",
    description:
      "Designed for seamless movement along the track, curve garage gates operate quietly and can be easily automated.",
  },
  {
    heading: "Customizable Designs:",
    description:
      "Available in a variety of materials, finishes, and styles, allowing homeowners to match the gate with their property's aesthetics.",
  },
  {
    heading: "Durability & Low Maintenance:",
    description:
      "Constructed with weather-resistant materials, these gates require minimal upkeep while ensuring long-lasting performance.",
  },
];

const material = [
  {
    name: "Space Efficiency:",
    description:
      "Curve garage gates glide along a curved track, making them perfect for properties with limited or irregular space where traditional gates may not fit.",
  },
  {
    name: "Modern Aesthetic:",
    description:
      "These gates add a sleek, stylish, and contemporary look to any property, enhancing curb appeal and overall design.",
  },
  {
    name: "Smooth Operation:",
    description:
      "Designed to move seamlessly along curved tracks, they provide quiet, effortless, and reliable operation.",
  },
  {
    name: "Enhanced Security:",
    description:
      "Curve garage gates are built with robust materials and can integrate advanced locking and automation systems for better safety.",
  },
  {
    name: "Versatility:",
    description:
      "They adapt well to unique architectural layouts and driveway shapes, offering flexibility in installation.",
  },
];

const customization = [
  {
    name: "Track Installation:",
    description:
      "Specially designed curved tracks are installed along the ceiling or walls to guide the gate smoothly during operation.",
  },
  {
    name: "Gate Mounting:",
    description:
      "The curved garage gate panels are mounted on the track system, ensuring precise alignment for seamless opening and closing.",
  },
  {
    name: "Automation Setup:",
    description:
      "If opting for an automated gate, motors and control systems are installed and tested for proper remote or app-based operation.",
  },
  {
    name: "Final Testing & Safety Check:",
    description:
      "After installation, the entire system is tested for smooth movement, balance, and safety features like obstruction detection.",
  },
];

const gates = [
  {
    name: "Steel Curve Garage Gates:",
    description:
      "Steel curve garage gates are known for their strength and durability, providing excellent security for residential and commercial spaces. They can be powder-coated to resist rust and harsh weather, ensuring long-lasting performance.",
  },
  {
    name: "Aluminum Curve Garage Gates:",
    description:
      "Aluminum curve garage gates are lightweight, corrosion-resistant, and require minimal maintenance. Their reduced weight makes them easier to operate and automate, while being a perfect choice for coastal or humid environments.",
  },
  {
    name: "Wooden Curve Garage Gates:",
    description:
      "Wooden curve garage gates bring a warm, traditional aesthetic to your property. They can be stained or painted to match your design preferences. With proper treatment, they can resist pests and weather, though they require more care than metal options.",
  },
  {
    name: "Composite Curve Garage Gates:",
    description:
      "Composite curve garage gates combine the elegant look of wood with the durability of synthetic materials. They are low-maintenance, weather-resistant, and ideal for homeowners who want a wood-like appearance without extensive upkeep.",
  },
];

const useRolling = [
  {
    heading: "Manual Curve Garage Gates:",
    description:
      "These are hand-operated gates that offer the space-saving benefits of a curved design without the need for automated mechanisms. Ideal for smaller garages or properties with limited traffic. They are cost-effective, durable, and easy to maintain, making them suitable for homeowners looking for a simple and reliable option.",
  },
  {
    heading: "Automatic Curve Garage Gates:",
    description:
      "Equipped with motors and remote control systems, automatic curve garage gates provide convenience and enhanced security. They are perfect for homeowners who prioritize ease of use and want an automated solution. These gates add modern functionality, reduce manual effort, and can be integrated with smart home systems for advanced control.",
  },
  {
    heading: "Track Sliding Gates:",
    description:
      "These gates run on a track installed along the ground. The gate slides along this track using rollers, providing smooth and reliable movement. Track sliding gates are commonly used for residential driveways and commercial entrances where space is limited. They are durable, stable, and effective in areas with high traffic.",
  },
  {
    heading: "Cantilever Sliding Gates:",
    description:
      "Cantilever gates do not require a ground track. Instead, they are supported by rollers mounted on a post and 'float' above the driveway or entrance. Cantilever gates are ideal for uneven or sloped surfaces where a ground track may not be feasible. They are often used in industrial and commercial settings due to their durability, smooth operation, and low maintenance requirements.",
  },
  {
    heading: "Automated Sliding Gates:",
    description:
      "Automated sliding gates offer convenience by allowing you to open and close the gate with a remote control, keypad, or even a smartphone app. Automation is a common feature for both residential and commercial sliding gates, providing added security and ease of access. They can also be paired with sensors, cameras, and intercom systems for advanced safety.",
  },
  {
    heading: "Telescopic Sliding Gates:",
    description:
      "Telescopic sliding gates consist of multiple panels that slide one behind the other, allowing the gate to open in a smaller space. This is an excellent option for properties where space is extremely limited, but security is a priority. These gates are stylish, practical, and commonly used in urban environments with compact driveways.",
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
      {/* <div className="relative w-full">
        <img
          src="/curve-garage-gate.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">
            CURVE GARAGE GATES
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center px-4 w-full md:w-auto">
        <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
          <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
            HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;CURVE GARAGE GATES
          </h2>
        </div>
      </div> */}
         <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                      <img
                        src="/curve-garage-gate.jpg"
                        alt="About Us Banner"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
              
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 skew-y-[-3deg] origin-top-left"></div>
              
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="relative max-w-4xl mx-auto text-center px-6"
                      >
                        <h1 className="text-4xl md:text-5xl font-extrabold text-secondary/90 leading-tight mb-4">
                        CURVE GARAGE GATES
                        </h1>
                        <p className="text-white/90 text-md md:text-lg leading-relaxed">
                          At METAL4CRAFT AUTOMATION, we specialize in delivering premium
                          fabrication solutions designed around the specific requirements of
                          our clients. Focused on Entrance Automation, Rolling Shutters, and
                          General Fabrication, our skilled team blends innovation with
                          craftsmanship.
                        </p>
                      </motion.div>
                    </section>
      <section className="bg-[#f8f8f8] mt-4 pt-4">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Curve Garage Gate
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Maximize Space & Style with Curve Garage Gates – Smart & Secure
              Solutions
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              curve garage gates maximize space efficiency by adapting to unique
              architectural layouts. Their innovative design ensures smooth
              operation even in challenging spaces, eliminating the need for
              extensive modifications. Beyond practicality, they add a modern,
              stylish appearance that elevates the curb appeal of any property.
              Built with durable materials and advanced locking systems.
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
            This unique mechanism makes curve garage gates highly practical for
            properties with rounded driveways, tight corners, or unconventional
            layouts. By following a curved track, the gate ensures easy
            operation without compromising on space or accessibility. In
            addition to their functional benefits, these gates can be customized
            with modern finishes and advanced security features, making them
            both an aesthetic and practical choice for homeowners and
            businesses.
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
            The dimensions and shape of your garage and driveway will dictate
            the size and type of curve garage gate that will work best.
            Carefully assessing these factors ensures a perfect fit, smooth
            operation, and maximum efficiency
          </div>

          <div className="text-lg font-semibold mt-4 text-[#000]">Budget:</div>
          <div className="text-[15px] font-[400] my-2">
            By considering your budget alongside functional needs and aesthetic
            preferences, you can choose a gate option that offers the perfect
            balance of durability, convenience, and value.
          </div>

          <div className="text-lg font-semibold mt-4 text-[#000]">
            Customization:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Collaborating with a supplier that provides custom design options
            ensures your curve garage gate is tailored to both your property’s
            unique layout and your personal style preferences.
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
            Curve garage gates combine style, security, and practicality, making
            them an excellent choice for properties with unique layouts. Their
            ability to save space without compromising on strength or design
            ensures long-term value and enhanced curb appeal for both
            residential and commercial spaces.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
