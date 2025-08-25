import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const arr = [
  {
    heading: "Classic Elegance:",
    description:
      "Swing gates add a timeless, sophisticated look to any property, enhancing curb appeal and overall aesthetics.",
  },
  {
    heading: "Security:",
    description:
      "Sturdy construction and secure locking mechanisms provide reliable protection for homes and commercial spaces.",
  },
  {
    heading: "Versatility:",
    description:
      "Available in various materials and designs, swing gates can be customized to match different architectural styles.",
  },
  {
    heading: "Ease of Use:",
    description:
      "Hinged operation ensures smooth opening and closing, whether manually or with automation options.",
  },
  {
    heading: "Durability:",
    description:
      "Constructed from high-quality materials, swing gates withstand daily use and resist wear over time.",
  },
];

const material = [
  {
    name: "Wood:",
    description:
      "Provides a classic aesthetic and natural charm while offering reasonable strength for residential use.",
  },
  {
    name: "Steel:",
    description:
      "Offers superior strength and durability, suitable for both residential and commercial properties.",
  },
  {
    name: "Aluminum:",
    description:
      "Lightweight yet strong, aluminum gates resist rust and require minimal maintenance.",
  },
];

const customization = [
  {
    name: "Design Options:",
    description:
      "Choose from a variety of styles, including classic, modern, or ornate designs to complement your property.",
  },
  {
    name: "Automation Options:",
    description:
      "Swing gates can be equipped with automatic openers for enhanced convenience and safety.",
  },
];

const gates = [
  {
    name: "Timeless Appeal:",
    description:
      "Swing gates offer a classic look that enhances the overall aesthetics of your property.",
  },
  {
    name: "Reliable Security:",
    description:
      "Robust construction and secure hinges make swing gates a dependable choice for property protection.",
  },
  {
    name: "Flexible Operation:",
    description:
      "Can be operated manually or automated, providing convenience and ease of access.",
  },
];

const useRolling = [
  {
    heading: "Residential Properties:",
    description:
      "Ideal for homes, gardens, and driveways, adding both security and elegance to the property.",
  },
  {
    heading: "Commercial Spaces:",
    description:
      "Perfect for offices, retail areas, and gated communities requiring secure and stylish access solutions.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "Suitable for lighter industrial use where controlled access and durability are important.",
  },
];

export const Swinggates = () => {
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
      {/* <div
        className={`transition-opacity duration-300 ${
          showSticky ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      > */}
        <Header />
      {/* </div>
      {showSticky && <StickyHeader />} */}
      {/* <div className="relative w-full">
        <img
          src="/swing-gates.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">SWING GATES</div>
        </div>
      
      </div>
  <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;SWING GATES
            </h2>
          </div>
        </div> */}
           <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                        <img
                          src="/swing-gates.jpg"
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
                            SWING GATES
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
              Swing Gates
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Secure and Stylish: The Benefits of Swing Gates
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Swing gates provide a classic and elegant solution for property
              access. Suitable for both residential and commercial properties,
              these gates combine functionality with aesthetic appeal, enhancing
              both security and curb appeal.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/swing-gates.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What Are Swing Gates?
          </div>
          <div style={{ lineHeight: "30px" }}>
            Swing gates are designed to open inward or outward on hinges. They
            are available in a variety of materials—including wood, steel, and
            aluminum—and come in numerous designs to match different
            architectural styles and personal preferences.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Key Benefits of Swing Gates
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
            Materials Used in Swing Gates
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
            Applications of Swing Gates
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
            Why Choose Swing Gates?
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
            Professional installation is essential to ensure proper operation
            and long-term durability. Regular maintenance, including inspecting
            hinges and checking gate alignment, helps keep your swing gate
            functioning smoothly and looking its best.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of Swing Gates
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
            Investing in swing gates is a smart choice for enhancing security,
            aesthetics, and convenience. Explore our range of high-quality swing
            gates to find the perfect solution tailored to your property’s
            needs.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
