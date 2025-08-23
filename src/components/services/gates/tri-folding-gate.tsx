import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import { motion } from "framer-motion";

import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Space-Saving Design:",
    description:
      "Tri-folding gates fold into three compact sections, making them ideal for properties with limited driveway or entrance space.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Sturdy construction and secure locking mechanisms provide reliable protection for both residential and commercial properties.",
  },
  {
    heading: "Smooth Operation:",
    description:
      "Hinged panels allow easy folding and unfolding, providing quick and efficient access.",
  },
  {
    heading: "Modern Aesthetic:",
    description:
      "Sleek multi-panel design adds a contemporary look to any property while maintaining functionality.",
  },
  {
    heading: "Durability:",
    description:
      "Made from high-quality materials, tri-folding gates withstand frequent use and resist wear over time.",
  },
];

const material = [
  {
    name: "Steel Tri-Folding Gates:",
    description:
      "Strong and durable, steel gates are perfect for properties requiring high security, such as commercial or industrial sites.",
  },
  {
    name: "Aluminum Tri-Folding Gates:",
    description:
      "Lightweight and corrosion-resistant, aluminum gates are ideal for residential properties seeking minimal maintenance.",
  },
  {
    name: "Wooden Tri-Folding Gates:",
    description:
      "Provide a traditional or rustic appearance. They require more maintenance but offer a natural, aesthetic appeal.",
  },
];

const customization = [
  {
    name: "Size:",
    description:
      "Tri-folding gates can be custom-built to fit any driveway or entrance size for a perfect fit.",
  },
  {
    name: "Finish:",
    description:
      "Choose powder-coated colors for metal gates or stained finishes for wooden gates to match your property’s style.",
  },
  {
    name: "Security Features:",
    description:
      "Add smart security options like CCTV, intercoms, or automatic locking mechanisms for increased control and safety.",
  },
  {
    name: "Automation:",
    description:
      "Automate the gate with electric motors and control via remote, keypad, or smartphone app for added convenience.",
  },
];
const gates = [
  {
    name: "Compact and Efficient:",
    description:
      "Tri-folding gates fold inward, requiring minimal space while providing full access when open.",
  },
  {
    name: "Reliable Security:",
    description:
      "Strong panels, hinges, and locking systems ensure safety for residential and commercial properties.",
  },
  {
    name: "Convenient Operation:",
    description:
      "Smooth folding action and optional automation make entry and exit quick and effortless.",
  },
];

const useRolling = [
  {
    heading: "Manual Tri-Folding Gates:",
    description:
      "Operated by hand, these gates are a cost-effective solution for residential properties with less frequent access needs.",
  },
  {
    heading: "Automatic Tri-Folding Gates:",
    description:
      "Motorized gates provide convenience and security, allowing control via remote, keypad, or smartphone.",
  },
  {
    heading: "Industrial Applications:",
    description:
      "Suitable for factories, warehouses, and commercial properties where space-saving and durability are essential.",
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
      {/* <div className="relative w-full">
        <img
          src="/Tri-Folding-gate.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">TRI FOLDING GATES</div>
        </div>
       
      </div>
 <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;TRI FOLDING GATES
            </h2>
          </div>
        </div> */}
           <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                        <img
                          src="/Tri-Folding-gate.jpg"
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
                           TRI FOLDING GATES
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
              Tri-Folding Gate
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Maximize Space and Security with Tri-Folding Gates – Sleek &
              Efficient Entry Solutions
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Tri-folding gates provide an innovative, space-saving solution for
              properties that need secure and efficient entrances. Folding into
              three compact sections, these gates are ideal for properties with
              limited space. Suitable for residential driveways and commercial
              applications, tri-folding gates offer a modern, functional design
              with quick operation and a sleek appearance, making them a
              versatile choice for a variety of entryways.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/Tri-Folding-gate.jpg" // Change to your image path
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
            A tri-folding gate, also called a folding or multi-panel gate, opens
            by folding three panels together. Unlike traditional swing or
            sliding gates, tri-folding gates fold inward, minimizing the space
            needed for operation. This makes them ideal for narrow driveways or
            compact entrances, while also providing a secure and efficient entry
            system.
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
            Due to the complexity of the folding mechanism, it’s important to
            have your tri-folding gate professionally installed to ensure proper
            alignment and smooth operation.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Regular Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Keep the gate’s hinges and tracks clean and lubricated to ensure
            smooth operation. Automated gates may also require periodic
            servicing to inspect the motor and electronic components.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Weather Protection:
          </div>
          <div className="text-[15px] font-[400] my-2">
            To prolong the life of your gate, opt for weather-resistant
            materials and finishes, particularly in areas with extreme weather
            conditions.
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
            Tri-folding gates are a smart, modern, and practical solution for
            properties that need space efficiency, security, and aesthetic
            appeal. With quick operation, customizable features, and a compact
            design, they are ideal for residential, commercial, and industrial
            applications, offering a versatile and reliable entrance solution.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
